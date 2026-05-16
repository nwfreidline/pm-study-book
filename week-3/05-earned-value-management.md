# Earned Value Management (EVM) — The Definitive Study Reference

## Why EVM Matters

Earned Value Management is the **single most testable quantitative topic** on the PMP exam. You will see 5-8 EVM questions, and they range from simple formula recall to complex scenario interpretation. EVM provides an objective, mathematical way to measure project performance — removing opinion and gut feeling from status reporting. Master this section and you'll pick up easy points that many test-takers miss.

---

## The Three Fundamental Measurements

Everything in EVM builds on three values measured at a specific point in time:

| Metric | Full Name | Question It Answers | Formula |
|--------|-----------|--------------------:|---------|
| **PV** | Planned Value | How much work SHOULD be done by now? | From the cost baseline (S-curve) |
| **EV** | Earned Value | How much work IS actually done? | % complete × BAC |
| **AC** | Actual Cost | How much have we SPENT? | Sum of actual expenditures |

### The Fourth Key Value

| Metric | Full Name | Question It Answers |
|--------|-----------|--------------------:|
| **BAC** | Budget at Completion | What is the TOTAL budget for the project? |

> 🎯 **Exam Tip:** Think of it this way:
>
> - **PV** = What you PLANNED to accomplish (in dollar terms)
> - **EV** = What you actually DID accomplish (in dollar terms)
> - **AC** = What you actually PAID for what you did
> - **BAC** = The total budget (finish line)

### Understanding EV Calculation

EV is the most misunderstood metric. It represents the **budgeted cost of work actually performed**.

**Example:** A project has BAC = $100,000. At the status date, 40% of the work is complete.

```text
EV = 40% × $100,000 = $40,000
```

This means: "The work we've completed was WORTH $40,000 according to our plan."

---

## Variance Metrics — Are We Ahead or Behind?

### Schedule Variance (SV)

```text
SV = EV - PV
```

| Result | Meaning |
|--------|---------|
| SV > 0 (positive) | Ahead of schedule |
| SV = 0 | On schedule |
| SV < 0 (negative) | Behind schedule |

### Cost Variance (CV)

```text
CV = EV - AC
```

| Result | Meaning |
|--------|---------|
| CV > 0 (positive) | Under budget |
| CV = 0 | On budget |
| CV < 0 (negative) | Over budget |

> 🎯 **Exam Tip:** Memory trick — **EV comes first** in both variance formulas. "EV minus the other one." For SV, subtract PV (planned). For CV, subtract AC (actual). Positive = good. Negative = bad.

---

## Performance Indices — How Efficient Are We?

### Schedule Performance Index (SPI)

```text
SPI = EV / PV
```

| Result | Meaning |
|--------|---------|
| SPI > 1.0 | Ahead of schedule (getting more done than planned) |
| SPI = 1.0 | On schedule |
| SPI < 1.0 | Behind schedule (getting less done than planned) |

### Cost Performance Index (CPI)

```text
CPI = EV / AC
```

| Result | Meaning |
|--------|---------|
| CPI > 1.0 | Under budget (getting more value per dollar) |
| CPI = 1.0 | On budget |
| CPI < 1.0 | Over budget (getting less value per dollar) |

> 🎯 **Exam Tip:** Memory trick — **EV is always on top** (numerator) for both indices. Divide by PV for schedule, divide by AC for cost. Greater than 1 = good. Less than 1 = bad.

### Interpreting CPI Values

- **CPI = 0.80** means: For every $1 spent, you're only getting $0.80 of value. You're 20% over budget.
- **CPI = 1.25** means: For every $1 spent, you're getting $1.25 of value. You're 25% under budget.

---

## Forecasting — Where Are We Headed?

### Estimate at Completion (EAC) — The Big Four Formulas

EAC answers: **"What will the TOTAL project cost when we're done?"**

There are four EAC formulas, and choosing the right one depends on project conditions:

#### Formula 1: Atypical Variance (One-Time Problem)

```text
EAC = AC + (BAC - EV)
```

**When to use:** The variance so far was a one-time event that won't repeat. Future work will proceed at the original planned rate.

**Example:** A vendor charged double for one delivery (won't happen again). The remaining work will cost as originally planned.

#### Formula 2: Typical Variance (CPI Will Continue)

```text
EAC = BAC / CPI
```

**When to use:** Current cost performance (CPI) is expected to continue for the rest of the project. This is the **most commonly used** formula and the **most commonly tested**.

**Example:** The project has been consistently running at CPI = 0.85. There's no reason to expect improvement.

> 🎯 **Exam Tip:** This is the DEFAULT formula when the exam doesn't specify conditions. If a question just asks "What is the EAC?" without additional context about future performance — use BAC/CPI.

#### Formula 3: Both CPI and SPI Will Continue

```text
EAC = AC + [(BAC - EV) / (CPI × SPI)]
```

**When to use:** Both cost AND schedule performance will continue at current rates. The schedule pressure is affecting costs (e.g., overtime to catch up).

**Example:** The project is behind schedule AND over budget, and both trends are expected to continue.

#### Formula 4: New Estimate (Re-estimate Remaining Work)

```text
EAC = AC + Bottom-up ETC
```

**When to use:** The original estimate is fundamentally flawed. The team needs to re-estimate all remaining work from scratch.

**Example:** Major scope change, technology pivot, or original estimates were completely wrong.

### EAC Decision Tree

```text
"What will the project cost at completion?"
         │
         ▼
Was the variance a one-time event?
    │           │
   YES          NO
    │           │
    ▼           ▼
EAC = AC +    Will current CPI continue?
(BAC - EV)      │           │
               YES          NO
                │           │
                ▼           ▼
          Is schedule     Is the original
          affecting       estimate valid?
          cost?             │        │
           │    │          YES       NO
          YES   NO          │        │
           │    │           ▼        ▼
           ▼    ▼      EAC = AC +  EAC = AC +
     EAC = AC + EAC =  (BAC-EV)/  Bottom-up
     (BAC-EV)/ BAC/CPI    CPI      ETC
     (CPI×SPI)
```

> 🎯 **Exam Tip:** The exam will give you clues about which formula to use:
>
> - "One-time variance" / "atypical" / "won't happen again" → Formula 1
> - "Current performance will continue" / "trend will persist" → Formula 2 (BAC/CPI)
> - "Schedule is impacting cost" / "both trends continue" → Formula 3
> - "Original estimate is no longer valid" / "re-estimate" → Formula 4

---

## Estimate to Complete (ETC)

ETC answers: **"How much MORE will it cost to finish?"**

```text
ETC = EAC - AC
```

Or, if re-estimating:

```text
ETC = (BAC - EV) / CPI    (if current performance continues)
```

---

## Variance at Completion (VAC)

VAC answers: **"How much over or under budget will we be at the end?"**

```text
VAC = BAC - EAC
```

| Result | Meaning |
|--------|---------|
| VAC > 0 (positive) | Expected to finish under budget |
| VAC = 0 | Expected to finish on budget |
| VAC < 0 (negative) | Expected to finish over budget |

---

## To-Complete Performance Index (TCPI)

TCPI answers: **"What CPI do we need for the REMAINING work to meet our target?"**

### TCPI Based on BAC (must meet original budget)

```text
TCPI = (BAC - EV) / (BAC - AC)
```

### TCPI Based on EAC (must meet revised estimate)

```text
TCPI = (BAC - EV) / (EAC - AC)
```

### Interpreting TCPI

| TCPI Value | Meaning |
|------------|---------|
| TCPI > 1.0 | Must be MORE efficient than planned to meet target (harder) |
| TCPI = 1.0 | Must maintain current efficiency |
| TCPI < 1.0 | Can be LESS efficient and still meet target (easier) |

> 🎯 **Exam Tip:** If TCPI > 1.0 (especially > 1.10), it's very difficult to achieve. A TCPI of 1.25 means you need to be 25% more efficient than planned for ALL remaining work — which is rarely achievable. This is a signal that the project needs a revised EAC or scope reduction.

---

## Complete Formula Reference Card

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| **SV** | EV - PV | + ahead, - behind |
| **CV** | EV - AC | + under, - over |
| **SPI** | EV / PV | >1 ahead, <1 behind |
| **CPI** | EV / AC | >1 under, <1 over |
| **EAC₁** | AC + (BAC - EV) | Atypical variance |
| **EAC₂** | BAC / CPI | Typical variance (most common) |
| **EAC₃** | AC + (BAC - EV)/(CPI × SPI) | Both indices continue |
| **EAC₄** | AC + Bottom-up ETC | Re-estimate remaining |
| **ETC** | EAC - AC | Cost to finish |
| **VAC** | BAC - EAC | + under at end, - over at end |
| **TCPI(BAC)** | (BAC - EV)/(BAC - AC) | Efficiency needed to meet BAC |
| **TCPI(EAC)** | (BAC - EV)/(EAC - AC) | Efficiency needed to meet EAC |

---

## Worked Example — Complete EVM Analysis

### Project Data

- **BAC** = $500,000
- **Planned completion** = 10 months
- **Current status** = End of Month 6
- **PV** (planned through Month 6) = $300,000
- **EV** (work actually completed) = $270,000
- **AC** (actual cost spent) = $330,000

### Step 1: Calculate Variances

```text
SV = EV - PV = $270,000 - $300,000 = -$30,000 (behind schedule)
CV = EV - AC = $270,000 - $330,000 = -$60,000 (over budget)
```

### Step 2: Calculate Indices

```text
SPI = EV / PV = $270,000 / $300,000 = 0.90 (10% behind schedule)
CPI = EV / AC = $270,000 / $330,000 = 0.818 (18.2% over budget)
```

### Step 3: Forecast (assuming current CPI continues)

```text
EAC = BAC / CPI = $500,000 / 0.818 = $611,247
ETC = EAC - AC = $611,247 - $330,000 = $281,247
VAC = BAC - EAC = $500,000 - $611,247 = -$111,247 (will be $111K over budget)
```

### Step 4: Calculate TCPI

```text
TCPI(BAC) = (BAC - EV) / (BAC - AC)
TCPI(BAC) = ($500,000 - $270,000) / ($500,000 - $330,000)
TCPI(BAC) = $230,000 / $170,000
TCPI(BAC) = 1.35
```

### Step 5: Interpret Results

| Metric | Value | Interpretation |
|--------|-------|----------------|
| SV | -$30,000 | 10% behind schedule |
| CV | -$60,000 | Over budget by $60K |
| SPI | 0.90 | Getting 90¢ of work for every $1 of time |
| CPI | 0.818 | Getting 82¢ of value for every $1 spent |
| EAC | $611,247 | Project will likely cost $611K (not $500K) |
| VAC | -$111,247 | Will exceed budget by ~$111K |
| TCPI | 1.35 | Need 35% improvement in efficiency — very unlikely |

**Recommendation:** With a TCPI of 1.35, meeting the original budget is extremely unlikely. The PM should:

1. Report the forecast to the sponsor immediately
2. Request additional funding (management reserve) or scope reduction
3. Investigate root causes of poor CPI
4. Consider crashing or fast-tracking to address schedule delay

---

## Worked Example 2 — Choosing the Right EAC Formula

### Scenario A: One-Time Problem

A project (BAC = $200,000) is at the midpoint. A vendor accidentally double-billed for $20,000 (already corrected, won't recur). Current values: PV = $100,000, EV = $100,000, AC = $120,000.

```text
EAC = AC + (BAC - EV) = $120,000 + ($200,000 - $100,000) = $220,000
```

The remaining $100,000 of work will cost $100,000 as planned (the $20K overcharge was one-time).

### Scenario B: Persistent Trend

Same project, but the overrun is due to consistently underestimating task complexity. CPI = 0.833.

```text
EAC = BAC / CPI = $200,000 / 0.833 = $240,096
```

The trend will continue, so the total cost will be higher.

### Scenario C: Schedule Pressure Affecting Cost

The project is behind schedule (SPI = 0.85) AND over budget (CPI = 0.833), and the team is working overtime to catch up (schedule pressure is driving costs up).

```text
EAC = AC + (BAC - EV) / (CPI × SPI)
EAC = $120,000 + ($200,000 - $100,000) / (0.833 × 0.85)
EAC = $120,000 + $100,000 / 0.708
EAC = $120,000 + $141,243
EAC = $261,243
```

---

## Worked Example 3 — TCPI Interpretation

**Project:** BAC = $400,000, EV = $200,000, AC = $250,000

```text
CPI = $200,000 / $250,000 = 0.80 (20% over budget)

TCPI(BAC) = (BAC - EV) / (BAC - AC)
TCPI(BAC) = ($400,000 - $200,000) / ($400,000 - $250,000)
TCPI(BAC) = $200,000 / $150,000
TCPI(BAC) = 1.33
```

**Interpretation:** To finish on the original $400K budget, the team needs a CPI of 1.33 for all remaining work. Given their current CPI is 0.80, this requires a 66% improvement in cost efficiency — virtually impossible.

**New EAC approved:** $480,000

```text
TCPI(EAC) = (BAC - EV) / (EAC - AC)
TCPI(EAC) = ($400,000 - $200,000) / ($480,000 - $250,000)
TCPI(EAC) = $200,000 / $230,000
TCPI(EAC) = 0.87
```

**Interpretation:** To finish at the revised $480K, the team needs a CPI of 0.87 — which is actually BETTER than their current 0.80 but more achievable than 1.33. They still need to improve, but it's realistic.

---

## EVM Graphical Interpretation

```text
Cost ($)
  │
  │         ╱ AC (Actual Cost) — spending faster than planned
  │        ╱
  │       ╱    ╱ PV (Planned Value) — the baseline S-curve
  │      ╱    ╱
  │     ╱    ╱
  │    ╱    ╱  ╱ EV (Earned Value) — work accomplished
  │   ╱    ╱  ╱
  │  ╱    ╱  ╱
  │ ╱    ╱  ╱
  │╱    ╱  ╱
  ├────╱──╱──────────────────────── Time
  │   ╱  ╱
  │      │
  │  CV  │← SV (in time units, shown as gap between EV and PV)
  │(gap between EV and AC)
```

When AC is above EV: **Over budget** (spending more than the value of work done)

When EV is below PV: **Behind schedule** (less work done than planned)

---

## Common EVM Exam Traps

| Trap | Correct Answer |
|------|---------------|
| "SV is measured in time units" | SV is in DOLLARS (or whatever currency). It's a cost-based schedule indicator |
| "CPI can improve significantly late in the project" | CPI rarely improves — it's the most stable EVM metric |
| "Use BAC/CPI when variance is atypical" | BAC/CPI assumes the trend continues. For atypical, use AC + (BAC-EV) |
| "TCPI > 1 means the project is doing well" | TCPI > 1 means you need to IMPROVE — it's harder, not better |
| "EV can exceed BAC" | EV cannot exceed BAC — you can't earn more than 100% of the budget |
| "Negative SV at project end means the project was late" | At project completion, SV always = 0 and SPI always = 1.0 (all planned work is done) |
| "EAC = BAC/CPI is always correct" | Only when current CPI is expected to continue |

> 🎯 **Exam Tip:** The most important thing to remember: **CPI is the most reliable forecasting metric**. Research shows that once a project reaches 20% completion, the CPI rarely changes by more than 10%. If your CPI is 0.80 at the 20% mark, plan for it to stay around 0.80. This is why BAC/CPI is the default EAC formula.

---

## EVM Quick-Reference Decision Guide

**"Is the project on track?"**

- Check SPI and CPI
- Both > 1.0 = project is healthy
- Either < 1.0 = investigate

**"How much will it cost?"**

- Default: EAC = BAC / CPI
- One-time issue: EAC = AC + (BAC - EV)
- Schedule affecting cost: EAC = AC + (BAC - EV) / (CPI × SPI)

**"Can we still meet the budget?"**

- Calculate TCPI(BAC)
- If TCPI > 1.10, meeting BAC is very unlikely
- Request revised budget or reduce scope

**"How much more do we need to spend?"**

- ETC = EAC - AC

**"What's the final budget impact?"**

- VAC = BAC - EAC
- Negative = over budget at completion

---

## Practice Problems

### Problem 1

BAC = $100,000. At status date: PV = $50,000, EV = $45,000, AC = $55,000. Current performance is expected to continue. Calculate all metrics.

**Solution:**

```text
SV = $45,000 - $50,000 = -$5,000 (behind schedule)
CV = $45,000 - $55,000 = -$10,000 (over budget)
SPI = $45,000 / $50,000 = 0.90
CPI = $45,000 / $55,000 = 0.818
EAC = $100,000 / 0.818 = $122,249
ETC = $122,249 - $55,000 = $67,249
VAC = $100,000 - $122,249 = -$22,249
TCPI(BAC) = ($100,000 - $45,000) / ($100,000 - $55,000) = $55,000 / $45,000 = 1.22
```

### Problem 2

BAC = $800,000. Project is 60% complete. AC = $520,000. A one-time equipment failure cost an extra $40,000 (won't recur). Calculate EAC.

**Solution:**

```text
EV = 60% × $800,000 = $480,000
Since the variance is atypical (one-time):
EAC = AC + (BAC - EV) = $520,000 + ($800,000 - $480,000) = $520,000 + $320,000 = $840,000
```

### Problem 3

BAC = $300,000. CPI = 0.75, SPI = 0.80. AC = $160,000, EV = $120,000. Schedule pressure is causing overtime costs. Calculate EAC.

**Solution:**

```text
Since both CPI and SPI are affecting costs:
EAC = AC + (BAC - EV) / (CPI × SPI)
EAC = $160,000 + ($300,000 - $120,000) / (0.75 × 0.80)
EAC = $160,000 + $180,000 / 0.60
EAC = $160,000 + $300,000
EAC = $460,000
```
