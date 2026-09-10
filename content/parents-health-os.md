---
title: "Parents Health OS — Family Care with a Parent Who Never Installs the App"
description: "How a Next.js and Supabase care console for elderly parents in India handles privileged access, AI document extraction, and WhatsApp reminders that survive retries, duplicates and out-of-order delivery callbacks."
series: portfolio
status: live
updated: 2026-09-09
verified: false
---

**Lens:** Two people use this system and only one of them will install anything. Every architectural decision follows from that asymmetry — and from the fact that once WhatsApp, an AI model and a scheduler are all real, correctness becomes a concurrency and authorization problem rather than a UI one.

<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parents Health OS architecture" style="width:100%;max-width:460px;height:auto;display:block;margin:26px auto"><rect x="120" y="8" width="220" height="36" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="230.0" y="30.6" text-anchor="middle" font-size="13" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Caregiver browser / PWA</text><line x1="230" y1="44" x2="230" y2="65" stroke="#555" stroke-width="1.3"/><polygon points="230,72 226,65 234,65" fill="#555"/><rect x="110" y="72" width="240" height="36" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="230.0" y="94.5" text-anchor="middle" font-size="13" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Next.js server routes</text><line x1="230" y1="108" x2="230" y2="126" stroke="#555" stroke-width="1.3"/><line x1="60" y1="126" x2="60" y2="143" stroke="#555" stroke-width="1.3"/><polygon points="60,150 56,143 64,143" fill="#555"/><rect x="8" y="150" width="104" height="42" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="60.0" y="168.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Supabase</text><text x="60.0" y="182.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Auth</text><line x1="230" y1="108" x2="230" y2="126" stroke="#555" stroke-width="1.3"/><line x1="172" y1="126" x2="172" y2="143" stroke="#555" stroke-width="1.3"/><polygon points="172,150 168,143 176,143" fill="#555"/><rect x="120" y="150" width="104" height="42" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="172.0" y="168.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">PostgreSQL</text><text x="172.0" y="182.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">+ Storage</text><line x1="230" y1="108" x2="230" y2="126" stroke="#555" stroke-width="1.3"/><line x1="284" y1="126" x2="284" y2="143" stroke="#555" stroke-width="1.3"/><polygon points="284,150 280,143 288,143" fill="#555"/><rect x="232" y="150" width="104" height="42" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="284.0" y="168.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Gemini</text><text x="284.0" y="182.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">extraction</text><line x1="230" y1="108" x2="230" y2="126" stroke="#555" stroke-width="1.3"/><line x1="396" y1="126" x2="396" y2="143" stroke="#555" stroke-width="1.3"/><polygon points="396,150 392,143 400,143" fill="#555"/><rect x="344" y="150" width="104" height="42" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="396.0" y="168.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Meta</text><text x="396.0" y="182.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">WhatsApp</text><line x1="60" y1="126" x2="396" y2="126" stroke="#555" stroke-width="1.3"/><line x1="396" y1="192" x2="396" y2="215" stroke="#555" stroke-width="1.3"/><polygon points="396,222 392,215 400,215" fill="#555"/><rect x="344" y="222" width="104" height="36" rx="5" fill="#f4f4f4" stroke="#333" stroke-width="1"/><text x="396.0" y="237.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">Signed</text><text x="396.0" y="251.2" text-anchor="middle" font-size="12" fill="#111" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">webhook</text><path d="M 344 240 L 300 240 L 300 275 L 172 275 L 172 199" fill="none" stroke="#555" stroke-width="1.3" stroke-dasharray="4 3"/><polygon points="172,192 168,199 176,199" fill="#555"/><text x="250" y="290" text-anchor="middle" font-size="11" fill="#666" style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif">button press returns to the care record</text></svg>

## 1. The parent will not install an app

An adult child managing an elderly parent's care needs a lot of interface: medications, schedules, vitals, conditions, documents, adherence, delivery state. The parent needs almost none, and will not learn a new application to get it.

That asymmetry is the product decision everything else descends from. **Rich caregiver interface, low-friction parent interface.** The caregiver gets a web console. The parent gets a WhatsApp message with three buttons — TAKEN, SKIP, SNOOZE — and their press flows back into the care record.

The consequence is that the system's hardest problems stopped being product problems. Once the parent's response arrives asynchronously from Meta's infrastructure, over a channel that retries and reorders, the difficult work is keeping the record correct under conditions the application does not control.

## 2. What the system is not

| Not | Why the boundary matters |
|---|---|
| A telemedicine platform | No clinician is in the loop |
| An emergency dispatch system | Reminders are not alerts |
| An autonomous diagnostic or prescribing system | The extraction prompt explicitly forbids both |
| A free-text medical chatbot | Free text is logged and ignored, deliberately |
| A self-contained always-running service | Recurring execution needs external cron or configured `pg_cron` |
| A proven-at-scale system | No load testing, no adoption data, no clinical outcomes |

The last three are the ones that get overclaimed. The repository builds cleanly and key external flows are verified; that is not the same claim as autonomous long-running production operation.

## 3. Six layers, five routes

| Layer | Responsibility |
|---|---|
| Browser / PWA | React caregiver console, session, user-scoped data access |
| Next.js server | Five API routes performing privileged work |
| Supabase Auth | Identity and sessions |
| PostgreSQL + Storage | 15 relational tables, RLS, private document bucket |
| Google Gemini | Structured extraction from uploaded documents |
| Meta WhatsApp Cloud API | Outbound messages, button responses, delivery receipts |

The five routes are `/api/analyze`, `/api/documents/remove`, `/api/whatsapp/send`, `/api/whatsapp/reminders/run` and `/api/whatsapp/webhook`.

All five declare `export const dynamic = 'force-dynamic'`, because each depends on live request state, current database state, an external service or a webhook payload — none of them can be treated as static content. `/api/analyze` additionally declares `maxDuration = 60`, since it may download a private file and call a model in one request. That 60 is an execution *allowance*, not a measured latency.

**Why server routes at all?** Browser code cannot safely hold the service-role key, the Gemini key or the WhatsApp access token. It also cannot be a trusted inbound webhook target or a reliable scheduler. Those four responsibilities define the server boundary.

## 4. Two different questions about permission

Authentication and authorization get conflated, and in this system they run on different machinery.

**Authentication — who is the user?** Supabase Auth provides identity and session state, `@supabase/ssr` integrates sessions with Next.js cookies, and middleware refreshes stale sessions before page handling.

**Authorization — what may they do?** `family_members` with owner, caregiver and viewer roles; PostgreSQL Row-Level Security; family-membership helper logic; route-level checks where needed.

Family isolation is therefore not a frontend filter. Users connect to families through `family_members`, care recipients belong to families, and clinical data descends from the care recipient. RLS evaluates those relationships at the persistence boundary, where they cannot be bypassed by a malformed request.

## 5. The correction that cost two defects

The tempting summary is that the service role bypasses every database restriction. It does not, and believing so produced two separate production failures.

**The service role bypasses Row-Level Security policies. It does not grant table-level PostgreSQL privileges.**

Those are two distinct authorization layers, and code that runs as `service_role` still needs explicit `GRANT` statements on the tables it touches. Both defects in Section 12 are this same misunderstanding hitting two different tables.

Privileged paths exist because webhooks, scheduler runs and private-document operations do not execute as an interactive caregiver session. There is no user whose RLS context could scope them.

## 6. Fifteen tables in five groups

| Group | Count | Tables |
|---|---:|---|
| Identity and family | 5 | `profiles`, `families`, `family_members`, `care_recipients`, `consents` |
| Documents and AI | 2 | `health_documents`, `document_extractions` |
| Clinical observations | 2 | `health_conditions`, `health_observations` |
| Care routines | 3 | `care_routines`, `care_routine_schedules`, `care_routine_events` |
| Medications | 3 | `medications`, `medication_schedules`, `medication_events` |

The domain is relational because it is genuinely hierarchical: users belong to families, families contain care recipients, care recipients own clinical and care data, schedules produce events, documents own extractions. Foreign keys, unique constraints, cascades and RLS encode those rules where they cannot drift.

### Why schedule and event are separate

The last two groups share a three-table shape — thing, schedule, event — and the split is the most important modelling decision in the schema.

**A schedule describes recurrence. An event describes one occurrence.**

A medication schedule says "08:00 on selected days" and stays stable. A medication event is one due instance at one timestamp, and it accumulates mutable operational state: due time, adherence status, reminder sent timestamp, provider message ID, delivery state, response timestamp, response source.

Collapse them and every WhatsApp delivery callback would be mutating the recurrence definition. Separated, the definition holds still while each occurrence evolves independently.

### Idempotency at the database level

Event tables carry a unique constraint on `(schedule_id, due_at)`.

Retried event creation therefore cannot produce two rows for the same due time. It is a database-level idempotency barrier — the guarantee holds even if the application logic that was supposed to prevent it is wrong.

### Provenance and immutability

Health entities track provenance: manual entry, AI-extracted, doctor-diagnosed. That keeps human-entered, model-derived and clinician-derived information from collapsing into one undifferentiated truth.

`document_extractions` carries an immutability trigger protecting core extraction fields while review fields stay mutable. The original model output is historical evidence of what the model produced; review state may evolve, but the output itself must not silently change afterwards.

`consents` is modelled as an audit record — the audit found no update or delete RLS path for those rows.

## 7. Documents: storage and database own different things

Upload runs browser → private `health-documents` bucket → `health_documents` metadata row. **Storage owns the binary object; PostgreSQL owns searchable metadata, relationships and lineage.**

Deletion runs the other way and the ordering is deliberate: authorised request → remove the Storage object → delete the metadata row → cascade extraction rows.

The file goes first. If metadata were deleted first and file removal then failed, the result would be an orphaned private object with nothing pointing at it — harder to find than a metadata row with a missing file, and holding health data nobody can now discover.

## 8. Extraction treats the model as a proposer

The pipeline: document row → `/api/analyze` → membership check → duplicate-extraction check → private-byte download → Gemini → JSON schema → `document_extractions` → `pending_review`.

The duplicate check runs before the model call. If a `pending_review` or `approved` extraction already exists, the stored result is reused and no second call is made — cost control and determinism in the same step.

Four mechanisms together stop model output from becoming clinical truth:

| Mechanism | Effect |
|---|---|
| Prompt constraints | Diagnosis, prescribing, medication adjustment and unsupported inference are explicitly prohibited |
| Response schema | Structured fields only — document type, medications, conditions, measurements, follow-up, summary, uncertainties |
| `pending_review` state | A human is the trust boundary, not the model |
| Provenance and immutability | Provider and model lineage stored; core output protected from later change |

And the failure path matters as much as the success path. **If JSON parsing fails, the route preserves the raw model output in a fallback structure and records that manual review is required.** It does not retry until something parses, and it does not discard the evidence. Failure preserves uncertainty rather than manufacturing structured data from malformed output.

Server-side execution is not incidental: the Gemini key is server-only, the source document is private, and access must be verified before any bytes are downloaded.

## 9. Three WhatsApp concepts that must stay separate

| Concept | What it is |
|---|---|
| **Sending** | An outbound API call to Meta |
| **Delivery** | Provider telemetry — sent, delivered, read, failed |
| **Response** | A parent action arriving as an inbound webhook |

Conflating delivery with response is how a system concludes a parent took their medication because Meta reported the message was read.

### The callback IDs carry the whole instruction

```
med:<event_uuid>:taken        routine:<event_uuid>:completed
med:<event_uuid>:skipped      routine:<event_uuid>:skipped
med:<event_uuid>:snoozed      routine:<event_uuid>:snoozed
```

The button payload encodes exact event identity and intended action. The webhook therefore updates deterministically — **no model is asked to interpret what the parent meant.** Free text arriving on the same channel is logged and ignored for automated response, which keeps the implemented surface inside constrained reminder flows rather than treating unconstrained language as a clinical command.

Phone handling is small but easy to get wrong: `formatIndianPhoneNumber` normalises supported formats, the Meta payload strips the leading `+`, and `maskPhoneNumber` hides middle digits in logs. Masking reduces accidental disclosure; it is not anonymisation.

### The webhook cannot trust its caller

A public endpoint cannot trust a request just because the caller knows the URL. POST verification uses `x-hub-signature-256` with HMAC SHA-256 over the raw body and `WHATSAPP_APP_SECRET`, compared with `crypto.timingSafeEqual`.

The server computes the expected signature independently and rejects mismatches **before any database mutation**. GET and POST do different jobs on the same route: GET is Meta's verification handshake using the verify token, POST is the actual event stream authenticated cryptographically.

## 10. Delivery state, when the callbacks arrive out of order

Delivery progresses `sent → delivered → read`, with `failed` participating in allowed recovery transitions.

The problem is that webhooks are delayed, duplicated and retried. **A late `delivered` callback can arrive after `read` has already been recorded.** An unconditional update would regress the state and the record would say the message was delivered but never read, permanently.

The weak pattern is: read the current state, decide in application memory, issue an unconditional update. Another request can modify the row between the first and third steps.

`status.ts` instead defines valid transitions and builds guarded PostgREST filters, so the update is conditional on the currently stored state *inside the atomic database operation*. `getGuardedStatusUpdateFilter` is what supports this.

**The system does not trust webhook arrival order. It encodes valid progression into the update itself.**

## 11. Two workers, one due reminder

The scheduler runs external cron → bearer-secret check → due query → CAS claim → Meta send → mark sent or release → later webhook. The route is `/api/whatsapp/reminders/run`, protected by `REMINDER_CRON_SECRET`, selecting events from roughly two hours in the past through fifteen minutes in the future.

Without locking the failure is immediate: worker A queries a pending event, worker B queries the same event, both send to Meta, and the parent gets two identical reminders for one dose.

The fix is to claim the event atomically *before* the external send.

**Compare-and-swap means: change this row only if it is still in the state I expect.** `claimReminderEvent` changes the event's temporary delivery state and returns the new `updated_at` as the worker's lease token. A second worker cannot claim the same event under the same conditions.

That timestamp then becomes ownership evidence. Later operations require `updated_at == leaseToken` — if the row changed, the original worker no longer owns it and its writes are rejected.

| Outcome | Operation | Requires lease token |
|---|---|---|
| Meta accepts | `markReminderEventSent` records `reminder_sent_at`, `reminder_message_id`, status `sent` | Yes |
| Meta fails before acceptance | `releaseReminderEventClaim` clears the claim so a later run retries | Yes |
| Worker crashes holding a claim | Reclaimable after `STALE_LEASE_MS = 300000` (5 minutes) | New token issued |

A simple `is_processing = true` boolean would have been easier and is not sufficient: it can get stuck permanently, and it does not prove *which* worker owns the row. State plus timestamp plus exact token plus stale threshold does both.

### The edge case that remains

What if Meta accepts the message but the database write recording `sent` fails?

The design gives atomic ownership before dispatch and lease-protected completion after it. But the external Meta call and the local PostgreSQL update cannot join one ACID transaction. A failure in that window is a genuine remaining distributed-systems edge case, and **the repository does not establish exactly-once delivery across that boundary.**

Stating it is more useful than claiming a guarantee that does not hold.

## 12. Five real defects

These are part of the architecture story rather than something to hide — three of the five are the same authorization misunderstanding from Section 5 surfacing in different places.

| Defect | Symptom | Cause | Fix | Commit |
|---|---|---|---|---|
| Document upload schema mismatch | Upload failed | Application payload field names did not match the `health_documents` DDL | Align UI and context payload with the SQL schema | `859e8df` |
| Extraction service-role permission | `/api/analyze` could not persist the extraction row | Privileged path lacked table-level `INSERT` | Migration granting `SELECT, INSERT` on `document_extractions` | `a736ee5` |
| Graph API version mismatch | Meta dispatch did not match the configured developer app | Code pinned to `v26.0`; dashboard on `v25.0` | Central version aligned to `v25.0` | `2fc85c8` |
| Care-recipient lookup | Manual send returned "Care recipient profile not found" | Request-key mismatch plus user-scoped lookup behaviour | Accept `careRecipientId`, `care_recipient_id`, `recipientId`, with privileged fallback | `4cb4e60` |
| WhatsApp event-table permission | Parent pressed TAKEN, webhook arrived, row never updated — `permission denied for table medication_events` | Service-role path lacked explicit `SELECT, UPDATE` on event tables | Migration granting them | `a7cc3ba` |

The last one is the cleanest end-to-end example the project has. The integration had already crossed outbound send, Meta delivery, parent interaction, callback and HMAC verification successfully. **Every layer worked except the final database authorization**, and the failure was silent from the parent's side — they pressed the button and nothing happened.

Two risks were prevented rather than observed, and the distinction is worth keeping: a late webhook downgrading delivery status is guarded by the transition rules and covered by delivery tests D, E and F; duplicate scheduler sends are guarded by CAS and covered by the concurrency suite. Both are tested risks, not production incidents.

## 13. Five migrations, in order of what they enabled

1. **Canonical v1 schema** — 15 tables, relationships, RLS, triggers
2. **Private health-document storage** — bucket, MIME and size rules, storage policies
3. **Document extraction service-role grant** — `SELECT, INSERT`
4. **WhatsApp delivery columns** — sent time, provider message ID, delivery status
5. **WhatsApp event service-role grant** — `SELECT, UPDATE` on event tables plus supporting schedule access

Migrations three and five are the two defect fixes from the table above, which is why the sequence reads as schema → storage → grant → columns → grant.

## 14. Twenty-two tests, and what they cover

**Twelve delivery tests**, in four groups:

| Group | Cases |
|---|---|
| Normal progression | pending → sent; sent → delivered; delivered → read |
| Regression protection | read cannot revert to delivered; read cannot revert to sent; delivered cannot be overwritten by failed; duplicate statuses are harmless no-ops |
| Recovery transitions | failed may advance to delivered; failed may advance to read; sent may become failed |
| Tied to real fixes | recipient-ID payload normalisation; service-role event-grant assertion |

**Ten scheduler tests**, which read as one story: worker A claims an event; worker B is blocked while the lease is fresh; a stale lease can be reclaimed; reclaiming issues a new token; the old worker cannot release the new owner's lease; the old worker cannot mark sent; the new owner can; an already-sent event cannot be reclaimed; routine and medication tables follow identical CAS rules; the current owner can release after a normal send failure.

Verification also included `npx tsx scripts/test-delivery.ts`, `npx tsx scripts/test-scheduler.ts` and `npx tsc --noEmit`.

**What the tests do not prove:** Meta uptime, production latency, multi-region behaviour, database performance at scale, broad extraction accuracy, adoption, or clinical outcomes.

## 15. Security as a chain

**identity → RLS → server-only privilege → signed webhook → protected scheduler**

1. Supabase Auth identifies the caregiver
2. RLS scopes normal family data access
3. Service-role credentials stay server-only
4. Webhook POSTs require HMAC verification
5. Scheduler invocations require a bearer secret
6. Health documents stay in private Storage
7. Phone numbers are masked in logs

| Browser-safe | Server-only | Meta identifiers |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `SUPABASE_SECRET_KEY` | `WHATSAPP_PHONE_NUMBER_ID` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | `GEMINI_API_KEY` | `WHATSAPP_BUSINESS_ACCOUNT_ID` |
| | `WHATSAPP_ACCESS_TOKEN` | |
| | `WHATSAPP_VERIFY_TOKEN` | |
| | `WHATSAPP_APP_SECRET` | |
| | `REMINDER_CRON_SECRET` | |

`assertServerOnly()` guards against privileged logic leaking into browser execution and `assertNotForbiddenProject()` checks configuration against forbidden project references. Both are defence in depth — they supplement RLS and secret management rather than replacing either.

## 16. The prototype-to-real transition

The project ran through eight phases: an early Next.js prototype under the name Yukti OS (Jan–Mar 2026); rebrand and browser sandbox with `localStorage`, a mock sync queue and simulated WhatsApp (May–Jun); the real Supabase foundation (Sep 3); the canonical 15-table schema (Sep 3); private Storage and Gemini (Sep 3–4); the real Meta loop with scheduler, CAS and delivery state machine (Sep 4); document purge, PWA shell and privacy page (Sep 4–6); and live-integration hardening (Sep 6).

| Before | After |
|---|---|
| `localStorage` persistence | Supabase Auth and PostgreSQL |
| Local mock sync | RLS at the persistence boundary |
| Simulated WhatsApp component | Meta Cloud API with signed webhook |
| Mock document analysis | Server-side Gemini with private Storage |
| — | Scheduler concurrency controls |

The early build validated the interaction model locally, which was the right thing to test first. **The moment simulation was replaced by real persistence and external services, identity, data isolation, server privilege, private files, webhook authenticity and concurrency all became first-class engineering concerns at once** — and every hard problem in this document dates from that transition.

One correction the audit forced: **the final service worker is network-only.** The PWA has a manifest, icons and a service worker, but it is not an offline-first caching engine. Offline persistence belongs to the prototype history, not the shipped runtime.

## 17. Where the system stops

There is no measured load test, so scale is engineering judgement rather than measurement. The areas that would need validating first: scheduler concurrency under load, Meta quotas and rate limits, event-table query and index behaviour, webhook burst volume, model throughput and cost, file-processing concurrency, external cron reliability, and the distributed send-then-persist edge case from Section 11.

The repository proves correctness-oriented concurrency controls. It does not prove capacity.

Five corrections recovered in the final audit govern recall over any broader earlier wording:

1. The service role bypasses RLS, **not** all table-level PostgreSQL privileges
2. `/api/analyze` declares both `force-dynamic` and `maxDuration = 60`
3. Manual recipient resolution handles three request-key variants plus a privileged fallback
4. Scheduler due-selection is approximately `now − 2h` through `now + 15m`
5. The final service worker is network-only

## Reference

| Item | Project value |
|---|---|
| Framework | Next.js 16.1.4, React 19.2.3, App Router |
| Backend | Supabase — Auth, PostgreSQL, RLS, private Storage |
| Supabase client | `@supabase/supabase-js` 2.106.2, `@supabase/ssr` 0.10.3 |
| AI | Gemini 3.5 Flash-Lite via `@google/genai` 2.21.0 |
| Messaging | Meta WhatsApp Cloud API v25.0 |
| Engine files | `src/lib/whatsapp/service.ts` (CAS), `status.ts` (transitions), `client.ts` (dispatch) |
| Test runners | `scripts/test-delivery.ts`, `scripts/test-scheduler.ts` |
| Repository baseline | `main` @ `a7cc3ba` |

## Reference numbers

| Figure | Value | Section |
|---|---:|---:|
| Public relational tables | 15 | 6 |
| — identity and family | 5 | 6 |
| — documents and AI | 2 | 6 |
| — clinical observations | 2 | 6 |
| — care routines | 3 | 6 |
| — medications | 3 | 6 |
| Server API routes | 5 | 3 |
| Architecture layers | 6 | 3 |
| Database migrations | 5 | 13 |
| WhatsApp automated tests | 22 | 14 |
| — delivery and status | 12 | 14 |
| — scheduler and CAS | 10 | 14 |
| Real defects fixed | 5 | 12 |
| Build phases | 8 | 16 |
| `/api/analyze` duration allowance | 60 s | 3 |
| Stale lease threshold | 300,000 ms (5 min) | 11 |
| Scheduler due window | −2 h to +15 min | 11 |
| Maximum document upload | 20 MB | 7 |
| Meta Graph API version | v25.0 | 9 |

Configuration values are not measured performance claims.

## Never confuse

| One object | With | Difference |
|---|---|---|
| Authentication | Authorization | One proves identity; the other determines permitted actions |
| RLS bypass | Table-level privilege | The service role bypasses policies, not `GRANT` requirements |
| Schedule | Event | Recurrence definition versus one operational occurrence |
| Delivery | Response | Provider telemetry versus a parent's action |
| Sending | Delivery | An outbound call versus what Meta reports afterwards |
| Gemini extraction | Medical truth | Output is a `pending_review` proposal with model lineage |
| CAS lease | A processing boolean | The lease proves ownership and recovers from a crash |
| Repository readiness | Autonomous production operation | Recurring execution still needs external cron or `pg_cron` |
| Network-only service worker | Offline-first PWA | The final runtime does not cache for offline use |
| Prevented risk | Observed incident | Both risks in Section 12 are tested, not experienced |
| Phone masking | Anonymisation | Masking reduces log disclosure only |
| Correctness controls | Proven scale | No load test exists |

## Recall check

1. State the product asymmetry and name the two interface surfaces it produces.
2. Name the six layers and the five server routes.
3. Explain why every critical route is `force-dynamic`, and what `maxDuration = 60` is and is not.
4. State precisely what the service role does and does not bypass, and name the two defects caused by getting it wrong.
5. Reproduce the 15 tables in their five groups.
6. Explain why schedules and events are separate tables, and what the `(schedule_id, due_at)` constraint guarantees.
7. Explain the document deletion ordering and what goes wrong if it is reversed.
8. Reproduce the extraction pipeline and name the four mechanisms keeping model output from becoming clinical truth.
9. Explain what happens when Gemini returns unparseable JSON.
10. Explain why a late `delivered` webhook must not overwrite `read`, and where the guard lives.
11. Explain CAS, the lease token, and why a processing boolean is insufficient.
12. State the remaining distributed-systems edge case honestly.
13. Recount the five defects and identify which three share one root cause.
14. State what the 22 tests prove and what they do not.

## Three things to draw without notes

1. The six-layer architecture with the webhook returning to PostgreSQL.
2. The three-table medication pattern — thing, schedule, event — with the event's mutable delivery columns.
3. The CAS claim sequence: claim, send, mark or release, with the lease token guarding each step.

## What must survive

- The parent never installs an app; every architectural consequence follows from that.
- The service role bypasses RLS, not table-level PostgreSQL privileges — three of five defects trace to this.
- Schedules describe recurrence; events describe occurrences and carry all mutable delivery state.
- `(schedule_id, due_at)` is a database-level idempotency barrier, not an application convention.
- Storage owns bytes, PostgreSQL owns metadata and lineage; deletion removes the file first.
- Gemini proposes; `pending_review` plus provenance plus immutability keep the human as trust boundary.
- Unparseable model output is preserved and flagged, never discarded or retried into shape.
- Webhook order is not trusted; valid transitions are encoded into the atomic database update.
- CAS with a lease token gives ownership and crash recovery that a boolean cannot.
- Exactly-once delivery across the Meta boundary is not established, and saying so is the correct claim.
- The final service worker is network-only; offline behaviour belongs to prototype history.
- Correctness controls are proven; capacity is not.

## Compression

Parents Health OS is a family-care application built around one asymmetry: the caregiver will use a full web console and the elderly parent will not install anything. The caregiver manages medications, care routines, vitals, conditions and medical documents in a Next.js application over Supabase Auth, PostgreSQL and private Storage. The parent receives WhatsApp reminders with deterministic quick-reply buttons, and those presses flow back into the care record through a signed webhook.

The schema separates recurrence from occurrence — schedules stay stable while events accumulate adherence and delivery state — with a unique constraint on schedule and due time acting as a database-level idempotency barrier. Documents split across two stores: bytes in a private bucket, metadata and lineage in PostgreSQL, deleted in that order so failure cannot orphan a file. Gemini extracts structured content under a strict schema and explicit prohibitions on diagnosis and prescribing, and its output lands as `pending_review` with model provenance and an immutability trigger, because extraction and clinical truth are different things.

The hard engineering is all downstream of WhatsApp being real. Delivery callbacks arrive late, duplicated and out of order, so valid transitions are encoded into guarded atomic updates rather than decided in application memory. Parallel scheduler workers are prevented from double-sending by a compare-and-swap claim whose returned timestamp becomes a lease token, with a five-minute stale threshold for crash recovery. Twenty-two tests cover both. Five real defects — three of them the same misunderstanding about what the service role bypasses — are recorded rather than hidden, and the one remaining gap, a Meta acceptance that fails to persist locally, is stated as an open edge case instead of being claimed away.

## Sources

Source citations are withheld while `verified: false`. Independent verification is a separate pass under the Loud Recall contract.

## Verification log

- Restructured: 2026-09-09, from the 2026-09-08 draft.
- Basis: repository baseline `main` @ `a7cc3ba`, Project Truth, Build History and final gap recovery.
- Independent factual verification: not yet run.
- Rendering at 360px: not checked in the Loud Recall application.
