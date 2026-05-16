# Cost Management — How Much Will It Cost?

## Why Cost Management Matters

Cost Management ensures the project is completed within the approved budget. On the PMP exam, cost questions focus on estimation techniques, the relationship between budgets and reserves, and the setup for Earned Value Management. You need to know WHEN to use each estimation technique and HOW to calculate three-point estimates. Expect 6-10 questions on cost topics (with EVM covered separately in the next module).

---

## The 4 Cost Management Processes

| Process | Process Group | Key Output |
|---------|--------------|------------|
| Plan Cost Management | Planning | Cost Management Plan |
| Estimate Costs | Planning | Cost Estimates, Basis of Estimates |
| Determine Budget | Planning | Cost Baseline, Project Funding Requirements |
| Control Costs | Monitoring & Controlling | Work Performance Information, Cost Forecasts, Change Requests |

---

## Estimation Techniques

### 1. Analogous Estimating (Top-Down)

**Uses historical data** from similar past projects to estimate the current project.

| Aspect | Details |
|--------|---------|
| **Accuracy** | Low (-25% to +75% in early phases) |
| **Speed** | Fast |
| **Cost to perform** | Low |
| **When to use** | Early in the project, limited information available |
| **Basis** | Expert judgment + historical data |
| **Limitation** | Only as good as the similarity to past projects |

**Example:** "The last website project cost $200,000 and took 6 months. This one is similar but slightly larger, so we estimate $240,000 and 7 months."

> 🎯 **Exam Tip:** Analogous = "Analogy" = comparing to something similar. It's the LEAST accurate but FASTEST technique. Use it when you need a quick ballpark early in the project.

### 2. Parametric Estimating

**Uses statistical relationships** between historical data and other variables (parameters) to calculate estimates.

| Aspect | Details |
|--------|---------|
| **Accuracy** | Medium to High (depends on model quality) |
| **Speed** | Medium |
| **Cost to perform** | Medium |
| **When to use** | When reliable parametric models exist |
| **Basis** | Mathematical model + historical data |
| **Limitation** | Requires reliable historical data and valid model |

**Example:** "Historical data shows it costs $150 per square foot to build office space. The new office is 10,000 sq ft, so the estimate is $1,500,000."

**Formula approach:**

```text
Estimate = Unit Rate × Quantity
$1,500,000 = $150/sq ft × 10,000 sq ft
```

**More complex example:**

```text
Software estimate = $500 per function point × 2,000 function points = $1,000,000
```

> 🎯 **Exam Tip:** Parametric estimating can be very accurate IF the underlying model is valid and the data is reliable. It's scalable — works for any size project as long as the unit rate holds.

### 3. Bottom-Up Estimating

**Estimates individual work packages** (or activities) and aggregates them to get the total project estimate.

| Aspect | Details |
|--------|---------|
| **Accuracy** | Highest (±5% to ±10% when done well) |
| **Speed** | Slowest |
| **Cost to perform** | Highest |
| **When to use** | When detailed WBS is available, need high accuracy |
| **Basis** | Detailed estimates at the work package level |
| **Limitation** | Requires complete WBS, time-consuming |

**Example:**

```text
Work Package 1.1.1: $15,000
Work Package 1.1.2: $22,000
Work Package 1.1.3: $8,000
─────────────────────────────
Control Account 1.1: $45,000

Work Package 1.2.1: $30,000
Work Package 1.2.2: $18,000
─────────────────────────────
Control Account 1.2: $48,000

Total Project Estimate: $93,000
```

> 🎯 **Exam Tip:** Bottom-up is the MOST accurate but MOST expensive and time-consuming technique. Use it when you have a detailed WBS and need a reliable estimate for budgeting.

### 4. Three-Point Estimating (PERT)

**Uses three estimates** to account for uncertainty: Optimistic, Most Likely, and Pessimistic.

#### Triangular Distribution

```text
E = (O + M + P) / 3
```

Simple average of the three estimates. Gives equal weight to all three.

#### Beta Distribution (PERT)

```text
E = (O + 4M + P) / 6
```

Weighted average — gives 4× weight to the Most Likely estimate. This is the **standard PERT formula** and the one most likely on the exam.

#### Standard Deviation (for PERT)

```text
σ = (P - O) / 6
```

#### Variance

```text
Variance = σ² = [(P - O) / 6]²
```

### Worked Example: Three-Point Estimate

**Activity: Develop Login Module**

- Optimistic (O) = 10 days
- Most Likely (M) = 14 days
- Pessimistic (P) = 24 days

**PERT Estimate:**

```text
E = (10 + 4(14) + 24) / 6
E = (10 + 56 + 24) / 6
E = 90 / 6
E = 15 days
```

**Standard Deviation:**

```text
σ = (24 - 10) / 6
σ = 14 / 6
σ = 2.33 days
```

**Interpretation:**

- The expected duration is 15 days
- There's a 68.3% probability the actual duration will be between 12.67 and 17.33 days (±1σ)
- There's a 95.4% probability it will be between 10.34 and 19.66 days (±2σ)
- There's a 99.7% probability it will be between 8.01 and 21.99 days (±3σ)

### Confidence Levels (Normal Distribution)

| Range | Probability |
|-------|-------------|
| Mean ± 1σ | 68.3% |
| Mean ± 2σ | 95.4% |
| Mean ± 3σ | 99.7% |
| Mean ± 6σ | 99.99997% (Six Sigma) |

> 🎯 **Exam Tip:** If the exam asks for a "90% confidence level" or "95% confidence level," you'll need to add approximately 1.65σ (90%) or 2σ (95%) to the PERT estimate. The exam typically uses ±2σ for 95% confidence.

### Worked Example: Project-Level PERT

When combining multiple activity estimates, you can calculate the project-level standard deviation:

```text
Project σ = √(σ₁² + σ₂² + σ₃² + ... + σₙ²)
```

**Example:** Three critical path activities:

| Activity | O | M | P | PERT | σ | σ² |
|----------|---|---|---|------|---|-----|
| A | 5 | 8 | 17 | 9 | 2.0 | 4.0 |
| B | 10 | 14 | 24 | 15 | 2.33 | 5.44 |
| C | 3 | 6 | 9 | 6 | 1.0 | 1.0 |

**Project PERT Duration:** 9 + 15 + 6 = **30 days**

**Project Standard Deviation:**

```text
σ_project = √(4.0 + 5.44 + 1.0) = √10.44 = 3.23 days
```

**95% confidence (±2σ):** 30 ± 6.46 days = **23.54 to 36.46 days**

---

## Estimation Technique Selection Guide

| Situation | Best Technique |
|-----------|---------------|
| Very early in project, limited info | Analogous |
| Have reliable unit rates and quantities | Parametric |
| Have detailed WBS, need high accuracy | Bottom-up |
| High uncertainty, need range estimate | Three-point (PERT) |
| Need quick ROM for go/no-go decision | Analogous |
| Preparing detailed budget for approval | Bottom-up |

### Estimate Accuracy Ranges

| Estimate Type | Range | When |
|---------------|-------|------|
| **Rough Order of Magnitude (ROM)** | -25% to +75% | Initiating phase |
| **Budget Estimate** | -10% to +25% | Planning phase (early) |
| **Definitive Estimate** | -5% to +10% | Planning phase (detailed) |

> 🎯 **Exam Tip:** ROM estimates are used for go/no-go decisions in initiating. Definitive estimates are used for the cost baseline. If a question asks about estimate accuracy at different project phases, remember: accuracy improves as the project progresses and more information becomes available (the "cone of uncertainty" narrows).

---

## Determine Budget — Building the Cost Baseline

### Budget Components

```text
┌─────────────────────────────────────────────────────┐
│                PROJECT BUDGET                         │
│  (Total Funding Required)                            │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │          COST BASELINE (BAC)                   │  │
│  │  (Performance Measurement Baseline)            │  │
│  │                                                │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │     COST ESTIMATES                       │  │  │
│  │  │  (Work Package estimates aggregated)     │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  │           +                                    │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │     CONTINGENCY RESERVES                 │  │  │
│  │  │  (Known risks — "known unknowns")        │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
│           +                                          │
│  ┌───────────────────────────────────────────────┐  │
│  │     MANAGEMENT RESERVES                        │  │
│  │  (Unknown risks — "unknown unknowns")          │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Key Distinctions

| Component | Purpose | Controlled By | Part of Baseline? |
|-----------|---------|---------------|-------------------|
| **Cost Estimates** | Expected cost of work | PM | Yes |
| **Contingency Reserves** | Buffer for identified risks (known unknowns) | PM | Yes |
| **Management Reserves** | Buffer for unidentified risks (unknown unknowns) | Sponsor/Management | No |
| **Cost Baseline (BAC)** | Estimates + Contingency = performance measurement | PM | IS the baseline |
| **Project Budget** | Baseline + Management Reserve = total funding | Sponsor | — |

> 🎯 **Exam Tip:** This is a CRITICAL distinction:
>
> - **Contingency reserves** are IN the cost baseline and controlled by the PM
> - **Management reserves** are OUTSIDE the cost baseline and controlled by the sponsor
> - The PM can use contingency reserves without sponsor approval (for identified risks)
> - The PM NEEDS sponsor approval to use management reserves
> - EVM measures performance against the cost baseline (BAC), NOT the total budget

### The S-Curve (Cumulative Cost Baseline)

The cost baseline is typically displayed as an S-curve showing cumulative planned expenditure over time:

```text
Cost ($)
  │                                    ╭────── BAC
  │                               ╭───╯
  │                          ╭───╯
  │                     ╭───╯
  │                ╭───╯
  │           ╭───╯
  │      ╭───╯
  │  ╭──╯
  │╭─╯
  ├─────────────────────────────────────── Time
  Start                                  End
```

The S-shape occurs because:

- Early phases: slow spending (planning, design)
- Middle phases: heavy spending (execution, development)
- Late phases: spending tapers off (testing, closure)

---

## Control Costs

### What It Is

Monitoring project cost performance, managing changes to the cost baseline, and providing cost forecasts.

### Key Activities

- Monitor cost expenditures against the baseline
- Ensure only approved changes are implemented
- Inform stakeholders of cost variances
- Prevent unauthorized changes to the cost baseline
- Provide EVM-based forecasts (EAC, ETC, VAC)

### Outputs

- Work performance information (cost variances, CPI, SPI)
- Cost forecasts (EAC, ETC)
- Change requests (when baseline changes are needed)
- Updates to project management plan and documents

---

## Cost Management — Practice Scenarios

### Scenario 1: Estimation Technique Selection

A PM is starting a new project that is very similar to one completed last year. The sponsor needs a quick cost estimate for the business case. Which technique should the PM use?

**Answer:** Analogous estimating — it's fast, inexpensive, and appropriate for early-phase estimates when a similar project exists for comparison.

### Scenario 2: Reserve Usage

The project encounters an identified risk (server hardware failure — it was in the risk register with a contingency plan). The PM needs $15,000 to implement the contingency plan. Does the PM need sponsor approval?

**Answer:** No. Contingency reserves are controlled by the PM and are specifically for identified risks. The PM can use them without sponsor approval (though they should document the usage and update the risk register).

### Scenario 3: Budget Overrun

The project has spent its entire contingency reserve and now faces an unidentified risk that requires $50,000 to address. What should the PM do?

**Answer:** Request access to management reserves from the sponsor. Management reserves are for unknown unknowns (unidentified risks). If approved, the cost baseline will be updated to include the additional funding.

### Scenario 4: Three-Point Calculation

A team member provides these estimates for a critical activity:

- Best case: 6 days
- Most likely: 10 days
- Worst case: 20 days

What is the PERT estimate and what range gives 95% confidence?

**Answer:**

```text
PERT = (6 + 4(10) + 20) / 6 = (6 + 40 + 20) / 6 = 66/6 = 11 days
σ = (20 - 6) / 6 = 14/6 = 2.33 days
95% range = 11 ± 2(2.33) = 11 ± 4.66 = 6.34 to 15.66 days
```

---

## Common Exam Traps — Cost Management

| Trap | Correct Answer |
|------|---------------|
| "Management reserve is part of the cost baseline" | It's OUTSIDE the baseline (above it) |
| "The PM can use management reserves freely" | Needs sponsor approval |
| "Analogous estimating is the most accurate" | It's the LEAST accurate (bottom-up is most accurate) |
| "PERT uses simple average" | PERT uses weighted average: (O + 4M + P) / 6 |
| "Contingency is for unknown unknowns" | Contingency = known unknowns; Management reserve = unknown unknowns |
| "The cost baseline never changes" | It can change through approved change requests (ICC) |
| "ROM estimate is ±10%" | ROM is -25% to +75%; Definitive is ±5-10% |
| "Sunk costs should influence future decisions" | Sunk costs are irrelevant — only future costs matter for decisions |

> 🎯 **Exam Tip:** **Sunk costs** are costs already spent that cannot be recovered. PMI says sunk costs should NOT influence future project decisions. If a question says "We've already spent $2M on this project" as justification for continuing — that's the sunk cost fallacy. Decisions should be based on future value, not past spending.

---

## Transition to EVM

Everything in this module sets up for Earned Value Management:

- **Cost estimates** → become the Budget at Completion (BAC)
- **Cost baseline** → becomes the Planned Value (PV) curve
- **Actual spending** → becomes Actual Cost (AC)
- **Work completed** → becomes Earned Value (EV)

The next module covers EVM in complete detail with all formulas and worked examples.
