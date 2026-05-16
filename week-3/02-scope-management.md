# Scope Management — Defining What's In (and What's Out)

## Why Scope Management Matters

Scope Management answers the fundamental question: **"What are we building?"** Poor scope management is the #1 cause of project failure. On the PMP exam, scope questions test whether you understand the difference between product scope (features) and project scope (work), how to decompose work properly, and how to prevent unauthorized changes. Expect 10-15 questions directly on scope topics.

---

## The 6 Scope Management Processes

| Process | Process Group | Key Output |
|---------|--------------|------------|
| Plan Scope Management | Planning | Scope Management Plan, Requirements Management Plan |
| Collect Requirements | Planning | Requirements Documentation, Requirements Traceability Matrix |
| Define Scope | Planning | Project Scope Statement |
| Create WBS | Planning | WBS, WBS Dictionary, Scope Baseline |
| Validate Scope | Monitoring & Controlling | Accepted Deliverables |
| Control Scope | Monitoring & Controlling | Change Requests, Work Performance Information |

---

## 1. Plan Scope Management

### What It Produces

- **Scope Management Plan** — how scope will be defined, validated, and controlled
- **Requirements Management Plan** — how requirements will be collected, analyzed, documented, and managed

### Key Decisions Made Here

- How will the WBS be created? (decomposition approach)
- How will scope changes be managed?
- How will deliverables be formally accepted?
- What level of detail is needed for requirements?

---

## 2. Collect Requirements

### What It Is

Determining, documenting, and managing stakeholder needs and requirements. This is where you figure out what stakeholders actually want (which is often different from what they say they want).

### Requirements Gathering Techniques

| Technique | Description | Best For |
|-----------|-------------|----------|
| **Interviews** | One-on-one or small group conversations | Detailed, sensitive information |
| **Focus groups** | Facilitated group discussion with pre-qualified participants | Understanding attitudes, expectations |
| **Facilitated workshops** | Cross-functional sessions (JAD, QFD) | Resolving conflicts, building consensus |
| **Questionnaires/surveys** | Written questions distributed to large groups | Large stakeholder populations |
| **Benchmarking** | Comparing to other projects/organizations | Best practices, standards |
| **Document analysis** | Reviewing existing documentation | Understanding current state |
| **Observation (job shadowing)** | Watching users perform work | Unstated requirements, workflow issues |
| **Prototyping** | Building a working model for feedback | Clarifying unclear requirements |
| **Brainstorming** | Generating ideas without judgment | Creative solutions, comprehensive lists |
| **Nominal group technique** | Brainstorming + voting to prioritize | Prioritizing requirements |
| **Mind mapping** | Visual idea organization | Showing relationships between requirements |
| **Affinity diagrams** | Grouping ideas into categories | Organizing large numbers of ideas |
| **Multi-criteria decision analysis** | Scoring requirements against criteria | Prioritizing competing requirements |
| **Context diagrams** | Visual showing system boundaries and interactions | Defining scope boundaries |

> 🎯 **Exam Tip:** Know the difference between techniques. If the question says "large number of stakeholders spread across locations" → surveys/questionnaires. If it says "need to resolve conflicting requirements" → facilitated workshops. If it says "users can't articulate what they need" → observation or prototyping.

### Requirements Traceability Matrix (RTM)

A table that links requirements to their origin and traces them through the project lifecycle:

| Req ID | Description | Source | Priority | WBS Element | Test Case | Status |
|--------|-------------|--------|----------|-------------|-----------|--------|
| R-001 | System shall process 1000 transactions/sec | CTO | High | 1.2.3 | TC-015 | Verified |
| R-002 | Login page loads in < 2 seconds | UX Lead | Medium | 1.3.1 | TC-022 | In Progress |

> 🎯 **Exam Tip:** The RTM ensures no requirement is "lost" during the project. If a question asks "how do we ensure all requirements are delivered?" — the answer is the Requirements Traceability Matrix.

---

## 3. Define Scope

### What It Is

Developing a detailed description of the project and product. This produces the **Project Scope Statement**.

### Project Scope Statement Contains

- Product scope description (features, functions)
- Deliverables list
- Acceptance criteria
- **Exclusions** (what is explicitly NOT included)
- Constraints and assumptions

> 🎯 **Exam Tip:** Exclusions are just as important as inclusions. Explicitly stating what's OUT prevents scope creep and manages expectations. If a stakeholder later asks for something that was excluded, you have documentation to point to.

---

## 4. Create WBS (Work Breakdown Structure)

### What It Is

The WBS is a **hierarchical decomposition of the total scope of work** to be carried out by the project team. It's the foundation of all project planning.

### Key Principles

#### The 100% Rule

The WBS must include **100% of the work** defined by the project scope — no more, no less. Every level of decomposition must represent 100% of the work in the parent element.

```text
Project (100%)
├── Phase 1 (40%)
│   ├── Deliverable 1.1 (20%)
│   └── Deliverable 1.2 (20%)
├── Phase 2 (35%)
│   ├── Deliverable 2.1 (15%)
│   └── Deliverable 2.2 (20%)
└── Phase 3 (25%)
    ├── Deliverable 3.1 (10%)
    └── Deliverable 3.2 (15%)
```

Each level must sum to 100% of its parent. If it doesn't, you've either missed work or included extra work.

#### The 8/80 Rule

Work packages (the lowest level of the WBS) should represent between **8 hours and 80 hours** of effort. This guideline ensures:

- Not too granular (< 8 hours = micromanagement)
- Not too broad (> 80 hours = can't effectively estimate or track)

#### Decomposition Process

```text
1. Identify major deliverables and project management work
         ↓
2. Organize the WBS structure (by phase, deliverable, or subproject)
         ↓
3. Decompose upper levels into lower-level components
         ↓
4. Continue until work packages are small enough to:
   - Estimate reliably
   - Assign to a single person/team
   - Track progress meaningfully
         ↓
5. Verify: Does the WBS satisfy the 100% rule?
         ↓
6. Assign WBS codes (1.0, 1.1, 1.1.1, etc.)
```

### WBS Terminology

| Term | Definition |
|------|-----------|
| **WBS Element** | Any component in the WBS hierarchy |
| **Work Package** | The lowest level of the WBS — where cost and duration are estimated |
| **Planning Package** | A WBS component below the control account but above work packages (used for rolling wave planning) |
| **Control Account** | A management control point where scope, budget, and schedule are integrated and measured (EVM happens here) |
| **WBS Dictionary** | Detailed description of each WBS element (scope, deliverables, activities, resources, cost estimates, acceptance criteria) |

### WBS Structure Approaches

| Approach | Example | Best For |
|----------|---------|----------|
| **Phase-based** | Initiation → Design → Build → Test → Deploy | Sequential/waterfall projects |
| **Deliverable-based** | Hardware, Software, Documentation, Training | Product-focused projects |
| **Subproject-based** | Module A, Module B, Module C | Large programs with independent teams |

> 🎯 **Exam Tip:** The WBS contains **deliverables and work packages**, NOT activities. Activities are identified AFTER the WBS is created (in Schedule Management). If you see "tasks" or "activities" in a WBS, that's too detailed — it's gone past work packages.

### WBS Example — Software Project

```text
1.0 E-Commerce Platform
├── 1.1 Project Management
│   ├── 1.1.1 Project Plan
│   ├── 1.1.2 Status Reports
│   └── 1.1.3 Project Closure
├── 1.2 Requirements
│   ├── 1.2.1 Business Requirements Document
│   ├── 1.2.2 Technical Requirements
│   └── 1.2.3 Requirements Sign-off
├── 1.3 Design
│   ├── 1.3.1 UI/UX Design
│   ├── 1.3.2 Database Design
│   └── 1.3.3 Architecture Design
├── 1.4 Development
│   ├── 1.4.1 Frontend Development
│   ├── 1.4.2 Backend Development
│   ├── 1.4.3 Payment Integration
│   └── 1.4.4 Unit Testing
├── 1.5 Testing
│   ├── 1.5.1 Integration Testing
│   ├── 1.5.2 User Acceptance Testing
│   └── 1.5.3 Performance Testing
└── 1.6 Deployment
    ├── 1.6.1 Production Setup
    ├── 1.6.2 Data Migration
    └── 1.6.3 Training Materials
```

### Scope Baseline

The scope baseline consists of three components:

1. **Project Scope Statement** — what we're building and what's excluded
2. **WBS** — hierarchical decomposition of all work
3. **WBS Dictionary** — detailed descriptions of each element

> 🎯 **Exam Tip:** The scope baseline is part of the Project Management Plan. Changes to the scope baseline require formal change control (ICC/CCB approval).

---

## 5. Validate Scope — The Critical Distinction

### What It Is

The process of **formalizing acceptance** of completed project deliverables. The customer/sponsor inspects deliverables and formally signs off.

### Validate Scope vs. Control Quality

This is one of the **most commonly tested distinctions** on the PMP exam:

| Aspect | Validate Scope | Control Quality |
|--------|---------------|-----------------|
| **Focus** | Acceptance (did we build the right thing?) | Correctness (did we build it right?) |
| **Who** | Customer/Sponsor | QA/QC team (internal) |
| **When** | After Control Quality | During/after work execution |
| **Output** | Accepted deliverables | Verified deliverables |
| **Concern** | Completeness, meeting requirements | Conformance to quality standards |
| **Analogy** | Customer inspection at delivery | Factory quality check before shipping |

```text
Work is done → Control Quality (internal check) → Validate Scope (customer acceptance)
```

> 🎯 **Exam Tip:** Control Quality happens FIRST (internal verification), then Validate Scope (external acceptance). Think of it as: QC checks the product meets specs, then the customer checks it meets their needs. A deliverable can pass QC but fail Validate Scope if it doesn't meet the customer's actual requirements.

### Exam Scenario: Validate Scope

**Scenario:** The development team has completed a software module and it passes all quality tests. The customer reviews it and says "This isn't what I asked for." Which process failed?

**Answer:** Validate Scope failed (the customer rejected the deliverable). But the ROOT CAUSE is likely in Collect Requirements or Define Scope — the requirements weren't captured correctly. Control Quality passed because the product met the documented specs — but the specs were wrong.

---

## 6. Control Scope

### What It Is

Monitoring the status of project and product scope and managing changes to the scope baseline. This is about **preventing unauthorized scope changes**.

### Key Activities

- Monitor scope performance against the baseline
- Determine if scope changes have occurred
- Manage actual scope changes through ICC
- Analyze variances and determine corrective actions

---

## Scope Creep vs. Gold Plating

### Scope Creep

**Uncontrolled expansion** of project scope without adjustments to time, cost, or resources. It happens gradually — "just one more small feature" repeated many times.

**Causes:**

- Poor requirements gathering
- Weak change control
- Stakeholders bypassing the PM
- Team members agreeing to "small" requests directly
- Unclear scope boundaries

**Prevention:**

- Strong scope statement with explicit exclusions
- Rigorous change control process
- Stakeholder education about the change process
- Clear WBS with the 100% rule applied

### Gold Plating

**Adding extra features or functionality** that the customer didn't ask for. The team (or PM) adds "nice to have" features thinking it will please the customer.

**Why It's Bad (PMI Perspective):**

- Uses resources not budgeted for the extra work
- Introduces risk (more features = more potential defects)
- May not align with what the customer actually values
- Delays delivery of what was actually requested
- The customer didn't ask for it — they might not want it

> 🎯 **Exam Tip:** PMI considers gold plating to be **just as bad as scope creep**. Both represent unauthorized scope changes. The correct approach is to deliver exactly what was agreed upon — no more, no less. If you think something would benefit the customer, submit a change request.

| Aspect | Scope Creep | Gold Plating |
|--------|-------------|--------------|
| **Source** | External (stakeholders, customers) | Internal (team, PM) |
| **Intent** | Usually unintentional accumulation | Well-intentioned "improvement" |
| **Visibility** | Often hidden until it's too late | Often hidden from the customer |
| **PMI View** | Unacceptable — violates change control | Unacceptable — unauthorized scope |
| **Prevention** | Strong change control, clear boundaries | Team education, scope discipline |

### Exam Scenario: Scope Creep vs. Gold Plating

**Scenario:** A developer finishes a feature early and decides to add an extra reporting capability that wasn't in the requirements. They think the customer will love it. What is this?

**Answer:** Gold plating. The developer added unrequested functionality. The PM should address this — the extra work wasn't authorized, wasn't estimated, and introduces risk.

**Scenario:** Over the past month, the customer has made 12 "small" requests that the team implemented without change requests. The project is now 3 weeks behind schedule. What happened?

**Answer:** Scope creep. Multiple small changes accumulated without going through change control, consuming time and resources without corresponding schedule/budget adjustments.

---

## Scope Management — Practice Scenarios

### Scenario 1: WBS Dispute

A team member argues that the WBS is too detailed and is slowing down planning. The work packages average 4 hours each. What should the PM do?

**Answer:** The team member has a point. Work packages averaging 4 hours violate the 8/80 rule (too granular). The PM should consolidate work packages to the 8-80 hour range. Over-decomposition creates unnecessary overhead.

### Scenario 2: Missing Work

During execution, the team discovers that a critical integration component was not included in the WBS. What should the PM do?

**Answer:** Submit a change request to add the missing work to the WBS (scope baseline change). This will likely impact schedule and cost baselines too. The 100% rule was violated during planning — lessons learned should capture this for future projects.

### Scenario 3: Requirements Conflict

Two key stakeholders have conflicting requirements. Stakeholder A wants the system to prioritize speed; Stakeholder B wants it to prioritize accuracy. What technique should the PM use?

**Answer:** Facilitated workshop — bring both stakeholders together with a neutral facilitator to discuss trade-offs and reach consensus. If that fails, escalate to the sponsor for a priority decision.

---

## Common Exam Traps — Scope Management

| Trap | Correct Answer |
|------|---------------|
| "The WBS includes activities and tasks" | WBS goes down to work packages only — activities come later |
| "Validate Scope happens before Control Quality" | Control Quality first (internal), then Validate Scope (customer) |
| "Gold plating is acceptable if the customer benefits" | Never acceptable — all scope changes need authorization |
| "The scope baseline is just the WBS" | Scope baseline = Scope Statement + WBS + WBS Dictionary |
| "Requirements are gathered once at the start" | Requirements can be elaborated progressively (rolling wave) |
| "If it's not in the requirements, we don't need to worry about it" | If it's needed for the project to succeed, it should be in the WBS (100% rule) |
