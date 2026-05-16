# Schedule Management — When Will It Be Done?

## Why Schedule Management Matters

Schedule Management determines the project timeline — when work starts, when it finishes, and what drives the duration. This knowledge area produces the most **calculation-heavy questions** on the PMP exam (alongside EVM). You'll need to calculate critical paths, float, and apply compression techniques. Expect 8-12 questions on schedule topics, with at least 2-3 requiring actual calculations.

---

## The 6 Schedule Management Processes

| Process | Process Group | Key Output |
|---------|--------------|------------|
| Plan Schedule Management | Planning | Schedule Management Plan |
| Define Activities | Planning | Activity List, Activity Attributes, Milestone List |
| Sequence Activities | Planning | Project Schedule Network Diagram |
| Estimate Activity Durations | Planning | Duration Estimates |
| Develop Schedule | Planning | Project Schedule, Schedule Baseline |
| Control Schedule | Monitoring & Controlling | Schedule Forecasts, Change Requests |

---

## Activity Sequencing and Dependencies

### Dependency Types (Logical Relationships)

| Type | Abbreviation | Meaning | Example | Frequency |
|------|-------------|---------|---------|-----------|
| **Finish-to-Start** | FS | B can't start until A finishes | Pour concrete → Wait to cure → Build walls | Most common (~90%) |
| **Start-to-Start** | SS | B can't start until A starts | Start writing code → Start writing tests | Common for parallel work |
| **Finish-to-Finish** | FF | B can't finish until A finishes | Finish coding → Finish documentation | Less common |
| **Start-to-Finish** | SF | B can't finish until A starts | New system starts → Old system finishes | Rare (just-in-time scenarios) |

> 🎯 **Exam Tip:** FS is the default and most common relationship. SF is the rarest — it's used in just-in-time scenarios (e.g., the night shift can't end until the day shift starts). If you see SF on the exam, read very carefully — it's often a distractor.

### Dependency Categories

| Category | Description | Can Be Changed? | Example |
|----------|-------------|-----------------|---------|
| **Mandatory (hard logic)** | Inherent in the nature of the work | No | Foundation before walls |
| **Discretionary (soft logic/preferred logic)** | Based on best practices or preference | Yes | Design review before coding (could skip) |
| **External** | Involves relationship to non-project activities | Usually no | Government permit approval |
| **Internal** | Relationship between project activities | Usually yes | Internal review process |

> 🎯 **Exam Tip:** When the exam asks about schedule compression, discretionary dependencies are the first candidates for removal (fast-tracking). You can't remove mandatory dependencies — they're physically or legally required.

---

## Leads and Lags

### Lead (Acceleration)

A lead allows the successor activity to **start before** the predecessor finishes. It's a negative value applied to the dependency.

**Example:** FS with 5-day lead = successor starts 5 days before predecessor finishes

```text
Activity A: |████████████████|
Activity B:            |████████████████|
                  ←5 days overlap (lead)→
```

### Lag (Delay)

A lag requires a **waiting period** between activities. It's a positive value applied to the dependency.

**Example:** FS with 3-day lag = successor starts 3 days after predecessor finishes

```text
Activity A: |████████████████|
                              ←3 day wait (lag)→
Activity B:                                      |████████████████|
```

> 🎯 **Exam Tip:** Lead = overlap (speeds things up). Lag = waiting (slows things down). A common exam question: "The concrete must cure for 3 days before framing can begin." This is a lag on an FS relationship.

---

## Critical Path Method (CPM)

### What Is the Critical Path?

The critical path is the **longest path through the network diagram**. It determines the **minimum project duration**. Activities on the critical path have **zero total float** — any delay to a critical path activity delays the entire project.

### Key Concepts

- A project can have **multiple critical paths** (if two paths tie for longest)
- Multiple critical paths = **higher risk** (more activities that can delay the project)
- The critical path can **change** during execution as activities are completed early or late
- **Near-critical paths** (paths with very small float) should also be monitored

### Forward Pass and Backward Pass

#### Forward Pass (calculates Early Start and Early Finish)

- Move left to right through the network
- **ES (Early Start)** = latest EF of all predecessors (for FS relationships)
- **EF (Early Finish)** = ES + Duration

#### Backward Pass (calculates Late Start and Late Finish)

- Move right to left through the network
- **LF (Late Finish)** = earliest LS of all successors
- **LS (Late Start)** = LF - Duration

#### Float/Slack Calculation

- **Total Float** = LS - ES = LF - EF (how much an activity can slip without delaying the project)
- **Free Float** = ES(successor) - EF(current activity) (how much an activity can slip without delaying the NEXT activity)

### Worked Example 1: Simple Network

```text
Network Diagram:
    A(3) → B(5) → D(4)
    A(3) → C(2) → D(4)

Activities and Durations:
- A = 3 days
- B = 5 days
- C = 2 days
- D = 4 days (depends on both B and C)
```

**Forward Pass:**

| Activity | Duration | ES | EF |
|----------|----------|----|----|
| A | 3 | 0 | 3 |
| B | 5 | 3 | 8 |
| C | 2 | 3 | 5 |
| D | 4 | 8 | 12 |

Note: D's ES = max(EF of B, EF of C) = max(8, 5) = 8

**Backward Pass:**

| Activity | Duration | LS | LF |
|----------|----------|----|----|
| D | 4 | 8 | 12 |
| B | 5 | 3 | 8 |
| C | 2 | 6 | 8 |
| A | 3 | 0 | 3 |

Note: A's LF = min(LS of B, LS of C) = min(3, 6) = 3

**Float Calculation:**

| Activity | Total Float (LS-ES) | On Critical Path? |
|----------|---------------------|-------------------|
| A | 0 - 0 = 0 | Yes ✓ |
| B | 3 - 3 = 0 | Yes ✓ |
| C | 6 - 3 = 3 | No |
| D | 8 - 8 = 0 | Yes ✓ |

**Critical Path: A → B → D = 12 days**

Activity C has 3 days of float — it can slip up to 3 days without delaying the project.

### Worked Example 2: More Complex Network

```text
Network Diagram:
    Start → A(4) → C(3) → E(5) → End
    Start → A(4) → D(6) → E(5) → End
    Start → B(7) → D(6) → E(5) → End
    Start → B(7) → F(2) → End
```

**Forward Pass:**

| Activity | Duration | ES | EF |
|----------|----------|----|----|
| A | 4 | 0 | 4 |
| B | 7 | 0 | 7 |
| C | 3 | 4 | 7 |
| D | 6 | 7 | 13 |
| E | 5 | 13 | 18 |
| F | 2 | 7 | 9 |

Note: D's ES = max(EF of A, EF of B) = max(4, 7) = 7

**Project Duration = 18 days**

**Paths and Durations:**

- A → C → E = 4 + 3 + 5 = 12 days
- A → D → E = 4 + 6 + 5 = 15 days
- B → D → E = 7 + 6 + 5 = **18 days** ← Critical Path
- B → F = 7 + 2 = 9 days

**Critical Path: B → D → E = 18 days**

**Float for non-critical activities:**

- A: Total Float = 3 days (path A→D→E is 15, critical is 18, so 18-15=3... but A feeds into D which is on CP via B, so we need the backward pass)
- C: Total Float = 6 days (path A→C→E is 12, critical is 18)
- F: Total Float = 9 days (path B→F is 9, critical is 18)

> 🎯 **Exam Tip:** To quickly find the critical path, calculate the duration of ALL paths through the network. The longest path is the critical path. For float, subtract the path duration from the critical path duration (this gives total float for activities unique to that path).

---

## Schedule Compression

When the project schedule needs to be shortened without reducing scope.

### Crashing

**Adding resources** to critical path activities to reduce their duration. This increases cost.

| Aspect | Details |
|--------|---------|
| **What** | Add resources (people, equipment, overtime) |
| **Effect** | Reduces duration, increases cost |
| **Where** | Only on critical path activities |
| **Which activities** | Those with the lowest crash cost per unit of time saved |
| **Risk** | Diminishing returns, communication overhead, quality issues |
| **Limitation** | Not all activities can be crashed (some are effort-driven, not resource-driven) |

**Crashing Decision Process:**

1. Identify the critical path
2. Find activities on the CP that CAN be crashed
3. Calculate crash cost per day for each crashable activity
4. Crash the activity with the **lowest cost per day** first
5. Recalculate the critical path (it may change!)
6. Repeat until desired duration is achieved or no more crashing is possible

**Crash Cost Formula:**

```text
Crash Cost per Day = (Crash Cost - Normal Cost) / (Normal Duration - Crash Duration)
```

**Worked Example:**

| Activity | Normal Duration | Crash Duration | Normal Cost | Crash Cost | Crash Cost/Day |
|----------|----------------|----------------|-------------|------------|----------------|
| A (CP) | 10 days | 8 days | $5,000 | $7,000 | $1,000/day |
| B (CP) | 8 days | 6 days | $4,000 | $7,000 | $1,500/day |
| C (CP) | 6 days | 5 days | $3,000 | $4,500 | $1,500/day |

To shorten the schedule by 2 days at minimum cost:

- Crash Activity A first (lowest cost/day at $1,000) — save 2 days for $2,000
- Total additional cost: $2,000

### Fast-Tracking

**Performing activities in parallel** that were originally planned in sequence. This increases risk.

| Aspect | Details |
|--------|---------|
| **What** | Overlap sequential activities (do them in parallel) |
| **Effect** | Reduces duration, increases risk |
| **Where** | Only on critical path activities |
| **Which activities** | Those with discretionary (soft) dependencies |
| **Risk** | Rework, quality issues, resource conflicts |
| **Limitation** | Can't fast-track mandatory dependencies |

**Example:** Start coding before design is 100% complete (overlap design and coding phases).

### Crashing vs. Fast-Tracking Comparison

| Aspect | Crashing | Fast-Tracking |
|--------|----------|---------------|
| **Primary trade-off** | Increases COST | Increases RISK |
| **Mechanism** | Add resources | Overlap activities |
| **Dependencies affected** | None (keeps sequence) | Removes/relaxes discretionary dependencies |
| **When to use** | Budget available, need certainty | Budget tight, can accept rework risk |
| **PMI preference** | Try fast-tracking first (it's free) | — |

> 🎯 **Exam Tip:** PMI generally prefers fast-tracking first because it doesn't cost money. But if the question mentions "without increasing risk" — the answer is crashing. If it mentions "without increasing cost" — the answer is fast-tracking. If it says "without increasing risk OR cost" — you can't compress the schedule (reduce scope instead).

---

## Resource Leveling vs. Resource Smoothing

### Resource Leveling

**Adjusting the schedule** to resolve resource over-allocation. Activities are delayed until resources are available.

| Aspect | Details |
|--------|---------|
| **Purpose** | Resolve resource conflicts/over-allocation |
| **Effect on schedule** | Often EXTENDS the project duration |
| **Effect on critical path** | Can change the critical path |
| **When used** | Resources are shared, limited, or over-allocated |
| **Trade-off** | Longer schedule for feasible resource usage |

**Example:** Two activities both need the same developer during the same week. One must be delayed until the developer is free.

### Resource Smoothing

**Adjusting activities within their float** to reduce resource peaks without extending the project.

| Aspect | Details |
|--------|---------|
| **Purpose** | Even out resource usage (reduce peaks and valleys) |
| **Effect on schedule** | Does NOT extend project duration |
| **Effect on critical path** | Does NOT change (only uses available float) |
| **When used** | Want more even resource utilization |
| **Limitation** | Can only adjust non-critical activities (those with float) |

> 🎯 **Exam Tip:** Key distinction — Resource leveling CAN extend the schedule. Resource smoothing CANNOT extend the schedule (it only uses available float). If the question says "without extending the project" — the answer is resource smoothing.

---

## Network Diagram Types

### Precedence Diagramming Method (PDM) — Activity on Node (AON)

- Activities are represented as **nodes (boxes)**
- Arrows represent dependencies
- This is the **standard method** used on the PMP exam
- Supports all four relationship types (FS, SS, FF, SF)

```text
[A] ──→ [B] ──→ [D]
 │                ↑
 └──→ [C] ──────┘
```

### Arrow Diagramming Method (ADM) — Activity on Arrow (AOA)

- Activities are represented as **arrows**
- Nodes represent events (start/end points)
- Only supports FS relationships
- May use "dummy activities" (dashed arrows) to show dependencies
- **Rarely used in practice** but may appear on the exam as a concept

> 🎯 **Exam Tip:** The PMP exam uses PDM (Activity on Node). If a question asks which method supports all four dependency types — it's PDM. ADM only supports Finish-to-Start.

---

## Schedule Management — Practice Scenarios

### Scenario 1: Critical Path Change

The project has two paths: A→B→C (15 days) and A→D→E (14 days). Activity D is delayed by 3 days. What happens?

**Answer:** Path A→D→E becomes 17 days, making it the new critical path. The project duration increases from 15 to 17 days. The critical path has shifted.

### Scenario 2: Compression Decision

The project is 4 weeks behind schedule. The sponsor says "Get back on track but don't spend more money." What technique should the PM use?

**Answer:** Fast-tracking — overlap activities on the critical path that have discretionary dependencies. This doesn't cost money but increases risk of rework. The PM should communicate the increased risk to the sponsor.

### Scenario 3: Resource Conflict

Two critical path activities both require the same specialist during week 5. What should the PM do?

**Answer:** Since both are on the critical path, neither can be delayed without extending the project. Options: (1) Crash one activity by adding another resource, (2) Find an alternative specialist, (3) Split the specialist's time (may extend both activities), (4) Escalate to get additional resources. Resource leveling would extend the schedule here.

### Scenario 4: Float Interpretation

Activity X has 5 days of total float and 0 days of free float. What does this mean?

**Answer:** Activity X can slip up to 5 days without delaying the project end date (total float = 5). However, any slip will immediately delay the next successor activity (free float = 0). The float is "shared" with downstream activities on the same path.

---

## Common Exam Traps — Schedule Management

| Trap | Correct Answer |
|------|---------------|
| "The critical path is the shortest path" | It's the LONGEST path (determines minimum duration) |
| "Activities with float are not important" | Near-critical activities need monitoring too |
| "Crashing always works" | Some activities can't be crashed (not resource-driven) |
| "Fast-tracking has no cost" | It may cause rework, which has cost implications |
| "Resource leveling shortens the schedule" | It typically EXTENDS the schedule |
| "SF means Start-to-Finish of the same activity" | SF is a dependency between TWO activities |
| "Adding resources always reduces duration" | Brooks's Law: adding people to a late project makes it later |
| "The critical path never changes" | It can change as activities complete early/late |
