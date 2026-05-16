# Week 3 Flashcards — Process Domain Part 1

## How to Use These Flashcards

Cover the answer and try to respond from memory. For calculation questions, work through the math before checking. Review daily — focus extra time on cards you get wrong.

---

## Integration Management

**Q:** Who issues/signs the project charter?

**A:** The **sponsor** (or someone with equivalent authority). The PM may help write it, but the sponsor authorizes it.

---

**Q:** What are the three baselines in the project management plan?

**A:** (1) Scope baseline (scope statement + WBS + WBS dictionary), (2) Schedule baseline, (3) Cost baseline. Together they form the performance measurement baseline.

---

**Q:** What is the difference between work performance data, information, and reports?

**A:** **Data** = raw measurements (produced in Direct & Manage). **Information** = analyzed/contextualized data (produced in control processes). **Reports** = formatted communications (produced in Monitor & Control Project Work).

---

**Q:** A stakeholder asks the PM to make a "small" change without paperwork. What should the PM do?

**A:** Document the change request formally and submit it through Integrated Change Control. ALL changes, regardless of size, must go through the change control process.

---

**Q:** What are the four types of changes managed through ICC?

**A:** (1) Corrective actions (realign performance), (2) Preventive actions (avoid future problems), (3) Defect repairs (fix non-conforming deliverables), (4) Updates to controlled documents.

---

**Q:** A project is cancelled by the sponsor. Does the PM still need to perform closure?

**A:** Yes. ALL projects require formal closure regardless of why they end — successful completion, cancellation, or early termination. Archive documents, capture lessons learned, release resources.

---

**Q:** What is the CCB and who controls it?

**A:** The Change Control Board — a formally constituted group that reviews, approves, defers, or rejects change requests. Its composition is defined in the Change Management Plan.

---

**Q:** What is configuration management?

**A:** A system for managing the integrity of project artifacts through: configuration identification, configuration status accounting, and configuration verification/audit.

---

**Q:** A team member implemented a change without going through change control. What should the PM do FIRST?

**A:** Evaluate the impact of the unauthorized change. Then determine whether to submit a retroactive change request or reverse the change. Coach the team member on proper process.

---

**Q:** What is the PM's LAST action when closing a project?

**A:** Transfer lessons learned to the organizational process assets (knowledge base) so future projects can benefit.

---

## Scope Management

**Q:** What is the 100% Rule in WBS creation?

**A:** The WBS must include 100% of the work defined by the project scope. Each level of decomposition must represent 100% of the work in its parent element — no more, no less.

---

**Q:** What is the 8/80 Rule?

**A:** Work packages (lowest WBS level) should represent between 8 and 80 hours of effort. Less than 8 = too granular (micromanagement). More than 80 = too broad (can't estimate/track effectively).

---

**Q:** What is the difference between Validate Scope and Control Quality?

**A:** **Control Quality** = internal verification that deliverables meet quality standards (did we build it right?). **Validate Scope** = external acceptance by the customer (did we build the right thing?). QC happens first, then Validate Scope.

---

**Q:** What is scope creep?

**A:** Uncontrolled expansion of project scope without corresponding adjustments to time, cost, or resources. It happens gradually through accumulated small changes that bypass change control.

---

**Q:** What is gold plating and why is it bad?

**A:** Adding extra features/functionality that the customer didn't request. It's bad because it uses unbudgeted resources, introduces risk, may not align with customer needs, and represents unauthorized scope change. PMI considers it just as unacceptable as scope creep.

---

**Q:** What three components make up the scope baseline?

**A:** (1) Project Scope Statement, (2) WBS, (3) WBS Dictionary.

---

**Q:** What is a work package?

**A:** The lowest level of the WBS — where cost and duration are estimated, work is assigned, and progress is tracked. It's a deliverable, not an activity.

---

**Q:** Does the WBS contain activities?

**A:** No. The WBS contains deliverables and work packages. Activities are identified AFTER the WBS is created (in Define Activities, part of Schedule Management).

---

**Q:** What is a Requirements Traceability Matrix (RTM)?

**A:** A table linking each requirement to its origin and tracing it through design, development, testing, and delivery. It ensures no requirement is lost during the project.

---

**Q:** A developer finishes early and adds an unrequested reporting feature. What is this called?

**A:** Gold plating — adding functionality the customer didn't ask for. The PM should address this as unauthorized scope.

---

## Schedule Management

**Q:** What are the four dependency types (logical relationships)?

**A:** (1) **FS** — Finish-to-Start (most common), (2) **SS** — Start-to-Start, (3) **FF** — Finish-to-Finish, (4) **SF** — Start-to-Finish (rarest).

---

**Q:** What is the difference between mandatory and discretionary dependencies?

**A:** **Mandatory** (hard logic) = inherent in the work, cannot be changed (foundation before walls). **Discretionary** (soft logic) = based on best practices/preference, CAN be changed (useful for fast-tracking).

---

**Q:** What is the critical path?

**A:** The longest path through the network diagram. It determines the minimum project duration. Activities on the critical path have zero total float.

---

**Q:** What is total float?

**A:** The amount of time an activity can be delayed without delaying the project end date. Formula: Total Float = LS - ES = LF - EF.

---

**Q:** What is free float?

**A:** The amount of time an activity can be delayed without delaying the NEXT (successor) activity. Formula: Free Float = ES(successor) - EF(current activity).

---

**Q:** What is crashing?

**A:** Adding resources to critical path activities to reduce duration. It increases COST but maintains the activity sequence. Crash the activity with the lowest crash cost per day first.

---

**Q:** What is fast-tracking?

**A:** Performing sequential activities in parallel (overlapping them). It increases RISK but doesn't directly increase cost. Only works on activities with discretionary dependencies.

---

**Q:** The sponsor says "shorten the schedule without spending more money." What technique?

**A:** Fast-tracking — overlap activities on the critical path. It's free but increases risk of rework.

---

**Q:** The sponsor says "shorten the schedule without increasing risk." What technique?

**A:** Crashing — add resources to critical path activities. It costs money but maintains the sequence (lower risk than fast-tracking).

---

**Q:** What is the difference between resource leveling and resource smoothing?

**A:** **Resource leveling** resolves over-allocation by delaying activities — it CAN extend the schedule. **Resource smoothing** adjusts activities within their float — it CANNOT extend the schedule.

---

**Q:** What is a lead?

**A:** An acceleration of the successor activity — it can start BEFORE the predecessor finishes. Represented as a negative value on the dependency (e.g., FS -5 days).

---

**Q:** What is a lag?

**A:** A waiting period between activities. The successor must wait after the predecessor relationship is satisfied (e.g., concrete curing time = FS +3 days lag).

---

**Q:** A project has paths of 18, 16, and 12 days. What is the critical path duration and how much float does the 16-day path have?

**A:** Critical path = 18 days (longest path). The 16-day path has 2 days of total float (18 - 16 = 2).

---

**Q:** Can a project have multiple critical paths?

**A:** Yes — if two or more paths tie for the longest duration. Multiple critical paths mean HIGHER risk because more activities can delay the project.

---

**Q:** What is the crash cost per day formula?

**A:** Crash Cost per Day = (Crash Cost - Normal Cost) / (Normal Duration - Crash Duration)

---

## Cost Management

**Q:** What are the four estimation techniques?

**A:** (1) **Analogous** (top-down, least accurate, fastest), (2) **Parametric** (unit rate × quantity), (3) **Bottom-up** (most accurate, slowest), (4) **Three-point/PERT** (accounts for uncertainty).

---

**Q:** What is the PERT formula?

**A:** E = (O + 4M + P) / 6, where O = Optimistic, M = Most Likely, P = Pessimistic.

---

**Q:** What is the standard deviation formula for PERT?

**A:** σ = (P - O) / 6

---

**Q:** Activity estimates: O=8, M=12, P=22. Calculate PERT estimate and standard deviation.

**A:** PERT = (8 + 4(12) + 22) / 6 = (8 + 48 + 22) / 6 = 78/6 = **13 days**. σ = (22 - 8) / 6 = 14/6 = **2.33 days**.

---

**Q:** What is the difference between contingency reserves and management reserves?

**A:** **Contingency reserves** = for known risks (known unknowns), controlled by PM, INSIDE the cost baseline. **Management reserves** = for unknown risks (unknown unknowns), controlled by sponsor, OUTSIDE the cost baseline.

---

**Q:** Does the PM need sponsor approval to use contingency reserves?

**A:** No. Contingency reserves are within the PM's authority (they're part of the cost baseline for identified risks).

---

**Q:** What is a sunk cost?

**A:** Money already spent that cannot be recovered. PMI says sunk costs should NOT influence future project decisions — only future value matters.

---

**Q:** What is the ROM estimate range?

**A:** -25% to +75% (used in initiating phase for go/no-go decisions).

---

**Q:** What is the definitive estimate range?

**A:** -5% to +10% (used in detailed planning for the cost baseline).

---

**Q:** What makes up the cost baseline (BAC)?

**A:** Cost estimates + contingency reserves = cost baseline (BAC). Note: management reserves are NOT included.

---

## Earned Value Management

**Q:** What are PV, EV, and AC?

**A:** **PV** (Planned Value) = budgeted cost of work scheduled. **EV** (Earned Value) = budgeted cost of work performed. **AC** (Actual Cost) = actual cost of work performed.

---

**Q:** How do you calculate SV and CV?

**A:** SV = EV - PV. CV = EV - AC. (EV always comes first. Positive = good.)

---

**Q:** How do you calculate SPI and CPI?

**A:** SPI = EV / PV. CPI = EV / AC. (EV always on top. Greater than 1 = good.)

---

**Q:** CPI = 0.75. What does this mean?

**A:** For every $1 spent, the project is only getting $0.75 of value. The project is 25% over budget in terms of efficiency.

---

**Q:** SPI = 1.10. What does this mean?

**A:** The project is accomplishing 10% more work than planned for this point in time. It's ahead of schedule.

---

**Q:** BAC = $200,000, CPI = 0.80. What is EAC (assuming current performance continues)?

**A:** EAC = BAC / CPI = $200,000 / 0.80 = **$250,000**

---

**Q:** When do you use EAC = AC + (BAC - EV)?

**A:** When the variance is **atypical** — a one-time event that won't recur. The remaining work will proceed at the originally planned rate.

---

**Q:** When do you use EAC = BAC / CPI?

**A:** When current cost performance (CPI) is expected to **continue** for the rest of the project. This is the most common/default formula.

---

**Q:** When do you use EAC = AC + (BAC - EV) / (CPI × SPI)?

**A:** When BOTH cost and schedule performance will continue at current rates, and schedule pressure is affecting costs (e.g., overtime to catch up).

---

**Q:** What is TCPI and what does TCPI > 1.0 mean?

**A:** TCPI = To-Complete Performance Index — the CPI needed for remaining work to meet the target. TCPI > 1.0 means you must be MORE efficient than planned (harder to achieve).

---

**Q:** TCPI(BAC) formula?

**A:** TCPI = (BAC - EV) / (BAC - AC)

---

**Q:** BAC=$100K, EV=$40K, AC=$50K. Calculate SV, CV, SPI, CPI, EAC (typical).

**A:** SV = $40K - $50K... wait. SV = EV - PV. We need PV! **Trick question** — we can't calculate SV or SPI without PV. CV = $40K - $50K = -$10K. CPI = $40K/$50K = 0.80. EAC = $100K/0.80 = $125K.

---

**Q:** What is VAC and how is it calculated?

**A:** VAC (Variance at Completion) = BAC - EAC. Positive = under budget at end. Negative = over budget at end.

---

**Q:** At project completion, what do SV and SPI always equal?

**A:** SV = 0 and SPI = 1.0 (because at completion, EV = PV = BAC — all planned work is done).

---

**Q:** Can CPI improve significantly after 20% completion?

**A:** Rarely. Research shows CPI stabilizes early and rarely improves by more than 10% after the 20% completion mark. Plan accordingly.

---

**Q:** BAC=$500K, EV=$300K, AC=$375K. The variance was a one-time vendor overcharge. Calculate EAC.

**A:** Since atypical: EAC = AC + (BAC - EV) = $375K + ($500K - $300K) = $375K + $200K = **$575,000**

---

**Q:** Project: BAC=$400K, PV=$200K, EV=$180K, AC=$220K. Is the project ahead/behind schedule? Over/under budget?

**A:** SV = $180K - $200K = -$20K → **Behind schedule**. CV = $180K - $220K = -$40K → **Over budget**. SPI = 0.90, CPI = 0.818.

---

**Q:** What is ETC?

**A:** Estimate to Complete — how much MORE money is needed to finish. ETC = EAC - AC.

---

**Q:** A project has CPI = 0.70 and is 25% complete. TCPI(BAC) = 1.43. What should the PM recommend?

**A:** A TCPI of 1.43 means the team needs to be 43% more efficient for ALL remaining work — virtually impossible. The PM should recommend a revised budget (new EAC), scope reduction, or project cancellation. Meeting the original BAC is not realistic.

---

## Mixed/Scenario Questions

**Q:** The PM discovers the project is 20% over budget and 15% behind schedule at the midpoint. What should they do FIRST?

**A:** Analyze the root cause of the variances. Then determine if the trend is typical or atypical, calculate EAC, and report findings with recommendations to the sponsor. Don't just ask for more money without understanding why.

---

**Q:** A critical path activity is delayed by 5 days. The project has zero float. What are the PM's options?

**A:** (1) Crash subsequent critical path activities (add resources, increases cost). (2) Fast-track subsequent activities (overlap them, increases risk). (3) Request schedule extension (change request through ICC). (4) Reduce scope to shorten remaining critical path.

---

**Q:** The customer rejects a deliverable during Validate Scope, but it passed Control Quality. What went wrong?

**A:** The requirements were likely captured incorrectly (Collect Requirements failure) or the scope was poorly defined (Define Scope failure). The product met documented specs (passed QC) but didn't meet the customer's actual needs.

---

**Q:** What is the formula for combining standard deviations across multiple activities on the critical path?

**A:** σ_project = √(σ₁² + σ₂² + σ₃² + ... + σₙ²). You sum the VARIANCES (σ²), then take the square root.

---

**Q:** Three CP activities have σ values of 2, 3, and 4 days. What is the project-level σ?

**A:** σ_project = √(4 + 9 + 16) = √29 = **5.39 days**

---

**Q:** What does "management by exception" mean in EVM context?

**A:** Only escalate/report when metrics exceed predefined thresholds (e.g., CPI < 0.90 or SPI < 0.85). Don't report every minor variance — focus attention on significant deviations.

---

**Q:** The PM needs a quick estimate for a project similar to one done last year. Which technique?

**A:** Analogous estimating — fast, inexpensive, uses historical data from similar projects. Appropriate for early-phase ROM estimates.

---

**Q:** Which estimation technique is most accurate?

**A:** Bottom-up estimating — estimates each work package individually and aggregates. Most accurate but most time-consuming and expensive.
