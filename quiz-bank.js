// PMP Comprehensive Question Bank
// 200+ questions covering all three exam domains with proper weighting
// Domain distribution targets: People 42%, Process 50%, Business Environment 8%
// Includes single-answer (type:"single") and multiple-response (type:"multi") questions
// Difficulty: 1=foundational, 2=intermediate, 3=advanced/scenario-heavy

const questionBank = [

// ═══════════════════════════════════════════════════════════════
// PEOPLE DOMAIN (42% of exam) — ~84 questions target
// Topics: Leadership, Team, Conflict, Stakeholders, Communication,
//         Emotional Intelligence, Motivation, Coaching, Ethics
// ═══════════════════════════════════════════════════════════════

// --- Leadership & Servant Leadership ---
{id:"P001",q:"A project manager notices two team members disagreeing about the technical approach for a key deliverable. What should the PM do FIRST?",
o:["Tell both team members to follow the approach in the project plan","Escalate the disagreement to the project sponsor","Facilitate a collaborative discussion to understand both perspectives","Assign the decision to the more senior team member"],
a:2,d:"People",t:["leadership","conflict"],diff:1,type:"single",
e:"Servant leadership. The PM facilitates resolution, doesn't dictate, escalate prematurely, or defer to seniority. Collaborate/Problem Solve is PMI's preferred conflict resolution technique."},

{id:"P002",q:"Which leadership style does PMI most strongly advocate for project managers?",
o:["Autocratic","Laissez-faire","Servant leadership","Transactional"],
a:2,d:"People",t:["leadership"],diff:1,type:"single",
e:"PMI's preferred leadership model. The PM serves the team, removes impediments, and facilitates rather than directing."},

{id:"P003",q:"A PM is working with a highly experienced, self-managing team. Which leadership style is most appropriate?",
o:["Directive","Coaching","Delegating / Laissez-faire","Autocratic"],
a:2,d:"People",t:["leadership","situational"],diff:2,type:"single",
e:"Highly experienced, self-managing teams need minimal direction. Delegate and trust."},

{id:"P004",q:"A team member comes to you with a problem they're struggling to solve. As a servant leader, what should you do?",
o:["Solve the problem for them to save time","Tell them to figure it out on their own","Coach them through the problem-solving process","Escalate the problem to their functional manager"],
a:2,d:"People",t:["leadership","coaching"],diff:1,type:"single",
e:"Servant leadership means developing the team's capabilities through coaching."},

{id:"P005",q:"A PM needs to influence a decision but has no formal authority. Which approach is most appropriate?",
o:["Escalate to the sponsor to force the decision","Use expert power and relationship-building to influence","Ignore the decision-maker and proceed independently","Document the disagreement and move on"],
a:1,d:"People",t:["leadership","influence"],diff:2,type:"single",
e:"Without formal authority, influence through expertise, credibility, and relationships."},

{id:"P006",q:"A project manager in a matrix organization is having difficulty getting resources committed from functional managers. What should the PM do?",
o:["Escalate immediately to the project sponsor","Build relationships with functional managers and negotiate resource availability","Hire external contractors without approval","Reduce the project scope to match available resources"],
a:1,d:"People",t:["leadership","influence","matrix"],diff:2,type:"single",
e:"In matrix organizations, PMs must influence without authority. Building relationships and negotiating is the appropriate first step."},

{id:"P007",q:"Which type of power is most sustainable for long-term project success?",
o:["Positional/Legitimate power","Coercive power","Expert and referent power","Reward power"],
a:2,d:"People",t:["leadership","power"],diff:2,type:"single",
e:"Expert power (knowledge/skills) and referent power (respect/trust) are the most sustainable. Positional, coercive, and reward power are less effective long-term."},

{id:"P008",q:"A new PM takes over a troubled project. The team is demoralized and distrustful of management. What should the PM prioritize FIRST?",
o:["Review the project schedule and identify delays","Build trust with the team through transparency and active listening","Implement new performance metrics","Report the team's attitude to senior management"],
a:1,d:"People",t:["leadership","trust","team"],diff:2,type:"single",
e:"Trust is foundational. Without it, no process improvement will succeed. The PM must first establish psychological safety and credibility."},

// --- Team Development & Tuckman's Model ---
{id:"P009",q:"A team is experiencing frequent arguments and power struggles. According to Tuckman's model, which stage is the team in?",
o:["Forming","Storming","Norming","Performing"],
a:1,d:"People",t:["team","tuckman"],diff:1,type:"single",
e:"Storming is characterized by conflicts, power struggles, and disagreements as team members push boundaries."},

{id:"P010",q:"A PM is working with a team that has never worked together before. Members are polite but uncertain about their roles. What should the PM do?",
o:["Let the team figure things out on their own","Provide clear direction, clarify roles, and establish ground rules","Immediately delegate all decisions to the team","Focus on building the project schedule"],
a:1,d:"People",t:["team","tuckman","leadership"],diff:1,type:"single",
e:"The team is in the Forming stage. The PM should provide structure, clarify roles, and set expectations."},

{id:"P011",q:"A team has been working together for several months and has established effective working relationships. They resolve conflicts independently and deliver consistently. Which Tuckman stage are they in?",
o:["Storming","Norming","Performing","Adjourning"],
a:2,d:"People",t:["team","tuckman"],diff:1,type:"single",
e:"Performing teams are self-managing, resolve conflicts independently, and deliver consistently without heavy PM intervention."},

{id:"P012",q:"A high-performing team just lost two key members and gained three new ones. What should the PM expect?",
o:["The team will continue performing at the same level","The team will regress to an earlier Tuckman stage","The new members will immediately adapt to the team's norms","Productivity will increase due to fresh perspectives"],
a:1,d:"People",t:["team","tuckman"],diff:2,type:"single",
e:"Significant membership changes cause teams to regress, typically to Forming or Storming, as new dynamics must be established."},

{id:"P013",q:"What is the PM's primary role during the Storming phase of team development?",
o:["Step back and let conflicts resolve naturally","Mediate conflicts and help the team establish norms","Replace team members who are causing conflict","Escalate all conflicts to the sponsor"],
a:1,d:"People",t:["team","tuckman","conflict"],diff:2,type:"single",
e:"During Storming, the PM actively mediates, facilitates resolution, and helps the team move toward establishing norms."},

// --- Conflict Resolution ---
{id:"P014",q:"Which conflict resolution technique does PMI generally prefer?",
o:["Force/Direct","Withdraw/Avoid","Collaborate/Problem Solve","Smooth/Accommodate"],
a:2,d:"People",t:["conflict"],diff:1,type:"single",
e:"PMI prefers collaborative problem-solving (win-win) over all other conflict resolution techniques."},

{id:"P015",q:"Two team members have a fundamental disagreement about architecture. The deadline is tomorrow and a decision must be made immediately. Which conflict resolution approach is most appropriate?",
o:["Collaborate/Problem Solve","Force/Direct","Compromise","Withdraw/Avoid"],
a:1,d:"People",t:["conflict","situational"],diff:3,type:"single",
e:"When time is critical and a decision must be made immediately, Force/Direct (the PM decides) may be necessary. Collaboration is preferred but requires time."},

{id:"P016",q:"A team member consistently avoids confrontation by agreeing with whoever spoke last. Which conflict resolution style are they using?",
o:["Compromise","Smooth/Accommodate","Withdraw/Avoid","Collaborate"],
a:1,d:"People",t:["conflict"],diff:2,type:"single",
e:"Smooth/Accommodate means giving in to maintain harmony. The person prioritizes relationships over their own position."},

{id:"P017",q:"A PM discovers that a long-standing conflict between two team members is actually rooted in unclear role definitions. What should the PM do?",
o:["Separate the team members onto different work streams","Clarify roles and responsibilities using a RACI matrix","Let them work it out themselves","Replace one of the team members"],
a:1,d:"People",t:["conflict","team"],diff:2,type:"single",
e:"Address the root cause. If the conflict stems from unclear roles, clarifying responsibilities resolves the underlying issue."},

// --- Stakeholder Engagement ---
{id:"P018",q:"A stakeholder who was initially resistant is now actively supporting the project. They moved from which level to which?",
o:["Unaware to Neutral","Resistant to Supportive","Neutral to Leading","Supportive to Leading"],
a:1,d:"People",t:["stakeholder"],diff:1,type:"single",
e:"The engagement levels are: Unaware → Resistant → Neutral → Supportive → Leading."},

{id:"P019",q:"A key stakeholder has high power but low interest in the project. What engagement strategy is most appropriate?",
o:["Manage closely with frequent detailed updates","Keep satisfied with periodic high-level updates","Monitor with minimal effort","Inform regularly with detailed reports"],
a:1,d:"People",t:["stakeholder","communication"],diff:2,type:"single",
e:"High power/low interest stakeholders should be kept satisfied. Don't overwhelm them with details, but ensure they remain supportive."},

{id:"P020",q:"During a stakeholder meeting, a senior executive publicly criticizes the project approach. What should the PM do?",
o:["Defend the approach aggressively to maintain credibility","Acknowledge the concern, ask clarifying questions, and offer to discuss offline","Immediately change the approach to satisfy the executive","Ignore the criticism and continue the presentation"],
a:1,d:"People",t:["stakeholder","communication","conflict"],diff:3,type:"single",
e:"Acknowledge concerns professionally, seek to understand, and offer to address in detail offline. Don't be defensive or dismissive."},

{id:"P021",q:"A project has 15 stakeholders. A new stakeholder is added. How many additional communication channels are created?",
o:["15","14","16","30"],
a:0,d:"People",t:["stakeholder","communication"],diff:2,type:"single",
e:"Adding one stakeholder to n existing stakeholders creates n new channels. 15 existing stakeholders = 15 new channels."},

{id:"P022",q:"Which tool helps identify stakeholders' current and desired engagement levels?",
o:["Power/Interest Grid","Stakeholder Engagement Assessment Matrix","RACI Chart","Communication Management Plan"],
a:1,d:"People",t:["stakeholder"],diff:2,type:"single",
e:"The Stakeholder Engagement Assessment Matrix plots current (C) vs desired (D) engagement levels for each stakeholder."},

// --- Communication ---
{id:"P023",q:"What is the formula for communication channels?",
o:["n × 2","n(n+1) / 2","n(n-1) / 2","n² / 2"],
a:2,d:"People",t:["communication"],diff:1,type:"single",
e:"Where n = number of stakeholders. Example: 10 stakeholders = 10(9)/2 = 45 channels."},

{id:"P024",q:"A project has 10 stakeholders. How many communication channels exist?",
o:["20","45","55","100"],
a:1,d:"People",t:["communication"],diff:1,type:"single",
e:"n(n-1)/2 = 10(9)/2 = 45 communication channels."},

{id:"P025",q:"A PM notices that important information is not reaching all team members. What should the PM review FIRST?",
o:["The project schedule","The communication management plan","The risk register","The stakeholder register"],
a:1,d:"People",t:["communication"],diff:2,type:"single",
e:"Communication breakdowns indicate the communication management plan needs review — it defines who gets what information, when, and how."},

{id:"P026",q:"Which communication method is most effective for conveying complex, sensitive information?",
o:["Email","Written report","Face-to-face conversation","Group presentation"],
a:2,d:"People",t:["communication"],diff:2,type:"single",
e:"Face-to-face is the richest communication channel — it includes verbal, non-verbal, and allows immediate feedback. Best for complex/sensitive topics."},

// --- Emotional Intelligence ---
{id:"P027",q:"Which emotional intelligence component involves managing your own emotional responses?",
o:["Empathy","Social skills","Self-regulation","Motivation"],
a:2,d:"People",t:["emotional-intelligence"],diff:1,type:"single",
e:"Self-regulation is managing your own emotional responses. Self-awareness is understanding them."},

{id:"P028",q:"A PM receives harsh criticism from a stakeholder in a public meeting. The PM remains calm, acknowledges the feedback, and suggests a follow-up discussion. Which EI component is the PM demonstrating?",
o:["Self-awareness","Self-regulation","Empathy","Social skills"],
a:1,d:"People",t:["emotional-intelligence"],diff:2,type:"single",
e:"Self-regulation is the ability to control emotional reactions in challenging situations. The PM managed their response rather than reacting defensively."},

{id:"P029",q:"A team member seems disengaged and their work quality has declined. The PM schedules a private conversation to understand what's happening. Which EI component is the PM primarily using?",
o:["Self-awareness","Self-regulation","Empathy","Motivation"],
a:2,d:"People",t:["emotional-intelligence","coaching"],diff:2,type:"single",
e:"Empathy is understanding others' feelings and perspectives. The PM is seeking to understand the team member's situation."},

// --- Motivation Theories ---
{id:"P030",q:"Which motivation theory distinguishes between hygiene factors and motivators?",
o:["Maslow's Hierarchy of Needs","McGregor's Theory X and Theory Y","Herzberg's Two-Factor Theory","McClelland's Theory of Needs"],
a:2,d:"People",t:["motivation"],diff:1,type:"single",
e:"Herzberg distinguishes hygiene factors (prevent dissatisfaction) from motivators (create satisfaction)."},

{id:"P031",q:"According to Herzberg, which of the following is a hygiene factor?",
o:["Recognition","Achievement","Salary","Responsibility"],
a:2,d:"People",t:["motivation"],diff:2,type:"single",
e:"Hygiene factors (salary, working conditions, job security, company policies) prevent dissatisfaction but don't motivate. Motivators (recognition, achievement, responsibility, growth) create satisfaction."},

{id:"P032",q:"A team member is motivated primarily by the desire to influence others and lead. According to McClelland's Theory of Needs, which need dominates?",
o:["Need for Achievement","Need for Affiliation","Need for Power","Need for Security"],
a:2,d:"People",t:["motivation"],diff:2,type:"single",
e:"McClelland's three needs: Achievement (accomplish goals), Affiliation (belong/relationships), Power (influence/lead others)."},

{id:"P033",q:"According to McGregor's Theory X, managers believe that employees:",
o:["Are self-motivated and seek responsibility","Need to be closely supervised and controlled","Work best in collaborative environments","Are primarily motivated by recognition"],
a:1,d:"People",t:["motivation"],diff:2,type:"single",
e:"Theory X assumes people dislike work and must be coerced. Theory Y assumes people are self-motivated and seek responsibility."},

// --- Ethics ---
{id:"P034",q:"A project manager discovers that a team member has been falsifying test results. What should the PM do?",
o:["Give the team member a warning and monitor future behavior","Ignore it if the deliverable still meets quality standards","Report the issue to appropriate management immediately","Discuss it privately and ask the team member to correct the results"],
a:2,d:"People",t:["ethics"],diff:1,type:"single",
e:"Ethics first. Falsifying test results is a serious ethical violation. PMI's Code of Ethics requires honesty and responsibility."},

{id:"P035",q:"What are the four values of PMI's Code of Ethics?",
o:["Quality, Scope, Time, Cost","Responsibility, Respect, Fairness, Honesty","Integrity, Transparency, Accountability, Trust","Leadership, Teamwork, Communication, Ethics"],
a:1,d:"People",t:["ethics"],diff:1,type:"single",
e:"These are the four values of PMI's Code of Ethics and Professional Conduct."},

{id:"P036",q:"A vendor offers the PM tickets to a major sporting event during contract negotiations. What should the PM do?",
o:["Accept — it's just a friendly gesture","Accept but disclose it to management","Decline the offer to avoid any appearance of conflict of interest","Accept only if the tickets are under $50 in value"],
a:2,d:"People",t:["ethics"],diff:2,type:"single",
e:"During active negotiations, accepting gifts creates a conflict of interest. PMI's Code of Ethics requires fairness and avoiding conflicts of interest."},

{id:"P037",q:"A PM discovers that the project's business case was based on inflated market projections. What should the PM do?",
o:["Continue the project since it's already approved","Report the finding to the sponsor and recommend reassessment","Adjust the projections quietly and continue","Ignore it — the business case is not the PM's responsibility"],
a:1,d:"People",t:["ethics","business-case"],diff:3,type:"single",
e:"Honesty and responsibility require reporting inaccurate information, even if it threatens the project's continuation."},

{id:"P038",q:"A PM is asked to sign off on a deliverable they know doesn't meet quality standards. The sponsor is pressuring for delivery. What should the PM do?",
o:["Sign off to maintain the relationship with the sponsor","Refuse to sign and document the quality concerns","Sign off but note concerns in the project files","Delegate the sign-off to someone else"],
a:1,d:"People",t:["ethics","quality"],diff:2,type:"single",
e:"PMI's Code of Ethics requires honesty. The PM must not misrepresent the quality of deliverables regardless of pressure."},

// --- Coaching & Mentoring ---
{id:"P039",q:"What is the primary difference between coaching and mentoring?",
o:["Coaching is short-term and task-focused; mentoring is long-term and career-focused","Coaching is for senior staff; mentoring is for junior staff","Coaching is formal; mentoring is informal","There is no difference"],
a:0,d:"People",t:["coaching"],diff:2,type:"single",
e:"Coaching focuses on specific skills/tasks in the short term. Mentoring is a longer-term relationship focused on career development."},

{id:"P040",q:"A PM notices a team member has potential for growth but lacks confidence. What approach should the PM take?",
o:["Assign them only easy tasks to build confidence gradually","Provide stretch assignments with support and regular feedback","Wait for them to ask for more responsibility","Recommend they take external training courses"],
a:1,d:"People",t:["coaching","team"],diff:2,type:"single",
e:"Stretch assignments with support develop capability and confidence. Servant leaders develop their team members."},

// --- Virtual/Distributed Teams ---
{id:"P041",q:"A PM is managing a team distributed across 4 time zones. What is the MOST important consideration for effective collaboration?",
o:["Requiring all team members to work the same hours","Establishing overlapping core hours and using asynchronous communication tools","Holding all meetings at a time convenient for the PM","Reducing the team size to fit one time zone"],
a:1,d:"People",t:["team","virtual"],diff:2,type:"single",
e:"Distributed teams need overlapping hours for synchronous work and strong async tools for everything else. Forcing one schedule is impractical."},

{id:"P042",q:"Which challenge is MOST unique to virtual teams compared to co-located teams?",
o:["Conflict resolution","Building trust and rapport without face-to-face interaction","Resource allocation","Schedule management"],
a:1,d:"People",t:["team","virtual"],diff:2,type:"single",
e:"Trust-building is significantly harder without informal face-to-face interactions. Virtual teams require intentional relationship-building activities."},

// --- Diversity & Inclusion ---
{id:"P043",q:"A team member from a different cultural background communicates very indirectly, which is causing misunderstandings. What should the PM do?",
o:["Ask the team member to be more direct","Educate the team about different communication styles and establish team norms","Replace the team member with someone who communicates more directly","Ignore the issue — it will resolve itself"],
a:1,d:"People",t:["team","diversity","communication"],diff:2,type:"single",
e:"Cultural awareness and adaptation. The PM should help the team understand different styles and create inclusive norms."},

{id:"P044",q:"What is psychological safety in a project team?",
o:["Physical safety measures in the workplace","An environment where team members feel safe to speak up and admit mistakes","Insurance coverage for team members","A risk management technique"],
a:1,d:"People",t:["team","psychological-safety"],diff:1,type:"single",
e:"Psychological safety means people can take interpersonal risks without fear of punishment."},

// --- Negotiation ---
{id:"P045",q:"A PM is negotiating with a vendor for better pricing. The vendor is firm on price but flexible on delivery timeline. What negotiation approach should the PM use?",
o:["Walk away and find another vendor","Accept the vendor's price without negotiation","Explore trade-offs — perhaps accept the price in exchange for faster delivery or additional services","Threaten to cancel the contract"],
a:2,d:"People",t:["negotiation"],diff:2,type:"single",
e:"Integrative (win-win) negotiation looks for creative solutions where both parties gain value through trade-offs."},

{id:"P046",q:"Which negotiation outcome does PMI prefer?",
o:["Win-Lose","Lose-Win","Win-Win","Compromise"],
a:2,d:"People",t:["negotiation"],diff:1,type:"single",
e:"PMI prefers win-win (collaborative/integrative) negotiation where both parties achieve their key objectives."},

// --- Additional People Questions ---
{id:"P047",q:"A Scrum Master notices that one team member dominates every discussion while others remain silent. What should the Scrum Master do?",
o:["Let the team dynamics play out naturally","Use facilitation techniques to ensure all voices are heard","Speak to the dominant member privately and ask them to talk less","Remove the dominant member from the team"],
a:1,d:"People",t:["team","facilitation","agile"],diff:2,type:"single",
e:"The Scrum Master facilitates balanced participation. Techniques include round-robin, silent brainstorming, or timeboxed speaking."},

{id:"P048",q:"During a sprint retrospective, a team member suggests a process improvement. What should the Scrum Master do?",
o:["Evaluate the suggestion and decide whether to implement it","Facilitate a team discussion about the suggestion","Add it to the product backlog for the PO to prioritize","Reject it if it doesn't align with Scrum guidelines"],
a:1,d:"People",t:["team","agile","facilitation"],diff:1,type:"single",
e:"The Scrum Master facilitates, doesn't decide. Process improvements belong to the team."},

{id:"P049",q:"A team member consistently delivers late but produces excellent quality work. How should the PM address this?",
o:["Accept the late delivery since quality is high","Have a private conversation to understand barriers and collaboratively find solutions","Publicly call out the lateness in team meetings","Assign their work to faster team members"],
a:1,d:"People",t:["coaching","team"],diff:2,type:"single",
e:"Address performance issues privately and collaboratively. Understand root causes before jumping to solutions."},

{id:"P050",q:"Which of the following BEST describes transformational leadership?",
o:["Leading through rewards and punishments","Inspiring and motivating the team toward a shared vision","Maintaining the status quo efficiently","Delegating all decisions to the team"],
a:1,d:"People",t:["leadership"],diff:2,type:"single",
e:"Transformational leaders inspire, motivate, and elevate their teams toward a compelling vision. Transactional leaders use rewards/punishments."},


{id:"P051",q:"A functional manager refuses to release a promised resource to the project. What should the PM do FIRST?",
o:["Escalate to the project sponsor immediately","Discuss the situation with the functional manager to understand constraints and negotiate","File a formal complaint with HR","Adjust the project plan to work without the resource"],
a:1,d:"People",t:["negotiation","matrix","stakeholder"],diff:2,type:"single",
e:"Always try to resolve at the lowest level first. Understand the functional manager's constraints before escalating."},

{id:"P052",q:"A team is transitioning from predictive to agile. Team members are resistant to the change. What should the PM do?",
o:["Force the transition immediately — the decision has been made","Provide training, coaching, and allow gradual adoption","Let resistant members leave the team","Abandon the transition and stay predictive"],
a:1,d:"People",t:["change","team","agile"],diff:2,type:"single",
e:"Change management requires empathy, training, and gradual adoption. Forcing change creates more resistance."},

{id:"P053",q:"Which of the following is an example of active listening?",
o:["Preparing your response while the other person is speaking","Paraphrasing what was said and asking clarifying questions","Nodding while checking your phone","Interrupting to share your own experience"],
a:1,d:"People",t:["communication"],diff:1,type:"single",
e:"Active listening involves full attention, paraphrasing to confirm understanding, and asking clarifying questions."},

{id:"P054",q:"A PM must deliver bad news to stakeholders about a significant schedule delay. What is the BEST approach?",
o:["Delay the communication until you have a solution","Be transparent about the delay, explain the cause, and present mitigation options","Minimize the severity to avoid panic","Send an email to avoid face-to-face confrontation"],
a:1,d:"People",t:["communication","stakeholder"],diff:2,type:"single",
e:"Transparency and honesty are PMI values. Deliver bad news promptly with context and options. Don't hide or minimize."},

{id:"P055",q:"What is the primary purpose of a team charter?",
o:["To formally authorize the project","To document team agreements on working norms, values, and ground rules","To assign tasks to team members","To define the project scope"],
a:1,d:"People",t:["team"],diff:2,type:"single",
e:"A team charter establishes shared agreements about how the team will work together — communication norms, decision-making, conflict resolution, etc."},

{id:"P056",q:"A PM observes that a team member is experiencing burnout. What should the PM do?",
o:["Ignore it — personal issues aren't the PM's concern","Redistribute workload and have a supportive conversation about sustainable pace","Tell them to take a vacation","Report them to HR for performance issues"],
a:1,d:"People",t:["team","servant-leadership"],diff:2,type:"single",
e:"Servant leaders care for their team's wellbeing. Address burnout proactively through workload management and supportive dialogue."},

{id:"P057",q:"In a cross-functional team, members report to both the PM and their functional managers. A team member receives conflicting priorities. What should the PM do?",
o:["Tell the team member to prioritize project work","Collaborate with the functional manager to align priorities","Escalate to the PMO","Remove the team member from the project"],
a:1,d:"People",t:["matrix","stakeholder","negotiation"],diff:2,type:"single",
e:"In matrix organizations, the PM must collaborate with functional managers to resolve priority conflicts."},

{id:"P058",q:"Which of the following BEST describes the concept of 'emotional wake'?",
o:["The emotional impact a leader's words and actions leave on others","The time it takes to recover from a project failure","Team morale after a sprint","The emotional stages of project closure"],
a:0,d:"People",t:["emotional-intelligence","leadership"],diff:3,type:"single",
e:"Emotional wake is the lasting emotional impact that a leader's behavior has on others. Effective leaders are aware of the wake they create."},

{id:"P059",q:"A PM is facilitating a meeting where two stakeholders have opposing views. Both are becoming emotional. What should the PM do?",
o:["End the meeting immediately","Acknowledge both perspectives, refocus on shared objectives, and suggest a structured approach to evaluate options","Side with the stakeholder who has more authority","Let them argue until one concedes"],
a:1,d:"People",t:["facilitation","conflict","stakeholder"],diff:3,type:"single",
e:"Effective facilitation acknowledges emotions, refocuses on objectives, and provides structure for productive dialogue."},

{id:"P060",q:"Select TWO characteristics of high-performing teams:",
o:["Members avoid all conflict","Members hold each other accountable","The PM makes all decisions","Members trust each other and communicate openly","Members work independently without collaboration"],
a:[1,3],d:"People",t:["team"],diff:2,type:"multi",
e:"High-performing teams have mutual accountability and trust with open communication. Healthy conflict is normal; avoiding all conflict is dysfunctional."},

{id:"P061",q:"A project team includes members from five different countries. Select TWO actions the PM should take to promote effective collaboration:",
o:["Require all communication in one language only","Establish inclusive meeting practices that accommodate different time zones","Ignore cultural differences to treat everyone equally","Create opportunities for informal relationship-building","Assign work based on nationality"],
a:[1,3],d:"People",t:["team","diversity","virtual"],diff:2,type:"multi",
e:"Inclusive practices and relationship-building opportunities help diverse teams collaborate effectively. Ignoring differences doesn't create equity."},

{id:"P062",q:"A team member privately tells the PM they disagree with a decision but didn't speak up in the meeting. What does this indicate?",
o:["The team member is being insubordinate","The team lacks psychological safety","The decision was wrong","The team member needs to be more assertive"],
a:1,d:"People",t:["psychological-safety","team"],diff:2,type:"single",
e:"When people don't feel safe speaking up in group settings, it indicates a lack of psychological safety on the team."},

{id:"P063",q:"Which approach to performance feedback is MOST aligned with PMI's recommendations?",
o:["Annual performance reviews only","Continuous, timely feedback focused on behaviors and outcomes","Feedback only when problems occur","Written feedback through formal channels only"],
a:1,d:"People",t:["coaching","team"],diff:2,type:"single",
e:"PMI advocates for continuous, timely feedback. Waiting for annual reviews or only giving negative feedback is ineffective."},

{id:"P064",q:"A PM inherits a team with a toxic culture of blame. What is the FIRST step to change this?",
o:["Replace all team members","Model accountability and vulnerability as the leader","Implement strict punishment for blame behavior","Ignore it and focus on deliverables"],
a:1,d:"People",t:["leadership","team","psychological-safety"],diff:3,type:"single",
e:"Culture change starts with leadership modeling. The PM must demonstrate the behavior they want to see — owning mistakes, being vulnerable, and focusing on learning over blame."},

// ═══════════════════════════════════════════════════════════════
// PROCESS DOMAIN (50% of exam) — ~100 questions target
// Topics: Planning, Scheduling, Cost/EVM, Risk, Quality, Agile/Scrum,
//         Change Control, Procurement, WBS, Critical Path, Hybrid
// ═══════════════════════════════════════════════════════════════

// --- Project Initiation & Charter ---
{id:"R001",q:"What document formally authorizes a project and gives the PM authority to apply organizational resources?",
o:["Project management plan","Project charter","Statement of work","Business case"],
a:1,d:"Process",t:["initiation","charter"],diff:1,type:"single",
e:"The charter formally authorizes the project and the PM. The project management plan comes after. The SOW and business case are inputs to the charter."},

{id:"R002",q:"Which of the following is NOT typically included in a project charter?",
o:["High-level requirements","Project purpose and justification","Detailed work breakdown structure","Summary milestone schedule"],
a:2,d:"Process",t:["initiation","charter"],diff:2,type:"single",
e:"The WBS is created during planning, not initiation. The charter contains high-level information only."},

{id:"R003",q:"Who is responsible for issuing the project charter?",
o:["The project manager","The project sponsor or initiator","The project team","The PMO"],
a:1,d:"Process",t:["initiation","charter"],diff:1,type:"single",
e:"The sponsor (or initiator external to the project) issues the charter. The PM may help write it but doesn't authorize it."},

// --- PMBOK 7 Framework ---
{id:"R004",q:"How many performance domains are defined in PMBOK 7th Edition?",
o:["5","8","10","12"],
a:1,d:"Process",t:["pmbok7","framework"],diff:1,type:"single",
e:"PMBOK 7 defines 8 performance domains: Stakeholders, Team, Development Approach & Life Cycle, Planning, Project Work, Delivery, Measurement, Uncertainty."},

{id:"R005",q:"Which of the following is NOT one of the 12 PMBOK 7 principles?",
o:["Stewardship","Tailoring","Earned Value","Systems Thinking"],
a:2,d:"Process",t:["pmbok7","principles"],diff:1,type:"single",
e:"The 12 principles are: Stewardship, Team, Stakeholders, Value, Systems Thinking, Leadership, Tailoring, Quality, Complexity, Risk, Adaptability & Resilience, Change. Earned Value is a measurement technique."},

{id:"R006",q:"Which of the following is NOT one of the 8 PMBOK 7 performance domains?",
o:["Stakeholders","Procurement","Uncertainty","Measurement"],
a:1,d:"Process",t:["pmbok7","framework"],diff:1,type:"single",
e:"Procurement is a knowledge area from PMBOK 6, not a performance domain in PMBOK 7."},

{id:"R007",q:"According to PMBOK 7, what is the ultimate measure of project success?",
o:["On-time delivery","Budget compliance","Value delivered","Stakeholder satisfaction"],
a:2,d:"Process",t:["pmbok7","principles"],diff:1,type:"single",
e:"Principle 4 (Value) states that value — outcomes and benefits — is the ultimate measure."},

{id:"R008",q:"Which PMBOK 7 principle states that every project is unique and requires adaptation?",
o:["Adaptability and Resilience","Complexity","Tailoring","Systems Thinking"],
a:2,d:"Process",t:["pmbok7","principles"],diff:1,type:"single",
e:"Tailoring means adapting the approach based on the specific project context."},

{id:"R009",q:"Which PMBOK 7 principle emphasizes that projects exist within larger systems?",
o:["Stewardship","Systems Thinking","Complexity","Change"],
a:1,d:"Process",t:["pmbok7","principles"],diff:1,type:"single",
e:"Systems Thinking recognizes that projects exist within larger systems and changes can ripple."},

{id:"R010",q:"What correctly describes the relationship between the 3 exam domains and the 8 performance domains?",
o:["They are the same thing with different names","The 3 exam domains structure the exam; the 8 performance domains organize PMBOK 7 activities","The 8 performance domains replaced the 3 exam domains","The 3 exam domains are subsets of the 8 performance domains"],
a:1,d:"Process",t:["pmbok7","exam"],diff:2,type:"single",
e:"Different frameworks for different purposes."},

// --- Planning & WBS ---
{id:"R011",q:"What is the primary purpose of a Work Breakdown Structure (WBS)?",
o:["To assign resources to tasks","To decompose the project scope into manageable components","To create the project schedule","To estimate project costs"],
a:1,d:"Process",t:["planning","wbs"],diff:1,type:"single",
e:"The WBS breaks down the total scope of work into smaller, manageable pieces."},

{id:"R012",q:"The lowest level of the WBS is called:",
o:["Activity","Task","Work package","Deliverable"],
a:2,d:"Process",t:["planning","wbs"],diff:1,type:"single",
e:"Work packages are the lowest level of the WBS. Activities are further decompositions used for scheduling."},

{id:"R013",q:"A PM discovers that a work package is too large to estimate accurately. What should they do?",
o:["Estimate it anyway using expert judgment","Decompose it further into smaller work packages","Assign it to the most experienced team member","Add a contingency reserve to the estimate"],
a:1,d:"Process",t:["planning","wbs"],diff:2,type:"single",
e:"If a work package can't be estimated with confidence, it needs further decomposition."},

// --- Scheduling & Critical Path ---
{id:"R014",q:"What is the critical path in a project network diagram?",
o:["The shortest path through the network","The path with the most resources","The longest path, determining minimum project duration","The path with the highest cost"],
a:2,d:"Process",t:["scheduling","critical-path"],diff:1,type:"single",
e:"The critical path is the longest sequence of dependent activities. Activities on it have zero float."},

{id:"R015",q:"An activity on the critical path is delayed by 3 days. What is the impact?",
o:["No impact — float absorbs the delay","The project end date is delayed by 3 days","Only the next activity is affected","The impact depends on resource availability"],
a:1,d:"Process",t:["scheduling","critical-path"],diff:1,type:"single",
e:"Critical path activities have zero float. Any delay directly extends the project duration."},

{id:"R016",q:"Crashing increases ___; fast-tracking increases ___.",
o:["risk; cost","cost; risk","cost; cost","risk; risk"],
a:1,d:"Process",t:["scheduling","compression"],diff:1,type:"single",
e:"Crashing adds resources (more cost). Fast-tracking runs activities in parallel (more risk of rework)."},

{id:"R017",q:"A project has four paths: A=20 days, B=25 days, C=22 days, D=18 days. What is the critical path duration and which path has the most float?",
o:["25 days; Path D has the most float","25 days; Path A has the most float","22 days; Path D has the most float","20 days; Path B has the most float"],
a:0,d:"Process",t:["scheduling","critical-path"],diff:2,type:"single",
e:"The critical path is the longest (25 days, Path B). Path D (18 days) has the most float: 25-18 = 7 days."},

{id:"R018",q:"What is the difference between free float and total float?",
o:["Free float is for critical activities; total float is for non-critical","Free float is the delay possible without affecting the next activity; total float is delay without affecting the project end date","Free float is calculated first; total float is calculated second","There is no difference"],
a:1,d:"Process",t:["scheduling","critical-path"],diff:2,type:"single",
e:"Free float = delay without affecting successor's early start. Total float = delay without affecting project end date."},

{id:"R019",q:"A PM needs to shorten the schedule. The critical path has activities that can be done in parallel with some risk. Which technique should be used?",
o:["Crashing","Fast-tracking","Resource leveling","Schedule compression"],
a:1,d:"Process",t:["scheduling","compression"],diff:2,type:"single",
e:"Fast-tracking runs sequential activities in parallel. It increases risk but doesn't add cost like crashing does."},

// --- Cost Management & EVM ---
{id:"R020",q:"A project has a BAC of $100,000. After spending $60,000 (AC), the team has completed work worth $50,000 (EV). What is the CPI?",
o:["0.83","1.20","0.50","1.67"],
a:0,d:"Process",t:["cost","evm"],diff:1,type:"single",
e:"CPI = EV / AC = $50,000 / $60,000 = 0.83. For every dollar spent, only $0.83 of value was earned (over budget)."},

{id:"R021",q:"A CPI of 0.85 indicates what?",
o:["The project is 85% complete","The project is under budget","For every dollar spent, only $0.85 of value has been earned","The project is 15% ahead of schedule"],
a:2,d:"Process",t:["cost","evm"],diff:1,type:"single",
e:"CPI < 1.0 means over budget. You're getting 85 cents of value for every dollar spent."},

{id:"R022",q:"What is the formula for Estimate at Completion (EAC) assuming current CPI will continue?",
o:["BAC / CPI","BAC × CPI","AC + (BAC - EV)","AC + (BAC - EV) / CPI"],
a:0,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"EAC = BAC / CPI when you expect the current cost performance to continue for the remainder of the project."},

{id:"R023",q:"A project has: BAC=$200,000, EV=$80,000, AC=$100,000, PV=$90,000. What is the SPI?",
o:["0.80","0.89","1.11","1.25"],
a:1,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"SPI = EV / PV = $80,000 / $90,000 = 0.89. The project is behind schedule (only 89% of planned work completed)."},

{id:"R024",q:"What does a negative Schedule Variance (SV) indicate?",
o:["The project is ahead of schedule","The project is behind schedule","The project is under budget","The project is over budget"],
a:1,d:"Process",t:["cost","evm"],diff:1,type:"single",
e:"SV = EV - PV. Negative SV means less work completed than planned = behind schedule."},

{id:"R025",q:"What is the Variance at Completion (VAC) if BAC=$500,000 and EAC=$550,000?",
o:["+$50,000 (under budget)","-$50,000 (over budget)","$550,000","$500,000"],
a:1,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"VAC = BAC - EAC = $500,000 - $550,000 = -$50,000. Negative VAC means the project will finish over budget."},

{id:"R026",q:"Which EVM metric tells you how much the remaining work will cost?",
o:["EAC (Estimate at Completion)","ETC (Estimate to Complete)","VAC (Variance at Completion)","TCPI (To-Complete Performance Index)"],
a:1,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"ETC = how much more money is needed to finish. EAC = total cost at completion. VAC = budget variance at completion."},

{id:"R027",q:"A project has CPI=0.9 and SPI=1.1. What is the project's status?",
o:["Over budget and behind schedule","Under budget and ahead of schedule","Over budget and ahead of schedule","Under budget and behind schedule"],
a:2,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"CPI<1 = over budget. SPI>1 = ahead of schedule. The project is spending more than planned but progressing faster than planned."},

// --- Risk Management ---
{id:"R028",q:"What is the difference between a risk and an issue?",
o:["Risks are positive; issues are negative","Risks are potential future events; issues are current problems","Risks are managed by the PM; issues are managed by the team","There is no difference"],
a:1,d:"Process",t:["risk"],diff:1,type:"single",
e:"A risk is uncertain and may or may not occur. An issue has already occurred."},

{id:"R029",q:"Which risk response strategy shifts a threat's impact to a third party?",
o:["Avoid","Mitigate","Transfer","Accept"],
a:2,d:"Process",t:["risk"],diff:1,type:"single",
e:"Transfer shifts the threat to a third party (e.g., insurance, outsourcing)."},

{id:"R030",q:"A risk has a 30% probability of occurring and would cost $100,000 if it does. What is the Expected Monetary Value (EMV)?",
o:["$100,000","$30,000","$70,000","$130,000"],
a:1,d:"Process",t:["risk","quantitative"],diff:1,type:"single",
e:"EMV = Probability × Impact = 0.30 × $100,000 = $30,000."},

{id:"R031",q:"Which risk response strategy is appropriate for a risk with low probability and low impact?",
o:["Avoid","Mitigate","Transfer","Accept"],
a:3,d:"Process",t:["risk"],diff:1,type:"single",
e:"Low probability + low impact risks are typically accepted. The cost of response would exceed the expected impact."},

{id:"R032",q:"What is a risk trigger?",
o:["The root cause of a risk","An event or condition that indicates a risk is about to occur or has occurred","The person responsible for monitoring a risk","The contingency plan for a risk"],
a:1,d:"Process",t:["risk"],diff:2,type:"single",
e:"Risk triggers are warning signs that a risk event is imminent. They signal when to activate contingency plans."},

{id:"R033",q:"What is the difference between contingency reserves and management reserves?",
o:["Contingency is for known risks; management is for unknown risks","Contingency is larger; management is smaller","Contingency is controlled by the sponsor; management by the PM","There is no difference"],
a:0,d:"Process",t:["risk","cost"],diff:2,type:"single",
e:"Contingency reserves address known risks (known unknowns) and are part of the cost baseline. Management reserves address unknown risks (unknown unknowns) and are outside the baseline."},

{id:"R034",q:"A positive risk (opportunity) has been identified. Which response strategy seeks to ensure the opportunity is realized?",
o:["Exploit","Enhance","Share","Accept"],
a:0,d:"Process",t:["risk"],diff:2,type:"single",
e:"Exploit ensures the opportunity happens (100% probability). Enhance increases probability/impact. Share assigns to a third party best positioned to capture it."},

{id:"R035",q:"Which tool uses probability and impact to prioritize risks?",
o:["Risk register","Probability and Impact Matrix","Monte Carlo simulation","Decision tree analysis"],
a:1,d:"Process",t:["risk","qualitative"],diff:1,type:"single",
e:"The Probability and Impact Matrix is used in qualitative risk analysis to prioritize risks based on their likelihood and potential effect."},

{id:"R036",q:"What is a secondary risk?",
o:["A risk that occurs after the project is complete","A risk that arises as a direct result of implementing a risk response","A low-priority risk","A risk identified by the team rather than the PM"],
a:1,d:"Process",t:["risk"],diff:2,type:"single",
e:"Secondary risks are new risks created by risk responses. They must be identified, analyzed, and managed."},

// --- Quality Management ---
{id:"R037",q:"What is the primary difference between quality assurance and quality control?",
o:["QA is done by management; QC is done by the team","QA focuses on processes; QC focuses on deliverables","QA is done at the end; QC is done throughout","QA is optional; QC is mandatory"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"Quality Assurance audits processes to prevent defects. Quality Control inspects deliverables to detect defects."},

{id:"R038",q:"Which of the following best describes 'gold plating'?",
o:["Adding extra features not requested by the customer","Using premium materials for deliverables","Exceeding the project budget","Delivering the project ahead of schedule"],
a:0,d:"Process",t:["quality","scope"],diff:1,type:"single",
e:"Gold plating is adding unrequested scope. PMI says never do this — it introduces risk and consumes resources without authorization."},

{id:"R039",q:"What is the cost of conformance?",
o:["The cost of rework and defects","The cost of prevention and appraisal activities","The cost of project delays","The cost of change requests"],
a:1,d:"Process",t:["quality","cost"],diff:2,type:"single",
e:"Cost of conformance = prevention costs + appraisal costs (training, testing, inspections). Cost of nonconformance = internal + external failure costs."},

{id:"R040",q:"A control chart shows a process with 7 consecutive data points above the mean. What does this indicate?",
o:["The process is in control","The process is out of control — this is a rule of seven violation","Normal variation","The mean needs to be recalculated"],
a:1,d:"Process",t:["quality"],diff:2,type:"single",
e:"The Rule of Seven: 7+ consecutive points on one side of the mean indicates a non-random pattern — the process is out of control."},

// --- Agile & Scrum ---
{id:"R041",q:"In an agile project, who is responsible for prioritizing the product backlog?",
o:["Scrum Master","Development Team","Product Owner","Project Manager"],
a:2,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"In Scrum, the Product Owner owns and prioritizes the product backlog."},

{id:"R042",q:"In Scrum, what is the purpose of the Sprint Retrospective?",
o:["To demo the increment to stakeholders","To plan the next sprint's work","To reflect on the team's process and identify improvements","To refine the product backlog"],
a:2,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"The Retrospective is about the team's process, not the product. Sprint Review demos the product."},

{id:"R043",q:"Which Scrum event provides an opportunity for stakeholders to inspect the increment?",
o:["Sprint Planning","Daily Standup","Sprint Review","Sprint Retrospective"],
a:2,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"The Sprint Review is where stakeholders inspect the increment and provide feedback."},

{id:"R044",q:"What are the three pillars of Scrum?",
o:["Roles, Events, Artifacts","Transparency, Inspection, Adaptation","Planning, Execution, Review","Vision, Backlog, Increment"],
a:1,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"The three pillars of Scrum are Transparency, Inspection, and Adaptation."},

{id:"R045",q:"In Kanban, what is the primary mechanism for managing workflow?",
o:["Sprint timeboxes","Limiting Work in Progress (WIP)","Daily standups","Velocity tracking"],
a:1,d:"Process",t:["agile","kanban"],diff:1,type:"single",
e:"WIP limits are the defining mechanism of Kanban. They prevent overloading and optimize flow."},

{id:"R046",q:"What is a Minimum Viable Product (MVP)?",
o:["The cheapest version of the product","The smallest deliverable that provides value to users and enables learning","The first draft of the project plan","A prototype that doesn't need to work"],
a:1,d:"Process",t:["agile","product"],diff:1,type:"single",
e:"MVP is the minimum product that delivers value to users and enables learning."},

{id:"R047",q:"What does INVEST stand for in user stories?",
o:["Integrated, Negotiable, Valuable, Estimable, Scalable, Testable","Independent, Negotiable, Valuable, Estimable, Small, Testable","Iterative, Necessary, Viable, Efficient, Simple, Trackable","Independent, Necessary, Valuable, Executable, Small, Timely"],
a:1,d:"Process",t:["agile","user-stories"],diff:1,type:"single",
e:"INVEST is the criteria for well-written user stories."},

{id:"R048",q:"What is velocity in Scrum?",
o:["The speed at which the team completes tasks","The amount of work (story points) completed per sprint","The number of bugs found per sprint","The time between sprints"],
a:1,d:"Process",t:["agile","scrum","metrics"],diff:1,type:"single",
e:"Velocity is the total story points completed in a sprint. It's used for forecasting, not comparison between teams."},

{id:"R049",q:"A Scrum team's velocity has been: Sprint 1=20, Sprint 2=25, Sprint 3=22, Sprint 4=24. How many story points should they plan for Sprint 5?",
o:["25 (the highest)","20 (the lowest)","22-23 (the average)","30 (stretch goal)"],
a:2,d:"Process",t:["agile","scrum","metrics"],diff:2,type:"single",
e:"Use average velocity for planning. (20+25+22+24)/4 = 22.75 ≈ 22-23 points."},

{id:"R050",q:"What is the purpose of a Definition of Done (DoD)?",
o:["To define when the project is complete","To establish shared criteria for when a backlog item is considered complete","To set acceptance criteria for user stories","To determine when a sprint should end"],
a:1,d:"Process",t:["agile","scrum","quality"],diff:1,type:"single",
e:"DoD is the team's shared understanding of what 'complete' means — ensuring quality and consistency across all work items."},


{id:"R051",q:"During Sprint Planning, the team realizes they cannot complete all the items the Product Owner wants. What should happen?",
o:["The team commits to all items and works overtime","The Product Owner and team negotiate which items fit the sprint capacity","The Scrum Master decides which items to include","The sprint length is extended to fit all items"],
a:1,d:"Process",t:["agile","scrum"],diff:2,type:"single",
e:"The team pulls work based on capacity. The PO prioritizes, but the team determines how much they can commit to."},

{id:"R052",q:"What is the recommended length of a Daily Standup in Scrum?",
o:["30 minutes","15 minutes or less","1 hour","As long as needed"],
a:1,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"The Daily Scrum is timeboxed to 15 minutes. It's for synchronization, not problem-solving."},

{id:"R053",q:"A Product Owner wants to add a high-priority item mid-sprint. What should happen?",
o:["Add it immediately — the PO has authority over the backlog","The team and PO discuss the trade-off; an existing item may need to be removed","The Scrum Master rejects the request","Wait until the next sprint"],
a:1,d:"Process",t:["agile","scrum","change"],diff:2,type:"single",
e:"Mid-sprint changes are possible but require negotiation. Adding work means removing equivalent work to protect the sprint goal."},

{id:"R054",q:"What is the difference between a product backlog and a sprint backlog?",
o:["The product backlog is owned by the PM; the sprint backlog by the team","The product backlog contains all desired work; the sprint backlog contains work selected for the current sprint","The product backlog is prioritized; the sprint backlog is not","There is no difference"],
a:1,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"Product backlog = all work for the product (PO owns). Sprint backlog = subset selected for current sprint (team owns)."},

{id:"R055",q:"Which agile metric measures the time from when work begins to when it's delivered?",
o:["Velocity","Lead time","Cycle time","Throughput"],
a:2,d:"Process",t:["agile","metrics"],diff:2,type:"single",
e:"Cycle time = time from work started to work completed. Lead time = time from request to delivery (includes wait time). Throughput = items completed per time period."},

// --- Change Control ---
{id:"R056",q:"A stakeholder requests a change to the project scope. The change would add two weeks to the schedule. What should the PM do FIRST?",
o:["Reject the change because it impacts the schedule","Implement the change since the stakeholder requested it","Assess the impact of the change on scope, schedule, cost, and risk","Ask the team to work overtime to absorb the change"],
a:2,d:"Process",t:["change-control"],diff:1,type:"single",
e:"Always assess before acting. Never reject without analysis, implement without assessment, or impose overtime without understanding impact. Follow the change control process."},

{id:"R057",q:"Who has the authority to approve or reject change requests?",
o:["The project manager","The project sponsor","The Change Control Board (CCB)","The project team"],
a:2,d:"Process",t:["change-control"],diff:1,type:"single",
e:"The CCB (or equivalent authority defined in the change management plan) approves/rejects changes. The PM assesses and recommends."},

{id:"R058",q:"A team member implements a change without going through the change control process. What should the PM do?",
o:["Accept it if the change improves the product","Reverse the change and require it to go through proper channels","Report the team member to HR","Ignore it this time but warn them"],
a:1,d:"Process",t:["change-control"],diff:2,type:"single",
e:"Unauthorized changes must be reversed. All changes must follow the established change control process regardless of their merit."},

{id:"R059",q:"What is configuration management?",
o:["Managing the project team's configuration","Controlling and documenting the characteristics of project deliverables and ensuring changes are tracked","Setting up project management software","Managing hardware configurations"],
a:1,d:"Process",t:["change-control","quality"],diff:2,type:"single",
e:"Configuration management ensures deliverable characteristics are documented, controlled, and changes are properly tracked and versioned."},

// --- Development Approaches ---
{id:"R060",q:"Which development approach is best suited for a project with well-defined, stable requirements and regulatory documentation needs?",
o:["Agile","Predictive","Hybrid","Kanban"],
a:1,d:"Process",t:["approach","predictive"],diff:1,type:"single",
e:"Stable requirements + regulatory documentation = predictive approach."},

{id:"R061",q:"A project has unclear requirements that will evolve based on user feedback. Which approach is most appropriate?",
o:["Predictive/Waterfall","Agile/Iterative","Critical Chain","PRINCE2"],
a:1,d:"Process",t:["approach","agile"],diff:1,type:"single",
e:"Unclear, evolving requirements are best served by agile/iterative approaches that embrace change and deliver incrementally."},

{id:"R062",q:"A project uses predictive planning for infrastructure but agile sprints for software development. What approach is this?",
o:["Pure agile","Pure predictive","Hybrid","Kanban"],
a:2,d:"Process",t:["approach","hybrid"],diff:1,type:"single",
e:"Hybrid combines elements of predictive and agile approaches within the same project."},

{id:"R063",q:"Select TWO factors that would indicate a predictive approach is appropriate:",
o:["Requirements are likely to change frequently","Regulatory compliance requires extensive documentation","The technology is well-understood and stable","The customer wants to see working software every two weeks","The team has never worked together before"],
a:[1,2],d:"Process",t:["approach","predictive"],diff:2,type:"multi",
e:"Regulatory documentation needs and stable/well-understood technology favor predictive approaches."},

// --- Procurement ---
{id:"R064",q:"Which contract type places the MOST risk on the seller?",
o:["Cost Plus Fixed Fee (CPFF)","Time and Materials (T&M)","Firm Fixed Price (FFP)","Cost Plus Incentive Fee (CPIF)"],
a:2,d:"Process",t:["procurement"],diff:2,type:"single",
e:"FFP places maximum risk on the seller — they must deliver at the agreed price regardless of actual costs."},

{id:"R065",q:"Which contract type is most appropriate when the scope of work is not well-defined?",
o:["Firm Fixed Price","Fixed Price Incentive Fee","Time and Materials","Fixed Price Economic Price Adjustment"],
a:2,d:"Process",t:["procurement"],diff:2,type:"single",
e:"T&M is used when scope is unclear. The buyer pays for time and materials used. Risk is shared."},

{id:"R066",q:"What is the purpose of a Statement of Work (SOW) in procurement?",
o:["To authorize the project","To describe the work to be performed by the seller in sufficient detail","To define the project budget","To list all project stakeholders"],
a:1,d:"Process",t:["procurement"],diff:1,type:"single",
e:"The procurement SOW describes the portion of project scope to be performed by the seller, in enough detail for sellers to determine if they can provide it."},

// --- Exam Format & Logistics ---
{id:"R067",q:"How many questions are on the PMP exam, and how much time do you have?",
o:["200 questions in 240 minutes","180 questions in 230 minutes","150 questions in 180 minutes","175 questions in 210 minutes"],
a:1,d:"Process",t:["exam"],diff:1,type:"single",
e:"The PMP exam has 180 questions (175 scored + 5 pretest) with 230 minutes total."},

{id:"R068",q:"What percentage of the PMP exam covers the Process domain?",
o:["42%","50%","8%","35%"],
a:1,d:"Process",t:["exam"],diff:1,type:"single",
e:"Process domain = 50% of the exam. People = 42%. Business Environment = 8%."},

// --- Scope Management ---
{id:"R069",q:"What is scope creep?",
o:["Uncontrolled expansion of project scope without adjustments to time, cost, and resources","A planned increase in project scope","The process of defining project scope","Reducing project scope to meet deadlines"],
a:0,d:"Process",t:["scope"],diff:1,type:"single",
e:"Scope creep is uncontrolled, unauthorized additions to scope. It happens when changes bypass the change control process."},

{id:"R070",q:"What is the difference between project scope and product scope?",
o:["They are the same thing","Project scope is the work to be done; product scope is the features and functions of the deliverable","Project scope is larger; product scope is smaller","Project scope is defined first; product scope is defined last"],
a:1,d:"Process",t:["scope"],diff:2,type:"single",
e:"Product scope = features/functions of the product. Project scope = all the work required to deliver the product scope."},

// --- Integration Management ---
{id:"R071",q:"According to PMI, when should lessons learned be captured?",
o:["Only at the end of the project","Only at phase gates","Throughout the entire project lifecycle","Only when problems occur"],
a:2,d:"Process",t:["integration","lessons-learned"],diff:1,type:"single",
e:"PMI emphasizes continuous lessons learned capture, not just at the end."},

{id:"R072",q:"What is the primary purpose of a project management plan?",
o:["To list all project tasks","To define how the project will be executed, monitored, controlled, and closed","To track project costs","To communicate with stakeholders"],
a:1,d:"Process",t:["integration","planning"],diff:1,type:"single",
e:"The project management plan is the comprehensive document that defines how all aspects of the project will be managed."},

{id:"R073",q:"A project is being closed. Which of the following should the PM ensure is completed?",
o:["All change requests are approved","Final deliverables are accepted, lessons learned are documented, and resources are released","The team receives bonuses","All risks have been eliminated"],
a:1,d:"Process",t:["integration","closing"],diff:2,type:"single",
e:"Project closure includes formal acceptance, lessons learned, resource release, contract closure, and archiving project documents."},

// --- Resource Management ---
{id:"R074",q:"What is resource leveling?",
o:["Adding more resources to the project","Adjusting the schedule to resolve resource over-allocation, often extending the project duration","Removing resources from the project","Assigning resources to the critical path only"],
a:1,d:"Process",t:["resource","scheduling"],diff:2,type:"single",
e:"Resource leveling resolves over-allocation by adjusting activity start/finish dates. It often extends the project duration."},

{id:"R075",q:"What is the difference between resource leveling and resource smoothing?",
o:["They are the same technique","Leveling may extend the schedule; smoothing works within existing float without extending it","Leveling is for people; smoothing is for materials","Leveling reduces resources; smoothing adds resources"],
a:1,d:"Process",t:["resource","scheduling"],diff:2,type:"single",
e:"Resource leveling can extend the schedule. Resource smoothing adjusts within available float, keeping the critical path and end date unchanged."},

// --- Estimation ---
{id:"R076",q:"Which estimation technique uses historical data from similar projects?",
o:["Parametric estimating","Analogous estimating","Three-point estimating","Bottom-up estimating"],
a:1,d:"Process",t:["estimation"],diff:1,type:"single",
e:"Analogous (top-down) estimating uses data from similar past projects. It's quick but less accurate."},

{id:"R077",q:"The three-point estimate formula (PERT) is:",
o:["(O + M + P) / 3","(O + 4M + P) / 6","(O + P) / 2","O + M + P"],
a:1,d:"Process",t:["estimation"],diff:1,type:"single",
e:"PERT = (Optimistic + 4×Most Likely + Pessimistic) / 6. This gives a weighted average favoring the most likely estimate."},

{id:"R078",q:"An activity has estimates: Optimistic=4 days, Most Likely=6 days, Pessimistic=14 days. What is the PERT estimate?",
o:["6 days","7 days","8 days","9 days"],
a:1,d:"Process",t:["estimation"],diff:2,type:"single",
e:"PERT = (4 + 4×6 + 14) / 6 = (4 + 24 + 14) / 6 = 42/6 = 7 days."},

{id:"R079",q:"Which estimation technique is MOST accurate but also MOST time-consuming?",
o:["Analogous","Parametric","Bottom-up","Expert judgment"],
a:2,d:"Process",t:["estimation"],diff:1,type:"single",
e:"Bottom-up estimates each work package individually and rolls up. Most accurate but requires the most effort and detail."},

// --- Additional Process Questions ---
{id:"R080",q:"What is a rolling wave planning approach?",
o:["Planning the entire project in detail upfront","Planning near-term work in detail and future work at a higher level, with details added as more is known","Planning only one phase at a time","Not planning at all and adapting as you go"],
a:1,d:"Process",t:["planning"],diff:2,type:"single",
e:"Rolling wave planning is a form of progressive elaboration — detail near-term work, keep future work at a summary level until more information is available."},

{id:"R081",q:"What is the purpose of a responsibility assignment matrix (RAM/RACI)?",
o:["To track project costs by resource","To clarify roles and responsibilities for project activities","To schedule resource availability","To evaluate team performance"],
a:1,d:"Process",t:["resource","planning"],diff:1,type:"single",
e:"RACI (Responsible, Accountable, Consulted, Informed) clarifies who does what for each activity or deliverable."},

{id:"R082",q:"In a RACI matrix, what does 'Accountable' mean?",
o:["The person who does the work","The person who is ultimately answerable for the work and has authority to approve","The person who provides input","The person who is kept informed"],
a:1,d:"Process",t:["resource","planning"],diff:2,type:"single",
e:"Accountable = the one person ultimately answerable (the 'buck stops here'). Responsible = those who do the work. Only one person can be Accountable per activity."},

{id:"R083",q:"What is the purpose of a burndown chart?",
o:["To track project costs over time","To show remaining work versus time in an iteration","To display resource utilization","To map stakeholder engagement"],
a:1,d:"Process",t:["agile","metrics"],diff:1,type:"single",
e:"A burndown chart shows remaining work (y-axis) over time (x-axis) within a sprint or release. It helps track progress toward completion."},

{id:"R084",q:"What is a spike in agile?",
o:["A sudden increase in velocity","A timeboxed research activity to reduce uncertainty","A critical defect","An unplanned sprint"],
a:1,d:"Process",t:["agile"],diff:2,type:"single",
e:"A spike is a timeboxed investigation to answer a question or reduce risk/uncertainty before committing to implementation."},

{id:"R085",q:"What is the Iron Triangle (Triple Constraint)?",
o:["Cost, Quality, Risk","Scope, Schedule, Cost","People, Process, Technology","Plan, Execute, Close"],
a:1,d:"Process",t:["integration","constraints"],diff:1,type:"single",
e:"The Triple Constraint: Scope, Schedule, Cost. Changes to one typically affect the others. Quality is often shown in the center."},

{id:"R086",q:"A project manager identifies that a deliverable does not meet the acceptance criteria. What should the PM do?",
o:["Accept it anyway to stay on schedule","Document the deficiency and initiate corrective action","Blame the team member responsible","Reduce the acceptance criteria"],
a:1,d:"Process",t:["quality","delivery"],diff:2,type:"single",
e:"Non-conforming deliverables require corrective action. Never accept substandard work or lower standards to meet deadlines."},

{id:"R087",q:"What is the difference between a milestone and an activity?",
o:["Milestones have duration; activities don't","Activities have duration; milestones are zero-duration markers of significant events","Milestones are more important than activities","There is no difference"],
a:1,d:"Process",t:["scheduling"],diff:1,type:"single",
e:"Milestones are zero-duration events marking significant points (phase completion, approval, etc.). Activities have duration and consume resources."},

{id:"R088",q:"Which dependency type means Activity B cannot start until Activity A finishes?",
o:["Start-to-Start (SS)","Finish-to-Start (FS)","Finish-to-Finish (FF)","Start-to-Finish (SF)"],
a:1,d:"Process",t:["scheduling"],diff:1,type:"single",
e:"Finish-to-Start is the most common dependency: the successor cannot start until the predecessor finishes."},

{id:"R089",q:"What is a lag in project scheduling?",
o:["A delay imposed between dependent activities","An acceleration of dependent activities","A buffer added to the critical path","A resource constraint"],
a:0,d:"Process",t:["scheduling"],diff:2,type:"single",
e:"Lag is waiting time between activities (e.g., concrete must cure 3 days before building on it). Lead is an acceleration (overlap)."},

{id:"R090",q:"Select TWO outputs of the Plan Risk Management process:",
o:["Risk register","Risk management plan","Probability and impact matrix","Risk response plan","Project charter"],
a:[1,2],d:"Process",t:["risk","planning"],diff:2,type:"multi",
e:"Plan Risk Management produces the risk management plan (how to conduct risk activities) and defines the probability and impact matrix. The risk register is created during Identify Risks."},

{id:"R091",q:"What is Monte Carlo simulation used for in project management?",
o:["Identifying risks","Quantifying the overall effect of risks on project objectives through probability distributions","Qualitative risk ranking","Assigning risk owners"],
a:1,d:"Process",t:["risk","quantitative"],diff:2,type:"single",
e:"Monte Carlo runs thousands of simulations with different variable combinations to produce probability distributions for schedule/cost outcomes."},

{id:"R092",q:"A project has a negative cost variance and negative schedule variance. The sponsor asks for the Estimate at Completion. Using the formula EAC = AC + (BAC-EV)/CPI, what does this assume?",
o:["Future work will be performed at the planned rate","Future work will continue at the current CPI","The remaining work will cost the same as originally planned","The project will be cancelled"],
a:1,d:"Process",t:["cost","evm"],diff:3,type:"single",
e:"EAC = AC + (BAC-EV)/CPI assumes the current cost performance (CPI) will continue for the remaining work. This is the same as BAC/CPI."},

{id:"R093",q:"What is the To-Complete Performance Index (TCPI) when calculated against BAC?",
o:["(BAC - EV) / (BAC - AC)","(BAC - AC) / (BAC - EV)","EV / AC","AC / EV"],
a:0,d:"Process",t:["cost","evm"],diff:3,type:"single",
e:"TCPI = (BAC - EV) / (BAC - AC) = remaining work / remaining budget. If TCPI > 1, the team must perform better than planned to finish on budget."},

{id:"R094",q:"A project's TCPI is 1.25. What does this mean?",
o:["The project is performing well","The team must achieve 125% efficiency on remaining work to finish on budget","The project is 25% complete","The CPI is 1.25"],
a:1,d:"Process",t:["cost","evm"],diff:3,type:"single",
e:"TCPI > 1 means the team must perform better than planned. 1.25 means 125% efficiency needed — very difficult to achieve."},

{id:"R095",q:"What is the purpose of a project kickoff meeting?",
o:["To formally authorize the project","To align the team on project objectives, approach, roles, and expectations","To create the project schedule","To identify all project risks"],
a:1,d:"Process",t:["integration","communication"],diff:1,type:"single",
e:"The kickoff meeting aligns all participants on the project's purpose, approach, roles, communication, and next steps."},

{id:"R096",q:"Which tool helps visualize the relationship between project activities and their dependencies?",
o:["Gantt chart","Network diagram (PDM)","Histogram","RACI matrix"],
a:1,d:"Process",t:["scheduling"],diff:1,type:"single",
e:"The network diagram (Precedence Diagramming Method) shows activities as nodes connected by dependency arrows."},

{id:"R097",q:"What is earned value (EV)?",
o:["The actual cost spent to date","The budgeted cost of work actually completed","The planned value of work scheduled","The total project budget"],
a:1,d:"Process",t:["cost","evm"],diff:1,type:"single",
e:"EV = the budgeted cost of work performed (completed). It measures how much value has been earned based on the original budget."},

{id:"R098",q:"A project is using story points for estimation. The team disagrees on the size of a user story. What technique should they use?",
o:["The PM decides the estimate","Planning Poker (consensus-based estimation)","Use the highest estimate for safety","Skip the story and estimate later"],
a:1,d:"Process",t:["agile","estimation"],diff:1,type:"single",
e:"Planning Poker is a consensus-based estimation technique where team members independently estimate, discuss differences, and converge."},

{id:"R099",q:"What is the difference between a project and a program?",
o:["A project is smaller; a program is larger","A project delivers a specific output; a program manages related projects to achieve strategic benefits","A project has a PM; a program doesn't","There is no difference"],
a:1,d:"Process",t:["framework"],diff:1,type:"single",
e:"A program is a group of related projects managed in a coordinated way to obtain benefits not available from managing them individually."},

{id:"R100",q:"What is progressive elaboration?",
o:["Adding more team members over time","Developing the project plan in greater detail as more information becomes available","Increasing the project budget progressively","Expanding the project scope over time"],
a:1,d:"Process",t:["planning"],diff:2,type:"single",
e:"Progressive elaboration means the project plan is developed iteratively, with increasing detail as more information becomes available. It's not scope creep."},

// ═══════════════════════════════════════════════════════════════
// BUSINESS ENVIRONMENT DOMAIN (8% of exam) — ~16 questions target
// Topics: Benefits Realization, Compliance, Organizational Change,
//         Strategic Alignment, External Factors, Business Case
// ═══════════════════════════════════════════════════════════════

{id:"B001",q:"What is the primary purpose of a benefits management plan?",
o:["To track project costs","To define how project benefits will be realized and sustained","To manage team performance","To document project risks"],
a:1,d:"Business Environment",t:["benefits"],diff:1,type:"single",
e:"The benefits management plan documents how and when benefits will be delivered, measured, and sustained."},

{id:"B002",q:"A project was initiated to develop a new customer portal. Midway through, a competitor launches a similar product. What should the PM do?",
o:["Cancel the project immediately","Ignore the competitor and continue as planned","Assess the impact on the project's business case and inform stakeholders","Fast-track the project to beat the competitor"],
a:2,d:"Business Environment",t:["business-case","external"],diff:1,type:"single",
e:"External business environment changes require assessment and stakeholder communication. Don't cancel without analysis, ignore changes, or react without assessment."},

{id:"B003",q:"A new government regulation will affect your project's deliverables. What should you do FIRST?",
o:["Stop all project work until the regulation is clarified","Assess the impact of the regulation on the project scope and plan","Ignore it — regulations change frequently","Immediately modify the deliverables to comply"],
a:1,d:"Business Environment",t:["compliance","external"],diff:1,type:"single",
e:"Always assess before acting. Don't stop work, ignore it, or modify without assessment."},

{id:"B004",q:"Which analysis technique examines Political, Economic, Social, Technological, Legal, and Environmental factors?",
o:["SWOT Analysis","PESTLE Analysis","Root Cause Analysis","Monte Carlo Analysis"],
a:1,d:"Business Environment",t:["external","analysis"],diff:1,type:"single",
e:"PESTLE examines external macro-environmental factors."},

{id:"B005",q:"A project's deliverables no longer align with organizational strategy. What should the PM do?",
o:["Continue as planned — scope was approved","Cancel the project immediately","Inform the sponsor and reassess the business case","Modify deliverables without informing stakeholders"],
a:2,d:"Business Environment",t:["strategic-alignment","business-case"],diff:1,type:"single",
e:"If the project no longer aligns with strategy, the business case needs reassessment."},

{id:"B006",q:"What is the primary purpose of a business case?",
o:["To authorize the project manager","To justify the project investment by documenting expected benefits versus costs","To define the project scope","To assign project resources"],
a:1,d:"Business Environment",t:["business-case"],diff:1,type:"single",
e:"The business case justifies the investment by comparing expected benefits to costs, providing the economic feasibility analysis."},

{id:"B007",q:"Who is primarily responsible for ensuring project benefits are realized after the project is complete?",
o:["The project manager","The project sponsor or business owner","The project team","The PMO"],
a:1,d:"Business Environment",t:["benefits"],diff:2,type:"single",
e:"Benefits realization often extends beyond project closure. The sponsor/business owner is responsible for ensuring benefits are achieved."},

{id:"B008",q:"A project was approved based on a positive NPV analysis. Midway through, market conditions change and the NPV becomes negative. What should the PM recommend?",
o:["Continue — the project is already approved","Recommend the sponsor reassess whether to continue, pivot, or terminate","Reduce scope to lower costs","Ignore the financial analysis and focus on delivery"],
a:1,d:"Business Environment",t:["business-case","financial"],diff:3,type:"single",
e:"When the business justification no longer holds, the PM must inform the sponsor. Continuing an unjustified project wastes resources."},

{id:"B009",q:"What is organizational change management (OCM) in the context of projects?",
o:["Changing the organizational structure","Managing the people side of change to ensure project outcomes are adopted and sustained","Changing project management methodology","Reorganizing the project team"],
a:1,d:"Business Environment",t:["change-management"],diff:2,type:"single",
e:"OCM focuses on helping people adopt new processes, tools, or behaviors that result from project deliverables."},

{id:"B010",q:"A project delivers a new CRM system, but users resist adopting it. What should have been planned?",
o:["More testing","Organizational change management and user adoption strategy","A longer project timeline","More features"],
a:1,d:"Business Environment",t:["change-management","benefits"],diff:2,type:"single",
e:"Technical delivery without change management often fails. User adoption requires training, communication, and support planning."},

{id:"B011",q:"Which of the following is an example of a project benefit?",
o:["Completing the project on time","Delivering all planned features","20% reduction in customer support calls after implementation","Staying within budget"],
a:2,d:"Business Environment",t:["benefits"],diff:2,type:"single",
e:"Benefits are the measurable improvements resulting from project outcomes. On-time/on-budget delivery are project success criteria, not benefits."},

{id:"B012",q:"What is a feasibility study?",
o:["A study of team capabilities","An analysis of whether a proposed project is viable from technical, economic, and operational perspectives","A risk assessment","A stakeholder analysis"],
a:1,d:"Business Environment",t:["business-case","initiation"],diff:1,type:"single",
e:"Feasibility studies evaluate whether a project is viable before committing resources. They examine technical, economic, legal, operational, and scheduling feasibility."},

{id:"B013",q:"A PM notices that the project's compliance requirements have changed due to new legislation. Select TWO appropriate actions:",
o:["Ignore the change until the next project phase","Assess the impact on project deliverables and timeline","Update the risk register with compliance risks","Continue with the original plan and address compliance later","Immediately stop all project work"],
a:[1,2],d:"Business Environment",t:["compliance","risk"],diff:2,type:"multi",
e:"Compliance changes require impact assessment and risk register updates. Don't ignore them or stop work without assessment."},

{id:"B014",q:"What is the relationship between a project and organizational strategy?",
o:["Projects are independent of organizational strategy","Projects should be aligned with and contribute to organizational strategic objectives","Strategy is only relevant for programs, not projects","The PM defines organizational strategy"],
a:1,d:"Business Environment",t:["strategic-alignment"],diff:1,type:"single",
e:"Projects are vehicles for implementing organizational strategy. They should be selected and managed to deliver strategic value."},

{id:"B015",q:"An organization is deciding between three potential projects. Which tool helps select projects that best align with strategic goals?",
o:["Gantt chart","Project portfolio management and scoring models","Work breakdown structure","Network diagram"],
a:1,d:"Business Environment",t:["strategic-alignment","portfolio"],diff:2,type:"single",
e:"Portfolio management uses scoring models, strategic alignment criteria, and financial analysis to select the right projects."},

{id:"B016",q:"What is the difference between outputs, outcomes, and benefits?",
o:["They are the same thing","Outputs are deliverables; outcomes are changes resulting from outputs; benefits are measurable improvements from outcomes","Outputs are larger than outcomes","Benefits come before outcomes"],
a:1,d:"Business Environment",t:["benefits"],diff:2,type:"single",
e:"Output (deliverable) → Outcome (change in behavior/capability) → Benefit (measurable value). Example: New system → Faster processing → 30% cost reduction."},

// ═══════════════════════════════════════════════════════════════
// ADDITIONAL QUESTIONS — Expanding to 250+ for exam variety
// ═══════════════════════════════════════════════════════════════

// --- More People Domain (Filling to 42% target) ---
{id:"P076",q:"A PM is managing a project where a critical team member announces they are leaving the organization in two weeks. What should the PM do FIRST?",
o:["Immediately find a replacement","Assess the impact on the project and develop a knowledge transfer plan","Report the team member to management for abandoning the project","Reduce the project scope"],
a:1,d:"People",t:["team","risk"],diff:2,type:"single",
e:"Assess impact first, then plan knowledge transfer. Capture critical knowledge before the person leaves."},

{id:"P077",q:"A PM is coaching a team member who struggles with time management. Which coaching approach is MOST effective?",
o:["Tell them exactly how to manage their time","Help them identify their own patterns and develop personalized strategies","Assign them fewer tasks","Monitor their calendar daily"],
a:1,d:"People",t:["coaching"],diff:2,type:"single",
e:"Effective coaching helps people develop self-awareness and their own solutions rather than imposing external solutions."},

{id:"P078",q:"What is the difference between intrinsic and extrinsic motivation?",
o:["Intrinsic comes from within (purpose, mastery, autonomy); extrinsic comes from external rewards (money, recognition)","Intrinsic is for managers; extrinsic is for team members","They are the same thing","Intrinsic is temporary; extrinsic is permanent"],
a:0,d:"People",t:["motivation"],diff:2,type:"single",
e:"Intrinsic motivation (internal drive, purpose, growth) is more sustainable than extrinsic (bonuses, promotions). PMI values developing intrinsic motivation."},

{id:"P079",q:"A team is in the Norming stage. What behaviors would you expect to see?",
o:["Frequent conflicts and power struggles","Polite but cautious interactions","Established working agreements, mutual respect, and collaborative problem-solving","Complete self-management with no PM involvement needed"],
a:2,d:"People",t:["team","tuckman"],diff:2,type:"single",
e:"Norming: team has resolved conflicts, established norms, and works collaboratively. Not yet at Performing level of full self-management."},

{id:"P080",q:"A PM discovers that two team members have a personal conflict outside of work that is affecting their collaboration. What should the PM do?",
o:["Ignore it — personal issues are not the PM's concern","Acknowledge the impact on work, set expectations for professional behavior, and offer mediation if needed","Separate them onto different projects","Report them both to HR"],
a:1,d:"People",t:["conflict","team"],diff:3,type:"single",
e:"The PM addresses work impact without prying into personal matters. Set clear expectations for professional collaboration and offer support."},

{id:"P081",q:"Which of the following is an example of referent power?",
o:["A PM assigns tasks based on their role","A PM influences through their technical expertise","Team members follow a PM because they respect and admire them","A PM offers bonuses for good performance"],
a:2,d:"People",t:["leadership","power"],diff:2,type:"single",
e:"Referent power comes from personal qualities that inspire respect and admiration. People follow because they want to, not because they have to."},

{id:"P082",q:"A PM is facilitating a brainstorming session. Which technique helps prevent groupthink?",
o:["Having the most senior person speak first","Using silent individual brainstorming before group discussion","Limiting the session to 5 minutes","Only allowing the PM to suggest ideas"],
a:1,d:"People",t:["facilitation","team"],diff:2,type:"single",
e:"Silent/individual brainstorming first prevents anchoring bias and groupthink. Everyone generates ideas independently before sharing."},

{id:"P083",q:"A stakeholder with low power but high interest keeps requesting detailed status updates that consume significant PM time. What should the PM do?",
o:["Ignore their requests","Provide automated or standardized reports that satisfy their information needs efficiently","Give them the same level of attention as high-power stakeholders","Remove them from the stakeholder register"],
a:1,d:"People",t:["stakeholder","communication"],diff:2,type:"single",
e:"Low power/high interest stakeholders should be kept informed. Use efficient methods (dashboards, automated reports) rather than ignoring or over-investing."},

{id:"P084",q:"What is the concept of 'servant leadership' as applied to a Scrum Master?",
o:["The Scrum Master serves the Product Owner's interests above all","The Scrum Master removes impediments, coaches the team, and protects them from external interference","The Scrum Master does whatever the team asks","The Scrum Master reports to the team"],
a:1,d:"People",t:["leadership","agile","servant-leadership"],diff:2,type:"single",
e:"A servant-leader Scrum Master removes impediments, coaches, facilitates, and shields the team — enabling them to do their best work."},

{id:"P085",q:"During a difficult conversation with a team member about performance, the PM should:",
o:["Focus on the person's character flaws","Use specific behavioral examples and focus on impact rather than intent","Compare them unfavorably to other team members","Deliver feedback via email to avoid confrontation"],
a:1,d:"People",t:["coaching","communication"],diff:2,type:"single",
e:"Effective feedback is specific, behavioral, and impact-focused. 'When you do X, the impact is Y' rather than 'You are Z.'"},

{id:"P086",q:"A PM is managing a team where one member is significantly more experienced than others. The experienced member is becoming frustrated with the pace. What should the PM do?",
o:["Tell them to be patient","Leverage their expertise by giving them mentoring responsibilities and challenging work","Let them work independently without team interaction","Move them to a different project"],
a:1,d:"People",t:["team","motivation","coaching"],diff:2,type:"single",
e:"Channel expertise productively. Mentoring roles satisfy the experienced member's need for challenge while developing the team."},

{id:"P087",q:"Select TWO indicators that a team has achieved psychological safety:",
o:["Team members never disagree","Team members openly admit mistakes without fear of punishment","Team members ask questions and challenge ideas constructively","The PM makes all decisions to protect the team","Team members avoid difficult conversations"],
a:[1,2],d:"People",t:["psychological-safety","team"],diff:2,type:"multi",
e:"Psychological safety means people can be vulnerable (admit mistakes) and challenge ideas without fear. Avoiding disagreement indicates lack of safety."},

{id:"P088",q:"A PM receives feedback that their communication style is too direct for some team members from high-context cultures. What should the PM do?",
o:["Ignore the feedback — directness is efficient","Adapt their communication style to be more contextual and relationship-oriented with those team members","Tell those team members to adapt to the PM's style","Communicate only in writing to avoid misunderstandings"],
a:1,d:"People",t:["communication","diversity"],diff:2,type:"single",
e:"Effective PMs adapt their communication style to their audience. Cultural intelligence means adjusting approach based on context."},

{id:"P089",q:"What is the primary purpose of a stakeholder engagement plan?",
o:["To list all stakeholders","To define strategies for engaging stakeholders based on their needs, interests, and potential impact","To assign stakeholders to project tasks","To document stakeholder complaints"],
a:1,d:"People",t:["stakeholder"],diff:1,type:"single",
e:"The engagement plan defines tailored strategies to effectively engage each stakeholder based on their assessment."},

{id:"P090",q:"A team member disagrees with a decision but commits to supporting it after the discussion. This is an example of:",
o:["Forced compliance","Disagree and commit — healthy team behavior","Passive-aggressive behavior","Groupthink"],
a:1,d:"People",t:["team","conflict"],diff:2,type:"single",
e:"'Disagree and commit' is healthy team behavior where members voice concerns, but once a decision is made, they support it fully."},

{id:"P091",q:"Which situational leadership style is appropriate for a team member who is enthusiastic but lacks competence (high commitment, low competence)?",
o:["Delegating","Supporting","Coaching","Directing"],
a:3,d:"People",t:["leadership","situational"],diff:2,type:"single",
e:"High commitment + low competence = Directing style (high task, low relationship). Provide clear instructions and close supervision while they build skills."},

{id:"P092",q:"A PM notices that meeting participation drops significantly when certain senior stakeholders attend. What is the MOST likely cause?",
o:["The meetings are too long","Team members feel intimidated and don't speak up in front of senior leaders","The topics are not relevant","The meeting time is inconvenient"],
a:1,d:"People",t:["psychological-safety","stakeholder","facilitation"],diff:3,type:"single",
e:"Power dynamics can suppress participation. The PM should create structures that encourage all voices (anonymous input, round-robin, breakout groups)."},

{id:"P093",q:"What is the Johari Window used for in team development?",
o:["Project scheduling","Understanding self-awareness and interpersonal relationships through known/unknown dimensions","Risk assessment","Stakeholder mapping"],
a:1,d:"People",t:["team","emotional-intelligence"],diff:3,type:"single",
e:"The Johari Window has four quadrants (Open, Blind, Hidden, Unknown) that help teams build self-awareness and trust through disclosure and feedback."},

// --- More People Domain (Advanced Scenarios) ---
{id:"P094",q:"A PM is leading a project where the team is resistant to using a new project management tool. What change management approach should the PM use?",
o:["Mandate the tool and enforce compliance","Explain the benefits, involve the team in configuration decisions, provide training, and allow a transition period","Let the team continue using the old tool","Escalate to management to force adoption"],
a:1,d:"People",t:["change","team","leadership"],diff:2,type:"single",
e:"Successful change requires understanding benefits, involvement in decisions, training, and time to adapt. Mandating without buy-in creates resistance."},

{id:"P095",q:"What is the OSCAR model used for in coaching conversations?",
o:["Project scheduling","A structured coaching framework: Outcome, Situation, Choices, Actions, Review","Risk assessment","Team formation"],
a:1,d:"People",t:["coaching"],diff:3,type:"single",
e:"OSCAR provides structure for coaching: define the desired Outcome, explore the current Situation, identify Choices, agree on Actions, and Review progress."},

{id:"P096",q:"A team member consistently volunteers for extra work but is showing signs of burnout. What should the PM do?",
o:["Accept their volunteering — they're being helpful","Have a conversation about sustainable workload and help them set boundaries","Assign them even more work since they're willing","Ignore it until their performance drops"],
a:1,d:"People",t:["servant-leadership","team"],diff:2,type:"single",
e:"Servant leaders protect team members from themselves when needed. Help them understand sustainable pace and set healthy boundaries."},

{id:"P097",q:"In a multi-cultural team, what does 'high-context communication' mean?",
o:["Using complex technical language","Communication where meaning is conveyed through context, relationships, and non-verbal cues rather than explicit words","Speaking loudly and clearly","Using formal written communication"],
a:1,d:"People",t:["communication","diversity"],diff:2,type:"single",
e:"High-context cultures (many Asian, Middle Eastern, Latin cultures) rely on context, relationships, and implicit meaning. Low-context cultures (US, Germany) prefer explicit, direct communication."},

{id:"P098",q:"A PM needs to give negative feedback to a team member from a culture where 'saving face' is important. What approach should the PM take?",
o:["Give the feedback publicly to set an example","Deliver feedback privately, frame it constructively, and focus on growth rather than failure","Avoid giving feedback entirely to respect their culture","Send an email to avoid direct confrontation"],
a:1,d:"People",t:["communication","diversity","coaching"],diff:3,type:"single",
e:"Respect cultural norms around face-saving by delivering feedback privately and constructively. The goal is improvement, not embarrassment."},

{id:"P099",q:"Select TWO responsibilities of a Scrum Master regarding the team:",
o:["Assigning tasks to team members","Removing impediments that block the team's progress","Coaching the team on self-management and cross-functionality","Prioritizing the product backlog","Approving the team's technical decisions"],
a:[1,2],d:"People",t:["agile","servant-leadership"],diff:2,type:"multi",
e:"The Scrum Master removes impediments and coaches the team. They don't assign tasks (team self-manages), prioritize backlog (PO does), or approve technical decisions."},

{id:"P065",q:"A PM is managing a project where the team is geographically dispersed and culturally diverse. During a video call, a team member makes a comment that offends another member from a different culture. What should the PM do?",
o:["Ignore it to avoid making the situation worse","Address it immediately by acknowledging the impact and facilitating a respectful dialogue","Report the offending team member to HR","Cancel the meeting and send an email instead"],
a:1,d:"People",t:["diversity","conflict","communication"],diff:3,type:"single",
e:"Address cultural misunderstandings promptly and respectfully. Use it as a learning opportunity while maintaining psychological safety for all."},

{id:"P066",q:"A senior stakeholder consistently bypasses the PM and gives direction directly to team members. What should the PM do?",
o:["Accept it since the stakeholder is senior","Have a private conversation with the stakeholder about communication protocols","Complain to the sponsor","Ignore the stakeholder's directions"],
a:1,d:"People",t:["stakeholder","communication","leadership"],diff:2,type:"single",
e:"Address the behavior directly and professionally. Explain how bypassing the PM creates confusion and risks for the project."},

{id:"P067",q:"A team member consistently takes credit for others' work during status meetings. Several team members have complained privately to the PM. What should the PM do?",
o:["Publicly call out the behavior in the next meeting","Have a private conversation with the individual about the impact of their behavior","Ignore it — team dynamics will sort themselves out","Reassign the team member to a different project"],
a:1,d:"People",t:["conflict","team","coaching"],diff:2,type:"single",
e:"Address the behavior privately first. Focus on the impact (team trust, morale) rather than attacking the person."},

{id:"P068",q:"During a retrospective, the team identifies that they need better technical skills in cloud architecture. What should the PM facilitate?",
o:["Hire a new team member with cloud skills","Create a training and development plan for existing team members","Tell the team to learn on their own time","Outsource all cloud work"],
a:1,d:"People",t:["team","coaching","servant-leadership"],diff:2,type:"single",
e:"Servant leaders invest in team development. A training plan addresses the gap while building team capability."},

{id:"P069",q:"A PM notices that decisions made in meetings are frequently revisited and changed afterward. What is the MOST likely root cause?",
o:["The team is indecisive","Key stakeholders are not included in the decision-making process","The PM is not authoritative enough","Meetings are too short"],
a:1,d:"People",t:["stakeholder","communication","facilitation"],diff:3,type:"single",
e:"Decisions get revisited when the right people aren't in the room. Ensure decision-makers and key influencers are included."},

{id:"P070",q:"Select TWO techniques a PM can use to build trust with a new team:",
o:["Micromanage all work to ensure quality","Be transparent about project challenges and decisions","Follow through consistently on commitments","Avoid sharing bad news to maintain morale","Make all decisions without team input"],
a:[1,2],d:"People",t:["leadership","trust","team"],diff:2,type:"multi",
e:"Trust is built through transparency and reliability. Hiding information or micromanaging destroys trust."},

{id:"P071",q:"A team member approaches the PM about a personal issue affecting their work performance. The PM should:",
o:["Tell them to keep personal issues out of the workplace","Listen empathetically, offer flexibility where possible, and connect them with appropriate resources","Immediately reduce their workload without discussion","Report the situation to their functional manager"],
a:1,d:"People",t:["servant-leadership","emotional-intelligence"],diff:2,type:"single",
e:"Servant leaders show empathy and support. Listen, offer reasonable accommodations, and point to resources (EAP, etc.) while respecting privacy."},

{id:"P072",q:"What is the Drexler-Sibbet Team Performance Model used for?",
o:["Measuring individual performance","Guiding teams through stages of development with specific actions at each stage","Calculating team velocity","Assigning team roles"],
a:1,d:"People",t:["team"],diff:3,type:"single",
e:"The Drexler-Sibbet model provides a framework for team development with 7 stages, each with specific questions the team must answer to progress."},

{id:"P073",q:"A PM is working with a team that has low morale after a failed sprint. What should the PM do FIRST?",
o:["Set higher targets for the next sprint to motivate them","Acknowledge the setback, facilitate a blameless retrospective, and focus on learning","Replace underperforming team members","Report the failure to management"],
a:1,d:"People",t:["team","servant-leadership","agile"],diff:2,type:"single",
e:"After failure, acknowledge it without blame, learn from it, and rebuild confidence. Punishing failure destroys psychological safety."},

{id:"P074",q:"Which power type is a PM exercising when they say 'If you don't meet the deadline, I'll report it to your manager'?",
o:["Expert power","Referent power","Coercive power","Legitimate power"],
a:2,d:"People",t:["leadership","power"],diff:2,type:"single",
e:"Coercive power uses threats of punishment. It's the least effective and most damaging form of power for long-term relationships."},

{id:"P075",q:"A PM needs to deliver a presentation to executives who prefer data-driven communication. How should the PM adapt?",
o:["Use the same presentation style as always","Focus on metrics, KPIs, and visual data with concise executive summaries","Include extensive technical details","Make the presentation as long as possible to show thoroughness"],
a:1,d:"People",t:["communication","stakeholder"],diff:2,type:"single",
e:"Adapt communication style to the audience. Executives typically want concise, data-driven information focused on outcomes and decisions needed."},

// --- More Process Domain (Advanced Scenarios) ---
{id:"R101",q:"A project has the following network paths: Path A: 2+4+6+3=15 days, Path B: 3+5+7+2=17 days, Path C: 4+3+5+4=16 days. Activity X is on Path A and has a duration of 4 days. What is the total float for Activity X?",
o:["0 days","1 day","2 days","3 days"],
a:2,d:"Process",t:["scheduling","critical-path"],diff:3,type:"single",
e:"Critical path = Path B (17 days). Path A = 15 days. Total float for activities on Path A = 17 - 15 = 2 days."},

{id:"R102",q:"A project manager is using the Delphi technique. What is this used for?",
o:["Scheduling activities","Gathering anonymous expert opinions to reach consensus","Calculating earned value","Managing procurement"],
a:1,d:"Process",t:["estimation","risk"],diff:2,type:"single",
e:"The Delphi technique uses anonymous rounds of expert input to reach consensus, avoiding groupthink and dominance by individuals."},

{id:"R103",q:"What is the difference between a project life cycle and a product life cycle?",
o:["They are the same thing","The project life cycle is a phase within the product life cycle","The product life cycle is a phase within the project life cycle","They are unrelated"],
a:1,d:"Process",t:["framework"],diff:2,type:"single",
e:"The product life cycle spans from concept to retirement. The project life cycle (one or more projects) is typically a subset within the product life cycle."},

{id:"R104",q:"In Scrum, what happens if the team cannot complete all sprint backlog items by the end of the sprint?",
o:["The sprint is extended until all items are complete","Incomplete items return to the product backlog for re-prioritization","The team is penalized in the next sprint","The Scrum Master completes the remaining work"],
a:1,d:"Process",t:["agile","scrum"],diff:2,type:"single",
e:"Sprints are never extended. Incomplete items go back to the product backlog. The PO decides if/when they'll be scheduled again."},

{id:"R105",q:"What is a cumulative flow diagram (CFD) used for?",
o:["Tracking project costs","Visualizing work item flow through stages and identifying bottlenecks","Planning sprint capacity","Estimating project duration"],
a:1,d:"Process",t:["agile","kanban","metrics"],diff:2,type:"single",
e:"A CFD shows the quantity of work items in each stage over time. Widening bands indicate bottlenecks; flat areas indicate blocked flow."},

{id:"R106",q:"A project requires a decision between two options. Option A costs $50,000 with 60% chance of $200,000 return. Option B costs $30,000 with 80% chance of $100,000 return. Using EMV, which is better?",
o:["Option A (EMV = $70,000)","Option B (EMV = $50,000)","Option A (EMV = $120,000)","Option B (EMV = $80,000)"],
a:0,d:"Process",t:["risk","quantitative"],diff:3,type:"single",
e:"Option A: EMV = (0.6 × $200,000) - $50,000 = $120,000 - $50,000 = $70,000. Option B: EMV = (0.8 × $100,000) - $30,000 = $80,000 - $30,000 = $50,000. Option A is better."},

{id:"R107",q:"What is the purpose of a project governance framework?",
o:["To micromanage the project team","To provide structure for decision-making, oversight, and accountability throughout the project","To replace the project management plan","To define technical architecture"],
a:1,d:"Process",t:["integration","framework"],diff:2,type:"single",
e:"Governance provides the framework for decision-making authority, escalation paths, oversight mechanisms, and accountability structures."},

{id:"R108",q:"A team is using SAFe (Scaled Agile Framework). What is a Program Increment (PI)?",
o:["A single sprint","A timebox (typically 8-12 weeks) during which an Agile Release Train delivers incremental value","A project phase","A release to production"],
a:1,d:"Process",t:["agile","scaled"],diff:3,type:"single",
e:"In SAFe, a PI is a timebox of 8-12 weeks (typically 5 sprints) where multiple teams on an Agile Release Train plan and deliver together."},

{id:"R109",q:"What is the difference between verification and validation?",
o:["They are the same thing","Verification checks if the product was built correctly; validation checks if the right product was built","Verification is done by the team; validation by the customer","Verification comes after validation"],
a:1,d:"Process",t:["quality"],diff:2,type:"single",
e:"Verification = 'Did we build it right?' (meets specifications). Validation = 'Did we build the right thing?' (meets user needs)."},

{id:"R110",q:"A project is 60% complete. The PM calculates: PV=$600K, EV=$540K, AC=$580K. What is the project status?",
o:["Behind schedule and over budget","Behind schedule and under budget","Ahead of schedule and over budget","Ahead of schedule and under budget"],
a:0,d:"Process",t:["cost","evm"],diff:2,type:"single",
e:"SV = EV-PV = $540K-$600K = -$60K (behind schedule). CV = EV-AC = $540K-$580K = -$40K (over budget)."},

{id:"R111",q:"What is a decision tree used for in project management?",
o:["Organizing the WBS","Evaluating decisions under uncertainty by mapping choices, probabilities, and outcomes","Scheduling activities","Managing stakeholders"],
a:1,d:"Process",t:["risk","quantitative"],diff:2,type:"single",
e:"Decision trees map decision points, chance events (with probabilities), and outcomes to calculate expected values for different choices."},

{id:"R112",q:"In agile, what is the purpose of a product roadmap?",
o:["To replace the project schedule","To provide a high-level strategic view of planned releases and features over time","To list all user stories in detail","To assign work to team members"],
a:1,d:"Process",t:["agile","planning"],diff:2,type:"single",
e:"A product roadmap is a strategic document showing the planned direction and major milestones over time. It's high-level, not detailed."},

{id:"R113",q:"What is the difference between a risk appetite and a risk threshold?",
o:["They are the same thing","Risk appetite is the general willingness to take risk; risk threshold is the specific measurable level at which action is required","Risk appetite is for the team; risk threshold is for management","Risk threshold is higher than risk appetite"],
a:1,d:"Process",t:["risk"],diff:3,type:"single",
e:"Appetite = general attitude toward risk (high/medium/low). Threshold = specific measurable point that triggers action (e.g., 'if cost overrun exceeds 10%')."},

{id:"R114",q:"A PM is managing a hybrid project. The infrastructure team uses predictive planning while the software team uses Scrum. How should integration be managed?",
o:["Force both teams to use the same approach","Establish clear integration points, shared milestones, and regular cross-team synchronization","Let each team work independently","Have the PM attend all meetings for both teams"],
a:1,d:"Process",t:["hybrid","integration"],diff:3,type:"single",
e:"Hybrid projects need deliberate integration: shared milestones, sync points, and clear interfaces between predictive and agile components."},

{id:"R115",q:"What is the purpose of a sprint burnup chart compared to a burndown chart?",
o:["They show the same information differently","Burnup shows work completed AND scope changes; burndown only shows remaining work","Burnup is for releases; burndown is for sprints","Burnup is more accurate"],
a:1,d:"Process",t:["agile","metrics"],diff:2,type:"single",
e:"Burnup charts show both completed work and total scope, making scope changes visible. Burndown only shows remaining work, hiding scope increases."},

{id:"R116",q:"Select TWO characteristics of a Fixed Price Incentive Fee (FPIF) contract:",
o:["The seller bears all cost risk","There is a ceiling price the buyer will not exceed","Both buyer and seller share cost savings/overruns through a sharing ratio","The scope must be well-defined","The buyer bears all cost risk"],
a:[1,2],d:"Process",t:["procurement"],diff:3,type:"multi",
e:"FPIF has a ceiling price (buyer's max) and a sharing ratio that splits savings/overruns between buyer and seller, incentivizing cost control."},

{id:"R117",q:"What is the purpose of a Pareto chart in quality management?",
o:["To track defects over time","To identify the vital few causes that produce the majority of problems (80/20 rule)","To show process variation","To compare planned vs actual quality"],
a:1,d:"Process",t:["quality"],diff:2,type:"single",
e:"Pareto charts rank causes by frequency/impact, showing that typically 80% of problems come from 20% of causes. Focus on the vital few."},

{id:"R118",q:"A project team is using Kanban. The 'Testing' column consistently has items piling up. What should the team do?",
o:["Increase the WIP limit for Testing","Investigate the bottleneck and consider adding testing capacity or reducing upstream flow","Remove the WIP limit entirely","Skip testing for lower-priority items"],
a:1,d:"Process",t:["agile","kanban"],diff:2,type:"single",
e:"Bottlenecks in Kanban require investigation. Solutions include adding capacity at the bottleneck, reducing upstream WIP limits, or improving the process."},

{id:"R119",q:"What is the formula for Cost Variance (CV)?",
o:["CV = AC - EV","CV = EV - AC","CV = PV - AC","CV = EV - PV"],
a:1,d:"Process",t:["cost","evm"],diff:1,type:"single",
e:"CV = EV - AC. Positive = under budget. Negative = over budget."},

{id:"R120",q:"A project manager needs to determine the probability of completing the project by a specific date. Which technique is MOST appropriate?",
o:["Critical path method","PERT analysis","Monte Carlo simulation","Expert judgment"],
a:2,d:"Process",t:["scheduling","risk","quantitative"],diff:3,type:"single",
e:"Monte Carlo simulation provides probability distributions for completion dates, showing the likelihood of meeting any given deadline."},

// --- More Business Environment ---
{id:"B017",q:"What is the difference between ROI and NPV as project selection criteria?",
o:["They measure the same thing","ROI shows percentage return on investment; NPV shows the present value of future cash flows minus investment","ROI is more accurate than NPV","NPV is only used for small projects"],
a:1,d:"Business Environment",t:["financial","business-case"],diff:2,type:"single",
e:"ROI = (Gain - Cost) / Cost × 100%. NPV discounts future cash flows to present value. Both are used for project selection; NPV accounts for time value of money."},

{id:"B018",q:"A project sponsor asks the PM to inflate the project's expected benefits to secure funding approval. What should the PM do?",
o:["Comply — the sponsor has authority over the business case","Refuse and report the request as an ethical violation","Slightly inflate the numbers as a compromise","Ignore the request and submit accurate numbers without telling the sponsor"],
a:1,d:"Business Environment",t:["ethics","business-case"],diff:2,type:"single",
e:"PMI's Code of Ethics requires honesty. Inflating benefits is misrepresentation. The PM must refuse and report the ethical violation."},

{id:"B019",q:"What is the payback period?",
o:["The time required for the project to be completed","The time required for the project's benefits to repay the initial investment","The time between project phases","The warranty period for deliverables"],
a:1,d:"Business Environment",t:["financial","business-case"],diff:1,type:"single",
e:"Payback period = time until cumulative benefits equal the initial investment. Shorter payback = less risk. Doesn't account for time value of money."},

{id:"B020",q:"An organization uses a PMO to oversee all projects. Which type of PMO has the MOST control over projects?",
o:["Supportive PMO","Controlling PMO","Directive PMO","Advisory PMO"],
a:2,d:"Business Environment",t:["framework","organizational"],diff:2,type:"single",
e:"Directive PMO directly manages projects. Controlling PMO provides frameworks and compliance. Supportive PMO provides templates and best practices."},

{id:"B021",q:"A project is delivering a product in a highly regulated industry (healthcare). What additional consideration is critical?",
o:["Faster delivery to beat competitors","Compliance with regulatory requirements must be built into the project plan from the start","Regulatory compliance can be addressed after delivery","Only the legal team needs to worry about regulations"],
a:1,d:"Business Environment",t:["compliance"],diff:2,type:"single",
e:"In regulated industries, compliance must be planned from the start — it affects scope, schedule, cost, and quality requirements."},

{id:"B022",q:"What is an internal rate of return (IRR)?",
o:["The interest rate on project loans","The discount rate at which a project's NPV equals zero","The rate of team turnover","The rate of scope change"],
a:1,d:"Business Environment",t:["financial","business-case"],diff:3,type:"single",
e:"IRR is the discount rate that makes NPV = 0. Projects with IRR greater than the organization's hurdle rate are considered financially viable."},

{id:"B023",q:"Select TWO factors that would cause a PM to recommend terminating a project:",
o:["The project is slightly behind schedule","The business case is no longer valid due to market changes","A key technology required for the project has become obsolete with no viable alternative","A team member has resigned","The sponsor wants to add new features"],
a:[1,2],d:"Business Environment",t:["business-case","strategic-alignment"],diff:3,type:"multi",
e:"Projects should be terminated when the business justification no longer holds or when critical constraints make success impossible."},

{id:"B024",q:"What is the sunk cost fallacy and why is it relevant to project management?",
o:["It's a budgeting technique","It's the tendency to continue investing in a failing project because of money already spent, rather than evaluating future value","It's a method for calculating project costs","It's irrelevant to project management"],
a:1,d:"Business Environment",t:["financial","business-case"],diff:3,type:"single",
e:"Sunk costs are already spent and unrecoverable. Decisions should be based on future value, not past investment. PMs must recognize this bias."},

{id:"B025",q:"What is the purpose of a project portfolio review?",
o:["To review individual project schedules","To evaluate the collection of projects against strategic objectives and resource capacity","To approve change requests","To conduct team performance reviews"],
a:1,d:"Business Environment",t:["portfolio","strategic-alignment"],diff:2,type:"single",
e:"Portfolio reviews assess whether the mix of projects still aligns with strategy, whether resources are optimally allocated, and whether any projects should be added, paused, or terminated."},

{id:"B026",q:"An organization is undergoing a digital transformation. How should the PM ensure the project supports this initiative?",
o:["Focus only on the project deliverables without considering organizational context","Align project objectives with the transformation goals and coordinate with other transformation initiatives","Wait for the transformation to complete before starting the project","Ignore the transformation — it's not the PM's responsibility"],
a:1,d:"Business Environment",t:["strategic-alignment","change-management"],diff:2,type:"single",
e:"Projects should be aligned with and contribute to broader organizational initiatives. The PM must understand the strategic context."},

{id:"R121",q:"What is the difference between a product increment and a release?",
o:["They are the same thing","An increment is a potentially shippable addition of value; a release is the decision to deploy to users","An increment is larger than a release","A release happens every sprint; an increment doesn't"],
a:1,d:"Process",t:["agile","delivery"],diff:2,type:"single",
e:"Every sprint produces an increment (potentially releasable). A release is a business decision about when to deploy to users — not every increment is released."},

{id:"R122",q:"What is the purpose of a Definition of Ready (DoR)?",
o:["To define when the project is ready to start","To establish criteria that a backlog item must meet before the team pulls it into a sprint","To determine when a team member is ready to work","To define project completion criteria"],
a:1,d:"Process",t:["agile","quality"],diff:2,type:"single",
e:"DoR ensures backlog items are sufficiently refined (clear, estimated, small enough, acceptance criteria defined) before the team commits to them."},

{id:"R123",q:"A project is using earned value management. EV=$400K, PV=$450K, AC=$420K, BAC=$1M. What is the EAC assuming current performance continues?",
o:["$1,050,000","$1,000,000","$950,000","$1,100,000"],
a:0,d:"Process",t:["cost","evm"],diff:3,type:"single",
e:"CPI = EV/AC = 400/420 = 0.952. EAC = BAC/CPI = $1,000,000/0.952 = $1,050,420 ≈ $1,050,000."},

{id:"R124",q:"What is a fishbone (Ishikawa) diagram used for?",
o:["Scheduling activities","Identifying potential root causes of a problem organized by category","Tracking project costs","Managing stakeholders"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"Fishbone/Ishikawa diagrams organize potential causes of a problem into categories (People, Process, Materials, Equipment, Environment, Management) to identify root causes."},

{id:"R125",q:"In agile, what is the concept of 'technical debt'?",
o:["Money owed to technology vendors","The implied cost of future rework caused by choosing quick/easy solutions over better approaches","The cost of technology licenses","Budget overruns on technical work"],
a:1,d:"Process",t:["agile","quality"],diff:2,type:"single",
e:"Technical debt accumulates when teams take shortcuts. Like financial debt, it must eventually be 'repaid' through refactoring, or it compounds and slows future development."},

{id:"R126",q:"What is the purpose of a project status report?",
o:["To replace face-to-face communication","To provide stakeholders with a regular summary of project progress, issues, and forecasts","To document all project activities in detail","To assign new tasks to team members"],
a:1,d:"Process",t:["communication","integration"],diff:1,type:"single",
e:"Status reports communicate progress against baselines, highlight issues/risks, and provide forecasts. They support stakeholder engagement and decision-making."},

{id:"R127",q:"Select TWO benefits of using timeboxing in agile:",
o:["It eliminates the need for planning","It creates urgency and focus, preventing scope creep within iterations","It forces regular inspection and adaptation points","It guarantees all work will be completed","It removes the need for prioritization"],
a:[1,2],d:"Process",t:["agile"],diff:2,type:"multi",
e:"Timeboxing creates focus (work to a fixed time, not until done) and forces regular inspect-and-adapt cycles at timebox boundaries."},

{id:"P100",q:"A PM is transitioning from a directive leadership style to servant leadership. What is the MOST important mindset shift?",
o:["From 'I decide' to 'I facilitate the team's decision-making'","From working hard to working less","From managing tasks to ignoring tasks","From accountability to no accountability"],
a:0,d:"People",t:["leadership","servant-leadership"],diff:2,type:"single",
e:"The core shift is from directing to facilitating — empowering the team to make decisions rather than making decisions for them."},

{id:"P101",q:"A team member from a collectivist culture avoids taking individual credit for their contributions. How should the PM handle recognition?",
o:["Force them to accept individual praise publicly","Recognize team achievements and contributions in ways that align with their cultural values","Ignore their contributions since they don't want recognition","Only recognize individuals who seek recognition"],
a:1,d:"People",t:["diversity","motivation","team"],diff:3,type:"single",
e:"Adapt recognition approaches to cultural values. Some cultures value collective recognition over individual spotlight."},

{id:"P102",q:"What is the 'ladder of inference' and why is it relevant to project managers?",
o:["A project scheduling technique","A mental model showing how people move from observable data to conclusions through assumptions and beliefs, often leading to misunderstandings","A team development framework","A risk assessment tool"],
a:1,d:"People",t:["communication","emotional-intelligence"],diff:3,type:"single",
e:"The ladder of inference explains how we jump from data to conclusions through filters and assumptions. PMs should check assumptions and stay low on the ladder."},

]; // end questionBank

// Utility: Get question counts by domain
function getQuestionStats() {
  const stats = {People:0, Process:0, "Business Environment":0};
  questionBank.forEach(q => stats[q.d]++);
  return stats;
}

// Utility: Select questions for practice exam with proper domain distribution
function selectExamQuestions(count=180) {
  const people = questionBank.filter(q => q.d === "People");
  const process = questionBank.filter(q => q.d === "Process");
  const business = questionBank.filter(q => q.d === "Business Environment");
  
  // Target distribution: People 42%, Process 50%, Business 8%
  const pCount = Math.round(count * 0.42);
  const rCount = Math.round(count * 0.50);
  const bCount = count - pCount - rCount;
  
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  const selected = [
    ...shuffle(people).slice(0, Math.min(pCount, people.length)),
    ...shuffle(process).slice(0, Math.min(rCount, process.length)),
    ...shuffle(business).slice(0, Math.min(bCount, business.length))
  ];
  
  return shuffle(selected);
}

// Export for use in other files
if (typeof module !== 'undefined') module.exports = { questionBank, getQuestionStats, selectExamQuestions };
