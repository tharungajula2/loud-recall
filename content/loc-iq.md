---
title: "Loc-IQ — Address Consistency and Location Evidence Workstation"
description: "Spoken-recall notes and technical architecture breakdown for defending the Loc-IQ address-consistency solver, 6-layer case graph, knowledge graph, and network lab."
order: 22
collection: default
verified: unverified
format: markdown
series: portfolio
tags: [loc-iq, address-consistency, graph-analytics, fraud-investigation, retail-credit]
related: [parents-health-os, retail-credit-risk]
created: 2026-09-08
updated: 2026-09-08
---


**Purpose:** one file to reopen months later and recover the whole Loc-IQ project quickly and truthfully.

**Truth hierarchy:** current executable code > latest forensic sourcepack/final recovery pass > current README > older Project Truth > Git history for historical context > Masterclass for domain/reference material.

---

## 0. How To Use This File

This is not the long-form walkthrough script and it is not the full domain encyclopedia.

This is the **Loud Recall document**.

Use it before:
- interviews,
- portfolio demos,
- architecture discussions,
- fraud/credit-risk conversations,
- README/CV rewrites,
- or after not touching the repo for months.

The goal is to remember five things at once:

1. What Loc-IQ is.
2. Why the idea matters.
3. How the current implementation actually works.
4. What it does **not** do.
5. How to explain it without overclaiming.

If you have two minutes, read Sections **1, 8, 17, 23, and 31**.

---

## 1. The 30-Second Recall

**Loc-IQ is a deterministic address-consistency and location-evidence investigation workstation for Indian retail-credit use cases.**

It models how a declared address can be checked against multiple pieces of synthetic digital, financial, network, historical, and operational evidence.

The core pipeline is:

> **Identifiers → Sources → Evidence → Derived Signals → Candidate Locations → Evidence Share → Address Consistency Decision**

The current app:
- uses **synthetic/static data**,
- runs **deterministic client-side logic**,
- has **no live customer data**,
- has **no live external API calls**,
- has **no database**,
- has **no graph database**,
- has **no machine-learning model**,
- has **no LLM**,
- and does **not** make production fraud or credit decisions.

Current decision vocabulary:

- `CONSISTENT`
- `REVIEW`
- `CONFLICT`

Current score vocabulary:

> **deterministic evidence share**, not probability, accuracy, or statistical confidence.

Three graph surfaces:

1. **Active Investigation Graph** — one case, end-to-end provenance.
2. **Intelligence / Knowledge Graph** — the master domain ontology.
3. **Entity Network / Network Lab** — cross-case relationship and pattern analysis.

---

## 2. Best One-Sentence Definitions

### Safe general version

> **Loc-IQ is an explainable deterministic simulation of how multiple non-GPS evidence sources could be combined to evaluate address consistency and geographic contradictions in retail-credit investigations.**

### Portfolio version

> **Loc-IQ is a deterministic address-consistency workstation that turns synthetic multi-source observations into traceable physical-location hypotheses and graph-based investigation trails.**

### Technical version

> **Loc-IQ is a Next.js/TypeScript investigation console with a deterministic provenance solver, a six-layer ReactFlow case graph, a 273-node knowledge graph, and a synthetic multi-case entity-network analytics lab.**

---

## 3. What Loc-Iq Is Not

Never allow the project to drift into a claim it cannot support.

Loc-IQ is **not**:
- a live fraud-detection platform,
- a live underwriting engine,
- a real-time GPS tracker,
- a phone-number tracker,
- a live credit-bureau integration,
- a live telecom integration,
- a bank-core integration,
- a production API gateway,
- an ML fraud model,
- an XGBoost/Random Forest/LightGBM/CatBoost project,
- a calibrated probability model,
- a graph-database product,
- a Neo4j deployment,
- an LLM/agent system,
- a real customer-data product,
- a production consent-governance platform,
- or an enterprise case-management system.

The strongest framing is:

> **a serious executable prototype of the reasoning architecture behind an address-consistency investigation.**

---

## 4. Why Loc-Iq Exists

The starting problem is:

> A customer declares an address. What should an investigator do when different systems point to different places?

The bad answer is:

> “Find one magical location source.”

Loc-IQ was built around the opposite idea:

> **location should be treated as an evidence problem.**

A declared address is only one claim.

Other evidence may include:
- bureau address history,
- bank-branch geography,
- network location,
- telecom region,
- transaction geography,
- device observations,
- field-visit results,
- delivery outcomes,
- historical activity,
- or repeated behavioural patterns.

The investigator should ask:
- Where did this value come from?
- How recent is it?
- What does it actually prove?
- What does it **not** prove?
- Is it physical, regional, network, historical, identity, or operational evidence?
- Does it corroborate another signal?
- Does it contradict another signal?
- Is it stale?
- Is it masked by a proxy?
- Could there be a legitimate explanation?

That is the mental model of the entire product.

---

## 5. The Most Important Domain Principles

### 5.1 Identity evidence ≠ physical-location evidence

A PAN may strongly identify a person but does not prove current residence.

Aadhaar may be useful for identity/de-duplication but does not magically reveal current location.

An email may link applications while carrying almost no geography.

A mobile number may be an important identifier while offering only a weak original telecom-circle hint.

**Recall rule:**

> Evidence must be interpreted according to what it actually proves.

---

### 5.2 Declared address is a claim, not ground truth

The declared pincode is the baseline claim being tested.

It can be:
- correct,
- stale,
- temporary,
- operational rather than residential,
- mistyped,
- copied,
- or deliberately false.

Therefore:

> **address mismatch does not automatically equal fraud.**

That is why `REVIEW` matters.

---

### 5.3 Old historical evidence is not current presence

A bureau address can be useful and still be stale.

Historical evidence answers:
> “Where has this identity been associated before?”

It does not necessarily answer:
> “Where is this person now?”

---

### 5.4 Branch geography is an operational anchor

A branch tells you something about where a banking relationship was sourced or serviced.

It does not prove where the customer sleeps.

---

### 5.5 IP geography ≠ human geography

An IP can represent:
- ISP infrastructure,
- carrier networks,
- corporate gateways,
- VPN exit nodes,
- proxies,
- hosting/datacenter servers.

A Frankfurt network endpoint does not mean a person lives in Frankfurt.

---

### 5.6 Proxy/VPN can be risk-relevant while location-weak

This is one of Loc-IQ's best lessons.

A proxy may be important because it suggests masked network origin.

But that same fact means the proxy city should be **less trusted** as physical-location evidence.

So Loc-IQ preserves the observation, raises its risk relevance, and discounts its physical-location contribution.

---

### 5.7 Telecom circle is weak because portability exists

The original telecom circle can be a broad clue.

Mobile Number Portability means it can become stale.

Never treat telecom circle as precise physical proof.

---

### 5.8 Repeated recent behaviour can beat one stale record

One login is noisy.

A repeated operational pattern across many events can become a strong anchor.

---

### 5.9 Relationship ≠ suspicious relationship ≠ proven fraud

Shared:
- device,
- address,
- Wi-Fi,
- proxy,
- phone,
- email

may be interesting.

But graph linkage is not a verdict.

The benign-household counterexample exists to force this discipline.

---

### 5.10 Provenance matters

A useful investigation system should be able to answer:

> “Why did this conclusion exist?”

Loc-IQ keeps the chain visible:
source → evidence → signal → candidate → decision.

---

## 6. The Six Primary Identifiers

### `mobile_number`

Role:
- linkage,
- contact/OTP key,
- possible original telecom-circle hint.

Limitation:
- no live location,
- portability weakens original-circle inference.

**Memory:** strong linkage, weak geography.

---

### `pan`

Role:
- strong identity key in Indian lending,
- conceptual key into bureau information,
- useful for historical-address and de-duplication logic.

Limitation:
- identity ≠ current location.

**Memory:** PAN unlocks history, not current presence.

---

### `aadhaar_number`

Role:
- strong identity/de-duplication concept.

Limitation:
- not a public location source,
- identity ≠ location.

---

### `email_id`

Role:
- entity linkage,
- reuse detection,
- enrichment key.

Limitation:
- normally almost no direct geography.

**Memory:** better for “same entity?” than “same place?”

---

### `customer_key`

Role:
- internal tokenised identifier joining events/cases for one customer relationship.

---

### `case_id`

Role:
- identifies one specific application/loan/recovery investigation.

**Remember:**

> `customer_key` = customer relationship.  
> `case_id` = one case.

---

## 7. The Six-Layer Active Investigation Model

### Layer 1 — `IDENTIFIER`

Question:
> What do we start with?

Examples:
PAN, mobile, email, case ID, declared pincode.

### Layer 2 — `SOURCE`

Question:
> Which provider/system could produce evidence?

Examples:
bureau, IFSC source, IP intelligence, telecom metadata, internal systems.

### Layer 3 — `EVIDENCE`

Question:
> What raw observation was obtained?

Examples:
bureau address, branch location, public IP.

### Layer 4 — `SIGNAL`

Question:
> What does that observation mean for the investigation?

Examples:
physical-locality support, regional corroboration, network location, proxy risk.

### Layer 5 — `CANDIDATE_LOCATION`

Question:
> Which physical-location hypotheses are supported?

### Layer 6 — `DECISION`

Question:
> How does the strongest evidence compare with the declared address?

Current outputs:
`CONSISTENT`, `REVIEW`, `CONFLICT`.

---

## 8. The 42 Fetched-Field Universe — Recall By Family

The full Masterclass contains the encyclopedic detail. For Loud Recall, remember each family and its lesson.

### Event context
- `event_ts`
- `event_type`
- `source_system`

**Lesson:** evidence without time and provenance is weak.

### Digital location
- `public_ip`

**Lesson:** network location is not human physical location.

### Declared geography
- `declared_pincode`
- `declared_city`
- `declared_state`
- `full_address_text`

**Lesson:** declared geography is the hypothesis being tested.

### Branch geography
- `branch_ifsc`
- `sourcing_branch_id`
- `servicing_branch_id`

**Lesson:** operational anchor, not residence proof.

### Device/app
- `device_id_hash`
- `app_instance_id`
- `session_id_hash`
- `user_agent`
- `device_timezone`
- `device_language_or_locale`

**Lesson:** often stronger for linkage than for physical location.

### Consented GPS
- `gps_lat`
- `gps_lon`
- `gps_accuracy_meters`

**Lesson:** precise device location needs explicit permission and an accuracy context.

**Current app truth:** no live GPS tracking.

### Consented network positioning
- `wifi_bssid_hashes`
- `cell_mcc_mnc_lac_cellid`

**Lesson:** device-side observations can support positioning; they cannot be obtained from a phone number alone.

### Bank behaviour
- `login_event_history`
- `repayment_event_history`
- `contact_center_events`
- `dormant_account_reactivation`

**Lesson:** repeated recent operational behaviour may be more informative than one stale record.

### Transaction geography
- `atm_transaction_location`
- `pos_merchant_location`
- `upi_merchant_or_vpa_metadata`
- `cash_deposit_branch`

**Lesson:** useful operational geography, but still requires interpretation.

### Collections operations
- `field_visit_pincode`
- `field_visit_outcome_code`
- `returned_mail_pincode`
- `courier_delivery_status`

**Lesson:** outcome can matter more than location alone.

### Regulated history
- `bureau_address_history`
- `ckyc_id_or_search_key`
- `account_aggregator_consent_token`
- `aa_transaction_narrations`

**Lesson:** rich information can exist only inside regulated/consented workflows.

**Current app truth:** these are modelled/catalogued concepts, not live integrations.

### Social/public catalogue
- `consented_social_profile_location`
- `public_social_profile_url`
- `geotagged_public_posts`

**Lesson:** weak/privacy-sensitive evidence should never dominate.

### Catalogue-only unsafe source
- `leaked_or_breached_data`

**Lesson:** cataloguing a source category does not mean building on it.

---

## 9. The 46-Source Universe — Remember The Families

The current app does **not** call these sources live.

### Geography infrastructure
Examples:
- Data.gov.in pincode directory
- Postalpincode.in
- India Post
- Nominatim
- Geoapify
- OpenCage
- Google Maps Geocoding
- Overpass
- Geofabrik
- DataMeet
- Census of India
- Bhuvan
- GADM

Purpose:
> translate pincodes/addresses/coordinates into geography and boundaries.

### IP intelligence
Examples:
- ip-api
- MaxMind
- IPinfo
- DB-IP
- IP2Location
- IP2Proxy
- AbuseIPDB

Purpose:
> approximate network geography and assess network trust.

### Phone intelligence
Examples:
- `phonenumbers`
- telecom number-series references
- DataYuge
- Twilio Lookup
- Abstract
- Numverify

Purpose:
> phone validation/operator/original-circle context, not live location.

### Bank-branch intelligence
Examples:
- Razorpay IFSC
- RBI IFSC/MICR references

Purpose:
> map branch identifiers to operational geography.

### Device-side positioning
Examples:
- Browser Geolocation API
- Google Geolocation API

Purpose:
> consented device positioning.

### Device/fraud intelligence
Examples:
- SEON
- Signzy
- FingerprintJS

Purpose:
> stable device identity and risk metadata.

### Regulated financial sources
Examples:
- credit bureaus
- CKYC
- Account Aggregator

Purpose:
> historical address and consented financial context.

### Public/enrichment/partnership sources
Examples:
- eCourts
- e-commerce delivery partnerships
- people enrichment
- caller-ID
- email footprint

Purpose:
> supporting enrichment.

### Catalogue-only boundaries
Examples:
- covert social tracing,
- leaked datasets,
- live phone tracking from number alone,
- fake-account scraping,
- public-photo face recognition.

Purpose:
> awareness and boundary-setting, not runtime implementation.

---

## 10. The Core Scoring Formula

The resolver uses deterministic weighting:

\[
\text{Effective Weight}
=
\text{base\_weight}
\times
\text{recency\_factor}
\times
\text{ip\_trust\_factor}
\]

### `base_weight`
Represents default relative reliability.

It is:
- heuristic,
- explicit,
- deterministic.

It is **not**:
- trained coefficient,
- ML parameter,
- calibrated probability.

### `recency_factor`
Represents freshness.

Concept:
> newer evidence generally deserves more influence than stale evidence.

Current limitation:
> recency is scenario-driven deterministic logic, not a production real-time decay service.

### `ip_trust_factor`
Memorable rule:
> proxy/hosting/VPN observations can receive a `0.1` trust factor.

Meaning:
> strong discount for physical-location inference.

---

## 11. Three Geographic Signal Classes

### `PHYSICAL_LOCALITY`
Supports a specific locality/pincode hypothesis.

### `REGIONAL_SCOPE`
Provides broad regional corroboration without pretending to prove an exact locality.

Example:
telecom circle.

### `NETWORK_LOCATION`
Represents network endpoint geography.

Example:
Frankfurt proxy.

Important:
> network location can remain visible while being isolated/down-weighted from physical-location ranking.

---

## 12. Candidate Aggregation

Each physical-location hypothesis accumulates effective support.

Conceptually:

\[
W_{\text{candidate}}
=
\sum \text{effective physical support}
+
\sum \text{corroborating regional support}
\]

The system preserves competing candidates.

That is important because real evidence can disagree.

The system should not delete contradictions just to produce a clean story.

---

## 13. Evidence Share — Explain This Perfectly

Evidence Share is **not probability**.

It is not:
- residence probability,
- fraud probability,
- statistical confidence,
- accuracy,
- probability of default,
- likelihood.

It is:

> **the normalized share of the deterministic weighted evidence pool assigned to a candidate.**

The allocator uses the Hamilton / Largest Remainder Method.

\[
q_i = \frac{W_i}{\sum W} \times 100
\]

Then:
1. floor each quota,
2. compute the fractional remainder,
3. find remaining percentage points,
4. assign them to the largest remainders.

Result:
> whole-number shares sum exactly to 100%.

Why this matters:
> if the UI calls something “share,” the displayed arithmetic should honor that promise.

---

## 14. Current Decision Semantics

### `CONSISTENT`
The evidence sufficiently supports the declared location under the deterministic rule set.

### `CONFLICT`
The strongest physical evidence materially points elsewhere.

### `REVIEW`
Evidence is missing, split, insufficient, or ambiguous.

Key product insight:

> `REVIEW` is not a failure state. It is an explicit uncertainty state.

---

## 15. Scenarios — Memorize The Story, Not Old Percentages

Exact scenario percentages have drifted across historical documents/versions.

Therefore:
- do not memorize old `95% confidence`,
- do not treat old percentage splits as universal current truth,
- read exact current values from the live/current UI when presenting.

Memorize the mechanics.

### Clean
Declared location and major evidence align.

Lesson:
> multi-source corroboration → `CONSISTENT`.

### Physical Conflict
Declared location differs from the strongest physical evidence cluster. A proxy/VPN may also appear as a network observation.

Lesson:
> network masking can be risk-relevant without becoming physical-location proof.

Expected semantic outcome:
> `CONFLICT`.

### Multi-Source / Maximum
Historical, declared, network, regional, and operational signals disagree across several places.

Lesson:
> preserve competing hypotheses and let stronger evidence dominate without deleting contradictions.

### Custom Synthetic Case
User enters seeds and chooses a synthetic profile.

The resolver deterministically generates illustrative fields/signals/candidates.

It does **not** perform real external enrichment.



## 16. The Three Graph Systems — Know This Cold

This distinction is one of the highest-value interview topics.

---

### 16.1 ACTIVE INVESTIGATION GRAPH

**Question answered:**

> “How did this one case reach this conclusion?”

**Purpose:** single-case provenance.

**Node types:**
- `IDENTIFIER`
- `SOURCE`
- `EVIDENCE`
- `SIGNAL`
- `CANDIDATE_LOCATION`
- `DECISION`

**Edge semantics:** enrichment, extraction, support, contradiction.

**Data source:** current active trace/scenario.

**Runtime behavior:** dynamic per case.

**What it is not:**
- not a global graph database,
- not the 273-node ontology,
- not the multi-case fraud-ring graph.

---

### 16.2 INTELLIGENCE / KNOWLEDGE GRAPH

**Question answered:**

> “How is the whole Loc-IQ knowledge universe connected?”

**Purpose:** ontology, lineage, reference, education.

**Current node count:** **273**

Breakdown:
- 6 identifiers
- 46 data sources
- 42 fetched fields
- 77 derived signals
- 102 knowledge topics

The final recovery report records **115 explicit non-heuristic edges** categorized as direct, normalized, or curated.

**Core algorithms:**
- BFS shortest path,
- connected-component/lineage utilities.

**Important distinction:**
This graph maps concepts, not one customer's runtime case.

**What it is not:**
- not Neo4j,
- not a production ontology service,
- not current customer execution data.

---

### 16.3 ENTITY NETWORK / NETWORK LAB

**Question answered:**

> “What relationships appear across multiple synthetic applications and entities?”

**Current synthetic graph:**
- 79 nodes
- 61 edges

Entity concepts include:
- people,
- applications,
- identifier values,
- devices,
- app instances,
- sessions,
- network endpoints,
- addresses,
- locations,
- branches,
- merchants,
- behavioural events.

**Core analytics:**
- connected components,
- shared-neighbor lookup,
- entity overlap,
- rule-based pattern detection,
- typed entity counting.

**What it is not:**
- not single-case provenance,
- not proof of fraud,
- not a persistent graph database.

---

## 17. Network Lab — Rules + False-Positive Discipline

The Network Lab is strongest when explained as **structural detection with contextual interpretation**.

### Shared Device

Structure:
> multiple identities linked to one device.

Why investigator cares:
> possible centralized application behavior, farming, or syndicate activity.

False positives:
- household device,
- cybercafe,
- workplace kiosk,
- assisted digital application.

Recall:
> shared device = linkage signal, not verdict.

---

### Reused Contact Attribute

Structure:
> same phone/email reused across different applicants.

Concern:
> synthetic identity or centralized handling.

False positives:
- family contact,
- shared billing email,
- small-business admin email.

---

### Shared Proxy Endpoint

Structure:
> several applications route through one proxy/VPN endpoint.

Concern:
> coordinated masking or automated submission.

False positive:
> common commercial VPN endpoint.

---

### Address Concentration

Structure:
> many applications share the same address.

Concern:
> shell address, fake-employment address, concentration anomaly.

False positives:
- co-working center,
- hostel,
- apartment,
- shared business address.

---

### Geographic Convergence

Structure:
> applicants declare different places but operational signals converge on one hub.

Concern:
> shared operational base or coordinated activity.

False positives:
- workplace,
- campus,
- service center,
- legitimate regional hub.

---

### Benign Household Counterexample

This is one of the most important design ideas.

Two people may legitimately share:
- address,
- Wi-Fi,
- device,
- network endpoint.

The project includes a benign household pattern evaluated as a contextual relationship rather than automatic fraud escalation.

Core lesson:

> **relationship ≠ suspicious relationship ≠ proven fraud.**

---

## 18. Typed Entity Counting

A subtle technical strength recovered from the history pass:

network analytics count relevant entity types instead of blindly using raw graph degree.

Why?

A person node connected to:
- a session,
- app instance,
- device,
- proxy,
- application

does not mean “five identities.”

Typed counting asks:
- how many distinct `PERSON` nodes?
- how many distinct `APPLICATION` nodes?

This prevents **degree leakage** from turning structural intermediary nodes into fake business counts.

Interview line:

> “I made the network rules entity-aware rather than equating graph degree with business significance.”

---

## 19. Current Repository Architecture

### Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- `@xyflow/react`
- React Context
- Radix UI primitives
- supporting UI/icon/motion libraries

The current app is primarily client-side and keeps investigation state in browser memory.

---

### `app/layout.tsx`

Root layout and provider composition.

---

### `app/page.tsx`

High-level product shell and workspace orchestration.

Current major surfaces:
- Investigation
- Intelligence Graph
- Network Lab
- modal/reference flows

---

### `src/context/AppContext.tsx`

Global application orchestration.

Responsibilities:
- load catalogues,
- load demo scenarios,
- store current trace,
- run custom traces,
- coordinate modals/workspaces/selections.

Important truth:
> no durable backend case state.

Refresh resets runtime memory.

---

### `src/lib/resolver.ts`

**The most important engine file.**

Responsibilities:
- build canonical investigation graph,
- create identifier/source/evidence/signal/candidate/decision nodes,
- classify geographic signal types,
- calculate effective weights,
- aggregate candidate support,
- apply proxy trust discount,
- allocate exact evidence shares,
- evaluate consistency,
- synthesize custom deterministic traces,
- support deterministic helper functions such as hashing.

If asked “where is the brain of the app?”:
> start with `resolver.ts`.

---

### `src/lib/knowledgeGraph.ts`

Builds the master domain ontology.

Responsibilities:
- instantiate ontology nodes,
- construct graph relationships,
- BFS shortest-path traversal,
- lineage and graph utilities.

---

### `src/lib/knowledgeGraphCurated.ts`

Contains explicit curated domain relationships.

Key design lesson:
> when explainability matters, explicit mappings are safer than invisible heuristic guesses.

---

### `src/lib/entityNetworkData.ts`

Synthetic multi-case instance-network data.

Important distinction:
> this models entity instances, not abstract ontology concepts.

---

### `src/lib/entityNetworkAnalytics.ts`

Implements network pattern logic:
- connected components,
- shared neighbors,
- overlap,
- pattern detection,
- typed entity counting,
- benign counterexample handling.

---

### `src/lib/activeCaseBridge.ts`

Connects the active investigation to broader graph context.

Recall it as:
> the bridge between case-specific runtime state and the larger static knowledge universe.

---

### `src/types/index.ts`

Central domain type definitions.

This matters because Loc-IQ contains multiple graph models.

Strong typing reduces accidental mixing of:
- case graph nodes,
- knowledge graph nodes,
- entity-network nodes,
- findings,
- traces,
- scenario objects.

---

## 20. Data Files — Which Ones Are Runtime Truth

Runtime catalogue/data files:
- `src/data/data_primary_identifiers.json`
- `src/data/data_fetched_data_fields.json`
- `src/data/data_api_universe.json`
- `src/data/data_demo_cases.json`
- `src/data/masterclass.json`

Secondary historical/generated JSONs:
- `primaryIdentifiers.json`
- `dataFields.json`
- `apiUniverse.json`
- `output.json`

Lesson:
> do not infer runtime importance from filename similarity; trace imports.

---

## 21. Documentation As Product Data

`LOCIQ_MASTERCLASS.md`

is parsed by:

`scripts/parse_masterclass.js`

into:

`src/data/masterclass.json`

which powers contextual deep-dive content.

This is an excellent product/engineering detail.

It means:
> domain documentation is not merely a README; it becomes structured in-product reference data.

---

## 22. The Project'S Real Evolution

The project did not begin as the current workstation.

### Stage 1 — Excel research origin

The project began as a research/workbook exercise mapping:
- identifiers,
- data fields,
- APIs,
- derived signals,
- Indian retail-credit location concepts.

Strong story:
> spreadsheet research → structured catalogues → executable system model → interactive investigation product.

---

### Stage 2 — Early Builder Console

Early UI used components such as:
- `OverviewTab`
- `InputForm`
- `OutputView`
- `DataTab`

It was more catalogue/tab oriented.

Historical language included:
- “location probability,”
- “confidence,”
- `GREEN / AMBER / RED`.

---

### Stage 3 — Masterclass + richer scenarios

The project added:
- markdown parsing,
- contextual educational content,
- maximum/multi-source scenario,
- richer trace views.

---

### Stage 4 — Documentation truth alignment

README and project documentation were tightened.

Overclaims around:
- live integrations,
- ML,
- confidence

were removed or reframed.

This is part of the project story:

> **the project became more technically honest as it matured.**

---

### Stage 5 — Phase 2 rebuild

Major architecture transition:
- canonical deterministic resolver,
- modern Investigation Workspace,
- `CONSISTENT / REVIEW / CONFLICT`,
- Intelligence Graph,
- Network Lab,
- active-case bridge,
- test/invariant suite.

Legacy tab components were removed.

---

### Stage 6 — forensic audit and Loud Recall

Final phase:
- runtime truth audit,
- Git-history recovery,
- claim-safety reconciliation,
- long-term recall documentation.

---

## 23. Important Git-History Recovery

The final read-only recovery pass reviewed all 15 commits and deleted/replaced files.

Key recovered items:

### `PROJECT_NORTHSTAR_MANUAL.md`

Historical role:
- early developer/user guide,
- “detective pinboard” metaphor,
- early probability/confidence framing.

Keep:
> the detective/provenance metaphor.

Discard:
> old uncalibrated “95% confidence” language.

---

### `OverviewTab.tsx`

Historical role:
- landing overview,
- simple pipeline,
- demo selectors.

Replaced by:
> integrated Investigation Workspace.

---

### `InputForm.tsx`

Historical role:
- manual seed entry.

Capability survives in:
> `NewInvestigationModal` + `resolveCustomTrace`.

---

### `OutputView.tsx`

Historical role:
- ranked outputs,
- `GREEN / AMBER / RED`.

Replaced by:
> `DecisionPanel` + deterministic evidence share + `CONSISTENT / REVIEW / CONFLICT`.

This is central to the terminology-evolution story.

---

### `DataTab.tsx`

Historical role:
- catalogue/trace tables.

Replaced by:
> Reference Library + graph inspectors.

---

### Original Excel workbook

Historical role:
> domain research source.

Important recall:
> Loc-IQ is research converted into an executable architecture.

---

## 24. Terminology Evolution — Critical

### Old language
- location probability
- confidence score
- “95% confidence”
- truth flag
- GREEN / AMBER / RED
- fraud detection engine

### Current safer language
- deterministic evidence share
- weighted evidence
- address consistency
- `CONSISTENT / REVIEW / CONFLICT`
- location-evidence investigation
- deterministic graph provenance solver

Why this change matters:

A normalized deterministic percentage is not automatically a calibrated probability.

A mismatch is not automatically fraud.

Traffic-light terminology can imply an automated underwriting authority the prototype does not possess.

This evolution is a **technical maturity story**, not merely copy editing.

---

## 25. Testing And Verification

The current project includes:

`scripts/test_engine.ts`

The final recovery pass reports:

> **131 / 131 assertions passing**

Important coverage areas include:
- custom synthetic profiles,
- missing declared-location handling,
- evidence-share total invariant,
- knowledge-graph counts,
- entity-network invariants,
- structural pattern rules,
- benign household behavior.

The latest sourcepack also records successful:
- TypeScript no-emit validation,
- production build.

Why this matters:

> Loc-IQ is not only visual UI; the deterministic logic has executable regression checks.

---

## 26. State, Persistence, And Runtime Boundary

Current state:
- React Context,
- local component state,
- in-memory graph structures.

Not present:
- database,
- persistent case store,
- backend scoring service,
- graph database,
- enterprise workflow state.

Practical consequence:
> current investigation state is temporary and resets with the browser session/refresh.

---

## 27. Live Integrations — Current Truth

Current code does not implement live enrichment calls to:
- credit bureaus,
- telecom providers,
- IP intelligence vendors,
- bank-core systems,
- geolocation vendors,
- CKYC,
- Account Aggregator,
- or other catalogue sources.

The 46-source universe is:
> **architecture/reference catalogue data.**

If the UI describes what a provider could return, that is not proof that the provider is called.

---

## 28. Security / Secrets / Config

Current prototype:
- no required production API credentials,
- no production authentication,
- no RBAC,
- no live consent-token validation,
- no protected customer-case store.

This makes the demo portable.

It also means:
> production security architecture is not implemented.

---

## 29. Current Limitations

### Heuristic weights
Illustrative and deterministic, not empirically calibrated.

### Synthetic scenarios
Demonstrate logic; do not establish real-world performance.

### No provider failure realism
Production providers can be:
- missing,
- stale,
- delayed,
- malformed,
- unavailable,
- contradictory,
- rate-limited.

The prototype does not model the full operational complexity.

### Geographic ambiguity
People:
- move,
- travel,
- work elsewhere,
- share addresses,
- use VPNs,
- keep old accounts.

### No statistical validation
No:
- AUROC,
- Gini,
- KS,
- PSI,
- calibration curve,
- empirical lift study,
- default model.

### No runtime consent enforcement
Consent/access metadata is conceptual/catalogue information, not a production enforcement layer.

### No durable case workflow
No persistence, assignment, comments, overrides, or investigator case lifecycle.

### Client-side execution
Appropriate for transparent prototype demonstration, not equivalent to production server controls.

---

## 30. Productionization Gap

Do not describe this as already built.

A real enterprise implementation could require some combination of:

### Data ingestion
- authenticated provider adapters,
- server-side API calls,
- data contracts,
- schema validation,
- retries/timeouts,
- circuit breakers,
- provider fallbacks.

### Consent/privacy/governance
- lawful basis,
- explicit consent where required,
- access-policy enforcement,
- purpose limitation,
- retention rules,
- auditable consent state.

### Persistence
- case store,
- evidence store,
- decision history,
- audit trail.

### Identity/authorization
- authentication,
- RBAC,
- separation of duties.

### Scoring governance
If heuristic:
- versioned weight policy,
- threshold governance,
- owner/approval process.

If statistical:
- labels,
- training data,
- leakage controls,
- validation,
- calibration,
- monitoring,
- model-risk governance.

### Human review
- investigator workflow,
- adjudication,
- escalation,
- override reasons.

### Reliability
- observability,
- provider health,
- freshness checks,
- degraded-mode behavior.

### Graph scale
Possible options:
- relational joins,
- graph database,
- distributed store,
- hybrid architecture.

Do **not** say Neo4j is mandatory.

Choose infrastructure based on actual query and scale needs.



## 31. Why This Project Does Not Need ML To Be Interesting

A common question is:

> “Why didn’t you use machine learning?”

Strong answer:

Loc-IQ is designed to demonstrate **explainable evidence reasoning first**.

A deterministic prototype offers:
- explicit rules,
- visible assumptions,
- reproducible scenarios,
- traceable provenance,
- no fake performance claims,
- easy debugging,
- easy challenge by domain experts.

A future ML layer could complement the system for:
- anomaly scoring,
- empirical weight calibration,
- prioritization,
- fraud-risk estimation.

But that would require:
- real labelled data,
- governance,
- validation,
- calibration.

Therefore:

> not using ML is an honest boundary of the current project, not a weakness that should be hidden.

---

## 32. Why Reactflow Instead Of Neo4J

Strong interview answer:

> ReactFlow solves the visualization problem. Neo4j solves persistence and graph-query problems. Loc-IQ’s current graph is small, deterministic, and browser-resident, so ReactFlow plus in-memory data structures is sufficient for the prototype.

A production version might add a graph database if:
- cross-case scale grows,
- multi-hop queries become expensive,
- persistence is required,
- concurrent investigators need shared state.

Never claim:
> ReactFlow replaces Neo4j.

They solve different problems.

---

## 33. Why The Hamilton Method Is Worth Talking About

At first glance, “make percentages add to 100” sounds small.

But it shows a valuable engineering habit:

> never let display arithmetic contradict the semantic promise you make to users.

If the UI says “evidence share,” the shares should sum to 100 exactly.

Largest Remainder gives a:
- deterministic,
- transparent,
- mathematically clean,
- testable

solution.

This is a useful interview detail because it is concrete and user-facing.

---

## 34. Why The Proxy Rule Is Worth Talking About

Naive interpretation:

> IP says Frankfurt → customer is in Frankfurt.

Better interpretation:

> IP says Frankfurt, but the endpoint is a hosting proxy → Frankfurt is a network observation, not trustworthy physical evidence.

Therefore:
- keep the observation,
- expose the risk,
- discount its physical-location contribution,
- do not let it dominate the location hypothesis.

Core lesson:

> **signal meaning matters more than raw value.**

---

## 35. Why Provenance Matters

A black-box result says:

> “Conflict.”

A provenance system can say:

> “These raw observations created these signals, these signals supported these candidate locations, and this proxy observation was discounted because it was network infrastructure.”

That makes the result:
- inspectable,
- challengeable,
- debuggable,
- teachable,
- auditable.

Provenance is arguably the conceptual center of Loc-IQ.

---

## 36. Hardest Problems — Best Interview Framing

### Hardest domain problem

> Separating identity evidence, network evidence, operational geography, and physical-location evidence without pretending they all prove the same thing.

Best example:
> Frankfurt proxy ≠ person in Frankfurt.

---

### Hardest engineering problem

> Designing a deterministic canonical resolver that converts heterogeneous synthetic evidence into traceable candidate-location support while preserving exact evidence-share invariants and graph provenance.

Secondary technical stories:
- six-layer ReactFlow layout,
- 273-node ontology graph,
- BFS traversal,
- typed entity counting,
- false-positive counterexamples,
- markdown-to-product-data parsing.

---

## 37. Hostile Interview Q&A

### Q1. “Where did the weights come from?”

**Answer:**

They are illustrative expert-style heuristic weights used by the deterministic simulation.

They were not trained on labelled fraud/default data.

A production system would need policy-backed governance and/or empirical calibration.

**Do not claim:** ML-trained weights.

---

### Q2. “Why should I trust a 55%, 70%, or 72% value?”

**Answer:**

Do not interpret it as probability.

It is the normalized share of the deterministic weighted evidence pool for that scenario.

It is useful for relative ranking and explanation.

**Do not claim:**
- confidence,
- accuracy,
- fraud probability,
- residence probability.

---

### Q3. “Why didn’t you train XGBoost?”

**Answer:**

The project has no governed labelled production dataset.

Training a model would create an artificial model-performance story.

The deterministic solver keeps domain assumptions explicit.

A future supervised model could complement it if real labels and validation became available.

---

### Q4. “Where are the 46 APIs?”

**Answer:**

They are structured catalogue definitions representing the evidence-source universe.

The current app does not call them live.

---

### Q5. “Where is the backend?”

**Answer:**

There is no production backend.

The current system is a browser-side deterministic investigation simulation.

---

### Q6. “Where is the database?”

**Answer:**

There is none.

Runtime state is held in React/browser memory.

A production version would require persistence.

---

### Q7. “Why ReactFlow instead of Neo4j?”

**Answer:**

ReactFlow is appropriate for visualization.

Neo4j is a database/query engine.

For this prototype, in-memory graphs keep the app portable and infrastructure-light.

---

### Q8. “How does consent work?”

**Answer:**

Consent/access requirements exist in the domain catalogue.

The current prototype does not implement live consent enforcement.

A real implementation would need governed consent verification before regulated provider access.

---

### Q9. “Is it compliant?”

**Answer:**

Do not claim production compliance.

The prototype uses synthetic data and no live personal-data enrichment.

A production version would require legal/policy review, security, retention, consent, and audit controls.

---

### Q10. “Does mismatch mean fraud?”

**Answer:**

No.

It means the evidence does not align with the declared address under the current rule set.

Legitimate explanations can exist.

That is why the project uses `REVIEW` and why its current framing is address consistency, not fraud proof.

---

### Q11. “What prevents false positives?”

**Answer:**

The prototype makes uncertainty explicit and includes a benign-household graph counterexample.

More importantly, it preserves provenance so investigators can understand why a relationship or conflict exists.

Production use would still require empirical validation and human-review policy.

---

### Q12. “What does the Network Lab prove?”

**Answer:**

It demonstrates that the application can detect predefined structural patterns in a synthetic graph.

It does not prove that those patterns represent real fraud.

---

### Q13. “Could this scale?”

**Answer:**

The conceptual model can scale.

The current implementation is not an enterprise distributed service.

Scaling would require server-side execution, persistence, provider orchestration, shared state, operational monitoring, and an appropriate graph-query strategy.

---

### Q14. “What is actually novel here?”

A good answer:

> The value is not a novel fraud algorithm. It is the combination of domain evidence semantics, provenance, deterministic weighting, competing geographic hypotheses, three distinct graph views, and claim-safe explainability in one coherent investigation prototype.

---

## 38. Interview Angles By Audience

### Product Manager
Emphasize:
- investigator problem,
- contradictory evidence,
- uncertainty state,
- right panel = summary,
- center graph = explanation,
- progressive disclosure,
- safe synthetic scenarios,
- reference library.

### Software Architect
Emphasize:
- three graph models,
- typed domain boundaries,
- deterministic resolver,
- data-driven catalogues,
- browser-memory state,
- BFS,
- exact-share invariant,
- active-case bridge,
- productionization gaps.

### Credit Risk / Fraud
Emphasize:
- mismatch ≠ fraud,
- declared address = claim,
- bureau can be stale,
- branch = operational anchor,
- telecom circle weak under MNP,
- IP = network endpoint,
- proxy risk ≠ physical location,
- repeated behavior matters,
- human review matters.

### Data Scientist
Be explicit:
- no training data,
- no model,
- no AUROC/Gini/KS,
- no calibration,
- evidence share ≠ probability.

Then explain how a model layer could be added responsibly.

### Security / Compliance
Lead with:
- synthetic data,
- no live provider access,
- no production auth/consent layer,
- no real PII workflow.

Then explain what production would need.

---

## 39. Portfolio Positioning

### Best one-line pitch

> **Built Loc-IQ, a deterministic address-consistency investigation workstation that turns synthetic multi-source evidence into traceable physical-location hypotheses, graph provenance, and reviewable consistency outcomes.**

### Three strongest technical accomplishments

1. Deterministic canonical resolver with explicit weight computation and exact evidence-share allocation.
2. Three distinct graph systems, including a 273-node ontology with BFS traversal.
3. Synthetic multi-case network analytics with typed entity counting and benign false-positive counterexamples.

### Three strongest product/domain accomplishments

1. Reframed “find the customer’s location” as an evidence-quality and provenance problem.
2. Separated identity, physical, regional, operational, and network evidence.
3. Designed uncertainty and explainability into the product instead of manufacturing certainty.

### Why it is more than a dashboard

A dashboard mostly displays.

Loc-IQ executes:
- deterministic scoring,
- candidate aggregation,
- graph construction,
- graph traversal,
- decision rules,
- cross-case pattern detection,
- synthetic scenario generation.

### Why it is not an ML fraud model

It does not learn from outcomes.

It encodes explicit deterministic evidence rules.

### Why it is not a live data-integration platform

The 46-source universe is an architecture/reference catalogue.

### Why it is not a graph-database product

Graphs are held and analyzed in memory and rendered with ReactFlow.

---

## 40. “What Would You Build Next?”

Do not reflexively answer “AI.”

A stronger sequence:

1. define the exact production decision/use case,
2. choose permitted evidence sources,
3. implement server-side provider adapters,
4. build consent/access enforcement,
5. persist cases and provenance,
6. create investigator workflow,
7. collect real governed outcome labels,
8. validate deterministic heuristics,
9. calibrate or add statistical models only where justified,
10. add monitoring/governance,
11. scale graph infrastructure only if query patterns demand it.

This demonstrates maturity.

---

## 41. Forgotten / Hidden Gems

### Excel genesis

The project began from an Excel research workbook.

Strong story:

> research spreadsheet → structured data catalogue → executable architecture → interactive investigation workstation.

---

### `djb2Hash`

The resolver contains deterministic hashing logic used for repeatable synthetic behavior/stable generated properties.

Deeper lesson:

> simulation should be reproducible.

---

### Markdown parser

The masterclass is parsed into structured JSON.

Deeper lesson:

> domain knowledge can be integrated into the product itself.

---

### District/prefix geographic matching

The resolver contains multi-granularity geographic matching logic.

Deeper lesson:

> consistency can exist at different geographic granularities.

---

### Standalone network components

The entity-network analytics can identify isolated components/cases.

Deeper lesson:

> absence of linkage is also useful structural information.

---

## 42. Top 25 Loc-Iq Things To Remember Forever

1. Loc-IQ is a **deterministic address-consistency investigation simulation**.
2. It is **not** a production fraud-detection system.
3. It uses **synthetic data only**.
4. There are **no live external API calls**.
5. There is **no ML model**.
6. There is **no graph database**.
7. Core pipeline: **Identifier → Source → Evidence → Signal → Candidate → Decision**.
8. Declared address is a **claim**, not proof.
9. Identity evidence is **not** physical-location evidence.
10. Address mismatch is **not automatically fraud**.
11. IP geography is **network geography**.
12. Proxy/VPN can be risk-relevant but physically weak.
13. `ip_trust_factor = 0.1` is the memorable proxy-discount rule.
14. Effective weight = `base_weight × recency_factor × ip_trust_factor`.
15. Evidence share is **not probability**.
16. Hamilton/Largest Remainder makes integer shares sum to exactly 100%.
17. Current outputs: `CONSISTENT`, `REVIEW`, `CONFLICT`.
18. Loc-IQ has **three different graph systems**.
19. Knowledge Graph = **273 nodes**.
20. Network Lab synthetic graph = **79 nodes / 61 edges**.
21. Typed entity counting prevents raw graph degree from becoming fake business meaning.
22. Benign household counterexample teaches **relationship ≠ fraud**.
23. Project originated from an **Excel research workbook**.
24. Old `GREEN / AMBER / RED` and confidence/probability language should not be reused as current truth.
25. The strongest project story is **explainable evidence reasoning**, not “AI fraud detection.”

---

## 43. Rapid Flashcard Mode

**What is Loc-IQ?**  
A deterministic synthetic address-consistency investigation workstation.

**Main input?**  
Seed identifiers + synthetic scenario evidence.

**Main output?**  
Ranked candidate locations + `CONSISTENT / REVIEW / CONFLICT`.

**Is evidence share probability?**  
No.

**Formula?**  
`base_weight × recency_factor × ip_trust_factor`.

**Why discount proxy IP?**  
Network endpoint may not equal human physical location.

**Why `REVIEW`?**  
Uncertainty must remain explicit.

**Live APIs?**  
No.

**Real customer data?**  
No.

**ML?**  
No.

**Database?**  
No.

**Graph DB?**  
No.

**Active Investigation Graph?**  
One-case provenance.

**Intelligence Graph?**  
Master ontology and lineage.

**Network Lab?**  
Cross-case synthetic structural analytics.

**Main false-positive lesson?**  
Shared infrastructure can be legitimate.

**Project origin?**  
Excel research workbook.

**Best technical file?**  
`src/lib/resolver.ts`.

**Best domain story?**  
Different evidence types prove different things.

**Best honesty story?**  
The project deliberately moved away from uncalibrated confidence/probability language.

---

## 44. Current Source-Of-Truth Hierarchy

When materials disagree:

1. Current executable code.
2. Latest forensic sourcepack / final recovery pass.
3. Current README.
4. Older Project Truth.
5. Git history for historical behavior.
6. Masterclass for domain/reference explanation.

Important:
- Git history proves history, not current runtime.
- Masterclass provider descriptions do not prove live integrations.
- old percentages and labels are version-sensitive.

---

## 45. Version-Sensitive Facts

Some exact scenario percentages changed across historical versions/documents.

Therefore:
- do not reuse `95% confidence`,
- do not reuse old `GREEN / AMBER / RED`,
- do not call old “confidence” values evidence shares,
- do not memorize a scenario percentage without checking the current runtime.

Memorize instead:
- weighting mechanism,
- evidence-share semantics,
- proxy isolation,
- candidate ranking,
- current decision labels.

This is the safest long-term recall rule.

---

## 46. Final Claim-Safety Table

| Topic | Safe to say | Say with qualification | Do not say |
|---|---|---|---|
| Architecture | Deterministic client-side graph solver | Prototype investigation workstation | Enterprise backend system |
| Data | Synthetic/static data | Models real-world evidence concepts | Real customer data |
| APIs | 46-source catalogue | Shows how providers could fit | 46 live integrations |
| Analytics | Deterministic weighted evidence | Heuristic weights | ML-trained probability |
| Output | Evidence share | Relative weighted support | Confidence/accuracy/probability |
| Fraud | Address-consistency evaluation | Structural risk indicators | Fraud prediction/proof |
| GPS | No live GPS tracking | Consented GPS exists as domain concept | Live applicant tracking |
| Telecom | Original-circle concepts | Weak regional hint | Phone-number live location |
| Graphs | ReactFlow + in-memory algorithms | Could use graph DB at scale | Neo4j already implemented |
| Consent | Metadata/reference concepts | Production would need enforcement | Prototype is a consent platform |
| Compliance | Synthetic/privacy-conscious prototype | Production needs governance | Production compliant |
| Network Lab | Synthetic structural pattern detection | Linkage requires context | Fraud-ring proof |

---

## 47. Final “Tell Me About Loc-Iq” Answer

> I built Loc-IQ around a retail-credit investigation problem: how do you evaluate whether a declared address is consistent with the rest of the evidence without pretending that one source gives you the truth?
>
> I modelled it as a provenance graph. Seed identifiers connect to conceptual data sources, which produce raw observations, which become derived signals. Those signals support competing physical-location candidates. A deterministic resolver combines base reliability, recency, and trust adjustments—especially proxy/VPN discounting—to create relative evidence shares. The output is not a fraud probability; it is an address-consistency state: CONSISTENT, REVIEW, or CONFLICT.
>
> The project has three graph systems. The first explains one active investigation end to end. The second is a 273-node knowledge graph connecting identifiers, sources, fields, derived signals, and educational topics, including BFS path traversal. The third is a synthetic multi-case Network Lab that detects structures like shared devices, reused contacts, shared proxies, address concentration, and geographic convergence while also including benign counterexamples so linkage is not confused with proven fraud.
>
> Everything is synthetic and deterministic. There are no live bureau or telecom integrations, no real customer data, no ML model, and no production decisioning. The project is primarily about explainable evidence architecture, domain reasoning, graph provenance, and how such a prototype could evolve into a governed production system.

---

## 48. Final One-Page Cheat Sheet

### Core idea
Address = claim.  
Evidence = support/contradiction.  
Mismatch ≠ fraud.  
Explainability > mystery score.

### Pipeline
Identifier  
→ Source  
→ Evidence  
→ Signal  
→ Candidate  
→ Decision

### Math
`effective_weight = base_weight × recency_factor × ip_trust_factor`

Evidence share:
> normalized deterministic share, exact 100% total.

### Current decisions
- `CONSISTENT`
- `REVIEW`
- `CONFLICT`

### Three graphs
- Active Investigation = one-case provenance
- Intelligence Graph = 273-node ontology
- Network Lab = 79-node / 61-edge synthetic cross-case graph

### Strong technical stories
- deterministic resolver
- Hamilton percentage allocation
- BFS knowledge graph
- typed entity counting
- benign household counterexample
- markdown → structured product data

### Strong domain stories
- identity ≠ location
- IP ≠ human geography
- branch ≠ residence
- telecom circle weak under MNP
- repeated recent behavior > one stale observation
- shared device ≠ proven fraud

### Never claim
- live APIs
- live GPS
- real customer data
- fraud probability
- statistical confidence
- ML
- Neo4j
- production readiness
- runtime compliance/consent enforcement

### Best framing
> **Loc-IQ is an explainable deterministic simulation of multi-source address-consistency investigation.**

---

## 49. Final Closure

The deepest lesson from Loc-IQ is not Next.js, ReactFlow, a particular graph algorithm, or one scoring formula.

It is this:

> **Good investigation systems do not turn weak clues into false certainty. They preserve provenance, distinguish evidence types, keep competing hypotheses visible, expose assumptions, and leave room for review.**

That is the project worth remembering.

---

## 50. Source Basis And Historical Note

This Loud Recall consolidates the current project truth and the final Git-history recovery across:
- `LOC_IQ_WALKTHROUGH_SOURCEPACK.md`
- `LOCIQ_MASTERCLASS.md`
- `PROJECT_TRUTH_loc-iq.md`
- `README.md`
- current runtime code referenced by the final recovery pass
- deleted/replaced historical files recovered through Git history

The latest recovery pass reported:
- branch: `main`
- HEAD: `b8a4569d67c6c543cc1b4d4530f35ff3431c4f67`
- clean working tree at the time of recovery
- no application files modified
- no documentation files created by the recovery pass
- no commit or push performed during that pass

Historical terminology and numbers are retained only as history, not current runtime truth.

