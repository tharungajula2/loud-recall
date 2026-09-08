---
title: "Parents Health OS — Family Care Architecture and WhatsApp Engine"
description: "Spoken-recall notes for defending the Parents Health OS product, architecture, data model, Gemini AI extraction pipeline, WhatsApp engine, and test suites."
order: 23
collection: default
verified: unverified
format: markdown
series: portfolio
tags: [parents-health-os, nextjs-16, supabase, gemini-ai, whatsapp-cloud-api, row-level-security]
related: [loc-iq, retail-credit-risk]
created: 2026-09-08
updated: 2026-09-08
---


**Repository baseline:** `main` @ `a7cc3ba`  
**Grounded in:** Project Truth, Build History, Zero-to-God-Mode Masterclass, and Final Gap Recovery  
**Purpose:** recall the system out loud under pressure without inventing facts.

---

## 0. How to use this document

This is not a tutorial and not a code walkthrough. It is a **spoken recall system**.

The default recall order is:

**product → architecture → data model → core flows → hard parts → failures → security → tests → build history → limits**

If recall breaks, return to this architecture chain:

**Caregiver browser → Next.js → Supabase → Gemini / Meta → webhook → database**

The aim is to answer without opening the repository:

- what the product is;
- what the major architectural layers are;
- how data moves end to end;
- why the 15-table model is shaped this way;
- how authentication differs from authorization;
- why user-scoped and service-role Supabase clients both exist;
- how Gemini document extraction works;
- how a reminder travels from database event to WhatsApp and back;
- how duplicate sends and stale delivery events are controlled;
- what actually broke;
- what was simulated originally and what became real;
- what the tests prove and do not prove;
- what can and cannot be claimed in an interview.

---

## 1. One-sentence answer

> Parents Health OS is a Next.js 16 family-care application for adult children and caregivers managing elderly parents in India, combining a Supabase-backed care console with private AI-assisted document extraction and WhatsApp reminders that feed parent responses back into the care record.

Safe boundaries: do not add claims about production scale, medical outcomes, diagnosis, autonomous scheduling, or user adoption.

---

## 2. Thirty-second answer

> Parents Health OS is a family-care application for adult children managing elderly parents. The caregiver gets a web console for medications, care routines, vitals and medical documents. The parent does not need another app: reminders are sent through WhatsApp with simple buttons such as TAKEN, SKIP or SNOOZE. The system is built with Next.js 16, Supabase PostgreSQL and Auth, Gemini 3.5 Flash-Lite for structured document extraction, and Meta WhatsApp Cloud API v25.0. The technically difficult parts were keeping privileged operations secure, preventing duplicate scheduled reminders, and making asynchronous WhatsApp delivery and response updates safe under retries and out-of-order events.

---

## 3. Two-minute answer

> Parents Health OS started as a browser-side prototype and later moved to a real cloud-backed architecture. The final system uses Next.js 16 for the caregiver application and server API routes, Supabase for authentication, PostgreSQL, Row-Level Security and private document storage, Gemini 3.5 Flash-Lite for extracting structured information from uploaded medical documents, and Meta WhatsApp Cloud API v25.0 for parent reminders.
>
> The data model has 15 public tables. Identity and family membership sit at the top. Care recipients then own observations, conditions, documents, medications and care routines. Medications and routines each separate the recurring schedule from the individual event instance. That separation matters because the schedule says what should happen repeatedly, while the event records what happened at one due time, including adherence and WhatsApp delivery state.
>
> The document pipeline uploads a file to a private Supabase bucket, records metadata, calls a server-side analyze route, checks whether a usable extraction already exists, downloads the private bytes with privileged server access, sends them to Gemini under a strict JSON schema, and stores the result as `pending_review`. The AI output is treated as a proposal, not trusted medical truth.
>
> The WhatsApp path is asynchronous. A scheduler finds due events, claims an event using a compare-and-swap lease, sends the interactive message through Meta, stores the provider message ID, and later receives signed webhooks for delivery states or button responses. HMAC verification protects the webhook. Guarded database updates prevent stale delivery callbacks from moving status backwards. The automated suites contain 12 delivery tests and 10 scheduler-concurrency tests.
>
> The project also has real defect history: a document upload schema mismatch, missing service-role grants for extraction persistence and WhatsApp event updates, a WhatsApp recipient lookup mismatch, and a Graph API version mismatch. Those fixes are part of the architecture story rather than something to hide.

---

## 4. Product mental model

There are two interaction surfaces.

### Caregiver

Uses the web application to authenticate, create or enter a family care network, manage care recipients, record observations, create medication schedules, create non-medication care routines, upload medical documents, trigger structured extraction, review extracted content, send reminders and view adherence/delivery state.

### Parent / care recipient

Does not need a dedicated application. The parent receives WhatsApp reminders and responds through deterministic quick-reply buttons.

Memory phrase:

**rich caregiver interface + low-friction parent interface**

---

## 5. What the system is not

The system is not:

- a telemedicine platform;
- an emergency-dispatch system;
- an autonomous diagnostic system;
- an autonomous prescribing system;
- a free-text medical WhatsApp chatbot;
- a repository-contained always-running background process;
- a system with demonstrated large-scale production throughput;
- a system with measured clinical outcome improvement.

Gemini extraction is constrained and reviewable. Free-text WhatsApp messages are not sent to an AI medical chatbot. Recurring reminder execution still requires an external cron trigger or configured `pg_cron`.

---

## 6. Architecture from memory

### Six layers

1. **Browser / PWA** — React caregiver console, user session, normal user-scoped data access.
2. **Next.js server layer** — five important API routes.
3. **Supabase Auth** — identity and sessions.
4. **Supabase PostgreSQL + Storage** — 15 relational tables, RLS, private documents.
5. **Google Gemini** — structured document extraction.
6. **Meta WhatsApp Cloud API** — outbound messages, button responses and delivery receipts.

### Five server routes

- `/api/analyze`
- `/api/documents/remove`
- `/api/whatsapp/send`
- `/api/whatsapp/reminders/run`
- `/api/whatsapp/webhook`

### Spoken chain

> The caregiver interacts with a Next.js application. Supabase Auth establishes identity, normal database access is constrained by PostgreSQL Row-Level Security, sensitive documents live in private Supabase Storage, server routes perform privileged operations, Gemini handles structured document extraction, and Meta handles WhatsApp delivery. Meta then calls the application back through a signed webhook, and the server updates the corresponding event in PostgreSQL.

---

## 7. Repository map

```text
parents-health-os/
├── src/
│   ├── app/             pages and API routes
│   ├── components/      UI pieces
│   ├── lib/             Supabase and WhatsApp logic
│   └── middleware.ts    session refresh path
├── supabase/
│   ├── migrations/      versioned database changes
│   └── drafts/          operational SQL not automatically applied
├── scripts/             test runners and utilities
├── public/              PWA manifest, network-only service worker, icons
├── package.json         dependencies and scripts
├── .env.example         required configuration names without secret values
├── PROJECT_TRUTH...     current runtime truth
├── BUILD_HISTORY...     repository-evidenced engineering history
└── OPERATOR_MANUAL.md   legacy sandbox-era documentation
```

Important file anchors:

- `src/app/page.tsx` — main caregiver product surface.
- `src/lib/supabase/context.tsx` — browser auth/family context.
- `src/lib/supabase/client.ts`, `server.ts`, `admin.ts` — separated Supabase access paths.
- `src/app/api/analyze/route.ts` — Gemini document route.
- `src/app/api/documents/remove/route.ts` — document purge route.
- `src/lib/whatsapp/config.ts` — Meta configuration and Graph version.
- `src/lib/whatsapp/client.ts` — Meta API dispatch and phone handling.
- `src/lib/whatsapp/service.ts` — reminder service and CAS lease operations.
- `src/lib/whatsapp/status.ts` — delivery state transitions and guarded updates.
- `src/app/api/whatsapp/send/route.ts` — manual send.
- `src/app/api/whatsapp/reminders/run/route.ts` — scheduled batch send.
- `src/app/api/whatsapp/webhook/route.ts` — Meta verification and callback processing.

---

## 8. Next.js facts worth recalling

The application uses the **Next.js App Router**. Pages and HTTP handlers live under `src/app`; route handlers use `route.ts` under `src/app/api`.

All five critical API routes declare:

```ts
export const dynamic = 'force-dynamic'
```

Safe explanation:

> These routes depend on live request state, current database state, external services or webhook payloads, so they are forced to execute dynamically rather than being treated as static content.

`/api/analyze` also declares:

```ts
export const maxDuration = 60
```

Safe explanation:

> Document analysis can include a private file download and a model call, so the route allows a longer server execution window.

Do not call 60 seconds measured extraction latency. It is a runtime allowance.

---

## 9. Authentication versus authorization

### Authentication

**Who is the user?**

Supabase Auth provides user identity and session state. `@supabase/ssr` integrates sessions with Next.js cookies. Middleware refreshes stale session state before normal page handling.

### Authorization

**What is the authenticated user allowed to do?**

Authorization uses:

- `family_members`;
- roles such as owner, caregiver and viewer;
- PostgreSQL RLS;
- family membership / role helper logic;
- route-level checks where required.

Memory line:

> Authentication proves identity. Authorization determines allowed actions on family data.

---

## 10. RLS versus service role

This distinction must be precise.

### Normal user path

The user-session Supabase client operates under the authenticated caregiver's identity. PostgreSQL RLS constrains accessible rows.

### Privileged path

Webhooks, background scheduler work and certain private-document operations do not execute as an interactive caregiver session. They therefore use a server-only privileged client.

### The important correction

Do not say:

> The service role bypasses every database restriction.

Say:

> The service role bypasses Row-Level Security policies, but the final project also required explicit PostgreSQL table-level grants for particular operations. That distinction surfaced in real defects: document extraction needed `SELECT, INSERT` grants on `document_extractions`, and WhatsApp callbacks needed `SELECT, UPDATE` grants on the event tables.

---

## 11. The 15-table database in five buckets

Do not memorise 15 disconnected names.

### 1. Identity and family — 5

1. `profiles`
2. `families`
3. `family_members`
4. `care_recipients`
5. `consents`

### 2. Documents and AI — 2

6. `health_documents`
7. `document_extractions`

### 3. Clinical / observations — 2

8. `health_conditions`
9. `health_observations`

### 4. Care routines — 3

10. `care_routines`
11. `care_routine_schedules`
12. `care_routine_events`

### 5. Medications — 3

13. `medications`
14. `medication_schedules`
15. `medication_events`

Memory formula:

**5 + 2 + 2 + 3 + 3 = 15**

---

## 12. Why schedule and event are separate

> A schedule describes recurrence. An event describes one operational occurrence.

A medication schedule can say “08:00 on selected days”. A medication event is the particular due instance at one timestamp, with mutable operational state such as pending, taken, skipped, sent, delivered or read.

The event can own:

- due time;
- adherence status;
- reminder sent timestamp;
- provider message ID;
- delivery state;
- response timestamp;
- response source.

This separation lets the recurrence definition remain stable while each occurrence evolves independently.

---

## 13. Idempotency in the data model

Medication and routine event tables have unique constraints on:

```text
(schedule_id, due_at)
```

Spoken explanation:

> Even if event creation is retried, one schedule should not get two event rows for the same due time. The unique constraint creates a database-level idempotency barrier.

---

## 14. Family isolation

Users connect to families through `family_members`. Care recipients belong to families. Clinical and care data descend from the care recipient. RLS and family-role checks constrain normal access.

Spoken answer:

> Family isolation is not only a frontend filter. Family membership and ownership are represented in the database, and Row-Level Security evaluates those relationships at the persistence boundary.

---

## 15. Consent, provenance and AI lineage

`consents` is modelled as an audit-oriented record. The audit source identifies no update/delete RLS path for these rows.

Some health entities track provenance such as:

- manual entry;
- AI-extracted;
- doctor-diagnosed.

Safe explanation:

> Provenance keeps human-entered, AI-derived and clinician-derived information from collapsing into one undifferentiated source of truth.

`document_extractions` has an immutability trigger protecting core extraction fields while review-related fields can change.

Spoken explanation:

> The original extraction is historical evidence of what the model produced. Review state can evolve, but the original model output should not silently change afterward.

---

## 16. Onboarding flow

Memory chain:

**sign-up → profile → family → family membership → care recipient → consent → dashboard**

Detailed version:

> Supabase Auth establishes the user identity. A database trigger creates the corresponding profile row. The caregiver creates a family, becomes a family member with the appropriate role, registers a care recipient, records consent, and the application can then load family-scoped care data.

---

## 17. Observation flow

Memory chain:

**Log Vitals modal → validation → `health_observations` → RLS → dashboard**

Blood pressure has separate fields for systolic and diastolic values (`value_sys`, `value_dia`) in addition to standard numeric observation representation.

Safe explanation:

> The observation model can handle common scalar measurements while still explicitly representing paired blood-pressure values.

---

## 18. Medication and care-routine flow

Medication:

**medication → schedule → event → reminder → response**

Care routine:

**routine → schedule → event → reminder → response**

The two domains share the same architectural pattern, but their action semantics differ. Medication responses include taken/skipped/snoozed; routine responses include completed/skipped/snoozed.

---

## 19. Document upload flow

Memory chain:

**browser upload → private `health-documents` bucket → `health_documents` metadata row**

The binary file lives in object Storage. Relational metadata lives in PostgreSQL.

Memory line:

> Storage owns the binary object; PostgreSQL owns searchable metadata, relationships and lineage.

---

## 20. Gemini extraction flow

Memorise:

**document row → `/api/analyze` → membership check → duplicate extraction check → private-byte download → Gemini → JSON schema → `document_extractions` → `pending_review`**

Step-by-step:

1. Request identifies the document.
2. Server verifies membership/access.
3. Route checks for an existing `pending_review` or `approved` extraction.
4. If found, it reuses the stored result and avoids another model call.
5. A privileged server client downloads the private file.
6. File bytes are encoded for the model request.
7. `gemini-3.5-flash-lite` is called through `@google/genai`.
8. A strict response schema asks for structured fields.
9. Parsed output is inserted with provider/model lineage.
10. Review starts as `pending_review`.

---

## 21. What Gemini is allowed to do

The extraction prompt explicitly prohibits:

- diagnosis;
- prescribing;
- medication adjustment suggestions;
- unsupported inference.

It requests structured fields including document type, medications, conditions, measurements, follow-up instructions, summary and uncertainties.

If JSON parsing fails, the route preserves the raw model output in a fallback structure and records that manual review is required.

Memory line:

> Failure preserves uncertainty instead of pretending malformed model output is trustworthy structured data.

---

## 22. Why AI output is not medical truth

Four ideas work together:

1. prompt constraints;
2. response schema;
3. `pending_review` human-review state;
4. provenance and immutable extraction history.

Spoken answer:

> Gemini is an extraction assistant. It proposes structured content from a source document. The proposal is persisted with model lineage and `pending_review`; the system does not silently turn model output into verified clinical truth.

---

## 23. Document deletion flow

Memory chain:

**authorised request → remove private Storage object → delete metadata row → cascade extraction rows**

Ordering matters.

> The file is removed first. Only after Storage removal succeeds does the route delete the metadata row. If file deletion failed but metadata had already disappeared, the system could create an orphaned object that became harder to discover and clean up.

---

## 24. WhatsApp mental model: sending, delivery, response

Keep these three concepts separate.

### Sending

The application asks Meta to send a message.

### Delivery

Meta later reports states such as sent, delivered, read or failed.

### Response

The parent presses a quick-reply button, which produces an inbound webhook event that updates adherence/routine state.

Memory line:

> Sending is an outbound API call. Delivery is provider telemetry. Response is user action.

---

## 25. Manual WhatsApp send

Memory chain:

**caregiver click → `/api/whatsapp/send` → auth/role check → recipient resolution → phone normalisation → event/message payload → Meta v25.0 → `wamid` → database send state**

Recipient lookup handles:

- `careRecipientId`
- `care_recipient_id`
- `recipientId`

and can fall back to a privileged lookup when the user-scoped query does not resolve the recipient.

This hardening exists because recipient resolution actually failed during live integration.

---

## 26. Phone-number handling

`formatIndianPhoneNumber` normalises supported Indian formats. The Meta payload removes the leading `+`. `maskPhoneNumber` hides middle digits in logs.

Memory line:

> Formatting solves API compatibility; masking reduces accidental disclosure in logs.

Do not call masking full anonymisation.

---

## 27. Interactive callback IDs

Medication:

```text
med:<event_uuid>:taken
med:<event_uuid>:skipped
med:<event_uuid>:snoozed
```

Routine:

```text
routine:<event_uuid>:completed
routine:<event_uuid>:skipped
routine:<event_uuid>:snoozed
```

Why this matters:

> The callback encodes the exact event identity and intended action, so the webhook can update deterministically without asking an AI model to interpret free text.

---

## 28. Free-text WhatsApp handling

Free text does not invoke an AI chatbot. It is logged and ignored for automated AI response.

Safe defence:

> The implemented WhatsApp surface is deliberately constrained to deterministic reminder interactions rather than unconstrained medical conversation.

---

## 29. Webhook verification

The public webhook receives requests from the internet. A public route therefore cannot trust the caller just because it knows the URL.

POST verification uses:

```text
x-hub-signature-256
```

with HMAC SHA-256 and `WHATSAPP_APP_SECRET`.

The implementation uses `crypto.timingSafeEqual`.

Spoken answer:

> The server independently computes the expected signature from the raw request body and app secret, then compares it in constant time. Invalid signatures are rejected before database mutation.

GET and POST are different:

- GET — Meta verification handshake using the verify token.
- POST — actual webhook events, authenticated cryptographically.

---

## 30. Delivery state machine

Relevant delivery states include:

```text
sent → delivered → read
```

with `failed` as a failure state that can participate in allowed recovery transitions.

The problem is asynchronous ordering. Webhooks can be delayed, duplicated or retried. A late `delivered` callback may arrive after `read`.

A naive unconditional update would regress the state.

`status.ts` instead defines valid transitions and builds guarded PostgREST update filters so the database update is conditional on the currently stored state.

Memory line:

> The system does not trust webhook arrival order; it encodes valid progression into the database update itself.

---

## 31. Why the database guard matters

Weak pattern:

1. read current state;
2. decide in application memory;
3. issue unconditional update.

Race:

Another request can modify the row between steps 1 and 3.

Stronger pattern:

> Put the current-state condition into the atomic database update.

That is what `getGuardedStatusUpdateFilter` supports.

---

## 32. Scheduled WhatsApp reminders

Memory chain:

**external cron → bearer-secret check → due query → CAS claim → Meta send → mark sent or release → later webhook**

Scheduler route:

```text
/api/whatsapp/reminders/run
```

Protected by:

```text
REMINDER_CRON_SECRET
```

Implemented due-selection window:

- **2 hours in the past**
- through **15 minutes in the future**

Memory phrase:

**-2h / +15m**

Do not invent the historical rationale for those exact bounds.

---

## 33. Duplicate-send problem

Without locking:

1. worker A queries a pending event;
2. worker B queries the same event;
3. both send to Meta;
4. the parent receives duplicates.

The project solves this by claiming the event atomically before the external send.

---

## 34. CAS in one sentence

> Compare-And-Swap means “change this row only if it is still in the state I expect.”

`claimReminderEvent` changes the event's temporary delivery state and returns the new `updated_at` value as the worker's lease token.

A second active worker cannot claim the same event under the same conditions.

---

## 35. Lease ownership and stale recovery

The persisted `updated_at` timestamp is used as ownership evidence.

Later operations require:

```text
updated_at == leaseToken
```

If the row changed, the old worker no longer owns it.

Stale threshold:

```text
STALE_LEASE_MS = 300000
```

which is **5 minutes**.

If a worker crashes while holding a claim, a later run can reclaim it after the threshold.

Do not call five minutes a measured optimum. It is an implementation parameter whose historical selection rationale is not documented.

---

## 36. Success and failure after claim

### Meta accepts the message

`markReminderEventSent` records:

- `reminder_sent_at`;
- `reminder_message_id`;
- `reminder_delivery_status = 'sent'`;

and requires the current lease token.

### Meta fails before acceptance

`releaseReminderEventClaim` clears the temporary claim so a later scheduler run can retry, again requiring the correct lease token.

---

## 37. Distributed side-effect edge case

A hard question:

> What if Meta accepts the message but the database write that records `sent` fails?

Safe answer:

> The current design gives atomic database ownership before dispatch and lease-protected local completion, but the external Meta send and the local PostgreSQL update cannot participate in one ACID transaction. A failure after Meta accepts the message but before local persistence is therefore a remaining distributed-systems edge case. The repository does not establish exactly-once delivery across that external boundary.

Do not claim perfect exactly-once WhatsApp delivery.

---

## 38. Security memory map

### Browser-safe / public configuration

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

### Server-only secrets

- `SUPABASE_SECRET_KEY` / service-role equivalent
- `GEMINI_API_KEY`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_APP_SECRET`
- `REMINDER_CRON_SECRET`

### Meta identifiers

- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_BUSINESS_ACCOUNT_ID`

Never expose actual values during a screen recording.

---

## 39. Security chain

Memory chain:

**identity → RLS → server-only privilege → signed webhook → protected scheduler**

Expanded:

1. Supabase Auth identifies the caregiver.
2. RLS scopes normal family data access.
3. service-role credentials remain server-only.
4. webhook POSTs require HMAC verification.
5. scheduler invocations require a Bearer secret.
6. health documents remain in private Storage.
7. phone numbers are masked in logs.

`assertServerOnly()` adds defence against privileged logic leaking into browser execution. `assertNotForbiddenProject()` adds a configuration safety check against forbidden project references.

These are defence-in-depth controls, not replacements for RLS or secret management.

---

## 40. Five migrations

Memorise by purpose:

1. **Canonical v1 schema** — 15 tables, relationships, RLS, triggers.
2. **Private health-document Storage** — bucket, MIME/size rules, storage policies.
3. **Document extraction service-role grant** — `SELECT, INSERT`.
4. **WhatsApp delivery columns** — sent time, provider ID, delivery status.
5. **WhatsApp event service-role grant** — `SELECT, UPDATE` on event tables plus supporting schedule access.

Memory chain:

**schema → storage → extraction grant → WhatsApp columns → WhatsApp grant**

---

## 41. Real defect: document upload schema mismatch

**Symptom:** upload failed.  
**Cause:** application payload field names did not match the `health_documents` schema.  
**Fix:** align UI/context payload with SQL DDL.  
**Commit:** `859e8df`.

Memory lesson:

> Database contracts are executable architecture; a field-name mismatch can break the whole flow.

---

## 42. Real defect: extraction service-role permission

**Symptom:** `/api/analyze` could not persist the extraction row.  
**Cause:** the privileged server path lacked required table-level `INSERT` permission.  
**Fix:** migration `20260904001000_grant_document_extractions_service_role.sql` granted `SELECT, INSERT`.  
**Commit:** `a736ee5`.

Memory lesson:

> RLS bypass and table privileges are different authorization layers.

---

## 43. Real defect: Graph API version mismatch

**Symptom:** Meta dispatch behaviour failed or did not match the configured developer application.  
**Cause:** code was pinned to `v26.0`, while the Meta Developer Dashboard used `v25.0`.  
**Fix:** central Graph API version aligned to `v25.0`.  
**Commit:** `2fc85c8`.

Memory lesson:

> External API contracts include version alignment, not only credentials and URL shape.

---

## 44. Real defect: care-recipient lookup

**Symptom:** manual send returned `Care recipient profile not found`.  
**Cause:** request-key mismatch plus user-scoped lookup/RLS behaviour.  
**Fix:** accept `careRecipientId`, `care_recipient_id`, `recipientId`, with a privileged fallback lookup.  
**Commit:** `4cb4e60`.  
**Regression evidence:** delivery Test K.

---

## 45. Real defect: WhatsApp event-table permission

This is the strongest debugging story.

**Symptom:** the parent pressed a button such as TAKEN; the webhook arrived; the event row still did not update; PostgreSQL reported `permission denied for table medication_events`.

**Root cause:** the service-role path lacked required explicit SQL privileges on the event tables.

**Fix:** migration `20260906140000_grant_whatsapp_events_service_role.sql` granted `SELECT, UPDATE` to `service_role` on the event tables.

**Commit:** `a7cc3ba`.  
**Regression evidence:** delivery Test L.

Why it matters:

> The integration had already crossed WhatsApp delivery, parent interaction, Meta callback and webhook verification. The final failing layer was database authorization. That makes it a clean end-to-end debugging example.

---

## 46. Prevented risk: delivery downgrade

Risk:

> A late or retried webhook could overwrite a more advanced delivery status.

Protection:

- state transition rules;
- atomic guarded PostgREST updates.

Evidence:

- delivery tests D, E, F and related transition cases.

Say **prevented/tested risk**, not “observed production outage”, unless independently testified.

---

## 47. Prevented risk: duplicate scheduler sends

Risk:

> Parallel scheduler workers could both send the same due event.

Protection:

- CAS claim;
- lease ownership;
- stale recovery;
- token-checked mark/release operations.

Evidence:

- scheduler concurrency suite.

Again: tested/prevented risk, not automatically an observed production incident.

---

## 48. Delivery tests — 12

Memorise by groups.

### Normal progression

- pending → sent
- sent → delivered
- delivered → read

### Regression protection

- read cannot move back to delivered
- read cannot move back to sent
- delivered cannot be overwritten by failed
- duplicate statuses are harmless no-ops

### Recovery transitions

- failed may advance to delivered
- failed may advance to read
- sent may become failed

### Regression checks tied to real fixes

- recipient-ID payload normalisation
- service-role event-grant migration assertion

Total: **12**.

---

## 49. Scheduler tests — 10

Memorise as one story:

1. Worker A claims an event.
2. Worker B is blocked while the lease is fresh.
3. A stale lease can be reclaimed.
4. Reclaim creates a new token.
5. Old worker cannot release the new owner's lease.
6. Old worker cannot mark sent.
7. New owner can mark sent.
8. Already-sent event cannot be reclaimed.
9. Routine and medication tables follow the same CAS rules.
10. Current owner can release a claim after a normal send failure.

Total: **10**.

---

## 50. Number sheet

| Number | Meaning |
|---:|---|
| 15 | public relational tables |
| 5 | database migrations |
| 22 | WhatsApp-focused automated tests |
| 12 | delivery/status tests |
| 10 | scheduler/CAS tests |
| 16.1.4 | Next.js version |
| 19.2.3 | React version |
| 2.106.2 | `@supabase/supabase-js` |
| 0.10.3 | `@supabase/ssr` |
| 2.21.0 | `@google/genai` |
| v25.0 | Meta Graph API version |
| 60 s | `/api/analyze` route duration allowance |
| 5 min | stale lease threshold |
| 300,000 ms | same stale lease threshold in code |
| 20 MB | configured maximum health-document upload |
| -2 h / +15 min | scheduler due-selection window |

Never turn configuration values into measured performance claims.

---

## 51. Build history in eight phases

### Phase 1 — Jan to Mar 2026

Early Next.js prototype under **Yukti OS**.

### Phase 2 — May to Jun

Rebrand to Parents Health OS; browser sandbox with `localStorage`, mock sync queue, simulated WhatsApp UI and mock analysis.

### Phase 3 — Sep 3

Real Supabase foundation; mock browser persistence removed; real Auth and client/server boundaries introduced.

### Phase 4 — Sep 3

Canonical 15-table schema and real family-care core.

### Phase 5 — Sep 3 to 4

Private Storage and Gemini document intelligence.

### Phase 6 — Sep 4

Real Meta WhatsApp loop, scheduler, CAS, delivery state machine and tests.

### Phase 7 — Sep 4 to 6

Document purge, PWA shell and public privacy page.

### Phase 8 — Sep 6

Live-integration hardening: Graph API alignment, recipient lookup fix and event-table service-role permission fix.

---

## 52. Prototype-to-real transition

### Before

- `localStorage` persistence;
- local/mock sync behaviour;
- simulated WhatsApp component;
- mock document analysis.

### After

- Supabase Auth;
- PostgreSQL;
- RLS;
- private Storage;
- server-side Gemini;
- Meta Cloud API;
- signed webhook;
- scheduler concurrency controls.

Safe spoken version:

> The early application validated the interaction model locally. The later refactor replaced simulation with real persistence and external-service boundaries. Once that happened, identity, data isolation, server privilege, private files, webhook authenticity and concurrency became first-class engineering concerns.

---

## 53. IDE-agent / AI-assisted engineering answer

What the repository proves:

- structured truth and build-history documents exist;
- feature and defect commits are traceable;
- WhatsApp test runners were committed with the feature;
- verification included:
  - `npx tsx scripts/test-delivery.ts`
  - `npx tsx scripts/test-scheduler.ts`
  - `npx tsc --noEmit`
  - `npm run build`
  - `git diff --check`

What the repository does not prove:

- exact IDE agent/model used during every phase;
- exact prompt history;
- percentage of human-written versus AI-generated code;
- wall-clock time saved.

Safe spoken answer:

> AI-assisted development was part of the workflow, but repository truth remained the acceptance boundary. Changes were checked against source, migrations, tests, TypeScript compilation, production build and Git history. I would not claim a precise human-versus-agent code percentage because the repository does not establish one.

---

## 54. What the tests prove and do not prove

### Prove

- delivery transition logic;
- duplicate-status no-op behaviour;
- downgrade prevention;
- recipient payload normalisation;
- grant regression assertion;
- CAS ownership;
- stale lease recovery;
- stale-worker rejection;
- release-after-failure;
- medication/routine parity;
- TypeScript compilation;
- production build creation.

### Do not prove

- Meta global uptime;
- production network latency;
- high-scale or multi-region behaviour;
- database latency at scale;
- broad Gemini extraction accuracy;
- user adoption;
- clinical outcomes.

---

## 55. PWA answer

The final application includes a manifest, icons and a service worker.

Critical correction:

> The final service worker is **network-only**.

Do not describe the final PWA as an offline-first caching engine. Offline/local persistence belongs to the earlier prototype history, not the final runtime.

---

## 56. Deployment truth

Safe answer:

> The audited repository builds cleanly and the source documents record live verification of key external flows. Automatic recurring reminder execution still depends on an external cron trigger or configured Supabase `pg_cron`. Repository readiness and autonomous long-running production operation are therefore not the same claim.

---

## 57. What would break at 100x?

There is no measured 100x load test.

Therefore speak as engineering judgement, not measurement.

Likely areas to validate:

- scheduler concurrency under load;
- Meta quotas/rate limits;
- event-table query/index behaviour;
- webhook burst volume;
- model throughput and cost;
- file-processing concurrency;
- external cron reliability;
- distributed send/persist edge cases.

Safe answer:

> The repository proves correctness-oriented concurrency controls, not 100x capacity. Before claiming scale I would load-test the scheduler, webhook path, event indexes, provider quotas and document-processing concurrency.

---

## 58. Why server routes instead of browser calls?

> Browser code cannot safely hold the service-role key, Gemini API key or WhatsApp access token. It also cannot serve as a trusted inbound webhook target or reliable background scheduler. Those responsibilities belong to a server boundary.

This is an architectural property of the implementation, not necessarily a repository-documented historical decision process.

---

## 59. Why relational modelling?

> The domain is explicitly relational: users belong to families, families contain care recipients, medications and routines have schedules, schedules create events, and documents own extractions. PostgreSQL foreign keys, unique constraints, cascades and RLS encode those relationships and integrity rules directly.

Do not say Firebase was evaluated and rejected unless builder testimony establishes it.

---

## 60. Why private Storage?

> Health documents are binary objects that should not be exposed through public URLs. The private bucket stores the file, while PostgreSQL stores metadata and lineage. Privileged server access retrieves bytes only for authorised processing.

---

## 61. Why server-side Gemini?

> The Gemini API key is server-only, the source document is private, and the operation must verify access before downloading the file. A server route gives a controlled boundary for those secrets and checks.

---

## 62. Why human review?

> Extraction and clinical truth are different things. The model can structure a document, but the result is stored as `pending_review`, retains provider/model provenance and uncertainty, and its core extraction history is protected. Human review remains the trust boundary.

---

## 63. Why no free-text WhatsApp AI?

Repository-supported boundary:

> Free text is not fed into an automated medical chatbot. The implemented WhatsApp workflow is deterministic and event-based.

Safe rationale:

> That keeps the implemented interaction inside constrained reminder flows rather than treating unconstrained language as a trusted clinical command.

---

## 64. Why CAS instead of a simple boolean?

A simple `is_processing=true` flag can get stuck and does not prove which worker owns it.

The implementation uses state + timestamp + exact token + stale threshold.

Memory line:

> Ownership matters. The token distinguishes the current worker from a stale worker, and the stale threshold makes abandoned claims recoverable.

---

## 65. Why `updated_at` as the token?

Repository fact:

- the implementation uses persisted `updated_at` as the lease token.

Repository does not establish:

- historical comparison against a dedicated lease UUID or another lock type.

Safe answer:

> Each successful claim changes `updated_at`; that persisted value becomes an optimistic-concurrency token. Completion succeeds only while that exact value still matches. A dedicated lease identifier would be another possible design, but the repository does not document a historical bake-off.

---

## 66. Hard interview answers

### “What was technically hardest?”

> The most technically involved area is the WhatsApp automation loop because it crosses an asynchronous external API boundary and has to handle competing workers, retries, delayed callbacks, signed webhooks and database permission boundaries. The repository contains dedicated concurrency and delivery-state tests for those risks.

Do not claim it personally took the longest unless supplying that testimony.

### “Why service role if you already have RLS?”

> RLS protects user-session access. Webhooks and background schedulers do not have a caregiver session, so they need a controlled privileged server identity. That privileged path is protected by server-only secrets, authenticated external calls and explicit database grants.

### “How do duplicate reminders get prevented?”

> The scheduler atomically claims an event before sending. The claim returns an `updated_at` lease token. Another live worker cannot claim the same event, and stale workers cannot release or mark sent once ownership changes. A five-minute threshold makes abandoned claims reclaimable.

### “How does delivery state avoid moving backwards?”

> Incoming state is not applied unconditionally. `status.ts` defines legal progression and builds a conditional PostgREST update, so the database rejects a stale transition such as delivered overwriting read.

### “What happens when the parent presses TAKEN?”

> Meta sends a signed webhook. The route verifies the signature, parses a callback such as `med:<event_uuid>:taken`, and updates that exact event through the privileged server path, recording the response state and related metadata.

### “How do you know the webhook is from Meta?”

> HMAC SHA-256 over the raw body using the Meta app secret, compared with `crypto.timingSafeEqual`.

### “How do duplicate event rows get prevented?”

> Unique `(schedule_id, due_at)` constraints on event tables.

### “How do you avoid repeated Gemini calls?”

> `/api/analyze` checks for an existing `pending_review` or `approved` extraction and reuses it when available.

### “What if Gemini returns invalid JSON?”

> The route catches the parse failure, preserves the raw output in a fallback structure and requires manual review rather than treating it as valid structured data.

### “Does Gemini diagnose?”

> No. The extraction prompt forbids diagnosis, prescribing and unsupported inference, and the output remains a reviewable extraction proposal.

### “What stops arbitrary cron calls?”

> The scheduler endpoint requires `REMINDER_CRON_SECRET` as a Bearer credential.

### “What stops forged WhatsApp callbacks?”

> POST callbacks must pass HMAC signature verification.

### “What is the weakest area?”

> The repository has correctness tests for the core WhatsApp state and concurrency logic, but it does not establish large-scale load behaviour, multi-region races or broad extraction-accuracy benchmarking. Recurring scheduler invocation also remains externally configured.

---

## 67. Product-choice questions with safe boundaries

### “Why WhatsApp instead of a parent app?”

> The implemented product deliberately separates the surfaces: complex coordination stays in the caregiver console, while the parent receives simple WhatsApp actions. That removes the requirement for the parent to operate another application.

Historical motivation beyond that is builder testimony.

### “Why Supabase?”

> In the final architecture Supabase provides Auth, PostgreSQL, RLS and private Storage in one backend, which maps cleanly to the relational family model and client/server access boundaries. The repository does not document a Supabase-versus-Firebase decision process, so I would not invent one.

### “Why Gemini 3.5 Flash-Lite?”

> That is the model pinned in the final extraction route and the repository proves its structured-output use. The repository does not establish a historical comparison with GPT-4o or Claude.

### “Why not an existing family health tool?”

> The implemented system unifies family-scoped care records, reviewable document extraction and a WhatsApp response loop in one data model. The repository does not contain a formal market-product evaluation, so I would explain the workflow it implements rather than claim specific products were rejected.

---

## 68. Numbers drill

**Public tables?** 15.  
**Migrations?** 5.  
**Delivery tests?** 12.  
**Scheduler tests?** 10.  
**Total focused tests?** 22.  
**Meta Graph API?** v25.0.  
**Stale lease?** 5 minutes / 300,000 ms.  
**Analyze max duration?** 60 seconds.  
**Document upload cap?** 20 MB.  
**Due window?** -2 hours to +15 minutes.

---

## 69. File-location drill

| Question | Answer |
|---|---|
| Main product UI | `src/app/page.tsx` |
| Auth/family context | `src/lib/supabase/context.tsx` |
| Supabase access helpers | `src/lib/supabase/` |
| Canonical schema | `supabase/migrations/20260903120000_create_v1_schema.sql` |
| Private Storage migration | `20260903130000_create_health_documents_storage_bucket.sql` |
| Extraction grant fix | `20260904001000_grant_document_extractions_service_role.sql` |
| WhatsApp delivery columns | `20260904010000_add_whatsapp_reminder_delivery_columns.sql` |
| WhatsApp event grant fix | `20260906140000_grant_whatsapp_events_service_role.sql` |
| Gemini route | `src/app/api/analyze/route.ts` |
| Document delete | `src/app/api/documents/remove/route.ts` |
| Manual WhatsApp send | `src/app/api/whatsapp/send/route.ts` |
| Scheduler | `src/app/api/whatsapp/reminders/run/route.ts` |
| Webhook | `src/app/api/whatsapp/webhook/route.ts` |
| Meta client | `src/lib/whatsapp/client.ts` |
| CAS logic | `src/lib/whatsapp/service.ts` |
| Delivery guards | `src/lib/whatsapp/status.ts` |
| Delivery tests | `src/lib/whatsapp/__tests__/delivery-status.test.ts` |
| Scheduler tests | `src/lib/whatsapp/__tests__/scheduler-concurrency.test.ts` |

---

## 70. High-value commit drill

| Commit | Recall |
|---|---|
| `a11bec8` | initial Create Next App scaffold |
| `9123e1d` | renamed to Parents Health OS |
| `bb281cd` | real Supabase foundation; mock browser persistence removed |
| `20adb61` | canonical 15-table schema |
| `8e59501` | real family-care core |
| `7d229d7` | private document intelligence |
| `859e8df` | document upload schema alignment |
| `a736ee5` | extraction service-role grant fix |
| `7969a18` | Gemini 3.5 Flash-Lite pin |
| `3f18aff` | real WhatsApp loop + CAS + tests |
| `48d0ea9` | PWA shell + safe document removal |
| `2fc85c8` | Graph API v25.0 alignment |
| `3bba7d1` | privacy page |
| `4cb4e60` | care-recipient lookup fix |
| `a7cc3ba` | WhatsApp event update grant fix |

---

## 71. Dangerous claims — never say these

Do not say:

- “The app autonomously diagnoses medical conditions.”
- “Gemini output is trusted medical data.”
- “The system has thousands of production users.”
- “It handles production-scale concurrency.”
- “Average webhook latency is X.”
- “Extraction accuracy is X%.”
- “The repository runs an always-on cron worker itself.”
- “The final PWA works fully offline.”
- “Service role bypasses every PostgreSQL permission.”
- “The project is legally DPDP compliant because it has a privacy page.”
- “The scheduler guarantees exactly-once WhatsApp delivery.”
- “Supabase was chosen over Firebase because X” unless builder testimony supplies X.
- “Gemini was chosen over GPT-4o/Claude because X” unless builder testimony supplies X.

---

## 72. Masterclass corrections recovered in final audit

1. Service role bypasses RLS, **not all table-level PostgreSQL privileges**.
2. `/api/analyze` has both `force-dynamic` and `maxDuration = 60`.
3. Manual recipient resolution handles three request-key variants and privileged fallback lookup.
4. Scheduler due-selection is approximately `now - 2h` through `now + 15m`.
5. Final service worker is network-only, not an offline caching engine.

These corrections should govern verbal recall even if older masterclass wording is broader.

---

## 73. Architecture deep-dive answer

> The browser side is a React application running through Next.js 16. Supabase Auth establishes the caregiver session, and the normal browser data path is scoped by PostgreSQL Row-Level Security. The schema is relational because the domain is naturally hierarchical: profiles join families, families contain care recipients, care recipients own clinical and care data, and medications and routines separate schedules from event instances.
>
> Sensitive or asynchronous operations move through server routes. Document analysis goes through `/api/analyze`, which verifies access, downloads the file from private Storage with a privileged client, calls Gemini under a structured schema and persists an extraction for human review. WhatsApp manual sends go through `/api/whatsapp/send`. Scheduled sends go through `/api/whatsapp/reminders/run`, protected by a cron secret and CAS event claims. Meta calls `/api/whatsapp/webhook` for button responses and delivery statuses; POST requests are authenticated with HMAC SHA-256. Delivery-state updates use conditional database guards so asynchronous callbacks cannot regress state. Privileged server paths use service-role access, but explicit SQL grants are still required for affected table operations.

---

## 74. Database deep-dive answer

> The database has 15 public tables grouped into five areas. Identity and family use profiles, families, family_members, care_recipients and consents. Documents use health_documents and document_extractions. Clinical tracking uses health_conditions and health_observations. Care routines have the routine, schedule and event tables. Medications mirror that with medication, schedule and event tables.
>
> The important modelling decision is schedule versus event. Schedules hold recurrence rules; events represent one due occurrence and can change operational state independently. Unique `(schedule_id, due_at)` constraints prevent duplicate occurrences. Documents are separate from model extractions so the source file and AI interpretation retain distinct lineage. Extractions carry review state and provenance, and the database has an immutability trigger protecting the original extraction payload. RLS scopes normal user access through family membership.

---

## 75. Gemini deep-dive answer

> A caregiver uploads a document to the private `health-documents` bucket and creates metadata. `/api/analyze` verifies access and checks whether a pending or approved extraction already exists. If one exists, it is reused. Otherwise a server-only privileged client downloads the private bytes, the route calls `gemini-3.5-flash-lite` through `@google/genai`, and the model is constrained by a structured response schema and a prompt that forbids diagnosis, prescribing and unsupported inference. Parsing failures preserve the raw model output in a review-required fallback. The result is inserted into `document_extractions` as `pending_review`, preserving the distinction between model output and verified care information.

---

## 76. WhatsApp deep-dive answer

> WhatsApp has an outbound path and two inbound paths. Outbound, the application resolves the care recipient, normalises the Indian phone number, constructs deterministic interactive buttons and sends through Meta Graph API v25.0. The provider message ID is stored on the event.
>
> For scheduled sends, the event is first claimed using a compare-and-swap lease based on `updated_at`. That prevents two live workers from sending the same event. If a worker crashes, a five-minute stale threshold lets a later worker reclaim it. If Meta rejects the send, the current worker releases the claim. If Meta accepts it, the current lease owner marks the event sent.
>
> Inbound, Meta posts to the webhook. The route verifies `x-hub-signature-256` using HMAC SHA-256 and constant-time comparison. A button payload such as `med:<uuid>:taken` updates the corresponding event. Delivery receipts such as sent, delivered and read go through a guarded state machine so stale callbacks cannot move the stored delivery state backwards.

---

## 77. Security deep-dive answer

> Security is layered. Supabase Auth answers who the caregiver is. RLS answers which family rows that caregiver can access. Sensitive credentials remain server-only. Privileged background or webhook operations use a service-role client, but that client is never exposed to the browser and still required explicit SQL grants for the relevant table operations. Private medical documents stay in a non-public Storage bucket. Meta webhook authenticity is checked cryptographically with HMAC. Scheduler invocation is protected with a bearer secret. Server-safety assertions add defence against accidental client bundling or wrong-project configuration.

---

## 78. Failure deep-dive answer

> The failure history crosses several layers. A document upload initially failed because application payload names did not match the schema. Gemini extraction later needed an explicit service-role insert grant. WhatsApp integration exposed a Graph API version mismatch, then a recipient-ID naming mismatch, and finally a database permission failure where the parent could press TAKEN and the webhook could arrive, but PostgreSQL rejected the event update. The final migration granted the event-table operations required by the service role. Separately, delivery-state and scheduler code proactively protect against out-of-order callbacks and duplicate workers, and those are tested risks rather than being presented as observed production outages.

---

## 79. Testing deep-dive answer

> The project uses targeted tests around the asynchronous areas most likely to fail. The 12 delivery tests cover normal delivery progression, invalid regressions, duplicates, recovery transitions and regressions tied to real fixes. The 10 scheduler tests simulate competing workers, lease reclamation, stale-owner rejection, mark-sent ownership, retry release and parity between medication and routine events. TypeScript compilation validates application contracts, and the production build validates the Next.js bundle. Those checks do not establish network latency, provider uptime, large-scale load behaviour or broad medical-document extraction accuracy.

---

## 80. “What did you get wrong?” answer

> Several integration assumptions were wrong during hardening. A document payload did not match the database schema. The service-role path needed explicit table privileges that were missing. The WhatsApp code and Meta dashboard were on different Graph API versions. Manual send used inconsistent recipient-ID keys. Those were corrected through schema alignment, grant migrations, central API version configuration and hardened parameter handling. The concurrency and delivery-state risks were then covered with regression tests.

---

## 81. “What would you do differently?” safe answer

The repository does not document a personal retrospective.

Safe engineering response:

> The repository identifies limits rather than a documented retrospective. Before claiming production scale, I would add load and multi-region concurrency testing, broad extraction-quality evaluation, and operational monitoring around the external scheduler, Meta callbacks and the distributed send/persist boundary. Any stronger statement about what I personally would redesign is builder judgement rather than repository fact.

---

## 82. Builder-only unknowns

These remain testimony questions.

### Product

- Why Supabase rather than Firebase or a custom backend?
- What real caregiver feedback, if any, drove non-medication routines?

### AI

- Why Gemini 3.5 Flash-Lite rather than GPT-4o or Claude?
- What prompt iterations preceded the current extraction prompt?

### WhatsApp

- What physical devices/WhatsApp versions were used for live tests?
- What exact Meta Developer Dashboard setup steps were performed?

### AI-assisted engineering

- Which exact IDE agent/model was used in each build phase?
- What percentage was human-authored versus agent-generated?
- What exact prompts were used during implementation?

Do not answer these as repository facts without builder testimony.

---

## 83. Whiteboard architecture

```text
                    ┌─────────────────────┐
                    │   Caregiver Browser │
                    │  Next.js / React UI │
                    └──────────┬──────────┘
                               │
                     Supabase user session
                               │
                 ┌─────────────▼─────────────┐
                 │  Supabase Auth + Postgres │
                 │  15 tables + RLS          │
                 │  Private Storage          │
                 └───────┬───────────┬───────┘
                         │           │
                  private docs      events
                         │           │
               ┌─────────▼───┐   ┌──▼────────────────┐
               │ /api/analyze│   │ WhatsApp API layer │
               │   Gemini    │   │ send / cron / hook │
               └─────────────┘   └──┬─────────────┬───┘
                                    │             │
                               Meta Cloud API     │
                                    │             │
                               Parent WhatsApp ───┘
                                      response /
                                      delivery
```

Explain user-scoped RLS, server-only privilege, external boundaries, asynchronous callbacks, CAS ownership and guarded delivery state.

---

## 84. Database whiteboard

```text
IDENTITY & FAMILY
profiles
families
family_members
care_recipients
consents

DOCUMENTS & AI
health_documents
document_extractions

CLINICAL
health_conditions
health_observations

CARE ROUTINES
care_routines
care_routine_schedules
care_routine_events

MEDICATIONS
medications
medication_schedules
medication_events
```

Relationship memory:

```text
family
  ↓
care recipient
  ├─ documents → extractions
  ├─ conditions
  ├─ observations
  ├─ routines → schedules → events
  └─ medications → schedules → events
```

---

## 85. WhatsApp whiteboard

```text
schedule
   ↓
event
   ↓
cron
   ↓
CAS claim ── leaseToken
   ↓
Meta send
   ↓
wamid
   ↓
WhatsApp
   ↓
parent tap
   ↓
Meta webhook
   ↓
HMAC verify
   ↓
event update

Meta delivery receipt
   ↓
wamid lookup
   ↓
guarded transition
   ↓
sent → delivered → read
```

---

## 86. Gemini whiteboard

```text
upload
  ↓
private Storage
  ↓
health_documents
  ↓
/api/analyze
  ├─ auth/membership
  ├─ reuse existing extraction?
  └─ privileged download
         ↓
      Gemini
         ↓
   structured JSON
         ↓
document_extractions
         ↓
pending_review
         ↓
human review
```

---

## 87. Security whiteboard

```text
USER IDENTITY
Supabase Auth
     ↓
ROW ACCESS
Postgres RLS
     ↓
SERVER PRIVILEGE
service role + explicit grants
     ↓
EXTERNAL AUTHENTICITY
HMAC webhook signature
     ↓
BACKGROUND TRIGGER
REMINDER_CRON_SECRET
```

Server-only secrets to remember:

```text
service-role secret
Gemini API key
WhatsApp access token
Meta app secret
cron secret
```

---

## 88. Final flat assertions

- Parents Health OS is a caregiver web console plus a WhatsApp parent interaction surface.
- The final application uses Next.js 16, React 19, Supabase, Gemini and Meta WhatsApp Cloud API.
- The database has 15 public relational tables.
- Remember the 15 tables as 5 identity/family + 2 documents/AI + 2 clinical + 3 routines + 3 medications.
- A schedule is a recurrence rule; an event is one due occurrence.
- `(schedule_id, due_at)` is an idempotency barrier for event instances.
- Normal caregiver access is user-session and RLS scoped.
- Background jobs and webhooks use a server-only privileged client.
- Service-role RLS bypass does not eliminate required table-level grants.
- Health documents live in a private Supabase Storage bucket.
- Gemini runs server-side against private document bytes.
- Gemini output is a reviewable extraction proposal, not autonomous clinical truth.
- Existing pending or approved extraction records can be reused to avoid duplicate model work.
- AI extraction history has database-level immutability protection for core fields.
- The final service worker is network-only.
- Manual send, scheduled send, delivery receipts and parent responses are separate WhatsApp flows.
- Meta Graph API is pinned to v25.0.
- Webhook POSTs are verified using HMAC SHA-256.
- Callback IDs encode event identity and action deterministically.
- Free-text WhatsApp messages do not trigger an AI medical chatbot.
- Delivery callbacks can be duplicated, delayed or out of order.
- Guarded PostgREST updates prevent delivery-state regression.
- The scheduler claims events before sending.
- The scheduler uses `updated_at` as a CAS lease token.
- Stale claims can be reclaimed after 5 minutes.
- Stale workers cannot finalise after lease ownership changes.
- Meta send plus local database persistence is a distributed external side-effect boundary, not one atomic transaction.
- The scheduler selects due events from about 2 hours behind to 15 minutes ahead.
- Recurring scheduler execution requires external cron configuration.
- There are 12 delivery tests and 10 scheduler tests: 22 total.
- TypeScript and production build verification passed in the audited repository.
- The project evolved from local simulation to real Supabase, Gemini and Meta integrations.
- Strong real integration failures included schema mismatch, missing SQL grants, API version mismatch and recipient-ID mismatch.
- Prevented concurrency risks must not be described as observed production outages.
- No large-scale throughput, latency, extraction-accuracy or clinical-outcome claim is supported.
- Unknown historical motivations remain unknown until builder testimony supplies them.
