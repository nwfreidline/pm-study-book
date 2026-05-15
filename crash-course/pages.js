// PMP Crash Course — Comprehensive Final Review
// All content for full PMP exam preparation
const defined_pages = [

// ============================================================
// SECTION 1: EXAM OVERVIEW & STRATEGY
// ============================================================
{
chapter: "Exam Overview & Strategy",
title: "Exam Blueprint",
html: `
<h1>PMP Exam Blueprint</h1>
<p>The PMP exam tests your ability to <strong>apply</strong> project management knowledge through scenario-based questions. ~50% involve agile/hybrid approaches.</p>
<h2>Three Exam Domains</h2>
<table><tr><th>Domain</th><th>Weight</th><th>Tasks</th><th>Focus</th></tr>
<tr><td><strong>People</strong></td><td>42%</td><td>14 tasks</td><td>Leadership, team dynamics, conflict, stakeholders</td></tr>
<tr><td><strong>Process</strong></td><td>50%</td><td>17 tasks</td><td>Planning, execution, monitoring, scope, schedule, cost, quality, risk</td></tr>
<tr><td><strong>Business Environment</strong></td><td>8%</td><td>4 tasks</td><td>Benefits realization, compliance, organizational change</td></tr>
</table>
<h2>Format</h2>
<table><tr><th>Detail</th><th>Value</th></tr>
<tr><td>Total Questions</td><td>180 (175 scored, 5 pretest)</td></tr>
<tr><td>Time</td><td>230 minutes (3h 50m)</td></tr>
<tr><td>Breaks</td><td>Two 10-min breaks (after Q60 and Q120)</td></tr>
<tr><td>Types</td><td>Multiple choice, multiple response, matching, hotspot, fill-in-blank</td></tr>
<tr><td>Pace</td><td>~76 seconds per question</td></tr>
</table>
<div class="key-point"><strong>Scoring:</strong> No fixed pass rate. Rated per domain as Above Target / Target / Below Target / Needs Improvement. Aim for AT or T in all three. Community estimate: ~60-65% correct to pass.</div>
`
},
{
chapter: "Exam Overview & Strategy",
title: "The PMI Mindset",
html: `
<h1>The PMI Mindset — Decision Framework</h1>
<p>The exam tests what PMI says you <strong>SHOULD</strong> do, not what's fastest or most practical in real life.</p>
<div class="diagram"><div class="diagram-title">🧠 PMI Decision Tree (Use on EVERY question)</div>
<div class="flow-row"><div class="flow-box highlight">1. Ethical issue?</div><div class="flow-arrow">→</div><div class="flow-box">Report / Disclose / Refuse</div></div>
<div class="flow-row"><div class="flow-box highlight">2. Process to follow?</div><div class="flow-arrow">→</div><div class="flow-box">Follow it (change control, risk mgmt)</div></div>
<div class="flow-row"><div class="flow-box highlight">3. Need assessment?</div><div class="flow-arrow">→</div><div class="flow-box">Analyze before acting</div></div>
<div class="flow-row"><div class="flow-box highlight">4. Team involved?</div><div class="flow-arrow">→</div><div class="flow-box">Facilitate / Empower / Servant lead</div></div>
<div class="flow-row"><div class="flow-box highlight">5. Stakeholders?</div><div class="flow-arrow">→</div><div class="flow-box">Communicate / Engage / Manage expectations</div></div>
<div class="flow-row"><div class="flow-box highlight">6. Remaining?</div><div class="flow-arrow">→</div><div class="flow-box">Choose maximum value</div></div>
</div>
<h2>Golden Rules</h2>
<table><tr><th>Rule</th><th>What It Means</th></tr>
<tr><td>Servant Leadership default</td><td>Facilitate, don't dictate. Empower, don't command.</td></tr>
<tr><td>Always follow process</td><td>Never skip change control, even for "small" changes</td></tr>
<tr><td>Assess before acting</td><td>Root cause analysis before solutions</td></tr>
<tr><td>Never gold plate</td><td>Don't add unrequested features</td></tr>
<tr><td>Communicate proactively</td><td>Bad news early, tailor to audience</td></tr>
<tr><td>Ethics first</td><td>Responsibility, Respect, Fairness, Honesty</td></tr>
<tr><td>Charter is sacred</td><td>No charter = no project = no PM authority</td></tr>
<tr><td>Risk is proactive</td><td>Plan before issues occur</td></tr>
<tr><td>Document everything</td><td>Lessons learned, registers, logs</td></tr>
</table>
<h2>Common Traps</h2>
<table><tr><th>Trap</th><th>Correct Approach</th></tr>
<tr><td>"Real world" answer</td><td>Choose PMI's ideal answer</td></tr>
<tr><td>"Act immediately"</td><td>Assess first, then act</td></tr>
<tr><td>"Use authority"</td><td>Facilitate and collaborate</td></tr>
<tr><td>"Skip the process"</td><td>Always follow formal processes</td></tr>
<tr><td>Multiple correct answers</td><td>Pick MOST correct (assess → communicate → process → servant lead)</td></tr>
</table>
`
},

// ============================================================
// SECTION 2: THE 12 PRINCIPLES (PMBOK 7)
// ============================================================
{
chapter: "12 Principles (PMBOK 7)",
title: "All 12 Principles",
html: `
<h1>The 12 Principles of Project Management</h1>
<p>PMBOK 7 replaced 49 processes with 12 guiding principles. These shape HOW you think and act — not step-by-step instructions.</p>
<table><tr><th>#</th><th>Principle</th><th>Core Idea</th><th>Exam Behavior</th></tr>
<tr><td>1</td><td><strong>Stewardship</strong></td><td>Be a responsible custodian</td><td>Ethical, transparent, honest reporting</td></tr>
<tr><td>2</td><td><strong>Team</strong></td><td>Collaborative environment</td><td>Psychological safety, trust, self-organizing</td></tr>
<tr><td>3</td><td><strong>Stakeholders</strong></td><td>Engage effectively</td><td>Early ID, continuous engagement, manage expectations</td></tr>
<tr><td>4</td><td><strong>Value</strong></td><td>Outcomes over outputs</td><td>Business results, incremental delivery, MVP</td></tr>
<tr><td>5</td><td><strong>Systems Thinking</strong></td><td>See the bigger picture</td><td>Consider ripple effects of every decision</td></tr>
<tr><td>6</td><td><strong>Leadership</strong></td><td>Influence, not authority</td><td>Servant leadership, adapt style to context</td></tr>
<tr><td>7</td><td><strong>Tailoring</strong></td><td>Adapt to context</td><td>No one-size-fits-all; scale to project needs</td></tr>
<tr><td>8</td><td><strong>Quality</strong></td><td>Build it in</td><td>Prevention over inspection, never gold plate</td></tr>
<tr><td>9</td><td><strong>Complexity</strong></td><td>Navigate proactively</td><td>Break down, iterate, use adaptive approaches</td></tr>
<tr><td>10</td><td><strong>Risk</strong></td><td>Threats AND opportunities</td><td>Proactive identification and response planning</td></tr>
<tr><td>11</td><td><strong>Adaptability</strong></td><td>Flex and recover</td><td>Embrace change, build resilience</td></tr>
<tr><td>12</td><td><strong>Change</strong></td><td>Enable transformation</td><td>Projects ARE change; help stakeholders adopt</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 How Principles Are Tested</div>You won't be asked "List the 12 principles." You'll get a scenario and must choose the answer that best reflects these principles. The principles inform the <em>spirit</em> of every correct answer.</div>
`
},

// ============================================================
// SECTION 3: PEOPLE DOMAIN (42%)
// ============================================================
{
chapter: "People Domain (42%)",
title: "Conflict Management",
html: `
<h1>Conflict Management</h1>
<p>Conflict is natural and can be beneficial. PMI wants you to address it directly and collaboratively.</p>
<h2>Thomas-Kilmann Conflict Modes</h2>
<div class="diagram"><div class="diagram-title">Conflict Resolution Approaches (Assertiveness vs Cooperativeness)</div>
<table><tr><th>Mode</th><th>Style</th><th>When to Use</th><th>PMI Preference</th></tr>
<tr><td><strong>Collaborate/Problem Solve</strong></td><td>Win-Win</td><td>Important issues, time available</td><td>⭐ #1 PREFERRED</td></tr>
<tr><td><strong>Compromise/Reconcile</strong></td><td>Lose-Lose (partial)</td><td>Equal power, temporary solution</td><td>#2</td></tr>
<tr><td><strong>Smooth/Accommodate</strong></td><td>Yield</td><td>Preserve relationships, low stakes</td><td>#3</td></tr>
<tr><td><strong>Force/Direct</strong></td><td>Win-Lose</td><td>Emergencies, safety issues</td><td>#4 (last resort)</td></tr>
<tr><td><strong>Withdraw/Avoid</strong></td><td>Retreat</td><td>Cooling off, trivial issues</td><td>#5 (worst — never permanent)</td></tr>
</table>
</div>
<div class="key-point"><strong>PMI's #1 choice is ALWAYS Collaborate/Problem Solve</strong> — find the root cause, get both parties to work toward a win-win. Only use Force in emergencies.</div>
<h2>Sources of Conflict (in order of frequency)</h2>
<ol>
<li><strong>Schedules</strong> — most common source</li>
<li><strong>Priorities</strong></li>
<li><strong>Resources</strong></li>
<li>Technical opinions</li>
<li>Administrative procedures</li>
<li>Cost</li>
<li>Personality</li>
</ol>
<h2>PM's Role in Conflict</h2>
<ul>
<li>Address conflict <strong>early and privately</strong></li>
<li>Focus on the <strong>issue, not the person</strong></li>
<li>Use <strong>active listening</strong></li>
<li>Facilitate discussion — don't impose solutions</li>
<li>Escalate only when beyond your authority</li>
</ul>
`
},
{
chapter: "People Domain (42%)",
title: "Motivation Theories",
html: `
<h1>Motivation Theories</h1>
<p>Know these models — the exam tests which theory applies to a given scenario.</p>
<h2>Maslow's Hierarchy of Needs</h2>
<div class="diagram"><div class="diagram-title">Maslow's Pyramid (bottom to top)</div>
<table><tr><th>Level</th><th>Need</th><th>Project Example</th></tr>
<tr><td>5 (top)</td><td><strong>Self-Actualization</strong></td><td>Challenging work, growth opportunities</td></tr>
<tr><td>4</td><td><strong>Esteem</strong></td><td>Recognition, promotions, respect</td></tr>
<tr><td>3</td><td><strong>Social/Belonging</strong></td><td>Team bonding, inclusion, collaboration</td></tr>
<tr><td>2</td><td><strong>Safety</strong></td><td>Job security, safe environment, benefits</td></tr>
<tr><td>1 (base)</td><td><strong>Physiological</strong></td><td>Salary, basic working conditions</td></tr>
</table>
<p><em>Lower needs must be met before higher needs motivate.</em></p>
</div>
<h2>Herzberg's Two-Factor Theory</h2>
<table><tr><th>Hygiene Factors (prevent dissatisfaction)</th><th>Motivators (create satisfaction)</th></tr>
<tr><td>Salary, job security, working conditions</td><td>Achievement, recognition, responsibility</td></tr>
<tr><td>Company policies, supervision</td><td>Growth, meaningful work, advancement</td></tr>
<tr><td><em>Absence causes unhappiness</em></td><td><em>Presence creates motivation</em></td></tr>
</table>
<div class="key-point"><strong>Key insight:</strong> Fixing hygiene factors (like pay) removes dissatisfaction but doesn't motivate. True motivation comes from the work itself.</div>
<h2>McGregor's Theory X vs Theory Y</h2>
<table><tr><th>Theory X (Pessimistic)</th><th>Theory Y (Optimistic) ⭐ PMI prefers</th></tr>
<tr><td>People dislike work, avoid responsibility</td><td>People are self-motivated, seek responsibility</td></tr>
<tr><td>Must be directed and controlled</td><td>Can be trusted and empowered</td></tr>
<tr><td>Micromanagement style</td><td>Servant leadership style</td></tr>
</table>
<h2>McClelland's Acquired Needs</h2>
<table><tr><th>Need</th><th>Driven By</th><th>Best Role</th></tr>
<tr><td><strong>Achievement (nAch)</strong></td><td>Challenging goals, feedback</td><td>Individual contributor, technical lead</td></tr>
<tr><td><strong>Affiliation (nAff)</strong></td><td>Relationships, belonging</td><td>Team player, facilitator</td></tr>
<tr><td><strong>Power (nPow)</strong></td><td>Influence, control</td><td>Manager, leader</td></tr>
</table>
<h2>Other Models</h2>
<table><tr><th>Theory</th><th>Key Idea</th></tr>
<tr><td><strong>Vroom's Expectancy</strong></td><td>Motivation = Expectancy × Instrumentality × Valence (effort → performance → reward)</td></tr>
<tr><td><strong>Ouchi's Theory Z</strong></td><td>Lifetime employment, consensus decisions, collective responsibility (Japanese management)</td></tr>
</table>
`
},
{
chapter: "People Domain (42%)",
title: "Leadership & Power",
html: `
<h1>Leadership Styles & Power</h1>
<h2>Leadership Styles</h2>
<table><tr><th>Style</th><th>When to Use</th><th>Description</th></tr>
<tr><td><strong>Servant</strong> ⭐</td><td>Most situations (PMI default)</td><td>Serve the team, remove impediments, facilitate</td></tr>
<tr><td><strong>Transformational</strong></td><td>Driving change/vision</td><td>Inspire, motivate, intellectual stimulation</td></tr>
<tr><td><strong>Transactional</strong></td><td>Routine, stable work</td><td>Reward/consequence based, clear expectations</td></tr>
<tr><td><strong>Charismatic</strong></td><td>Rallying support</td><td>Personal charm and energy</td></tr>
<tr><td><strong>Laissez-faire</strong></td><td>Expert, self-managing teams</td><td>Hands-off, minimal intervention</td></tr>
<tr><td><strong>Situational (Hersey-Blanchard)</strong></td><td>Varies by team maturity</td><td>Telling → Selling → Participating → Delegating</td></tr>
<tr><td><strong>Directive/Autocratic</strong></td><td>Emergencies ONLY</td><td>Tell people what to do</td></tr>
</table>
<h2>Types of Power</h2>
<table><tr><th>Power Type</th><th>Source</th><th>Example</th><th>Effectiveness</th></tr>
<tr><td><strong>Expert</strong></td><td>Knowledge/skill</td><td>"She knows the technology best"</td><td>⭐ Most effective</td></tr>
<tr><td><strong>Referent</strong></td><td>Respect/charisma</td><td>"People want to work with her"</td><td>⭐ Very effective</td></tr>
<tr><td><strong>Legitimate</strong></td><td>Position/title</td><td>"She's the project manager"</td><td>Moderate</td></tr>
<tr><td><strong>Reward</strong></td><td>Ability to give rewards</td><td>"She can approve bonuses"</td><td>Moderate</td></tr>
<tr><td><strong>Coercive/Punishment</strong></td><td>Ability to punish</td><td>"She can fire people"</td><td>❌ Least effective</td></tr>
</table>
<div class="key-point"><strong>PMI prefers:</strong> Expert and Referent power. These are earned through competence and relationships, not position. Coercive power should never be the answer.</div>
<h2>Emotional Intelligence (EQ)</h2>
<table><tr><th>Component</th><th>Description</th></tr>
<tr><td><strong>Self-awareness</strong></td><td>Recognize your own emotions and their impact</td></tr>
<tr><td><strong>Self-regulation</strong></td><td>Control impulses, think before acting</td></tr>
<tr><td><strong>Motivation</strong></td><td>Internal drive beyond external rewards</td></tr>
<tr><td><strong>Empathy</strong></td><td>Understand others' emotions and perspectives</td></tr>
<tr><td><strong>Social skills</strong></td><td>Build relationships, influence, communicate</td></tr>
</table>
`
},
{
chapter: "People Domain (42%)",
title: "Team Development",
html: `
<h1>Team Development & Dynamics</h1>
<h2>Tuckman's Model</h2>
<div class="diagram"><div class="diagram-title">Team Development Stages</div>
<div class="flow-row"><div class="flow-box">Forming</div><div class="flow-arrow">→</div><div class="flow-box highlight">Storming</div><div class="flow-arrow">→</div><div class="flow-box">Norming</div><div class="flow-arrow">→</div><div class="flow-box highlight">Performing</div><div class="flow-arrow">→</div><div class="flow-box">Adjourning</div></div>
</div>
<table><tr><th>Stage</th><th>Behavior</th><th>PM's Role</th></tr>
<tr><td><strong>Forming</strong></td><td>Polite, uncertain, dependent</td><td>Direct, clarify goals, build relationships</td></tr>
<tr><td><strong>Storming</strong></td><td>Conflict, power struggles, frustration</td><td>Coach, facilitate resolution, stay patient</td></tr>
<tr><td><strong>Norming</strong></td><td>Cohesion, trust, established norms</td><td>Support, step back, reinforce norms</td></tr>
<tr><td><strong>Performing</strong></td><td>High productivity, self-managing</td><td>Delegate, remove impediments, celebrate</td></tr>
<tr><td><strong>Adjourning</strong></td><td>Disbanding, closure</td><td>Recognize contributions, capture lessons</td></tr>
</table>
<div class="callout"><div class="callout-title">⚠️ Key Exam Points</div>
<ul>
<li>Teams can regress (e.g., new member joins → back to Forming/Storming)</li>
<li>Storming is NORMAL and necessary — don't skip it</li>
<li>The PM's style should evolve with the team's maturity</li>
</ul></div>
<h2>Virtual/Distributed Teams</h2>
<table><tr><th>Challenge</th><th>Solution</th></tr>
<tr><td>Communication barriers</td><td>Over-communicate, use multiple channels</td></tr>
<tr><td>Time zones</td><td>Rotate meeting times, use async tools</td></tr>
<tr><td>Isolation</td><td>Virtual team-building, regular check-ins</td></tr>
<tr><td>Trust deficit</td><td>Video calls, face-to-face when possible</td></tr>
<tr><td>Cultural differences</td><td>Cultural awareness training, inclusive practices</td></tr>
</table>
<h2>Team Charter / Working Agreements</h2>
<ul>
<li>Ground rules for behavior and communication</li>
<li>Decision-making process (consensus, majority, PM decides)</li>
<li>Conflict resolution approach</li>
<li>Meeting norms (cameras on, mute when not speaking)</li>
<li>Definition of Done (agile teams)</li>
</ul>
`
},
{
chapter: "People Domain (42%)",
title: "Communication & Negotiation",
html: `
<h1>Communication & Negotiation</h1>
<h2>Communication Model</h2>
<div class="diagram"><div class="diagram-title">Communication Process</div>
<div class="flow-row"><div class="flow-box">Sender</div><div class="flow-arrow">→</div><div class="flow-box">Encode</div><div class="flow-arrow">→</div><div class="flow-box highlight">Message + Medium</div><div class="flow-arrow">→</div><div class="flow-box">Decode</div><div class="flow-arrow">→</div><div class="flow-box">Receiver</div></div>
<div class="flow-row" style="justify-content:center;margin-top:.5rem"><div class="flow-box">← Feedback / Acknowledgment ←</div></div>
<p style="margin-top:.5rem;color:var(--muted)">Noise can disrupt at any point in the process.</p>
</div>
<h2>Communication Channels Formula</h2>
<div class="formula-box"><div class="label">Number of communication channels:</div><strong>n(n-1) / 2</strong><br><br>
5 people = 5(4)/2 = <strong>10 channels</strong><br>
10 people = 10(9)/2 = <strong>45 channels</strong><br>
Add 1 person to 10 = 11(10)/2 = <strong>55 channels</strong> (10 new channels added)</div>
<h2>Communication Methods</h2>
<table><tr><th>Method</th><th>Best For</th><th>Examples</th></tr>
<tr><td><strong>Interactive</strong></td><td>Complex issues, relationship building</td><td>Meetings, calls, video</td></tr>
<tr><td><strong>Push</strong></td><td>Distributing information</td><td>Email, reports, memos</td></tr>
<tr><td><strong>Pull</strong></td><td>Large audiences, reference material</td><td>Intranet, knowledge base, wiki</td></tr>
</table>
<h2>Negotiation Strategies</h2>
<table><tr><th>Strategy</th><th>Approach</th><th>PMI Preference</th></tr>
<tr><td><strong>Win-Win (Integrative)</strong></td><td>Both parties gain value</td><td>⭐ Always preferred</td></tr>
<tr><td><strong>Win-Lose (Distributive)</strong></td><td>One party gains at other's expense</td><td>Avoid</td></tr>
<tr><td><strong>Compromise</strong></td><td>Both give up something</td><td>Acceptable when win-win impossible</td></tr>
</table>
<h2>Active Listening</h2>
<ul>
<li>Paraphrase what you heard</li>
<li>Ask clarifying questions</li>
<li>Acknowledge emotions</li>
<li>Avoid interrupting</li>
<li>Watch body language (55% of communication is nonverbal)</li>
</ul>
`
},

// ============================================================
// SECTION 4: PROCESS DOMAIN — INTEGRATION & SCOPE
// ============================================================
{
chapter: "Process Domain (50%)",
title: "Integration Management",
html: `
<h1>Integration Management</h1>
<p>Integration is the PM's primary responsibility — coordinating all aspects of the project into a cohesive whole.</p>
<h2>Key Integration Activities</h2>
<div class="diagram"><div class="diagram-title">Integration Flow</div>
<div class="flow-row"><div class="flow-box">Project Charter</div><div class="flow-arrow">→</div><div class="flow-box">PM Plan</div><div class="flow-arrow">→</div><div class="flow-box">Direct & Manage Work</div><div class="flow-arrow">→</div><div class="flow-box">Monitor & Control</div><div class="flow-arrow">→</div><div class="flow-box">Close Project</div></div>
</div>
<h2>Project Charter</h2>
<table><tr><th>Element</th><th>Description</th></tr>
<tr><td>Purpose</td><td>Formally authorizes the project and the PM</td></tr>
<tr><td>Issued by</td><td>Sponsor (NOT the PM)</td></tr>
<tr><td>Contains</td><td>High-level requirements, objectives, success criteria, budget summary, milestones, PM authority</td></tr>
<tr><td>Inputs</td><td>Business case, benefits management plan, agreements, SOW</td></tr>
</table>
<div class="key-point"><strong>No charter = No project.</strong> The PM cannot spend resources or assign work without a charter. If asked to start work without one, the answer is "get the charter first."</div>
<h2>Change Control Process</h2>
<div class="diagram"><div class="diagram-title">Integrated Change Control</div>
<div class="flow-row"><div class="flow-box">Change Identified</div><div class="flow-arrow">→</div><div class="flow-box">Submit CR</div><div class="flow-arrow">→</div><div class="flow-box highlight">Impact Analysis</div><div class="flow-arrow">→</div><div class="flow-box highlight">CCB Review</div><div class="flow-arrow">→</div><div class="flow-box">Update Plans</div><div class="flow-arrow">→</div><div class="flow-box">Communicate</div></div>
</div>
<ul>
<li><strong>CCB</strong> = Change Control Board (approves/rejects changes)</li>
<li>ALL changes go through this process — no exceptions</li>
<li>Even "small" changes need assessment</li>
<li>Approved changes update baselines; rejected changes are documented</li>
<li>In agile: changes handled through backlog reprioritization (Product Owner decides)</li>
</ul>
<h2>Project Closure</h2>
<ul>
<li>Verify all deliverables are accepted</li>
<li>Complete final lessons learned</li>
<li>Release resources</li>
<li>Archive project documents</li>
<li>Close contracts and procurements</li>
<li>Celebrate success</li>
</ul>
`
},
{
chapter: "Process Domain (50%)",
title: "Scope Management",
html: `
<h1>Scope Management</h1>
<h2>Product Scope vs Project Scope</h2>
<table><tr><th>Product Scope</th><th>Project Scope</th></tr>
<tr><td>Features and functions of the product</td><td>Work required to deliver the product</td></tr>
<tr><td>Measured against requirements</td><td>Measured against the project plan</td></tr>
</table>
<h2>Work Breakdown Structure (WBS)</h2>
<div class="diagram"><div class="diagram-title">WBS Structure</div>
<p><strong>Project</strong><br>
├── Phase 1 (Level 1)<br>
│   ├── Deliverable 1.1 (Level 2)<br>
│   │   ├── Work Package 1.1.1 (Level 3)<br>
│   │   └── Work Package 1.1.2<br>
│   └── Deliverable 1.2<br>
└── Phase 2</p>
</div>
<table><tr><th>WBS Concept</th><th>Description</th></tr>
<tr><td><strong>Work Package</strong></td><td>Lowest level of WBS — can be estimated, scheduled, monitored</td></tr>
<tr><td><strong>WBS Dictionary</strong></td><td>Detailed description of each WBS element</td></tr>
<tr><td><strong>Scope Baseline</strong></td><td>Scope Statement + WBS + WBS Dictionary</td></tr>
<tr><td><strong>100% Rule</strong></td><td>WBS must include ALL project work (nothing more, nothing less)</td></tr>
<tr><td><strong>Decomposition</strong></td><td>Breaking work into smaller, manageable pieces</td></tr>
</table>
<h2>Requirements</h2>
<table><tr><th>Type</th><th>Description</th></tr>
<tr><td>Business</td><td>High-level organizational needs</td></tr>
<tr><td>Stakeholder</td><td>Needs of specific stakeholders</td></tr>
<tr><td>Solution (Functional)</td><td>What the product must DO</td></tr>
<tr><td>Solution (Non-functional)</td><td>Quality attributes (performance, security, usability)</td></tr>
<tr><td>Transition</td><td>Temporary needs for moving to new state</td></tr>
</table>
<h2>Scope Creep vs Gold Plating</h2>
<table><tr><th>Scope Creep</th><th>Gold Plating</th></tr>
<tr><td>Unauthorized scope additions</td><td>Team adds unrequested features</td></tr>
<tr><td>Usually from stakeholders</td><td>Usually from team members</td></tr>
<tr><td>Prevented by change control</td><td>Prevented by discipline and scope baseline</td></tr>
<tr><td>Both are BAD — PMI says never allow either</td><td></td></tr>
</table>
`
},
{
chapter: "Process Domain (50%)",
title: "Schedule Management",
html: `
<h1>Schedule Management</h1>
<h2>Critical Path Method (CPM)</h2>
<div class="key-point"><strong>Critical Path</strong> = Longest path through the network = Shortest possible project duration. Activities on the critical path have <strong>zero float</strong> — any delay extends the project.</div>
<h2>Key Schedule Concepts</h2>
<table><tr><th>Concept</th><th>Definition</th></tr>
<tr><td><strong>Float (Slack)</strong></td><td>Time an activity can be delayed without delaying the project</td></tr>
<tr><td><strong>Total Float</strong></td><td>Delay without affecting project end date</td></tr>
<tr><td><strong>Free Float</strong></td><td>Delay without affecting the next activity's start</td></tr>
<tr><td><strong>Critical Path</strong></td><td>Longest path; zero total float</td></tr>
<tr><td><strong>Near-Critical Path</strong></td><td>Path with very little float — monitor closely</td></tr>
</table>
<h2>Dependencies</h2>
<table><tr><th>Type</th><th>Notation</th><th>Meaning</th></tr>
<tr><td>Finish-to-Start (FS)</td><td>Most common</td><td>B can't start until A finishes</td></tr>
<tr><td>Start-to-Start (SS)</td><td></td><td>B can't start until A starts</td></tr>
<tr><td>Finish-to-Finish (FF)</td><td></td><td>B can't finish until A finishes</td></tr>
<tr><td>Start-to-Finish (SF)</td><td>Rare</td><td>B can't finish until A starts</td></tr>
</table>
<h2>Schedule Compression</h2>
<table><tr><th>Technique</th><th>How</th><th>Trade-off</th></tr>
<tr><td><strong>Crashing</strong></td><td>Add resources to critical path activities</td><td>Increases COST</td></tr>
<tr><td><strong>Fast-tracking</strong></td><td>Do activities in parallel that were planned sequentially</td><td>Increases RISK</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>
<ul>
<li>Crash the critical path activity with the <strong>lowest crash cost</strong> first</li>
<li>Fast-tracking only works on activities that CAN be done in parallel</li>
<li>Neither technique guarantees success — both have trade-offs</li>
</ul></div>
<h2>PERT Estimate</h2>
<div class="formula-box"><div class="label">Three-Point Estimate (PERT):</div>
<strong>Expected = (O + 4M + P) / 6</strong><br>
<strong>Std Dev (σ) = (P - O) / 6</strong><br><br>
O = Optimistic, M = Most Likely, P = Pessimistic<br>
±1σ = 68.3% confidence | ±2σ = 95.5% | ±3σ = 99.7%</div>
`
},
{
chapter: "Process Domain (50%)",
title: "Cost Management & EVM",
html: `
<h1>Cost Management & Earned Value</h1>
<h2>Cost Concepts</h2>
<table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><strong>Cost Baseline</strong></td><td>Approved time-phased budget (S-curve)</td></tr>
<tr><td><strong>Budget (BAC)</strong></td><td>Budget at Completion — total authorized budget</td></tr>
<tr><td><strong>Management Reserve</strong></td><td>Budget for unknown unknowns (not in baseline)</td></tr>
<tr><td><strong>Contingency Reserve</strong></td><td>Budget for known risks (in baseline)</td></tr>
<tr><td><strong>Funding Requirements</strong></td><td>Cost baseline + management reserve</td></tr>
</table>
<h2>Earned Value Management (EVM)</h2>
<div class="formula-box"><div class="label">Core EVM Values:</div>
<strong>PV</strong> (Planned Value) = What you PLANNED to spend by now<br>
<strong>EV</strong> (Earned Value) = Value of work ACTUALLY completed<br>
<strong>AC</strong> (Actual Cost) = What you ACTUALLY spent</div>
<h3>Variance Formulas</h3>
<div class="formula-box"><div class="label">Variances (negative = bad):</div>
<strong>CV = EV - AC</strong> → Cost Variance (over/under budget)<br>
<strong>SV = EV - PV</strong> → Schedule Variance (ahead/behind schedule)</div>
<h3>Performance Indices</h3>
<div class="formula-box"><div class="label">Indices (< 1.0 = bad):</div>
<strong>CPI = EV / AC</strong> → Cost Performance Index<br>
<strong>SPI = EV / PV</strong> → Schedule Performance Index<br><br>
CPI = 0.8 means: for every $1 spent, only $0.80 of value earned (20% over budget)<br>
SPI = 1.2 means: 20% ahead of schedule</div>
<h3>Forecasting</h3>
<div class="formula-box"><div class="label">Estimate at Completion (EAC):</div>
<strong>EAC = BAC / CPI</strong> → Most common (assumes current performance continues)<br>
<strong>EAC = AC + (BAC - EV)</strong> → Atypical variance (won't recur)<br>
<strong>EAC = AC + (BAC - EV) / (CPI × SPI)</strong> → Both cost and schedule factors<br><br>
<strong>ETC = EAC - AC</strong> → Estimate to Complete (how much more to spend)<br>
<strong>VAC = BAC - EAC</strong> → Variance at Completion<br>
<strong>TCPI = (BAC - EV) / (BAC - AC)</strong> → To-Complete Performance Index</div>
<div class="callout"><div class="callout-title">🎯 EVM Interpretation Quick Guide</div>
<table><tr><th>If...</th><th>Then...</th></tr>
<tr><td>CPI > 1 and SPI > 1</td><td>Under budget AND ahead of schedule ✅</td></tr>
<tr><td>CPI < 1</td><td>Over budget ❌</td></tr>
<tr><td>SPI < 1</td><td>Behind schedule ❌</td></tr>
<tr><td>CV positive</td><td>Under budget ✅</td></tr>
<tr><td>SV negative</td><td>Behind schedule ❌</td></tr>
</table></div>
`
},

{
chapter: "Process Domain (50%)",
title: "Quality Management",
html: `
<h1>Quality Management</h1>
<h2>Key Quality Concepts</h2>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Quality</strong></td><td>Degree to which requirements are fulfilled</td></tr>
<tr><td><strong>Grade</strong></td><td>Category of features (low grade ≠ low quality)</td></tr>
<tr><td><strong>Precision</strong></td><td>Consistency of measurements (tight grouping)</td></tr>
<tr><td><strong>Accuracy</strong></td><td>Closeness to true value (hitting the target)</td></tr>
</table>
<h2>QA vs QC</h2>
<table><tr><th>Quality Assurance (QA)</th><th>Quality Control (QC)</th></tr>
<tr><td>Process-focused</td><td>Product-focused</td></tr>
<tr><td>Preventive (proactive)</td><td>Detective (reactive)</td></tr>
<tr><td>"Are we following the right processes?"</td><td>"Does the deliverable meet standards?"</td></tr>
<tr><td>Audits, process analysis</td><td>Inspections, testing, reviews</td></tr>
</table>
<div class="key-point"><strong>PMI always prefers prevention over inspection.</strong> Build quality in from the start rather than catching defects later.</div>
<h2>Cost of Quality (CoQ)</h2>
<table><tr><th>Category</th><th>Type</th><th>Examples</th></tr>
<tr><td><strong>Prevention</strong></td><td>Conformance</td><td>Training, process design, quality planning</td></tr>
<tr><td><strong>Appraisal</strong></td><td>Conformance</td><td>Testing, inspections, audits</td></tr>
<tr><td><strong>Internal Failure</strong></td><td>Non-conformance</td><td>Rework, scrap, retesting</td></tr>
<tr><td><strong>External Failure</strong></td><td>Non-conformance</td><td>Warranty, recalls, lawsuits, reputation damage</td></tr>
</table>
<p><em>Spending more on prevention reduces total CoQ (failures are expensive).</em></p>
<h2>Seven Basic Quality Tools</h2>
<table><tr><th>Tool</th><th>Purpose</th></tr>
<tr><td><strong>Cause-and-Effect (Fishbone/Ishikawa)</strong></td><td>Identify root causes of a problem</td></tr>
<tr><td><strong>Flowchart</strong></td><td>Map a process to find inefficiencies</td></tr>
<tr><td><strong>Check Sheet</strong></td><td>Collect data in a structured format</td></tr>
<tr><td><strong>Pareto Chart</strong></td><td>80/20 rule — focus on vital few causes</td></tr>
<tr><td><strong>Histogram</strong></td><td>Show frequency distribution of data</td></tr>
<tr><td><strong>Control Chart</strong></td><td>Monitor process stability over time (UCL/LCL)</td></tr>
<tr><td><strong>Scatter Diagram</strong></td><td>Show correlation between two variables</td></tr>
</table>
<h2>Control Charts</h2>
<ul>
<li><strong>UCL/LCL</strong> = Upper/Lower Control Limits (±3σ from mean)</li>
<li><strong>Rule of Seven</strong> = 7 consecutive points on one side of mean = out of control</li>
<li>Points outside control limits = assignable cause (investigate)</li>
<li>Within limits = common cause variation (normal)</li>
</ul>
<h2>Continuous Improvement</h2>
<div class="diagram"><div class="diagram-title">PDCA Cycle (Deming Cycle)</div>
<div class="flow-row"><div class="flow-box">Plan</div><div class="flow-arrow">→</div><div class="flow-box">Do</div><div class="flow-arrow">→</div><div class="flow-box">Check</div><div class="flow-arrow">→</div><div class="flow-box">Act</div><div class="flow-arrow">→</div><div class="flow-box">Repeat ↺</div></div>
</div>
`
},
{
chapter: "Process Domain (50%)",
title: "Risk Management",
html: `
<h1>Risk Management</h1>
<p>Risk = uncertain event that, if it occurs, has a positive or negative effect on project objectives.</p>
<h2>Risk Process</h2>
<div class="diagram"><div class="diagram-title">Risk Management Process</div>
<div class="flow-row"><div class="flow-box">Plan Risk Mgmt</div><div class="flow-arrow">→</div><div class="flow-box">Identify Risks</div><div class="flow-arrow">→</div><div class="flow-box">Qualitative Analysis</div><div class="flow-arrow">→</div><div class="flow-box">Quantitative Analysis</div><div class="flow-arrow">→</div><div class="flow-box">Plan Responses</div><div class="flow-arrow">→</div><div class="flow-box">Monitor Risks</div></div>
</div>
<h2>Risk Response Strategies</h2>
<table><tr><th>For Threats (Negative)</th><th>For Opportunities (Positive)</th></tr>
<tr><td><strong>Avoid</strong> — Eliminate the threat entirely</td><td><strong>Exploit</strong> — Ensure it happens</td></tr>
<tr><td><strong>Transfer</strong> — Shift to third party (insurance, contracts)</td><td><strong>Share</strong> — Partner with third party</td></tr>
<tr><td><strong>Mitigate</strong> — Reduce probability or impact</td><td><strong>Enhance</strong> — Increase probability or impact</td></tr>
<tr><td><strong>Accept</strong> — Active (contingency plan) or Passive (deal with it)</td><td><strong>Accept</strong> — Take advantage if it occurs</td></tr>
<tr><td><strong>Escalate</strong> — Beyond PM's authority</td><td><strong>Escalate</strong> — Beyond PM's authority</td></tr>
</table>
<h2>Risk Analysis</h2>
<table><tr><th>Qualitative</th><th>Quantitative</th></tr>
<tr><td>Probability × Impact matrix</td><td>Monte Carlo simulation</td></tr>
<tr><td>Subjective assessment</td><td>Numerical/statistical analysis</td></tr>
<tr><td>Prioritizes risks</td><td>Determines overall project risk</td></tr>
<tr><td>Done for ALL risks</td><td>Done for high-priority risks only</td></tr>
</table>
<h2>Expected Monetary Value (EMV)</h2>
<div class="formula-box"><div class="label">EMV = Probability × Impact</div>
Risk A: 30% chance of $100K loss = <strong>-$30,000 EMV</strong><br>
Risk B: 50% chance of $60K gain = <strong>+$30,000 EMV</strong><br><br>
Used in decision tree analysis. Sum of all EMVs = project risk exposure.</div>
<h2>Key Risk Terms</h2>
<table><tr><th>Term</th><th>Definition</th></tr>
<tr><td><strong>Risk Register</strong></td><td>Document listing all identified risks, analysis, and responses</td></tr>
<tr><td><strong>Risk Owner</strong></td><td>Person responsible for monitoring and responding to a risk</td></tr>
<tr><td><strong>Trigger</strong></td><td>Event or condition that indicates a risk is about to occur</td></tr>
<tr><td><strong>Residual Risk</strong></td><td>Risk remaining after response is implemented</td></tr>
<tr><td><strong>Secondary Risk</strong></td><td>New risk created by implementing a risk response</td></tr>
<tr><td><strong>Workaround</strong></td><td>Unplanned response to a risk that has occurred (no plan existed)</td></tr>
<tr><td><strong>Contingency Reserve</strong></td><td>Budget/time for known risks (in baseline)</td></tr>
<tr><td><strong>Management Reserve</strong></td><td>Budget/time for unknown unknowns (not in baseline)</td></tr>
</table>
`
},
{
chapter: "Process Domain (50%)",
title: "Procurement & Resources",
html: `
<h1>Procurement Management</h1>
<h2>Contract Types</h2>
<table><tr><th>Type</th><th>Risk to Buyer</th><th>Risk to Seller</th><th>When to Use</th></tr>
<tr><td><strong>Fixed Price (FFP)</strong></td><td>Low</td><td>High</td><td>Well-defined scope, clear requirements</td></tr>
<tr><td><strong>FP + Incentive (FPIF)</strong></td><td>Low-Med</td><td>Med</td><td>Want to motivate seller performance</td></tr>
<tr><td><strong>FP + Economic Adj (FPEPA)</strong></td><td>Med</td><td>Med</td><td>Long-term contracts, inflation risk</td></tr>
<tr><td><strong>Time & Materials (T&M)</strong></td><td>Medium</td><td>Medium</td><td>Scope unclear, short-term, staff augmentation</td></tr>
<tr><td><strong>Cost + Fixed Fee (CPFF)</strong></td><td>High</td><td>Low</td><td>Scope uncertain, R&D</td></tr>
<tr><td><strong>Cost + Incentive (CPIF)</strong></td><td>High</td><td>Low</td><td>Want to motivate cost control</td></tr>
<tr><td><strong>Cost + Award Fee (CPAF)</strong></td><td>Highest</td><td>Lowest</td><td>Subjective performance evaluation</td></tr>
</table>
<div class="key-point"><strong>Memory aid:</strong> Fixed Price = Buyer's risk is LOW (seller absorbs overruns). Cost Plus = Buyer's risk is HIGH (buyer pays actual costs).</div>
<h2>Procurement Documents</h2>
<table><tr><th>Document</th><th>Purpose</th></tr>
<tr><td><strong>RFI</strong> (Request for Information)</td><td>Gather info about vendor capabilities</td></tr>
<tr><td><strong>RFQ</strong> (Request for Quote)</td><td>Get price for well-defined work</td></tr>
<tr><td><strong>RFP</strong> (Request for Proposal)</td><td>Get detailed proposal for complex work</td></tr>
<tr><td><strong>SOW</strong> (Statement of Work)</td><td>Describes the work to be performed</td></tr>
<tr><td><strong>IFB</strong> (Invitation for Bid)</td><td>Lowest price wins (commodity purchases)</td></tr>
</table>
<h2>Resource Management</h2>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Resource Leveling</strong></td><td>Adjust schedule to resolve over-allocation (may extend schedule)</td></tr>
<tr><td><strong>Resource Smoothing</strong></td><td>Adjust within float only (doesn't extend schedule)</td></tr>
<tr><td><strong>RACI Matrix</strong></td><td>Responsible, Accountable, Consulted, Informed</td></tr>
<tr><td><strong>Organizational Breakdown Structure</strong></td><td>Shows resources by department/group</td></tr>
<tr><td><strong>Resource Histogram</strong></td><td>Bar chart showing resource usage over time</td></tr>
</table>
<h2>RACI Rules</h2>
<ul>
<li>Only ONE person is <strong>Accountable</strong> per task (the decision-maker)</li>
<li>Multiple people can be Responsible, Consulted, or Informed</li>
<li>Every task must have at least one R and one A</li>
</ul>
`
},

// ============================================================
// SECTION 5: AGILE & HYBRID DEEP DIVE
// ============================================================
{
chapter: "Agile & Hybrid",
title: "Agile Manifesto & Principles",
html: `
<h1>Agile Manifesto & Principles</h1>
<h2>The 4 Values</h2>
<div class="grid-2">
<div class="grid-box"><h4>Individuals & Interactions</h4>over processes and tools</div>
<div class="grid-box"><h4>Working Software</h4>over comprehensive documentation</div>
<div class="grid-box"><h4>Customer Collaboration</h4>over contract negotiation</div>
<div class="grid-box"><h4>Responding to Change</h4>over following a plan</div>
</div>
<p><em>Items on the right still have value — items on the left are valued MORE.</em></p>
<h2>12 Agile Principles (Exam-Ready Summary)</h2>
<table><tr><th>#</th><th>Principle</th><th>Key Takeaway</th></tr>
<tr><td>1</td><td>Satisfy customer through early, continuous delivery</td><td>Deliver value frequently</td></tr>
<tr><td>2</td><td>Welcome changing requirements</td><td>Change = competitive advantage</td></tr>
<tr><td>3</td><td>Deliver working product frequently</td><td>Prefer shorter timescales (weeks)</td></tr>
<tr><td>4</td><td>Business + developers work together daily</td><td>Constant collaboration</td></tr>
<tr><td>5</td><td>Build around motivated individuals</td><td>Trust and support the team</td></tr>
<tr><td>6</td><td>Face-to-face is most effective</td><td>Osmotic communication</td></tr>
<tr><td>7</td><td>Working product = primary measure of progress</td><td>Not documents or plans</td></tr>
<tr><td>8</td><td>Sustainable pace</td><td>No death marches or burnout</td></tr>
<tr><td>9</td><td>Technical excellence</td><td>Good design enhances agility</td></tr>
<tr><td>10</td><td>Simplicity</td><td>Maximize work NOT done</td></tr>
<tr><td>11</td><td>Self-organizing teams</td><td>Best results from autonomous teams</td></tr>
<tr><td>12</td><td>Reflect and adjust regularly</td><td>Retrospectives are essential</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>When a question involves an agile team, the answer that empowers the team, welcomes change, delivers incrementally, and values working product over documentation is usually correct.</div>
`
},
{
chapter: "Agile & Hybrid",
title: "Scrum Deep Dive",
html: `
<h1>Scrum Framework (Deep Dive)</h1>
<h2>Scrum Roles</h2>
<div class="grid-3">
<div class="grid-box"><h4>Product Owner</h4>
<ul><li>Owns product backlog</li><li>Prioritizes by value</li><li>Single voice of customer</li><li>Accepts/rejects work</li><li>Maximizes ROI</li></ul></div>
<div class="grid-box"><h4>Scrum Master</h4>
<ul><li>Servant leader</li><li>Removes impediments</li><li>Coaches the team</li><li>Facilitates events</li><li>Protects the team</li></ul></div>
<div class="grid-box"><h4>Dev Team</h4>
<ul><li>Self-organizing</li><li>Cross-functional</li><li>3-9 members</li><li>Decides HOW</li><li>Collectively accountable</li></ul></div>
</div>
<h2>Scrum Events</h2>
<table><tr><th>Event</th><th>Purpose</th><th>Timebox</th><th>Who Attends</th></tr>
<tr><td><strong>Sprint</strong></td><td>Deliver increment</td><td>1-4 weeks</td><td>Everyone</td></tr>
<tr><td><strong>Sprint Planning</strong></td><td>What + How for this sprint</td><td>4h (2-wk sprint)</td><td>Scrum Team</td></tr>
<tr><td><strong>Daily Standup</strong></td><td>Sync, identify blockers</td><td>15 min</td><td>Dev Team (others observe)</td></tr>
<tr><td><strong>Sprint Review</strong></td><td>Demo, get feedback</td><td>2h (2-wk sprint)</td><td>Scrum Team + Stakeholders</td></tr>
<tr><td><strong>Retrospective</strong></td><td>Process improvement</td><td>1.5h (2-wk sprint)</td><td>Scrum Team only</td></tr>
<tr><td><strong>Refinement</strong></td><td>Clarify upcoming items</td><td>~10% of sprint</td><td>Scrum Team</td></tr>
</table>
<h2>Scrum Artifacts & Commitments</h2>
<table><tr><th>Artifact</th><th>Commitment</th></tr>
<tr><td>Product Backlog</td><td>Product Goal</td></tr>
<tr><td>Sprint Backlog</td><td>Sprint Goal</td></tr>
<tr><td>Increment</td><td>Definition of Done</td></tr>
</table>
<h2>Sprint Rules</h2>
<ul>
<li>Sprint goal does NOT change mid-sprint</li>
<li>Quality standards do NOT decrease</li>
<li>Scope may be clarified/renegotiated with PO</li>
<li>Only PO can cancel a sprint (if goal becomes obsolete)</li>
<li>No work is added without PO approval</li>
</ul>
<h2>Three Pillars of Empiricism</h2>
<div class="diagram"><div class="diagram-title">Scrum's Foundation</div>
<div class="flow-row"><div class="flow-box highlight">Transparency</div><div class="flow-box highlight">Inspection</div><div class="flow-box highlight">Adaptation</div></div>
</div>
`
},
{
chapter: "Agile & Hybrid",
title: "Kanban, XP & Lean",
html: `
<h1>Kanban, XP & Lean</h1>
<h2>Kanban</h2>
<table><tr><th>Practice</th><th>Description</th></tr>
<tr><td><strong>Visualize workflow</strong></td><td>Board with columns (To Do, In Progress, Done)</td></tr>
<tr><td><strong>Limit WIP</strong></td><td>Cap items in each column — THE key differentiator</td></tr>
<tr><td><strong>Manage flow</strong></td><td>Optimize throughput, reduce bottlenecks</td></tr>
<tr><td><strong>Make policies explicit</strong></td><td>Clear rules for moving items between columns</td></tr>
<tr><td><strong>Feedback loops</strong></td><td>Regular reviews and metrics</td></tr>
<tr><td><strong>Improve collaboratively</strong></td><td>Evolve the process experimentally</td></tr>
</table>
<div class="key-point"><strong>Kanban vs Scrum:</strong> Kanban has no sprints, no required roles, no timeboxes. It's a continuous flow system. The key metric is <strong>cycle time</strong> (how long items take to complete).</div>
<h2>Extreme Programming (XP)</h2>
<table><tr><th>Practice</th><th>Description</th></tr>
<tr><td><strong>Pair Programming</strong></td><td>Two developers at one workstation</td></tr>
<tr><td><strong>Test-Driven Development (TDD)</strong></td><td>Write tests before code</td></tr>
<tr><td><strong>Continuous Integration</strong></td><td>Integrate and test code multiple times daily</td></tr>
<tr><td><strong>Refactoring</strong></td><td>Improve code structure without changing behavior</td></tr>
<tr><td><strong>Simple Design</strong></td><td>Simplest thing that works</td></tr>
<tr><td><strong>Collective Code Ownership</strong></td><td>Anyone can modify any code</td></tr>
<tr><td><strong>Sustainable Pace</strong></td><td>40-hour weeks, no overtime</td></tr>
<tr><td><strong>On-site Customer</strong></td><td>Customer available full-time</td></tr>
</table>
<h2>Lean Principles</h2>
<table><tr><th>Principle</th><th>Application</th></tr>
<tr><td><strong>Eliminate waste</strong></td><td>Remove non-value-adding activities</td></tr>
<tr><td><strong>Build quality in</strong></td><td>Prevent defects, don't inspect for them</td></tr>
<tr><td><strong>Create knowledge</strong></td><td>Learn through experimentation</td></tr>
<tr><td><strong>Defer commitment</strong></td><td>Decide at the last responsible moment</td></tr>
<tr><td><strong>Deliver fast</strong></td><td>Short cycles, rapid feedback</td></tr>
<tr><td><strong>Respect people</strong></td><td>Empower teams, trust workers</td></tr>
<tr><td><strong>Optimize the whole</strong></td><td>Systems thinking, not local optimization</td></tr>
</table>
<h2>Lean Wastes (DOWNTIME)</h2>
<ul>
<li><strong>D</strong>efects</li>
<li><strong>O</strong>verproduction</li>
<li><strong>W</strong>aiting</li>
<li><strong>N</strong>on-utilized talent</li>
<li><strong>T</strong>ransportation</li>
<li><strong>I</strong>nventory</li>
<li><strong>M</strong>otion</li>
<li><strong>E</strong>xtra processing</li>
</ul>
`
},
{
chapter: "Agile & Hybrid",
title: "Agile Metrics & Estimation",
html: `
<h1>Agile Metrics & Estimation</h1>
<h2>Key Agile Metrics</h2>
<table><tr><th>Metric</th><th>What It Measures</th><th>Used For</th></tr>
<tr><td><strong>Velocity</strong></td><td>Story points per sprint</td><td>Forecasting, sprint planning</td></tr>
<tr><td><strong>Burn-down Chart</strong></td><td>Work remaining vs time</td><td>Sprint progress tracking</td></tr>
<tr><td><strong>Burn-up Chart</strong></td><td>Work completed vs total scope</td><td>Release tracking (shows scope changes)</td></tr>
<tr><td><strong>Cycle Time</strong></td><td>Start to finish for one item</td><td>Process efficiency (Kanban)</td></tr>
<tr><td><strong>Lead Time</strong></td><td>Request to delivery</td><td>Customer perspective</td></tr>
<tr><td><strong>Cumulative Flow Diagram</strong></td><td>WIP over time by state</td><td>Identify bottlenecks</td></tr>
<tr><td><strong>Escaped Defects</strong></td><td>Bugs found in production</td><td>Quality measurement</td></tr>
</table>
<h2>Estimation Techniques</h2>
<table><tr><th>Technique</th><th>How It Works</th></tr>
<tr><td><strong>Planning Poker</strong></td><td>Team members independently estimate, discuss differences, re-estimate</td></tr>
<tr><td><strong>T-Shirt Sizing</strong></td><td>Relative sizing: XS, S, M, L, XL</td></tr>
<tr><td><strong>Affinity Estimation</strong></td><td>Group similar items together, assign relative sizes</td></tr>
<tr><td><strong>Story Points</strong></td><td>Relative complexity/effort (Fibonacci: 1, 2, 3, 5, 8, 13, 21)</td></tr>
<tr><td><strong>Ideal Days</strong></td><td>Days of uninterrupted work</td></tr>
</table>
<h2>User Stories</h2>
<div class="formula-box"><div class="label">User Story Format:</div>
<strong>As a</strong> [role], <strong>I want</strong> [feature] <strong>so that</strong> [benefit]</div>
<h3>INVEST Criteria (Good User Stories)</h3>
<table><tr><th>Letter</th><th>Meaning</th></tr>
<tr><td><strong>I</strong></td><td>Independent — can be developed in any order</td></tr>
<tr><td><strong>N</strong></td><td>Negotiable — details can be discussed</td></tr>
<tr><td><strong>V</strong></td><td>Valuable — delivers value to the user</td></tr>
<tr><td><strong>E</strong></td><td>Estimable — team can size it</td></tr>
<tr><td><strong>S</strong></td><td>Small — fits in one sprint</td></tr>
<tr><td><strong>T</strong></td><td>Testable — clear acceptance criteria</td></tr>
</table>
<h2>Release Planning</h2>
<div class="formula-box"><div class="label">Release Forecasting:</div>
<strong>Sprints needed = Total Story Points / Velocity</strong><br><br>
Example: 200 points remaining, velocity = 25 points/sprint<br>
200 / 25 = <strong>8 sprints</strong> to complete</div>
`
},
{
chapter: "Agile & Hybrid",
title: "Hybrid & Scaled Agile",
html: `
<h1>Hybrid Approaches & Scaling</h1>
<h2>When to Use Hybrid</h2>
<table><tr><th>Scenario</th><th>Approach</th></tr>
<tr><td>Hardware + software project</td><td>Predictive for hardware, agile for software</td></tr>
<tr><td>Regulated industry with innovation</td><td>Predictive for compliance docs, agile for development</td></tr>
<tr><td>Organization transitioning to agile</td><td>Start hybrid, increase agile over time</td></tr>
<tr><td>Some requirements clear, others uncertain</td><td>Predictive for known, agile for unknown</td></tr>
</table>
<h2>Scaled Agile Frameworks</h2>
<table><tr><th>Framework</th><th>Key Concept</th><th>Scale</th></tr>
<tr><td><strong>SAFe</strong> (Scaled Agile Framework)</td><td>Agile Release Trains (ARTs), PI Planning</td><td>Large enterprise</td></tr>
<tr><td><strong>LeSS</strong> (Large-Scale Scrum)</td><td>Multiple teams, one product backlog, one PO</td><td>2-8 teams</td></tr>
<tr><td><strong>Nexus</strong></td><td>Integration team coordinates 3-9 Scrum teams</td><td>3-9 teams</td></tr>
<tr><td><strong>Scrum@Scale</strong></td><td>Scrum of Scrums for coordination</td><td>Any size</td></tr>
<tr><td><strong>Disciplined Agile (DA)</strong></td><td>Toolkit approach, choose what works</td><td>Any size</td></tr>
</table>
<h2>SAFe Key Concepts (Most Tested)</h2>
<ul>
<li><strong>Agile Release Train (ART)</strong> — 50-125 people, aligned to a value stream</li>
<li><strong>Program Increment (PI)</strong> — 8-12 weeks of work (typically 5 sprints)</li>
<li><strong>PI Planning</strong> — 2-day event where all teams align on objectives</li>
<li><strong>Innovation & Planning (IP) Sprint</strong> — Buffer sprint for innovation and planning</li>
</ul>
<h2>Choosing the Right Approach</h2>
<div class="diagram"><div class="diagram-title">Decision Framework</div>
<table><tr><th>Factor</th><th>→ Predictive</th><th>→ Agile</th><th>→ Hybrid</th></tr>
<tr><td>Requirements</td><td>Stable, well-defined</td><td>Evolving, unclear</td><td>Mix of both</td></tr>
<tr><td>Uncertainty</td><td>Low</td><td>High</td><td>Moderate</td></tr>
<tr><td>Customer availability</td><td>Limited</td><td>Highly available</td><td>Varies</td></tr>
<tr><td>Regulation</td><td>Heavy documentation</td><td>Flexible</td><td>Some constraints</td></tr>
<tr><td>Team experience</td><td>Traditional PM</td><td>Agile-experienced</td><td>Mixed</td></tr>
</table>
</div>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>PMI does NOT favor one approach. The correct answer is always "tailor to the project context." If a question asks which approach to use, look at the scenario clues about requirements stability, uncertainty, and customer involvement.</div>
`
},

// ============================================================
// SECTION 6: BUSINESS ENVIRONMENT (8%)
// ============================================================
{
chapter: "Business Environment (8%)",
title: "Benefits & Strategy",
html: `
<h1>Benefits Realization & Strategic Alignment</h1>
<h2>Benefits Management</h2>
<p>Projects exist to deliver <strong>business value</strong>. The PM must ensure the project stays aligned with organizational strategy and delivers intended benefits.</p>
<table><tr><th>Concept</th><th>Description</th></tr>
<tr><td><strong>Business Case</strong></td><td>Justification for the project (ROI, NPV, payback period)</td></tr>
<tr><td><strong>Benefits Management Plan</strong></td><td>How and when benefits will be delivered and measured</td></tr>
<tr><td><strong>Benefits Realization</strong></td><td>Confirming that expected benefits are actually achieved</td></tr>
<tr><td><strong>Value Delivery Office</strong></td><td>Organizational unit focused on value (evolved from PMO)</td></tr>
</table>
<h2>Project Selection Methods</h2>
<table><tr><th>Method</th><th>Description</th><th>Decision Rule</th></tr>
<tr><td><strong>NPV (Net Present Value)</strong></td><td>Present value of future cash flows minus investment</td><td>Higher NPV = better</td></tr>
<tr><td><strong>IRR (Internal Rate of Return)</strong></td><td>Discount rate where NPV = 0</td><td>Higher IRR = better</td></tr>
<tr><td><strong>Payback Period</strong></td><td>Time to recover investment</td><td>Shorter = better</td></tr>
<tr><td><strong>ROI (Return on Investment)</strong></td><td>(Gain - Cost) / Cost × 100%</td><td>Higher % = better</td></tr>
<tr><td><strong>BCR (Benefit-Cost Ratio)</strong></td><td>Benefits / Costs</td><td>> 1.0 = worthwhile</td></tr>
<tr><td><strong>Opportunity Cost</strong></td><td>Value of the next best alternative foregone</td><td>Lower = better</td></tr>
</table>
<div class="key-point"><strong>Exam tip:</strong> If asked to choose between projects, pick the one with highest NPV (or highest BCR, or shortest payback period, depending on what's given).</div>
<h2>Organizational Structures</h2>
<table><tr><th>Structure</th><th>PM Authority</th><th>Resource Availability</th><th>PM Role</th></tr>
<tr><td><strong>Functional</strong></td><td>Little/None</td><td>Little/None</td><td>Part-time, coordinator</td></tr>
<tr><td><strong>Weak Matrix</strong></td><td>Low</td><td>Low</td><td>Part-time, expediter</td></tr>
<tr><td><strong>Balanced Matrix</strong></td><td>Low-Moderate</td><td>Low-Moderate</td><td>Full-time</td></tr>
<tr><td><strong>Strong Matrix</strong></td><td>Moderate-High</td><td>Moderate-High</td><td>Full-time</td></tr>
<tr><td><strong>Projectized</strong></td><td>High-Full</td><td>High-Full</td><td>Full-time, full authority</td></tr>
</table>
<h2>Compliance & External Factors</h2>
<ul>
<li><strong>Regulations</strong> — Legal requirements that MUST be followed (non-negotiable)</li>
<li><strong>Standards</strong> — Best practices (may be optional unless contractually required)</li>
<li><strong>Governance</strong> — Framework for decision-making and oversight</li>
<li><strong>PESTLE factors</strong> — Political, Economic, Social, Technological, Legal, Environmental</li>
</ul>
`
},
{
chapter: "Business Environment (8%)",
title: "Organizational Change",
html: `
<h1>Organizational Change Management</h1>
<p>Projects deliver change. The PM must help the organization <strong>adopt and sustain</strong> that change.</p>
<h2>Change Management Models</h2>
<table><tr><th>Model</th><th>Steps/Stages</th></tr>
<tr><td><strong>Kotter's 8 Steps</strong></td><td>1. Create urgency → 2. Build coalition → 3. Form vision → 4. Communicate → 5. Empower action → 6. Quick wins → 7. Build on change → 8. Anchor in culture</td></tr>
<tr><td><strong>ADKAR</strong></td><td>Awareness → Desire → Knowledge → Ability → Reinforcement</td></tr>
<tr><td><strong>Lewin's 3 Stages</strong></td><td>Unfreeze → Change → Refreeze</td></tr>
<tr><td><strong>Bridges' Transition</strong></td><td>Ending → Neutral Zone → New Beginning</td></tr>
</table>
<h2>Dealing with Resistance</h2>
<table><tr><th>Approach</th><th>When to Use</th></tr>
<tr><td><strong>Education & Communication</strong></td><td>Resistance from lack of information</td></tr>
<tr><td><strong>Participation & Involvement</strong></td><td>People need to feel ownership</td></tr>
<tr><td><strong>Facilitation & Support</strong></td><td>People are anxious or fearful</td></tr>
<tr><td><strong>Negotiation</strong></td><td>Someone will clearly lose something</td></tr>
<tr><td><strong>Manipulation/Co-optation</strong></td><td>Other tactics have failed (not ideal)</td></tr>
<tr><td><strong>Coercion</strong></td><td>Speed is essential, last resort</td></tr>
</table>
<div class="callout"><div class="callout-title">🎯 Exam Tip</div>PMI always prefers the collaborative approaches (education, participation, facilitation). Coercion is always the last resort. When a question involves resistance to change, look for the answer that addresses the ROOT CAUSE of resistance.</div>
<h2>PM's Role in Change</h2>
<ul>
<li>Identify stakeholders affected by the change</li>
<li>Assess readiness for change</li>
<li>Communicate the vision and benefits</li>
<li>Address resistance constructively</li>
<li>Provide training and support</li>
<li>Reinforce new behaviors</li>
<li>Measure adoption and sustainability</li>
</ul>
<h2>Knowledge Transfer</h2>
<ul>
<li><strong>Lessons Learned</strong> — Capture throughout the project, not just at the end</li>
<li><strong>Organizational Process Assets (OPAs)</strong> — Templates, processes, historical info</li>
<li><strong>Enterprise Environmental Factors (EEFs)</strong> — Culture, market conditions, regulations</li>
</ul>
`
},

// ============================================================
// SECTION 7: PERFORMANCE DOMAINS (PMBOK 7)
// ============================================================
{
chapter: "8 Performance Domains",
title: "All 8 Domains Overview",
html: `
<h1>The 8 Performance Domains (PMBOK 7)</h1>
<div class="callout"><div class="callout-title">⚠️ Critical Distinction</div>
<strong>8 Performance Domains</strong> (PMBOK 7 framework) ≠ <strong>3 Exam Domains</strong> (People, Process, Business Environment). Don't confuse them!</div>
<p>Performance domains are interconnected areas that run <strong>concurrently</strong> throughout the project — they are NOT sequential phases.</p>
<table><tr><th>#</th><th>Domain</th><th>Focus</th><th>Key Outcomes</th></tr>
<tr><td>1</td><td><strong>Stakeholders</strong></td><td>Engagement & relationships</td><td>Productive relationships, stakeholder agreement, support</td></tr>
<tr><td>2</td><td><strong>Team</strong></td><td>Culture & capability</td><td>Shared ownership, high-performing team, servant leadership</td></tr>
<tr><td>3</td><td><strong>Development Approach & Life Cycle</strong></td><td>Methodology selection</td><td>Appropriate approach, aligned deliverables</td></tr>
<tr><td>4</td><td><strong>Planning</strong></td><td>Organizing work</td><td>Coordinated effort, holistic approach, evolving information</td></tr>
<tr><td>5</td><td><strong>Project Work</strong></td><td>Executing & managing</td><td>Efficient processes, knowledge management, communication</td></tr>
<tr><td>6</td><td><strong>Delivery</strong></td><td>Value & outcomes</td><td>Value realized, stakeholders accept deliverables</td></tr>
<tr><td>7</td><td><strong>Measurement</strong></td><td>Performance assessment</td><td>Reliable understanding of status, actionable data</td></tr>
<tr><td>8</td><td><strong>Uncertainty</strong></td><td>Risk & ambiguity</td><td>Awareness of environment, appropriate responses</td></tr>
</table>
<h2>Key Characteristics</h2>
<ul>
<li><strong>Interactive</strong> — They influence each other constantly</li>
<li><strong>Concurrent</strong> — All active throughout the project</li>
<li><strong>Outcome-focused</strong> — Each has measurable outcomes</li>
<li><strong>Adaptable</strong> — Applied differently based on context</li>
</ul>
<h2>Uncertainty Types (Domain 8)</h2>
<table><tr><th>Type</th><th>Description</th><th>Response</th></tr>
<tr><td><strong>Risk</strong></td><td>Known unknowns</td><td>Risk management process</td></tr>
<tr><td><strong>Ambiguity</strong></td><td>Lack of understanding</td><td>Prototyping, experiments, research</td></tr>
<tr><td><strong>Complexity</strong></td><td>Interconnected elements</td><td>Break down, iterate, systems thinking</td></tr>
<tr><td><strong>Volatility</strong></td><td>Rapid change</td><td>Short iterations, frequent reassessment</td></tr>
</table>
`
},

// ============================================================
// SECTION 8: FORMULAS & CALCULATIONS
// ============================================================
{
chapter: "Formulas & Calculations",
title: "EVM Formulas",
html: `
<h1>Earned Value Management — Complete Formula Sheet</h1>
<h2>Core Values</h2>
<div class="formula-box">
<strong>PV</strong> (Planned Value) = Budgeted cost of work SCHEDULED<br>
<strong>EV</strong> (Earned Value) = Budgeted cost of work PERFORMED<br>
<strong>AC</strong> (Actual Cost) = Actual cost of work PERFORMED<br>
<strong>BAC</strong> (Budget at Completion) = Total project budget
</div>
<h2>Variances</h2>
<div class="formula-box"><div class="label">Negative = Bad | Positive = Good</div>
<strong>CV = EV - AC</strong> (Cost Variance)<br>
<strong>SV = EV - PV</strong> (Schedule Variance)<br>
<strong>VAC = BAC - EAC</strong> (Variance at Completion)
</div>
<h2>Performance Indices</h2>
<div class="formula-box"><div class="label">Less than 1.0 = Bad | Greater than 1.0 = Good</div>
<strong>CPI = EV / AC</strong> (Cost Performance Index)<br>
<strong>SPI = EV / PV</strong> (Schedule Performance Index)
</div>
<h2>Forecasting</h2>
<div class="formula-box"><div class="label">Estimate at Completion (EAC):</div>
<strong>EAC = BAC / CPI</strong> — Typical (current trend continues)<br>
<strong>EAC = AC + (BAC - EV)</strong> — Atypical (variance won't recur)<br>
<strong>EAC = AC + [(BAC - EV) / (CPI × SPI)]</strong> — Both factors<br>
<strong>EAC = AC + new bottom-up ETC</strong> — Original estimate is flawed<br><br>
<strong>ETC = EAC - AC</strong> (Estimate to Complete)<br>
<strong>TCPI = (BAC - EV) / (BAC - AC)</strong> (To-Complete Performance Index)
</div>
<h2>Quick Interpretation</h2>
<table><tr><th>Metric</th><th>Value</th><th>Meaning</th></tr>
<tr><td>CPI = 1.2</td><td>> 1</td><td>Under budget (getting $1.20 value per $1 spent)</td></tr>
<tr><td>CPI = 0.8</td><td>< 1</td><td>Over budget (getting only $0.80 value per $1 spent)</td></tr>
<tr><td>SPI = 0.9</td><td>< 1</td><td>Behind schedule (only 90% of planned work done)</td></tr>
<tr><td>CV = -$50K</td><td>Negative</td><td>$50K over budget</td></tr>
<tr><td>SV = +$20K</td><td>Positive</td><td>$20K worth of work ahead of schedule</td></tr>
<tr><td>TCPI = 1.3</td><td>> 1</td><td>Must improve performance 30% to meet budget</td></tr>
</table>
<div class="callout"><div class="callout-title">🧠 Memory Aid</div>
<p><strong>All EVM formulas start with EV:</strong></p>
<ul>
<li>Variances: EV - something (CV = EV-AC, SV = EV-PV)</li>
<li>Indices: EV / something (CPI = EV/AC, SPI = EV/PV)</li>
</ul>
<p><strong>Cost uses AC, Schedule uses PV</strong></p>
</div>
`
},
{
chapter: "Formulas & Calculations",
title: "Other Key Formulas",
html: `
<h1>Other Key Formulas & Calculations</h1>
<h2>Communication Channels</h2>
<div class="formula-box"><div class="label">Number of communication channels:</div>
<strong>Channels = n(n-1) / 2</strong><br><br>
<table><tr><th>Team Size</th><th>Channels</th><th>Add 1 Person</th></tr>
<tr><td>5</td><td>10</td><td>→ 6 people = 15 (+5 new)</td></tr>
<tr><td>10</td><td>45</td><td>→ 11 people = 55 (+10 new)</td></tr>
<tr><td>15</td><td>105</td><td>→ 16 people = 120 (+15 new)</td></tr>
</table>
<p><em>Adding 1 person adds (n) new channels (where n = new team size - 1)</em></p>
</div>
<h2>PERT (Three-Point Estimating)</h2>
<div class="formula-box"><div class="label">Program Evaluation and Review Technique:</div>
<strong>Expected (tE) = (O + 4M + P) / 6</strong><br>
<strong>Standard Deviation (σ) = (P - O) / 6</strong><br>
<strong>Variance = σ² = [(P - O) / 6]²</strong><br><br>
<table><tr><th>Confidence</th><th>Range</th></tr>
<tr><td>68.3%</td><td>tE ± 1σ</td></tr>
<tr><td>95.5%</td><td>tE ± 2σ</td></tr>
<tr><td>99.7%</td><td>tE ± 3σ</td></tr>
</table>
<p><em>For project duration: sum the variances of critical path activities, then take square root for project σ</em></p>
</div>
<h2>Expected Monetary Value (EMV)</h2>
<div class="formula-box"><div class="label">Decision Tree Analysis:</div>
<strong>EMV = Probability × Impact</strong><br><br>
Threat: 40% × -$200K = <strong>-$80K</strong><br>
Opportunity: 60% × +$100K = <strong>+$60K</strong><br>
Net EMV = -$80K + $60K = <strong>-$20K</strong> (net risk exposure)
</div>
<h2>Other Useful Formulas</h2>
<div class="formula-box">
<strong>ROI = (Net Profit / Cost) × 100%</strong><br>
<strong>BCR = Benefits / Costs</strong> (> 1.0 = worthwhile)<br>
<strong>Payback Period = Investment / Annual Cash Flow</strong><br>
<strong>Present Value = FV / (1 + r)^n</strong><br><br>
<strong>Float = LS - ES = LF - EF</strong> (schedule)<br>
<strong>Point of Total Assumption (PTA) = [(Ceiling - Target Price) / Buyer Share] + Target Cost</strong> (FPIF contracts)
</div>
<h2>Brain Dump Sheet (Write This First on Exam Day)</h2>
<div class="diagram"><div class="diagram-title">📝 Write these immediately when exam starts</div>
<p><strong>EVM:</strong> CV=EV-AC, SV=EV-PV, CPI=EV/AC, SPI=EV/PV, EAC=BAC/CPI<br>
<strong>PERT:</strong> (O+4M+P)/6, σ=(P-O)/6<br>
<strong>Channels:</strong> n(n-1)/2<br>
<strong>EMV:</strong> P × I<br>
<strong>Conflict:</strong> Collaborate > Compromise > Smooth > Force > Withdraw<br>
<strong>Risk:</strong> Avoid/Transfer/Mitigate/Accept/Escalate (threats) | Exploit/Share/Enhance/Accept/Escalate (opportunities)</p>
</div>
`
},

// ============================================================
// SECTION 9: STAKEHOLDER & COMMUNICATIONS
// ============================================================
{
chapter: "Stakeholders & Communications",
title: "Stakeholder Engagement",
html: `
<h1>Stakeholder Engagement</h1>
<h2>Stakeholder Identification</h2>
<p>Identify stakeholders <strong>early and continuously</strong>. New stakeholders can emerge at any phase.</p>
<h2>Analysis Tools</h2>
<table><tr><th>Tool</th><th>Axes/Dimensions</th><th>Use</th></tr>
<tr><td><strong>Power/Interest Grid</strong></td><td>Power vs Interest</td><td>Determine engagement strategy</td></tr>
<tr><td><strong>Power/Influence Grid</strong></td><td>Power vs Influence</td><td>Identify who can affect decisions</td></tr>
<tr><td><strong>Salience Model</strong></td><td>Power, Urgency, Legitimacy</td><td>Classify stakeholder priority</td></tr>
<tr><td><strong>Stakeholder Cube</strong></td><td>Power, Interest, Attitude</td><td>3D analysis</td></tr>
</table>
<h2>Power/Interest Grid Strategy</h2>
<div class="diagram"><div class="diagram-title">Engagement Strategy by Quadrant</div>
<table><tr><th></th><th>Low Interest</th><th>High Interest</th></tr>
<tr><td><strong>High Power</strong></td><td>Keep Satisfied</td><td>⭐ Manage Closely</td></tr>
<tr><td><strong>Low Power</strong></td><td>Monitor</td><td>Keep Informed</td></tr>
</table>
</div>
<h2>Engagement Assessment Matrix</h2>
<table><tr><th>Level</th><th>Description</th><th>Symbol</th></tr>
<tr><td><strong>Unaware</strong></td><td>Doesn't know about the project</td><td>U</td></tr>
<tr><td><strong>Resistant</strong></td><td>Aware but opposed</td><td>R</td></tr>
<tr><td><strong>Neutral</strong></td><td>Neither supportive nor resistant</td><td>N</td></tr>
<tr><td><strong>Supportive</strong></td><td>Aware and supportive</td><td>S</td></tr>
<tr><td><strong>Leading</strong></td><td>Actively driving success</td><td>L</td></tr>
</table>
<p>Track <strong>Current (C)</strong> vs <strong>Desired (D)</strong> engagement for each stakeholder. Close the gap.</p>
<h2>Communications Management Plan</h2>
<table><tr><th>Element</th><th>Defines</th></tr>
<tr><td>Who</td><td>Stakeholder or group</td></tr>
<tr><td>What</td><td>Information needed</td></tr>
<tr><td>When</td><td>Frequency and timing</td></tr>
<tr><td>How</td><td>Method/medium</td></tr>
<tr><td>Who sends</td><td>Responsible person</td></tr>
</table>
<div class="key-point"><strong>90% of a PM's time is spent communicating.</strong> The communications management plan ensures the right people get the right information at the right time in the right format.</div>
`
},

// ============================================================
// SECTION 10: FINAL REVIEW & EXAM STRATEGY
// ============================================================
{
chapter: "Final Review & Exam Strategy",
title: "Key Distinctions",
html: `
<h1>Critical Distinctions</h1>
<p>The exam loves to test whether you can distinguish between similar concepts.</p>
<table><tr><th>A</th><th>vs</th><th>B</th><th>Key Difference</th></tr>
<tr><td>Risk</td><td>vs</td><td>Issue</td><td>Potential future event vs current problem</td></tr>
<tr><td>QA</td><td>vs</td><td>QC</td><td>Process audits vs deliverable inspection</td></tr>
<tr><td>Crashing</td><td>vs</td><td>Fast-tracking</td><td>Add resources (↑cost) vs parallel work (↑risk)</td></tr>
<tr><td>Gold plating</td><td>vs</td><td>Scope creep</td><td>Team adds extras vs unauthorized scope growth</td></tr>
<tr><td>Sprint Review</td><td>vs</td><td>Retrospective</td><td>Demo to stakeholders vs team process improvement</td></tr>
<tr><td>Product Owner</td><td>vs</td><td>Scrum Master</td><td>WHAT to build vs HOW to work</td></tr>
<tr><td>Validate Scope</td><td>vs</td><td>Control Quality</td><td>Customer acceptance vs meets specifications</td></tr>
<tr><td>Prevention</td><td>vs</td><td>Inspection</td><td>Keep errors out vs find errors after</td></tr>
<tr><td>Contingency Reserve</td><td>vs</td><td>Management Reserve</td><td>Known risks (in baseline) vs unknown unknowns (not in baseline)</td></tr>
<tr><td>Resource Leveling</td><td>vs</td><td>Resource Smoothing</td><td>May extend schedule vs stays within float</td></tr>
<tr><td>Analogous Estimate</td><td>vs</td><td>Parametric Estimate</td><td>Expert judgment from similar projects vs mathematical model</td></tr>
<tr><td>Lead</td><td>vs</td><td>Lag</td><td>Overlap (accelerate) vs waiting time (delay)</td></tr>
<tr><td>Assumption</td><td>vs</td><td>Constraint</td><td>Believed true (may not be) vs limitation imposed</td></tr>
<tr><td>OPA</td><td>vs</td><td>EEF</td><td>Internal org assets (can update) vs external factors (can't change)</td></tr>
<tr><td>Velocity</td><td>vs</td><td>Throughput</td><td>Story points/sprint vs items completed/time</td></tr>
</table>
<div class="callout"><div class="callout-title">💡 Pro Tip</div>If two answer choices seem similar, identify the EXACT distinction between them. The exam deliberately includes close-but-wrong answers.</div>
`
},
{
chapter: "Final Review & Exam Strategy",
title: "Exam Day Strategy",
html: `
<h1>Exam Day Strategy</h1>
<h2>Before the Exam</h2>
<ul>
<li>Get a good night's sleep (don't cram the night before)</li>
<li>Eat a solid meal — you need sustained energy for 4 hours</li>
<li>Arrive 30 minutes early (or set up online proctoring early)</li>
<li>Bring two valid IDs (one with photo + signature)</li>
<li>Prepare your brain dump sheet mentally</li>
</ul>
<h2>First 5 Minutes — Brain Dump</h2>
<p>Immediately write down on your scratch paper:</p>
<div class="diagram"><div class="diagram-title">📝 Brain Dump Template</div>
<p><strong>EVM:</strong> CV=EV-AC | SV=EV-PV | CPI=EV/AC | SPI=EV/PV | EAC=BAC/CPI<br>
<strong>PERT:</strong> (O+4M+P)/6 | σ=(P-O)/6<br>
<strong>Channels:</strong> n(n-1)/2<br>
<strong>Conflict:</strong> Collaborate→Compromise→Smooth→Force→Withdraw<br>
<strong>Risk-Threats:</strong> Avoid, Transfer, Mitigate, Accept, Escalate<br>
<strong>Risk-Opps:</strong> Exploit, Share, Enhance, Accept, Escalate<br>
<strong>Tuckman:</strong> Form→Storm→Norm→Perform→Adjourn<br>
<strong>Power:</strong> Expert→Referent→Legitimate→Reward→Coercive</p>
</div>
<h2>Question Strategy</h2>
<table><tr><th>Step</th><th>Action</th></tr>
<tr><td>1</td><td>Read the LAST sentence first (what are they actually asking?)</td></tr>
<tr><td>2</td><td>Identify the domain (People, Process, Business Environment)</td></tr>
<tr><td>3</td><td>Eliminate obviously wrong answers (usually 2 are clearly wrong)</td></tr>
<tr><td>4</td><td>Apply the PMI Decision Tree to remaining options</td></tr>
<tr><td>5</td><td>Choose the MOST correct answer (not just a correct one)</td></tr>
</table>
<h2>Time Management</h2>
<table><tr><th>Block</th><th>Questions</th><th>Target Time</th><th>Pace</th></tr>
<tr><td>Block 1</td><td>Q1-60</td><td>~76 minutes</td><td>76 sec/question</td></tr>
<tr><td>Break 1</td><td>—</td><td>10 minutes</td><td>TAKE IT (deep breaths, snack)</td></tr>
<tr><td>Block 2</td><td>Q61-120</td><td>~76 minutes</td><td>76 sec/question</td></tr>
<tr><td>Break 2</td><td>—</td><td>10 minutes</td><td>TAKE IT</td></tr>
<tr><td>Block 3</td><td>Q121-180</td><td>~76 minutes</td><td>76 sec/question</td></tr>
</table>
<h2>Flag Rules</h2>
<ul>
<li>If a question takes > 2 minutes → <strong>flag it and move on</strong></li>
<li>Don't change answers unless you have a clear reason</li>
<li>Your first instinct is usually correct</li>
<li>Review flagged questions during remaining time</li>
</ul>
<div class="key-point"><strong>Remember:</strong> You don't need to get them all right. ~60-65% correct is likely passing. Stay calm, trust your preparation, and apply the PMI mindset consistently.</div>
`
},
{
chapter: "Final Review & Exam Strategy",
title: "Quick Reference Card",
html: `
<h1>Ultimate Quick Reference Card</h1>
<h2>The 12 Principles</h2>
<table><tr><th>#</th><th>Principle</th><th>One-Liner</th></tr>
<tr><td>1</td><td>Stewardship</td><td>Be ethical and responsible</td></tr>
<tr><td>2</td><td>Team</td><td>Build trust and psychological safety</td></tr>
<tr><td>3</td><td>Stakeholders</td><td>Engage early, often, effectively</td></tr>
<tr><td>4</td><td>Value</td><td>Outcomes over outputs</td></tr>
<tr><td>5</td><td>Systems Thinking</td><td>Consider the bigger picture</td></tr>
<tr><td>6</td><td>Leadership</td><td>Serve, inspire, influence</td></tr>
<tr><td>7</td><td>Tailoring</td><td>Adapt to context</td></tr>
<tr><td>8</td><td>Quality</td><td>Prevent, don't just inspect</td></tr>
<tr><td>9</td><td>Complexity</td><td>Navigate proactively</td></tr>
<tr><td>10</td><td>Risk</td><td>Threats AND opportunities</td></tr>
<tr><td>11</td><td>Adaptability</td><td>Flex and bounce back</td></tr>
<tr><td>12</td><td>Change</td><td>Enable transformation</td></tr>
</table>
<h2>PMI's Preferred Answers</h2>
<div class="grid-2">
<div class="grid-box"><h4>Always Do ✅</h4>
<ul>
<li>Assess before acting</li>
<li>Follow change control</li>
<li>Communicate proactively</li>
<li>Engage stakeholders</li>
<li>Servant leadership</li>
<li>Document lessons learned</li>
<li>Collaborate on conflict</li>
<li>Empower the team</li>
</ul></div>
<div class="grid-box"><h4>Never Do ❌</h4>
<ul>
<li>Gold plate</li>
<li>Skip processes</li>
<li>Hide bad news</li>
<li>Use coercive power</li>
<li>Ignore stakeholders</li>
<li>Act without assessing</li>
<li>Blame team members</li>
<li>Make unilateral decisions</li>
</ul></div>
</div>
<h2>All Formulas</h2>
<div class="formula-box">
<strong>EVM:</strong> CV=EV-AC | SV=EV-PV | CPI=EV/AC | SPI=EV/PV<br>
<strong>Forecast:</strong> EAC=BAC/CPI | ETC=EAC-AC | VAC=BAC-EAC | TCPI=(BAC-EV)/(BAC-AC)<br>
<strong>PERT:</strong> (O+4M+P)/6 | σ=(P-O)/6<br>
<strong>Channels:</strong> n(n-1)/2<br>
<strong>EMV:</strong> Probability × Impact<br>
<strong>Float:</strong> LS-ES or LF-EF<br>
<strong>PTA:</strong> [(Ceiling-Target Price)/Buyer Share] + Target Cost
</div>
<h2>Conflict Resolution (PMI Order of Preference)</h2>
<div class="diagram"><div class="diagram-title">Best → Worst</div>
<div class="flow-row"><div class="flow-box highlight">Collaborate</div><div class="flow-arrow">→</div><div class="flow-box">Compromise</div><div class="flow-arrow">→</div><div class="flow-box">Smooth</div><div class="flow-arrow">→</div><div class="flow-box">Force</div><div class="flow-arrow">→</div><div class="flow-box">Withdraw</div></div>
</div>
<h2>Risk Responses</h2>
<div class="grid-2">
<div class="grid-box"><h4>Threats (Negative)</h4>Avoid → Transfer → Mitigate → Accept → Escalate</div>
<div class="grid-box"><h4>Opportunities (Positive)</h4>Exploit → Share → Enhance → Accept → Escalate</div>
</div>
<div class="callout"><div class="callout-title">🏆 You've Got This</div>Trust your preparation. Apply the PMI mindset. Read questions carefully. Manage your time. You're ready.</div>
`
},

]; // end of defined_pages
