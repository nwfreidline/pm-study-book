// PMP Question Bank Expansion — 150 Additional Questions
// Append these to the questionBank array in quiz-bank.js
// IDs continue from: People P103+, Process R128+, Business Environment B027+
// Domain distribution: ~63 People (42%), ~75 Process (50%), ~12 Business (8%)
// Difficulty mix: ~30% diff:1, ~45% diff:2, ~25% diff:3

const additionalQuestions = [

// ═══════════════════════════════════════════════════════════════
// PEOPLE DOMAIN — 63 Questions (P103–P165)
// ═══════════════════════════════════════════════════════════════

// --- Resource Management & Organizational Structures ---
{id:"P103",q:"A project manager in a weak matrix organization is struggling to get dedicated resources from functional managers. What is the BEST approach?",
o:["Escalate to the CEO to override functional managers","Negotiate with functional managers using the project charter as authority","Hire external contractors to replace all internal resources","Reduce the project scope to eliminate the need for those resources"],
a:1,d:"People",t:["leadership","matrix","negotiation"],diff:2,type:"single",
e:"In a weak matrix, the PM has limited authority. The project charter, signed by the sponsor, provides formal authorization. Using it as a negotiation tool with functional managers is the best approach. Escalating to the CEO skips proper channels."},

{id:"P104",q:"In which organizational structure does the project manager have the MOST authority over resources?",
o:["Functional","Weak matrix","Balanced matrix","Projectized"],
a:3,d:"People",t:["leadership","matrix"],diff:1,type:"single",
e:"In a projectized organization, the PM has full authority over resources, budget, and decisions. Authority decreases as you move toward functional structures: Projectized > Strong Matrix > Balanced > Weak Matrix > Functional."},

{id:"P105",q:"A functional manager refuses to release a critical resource for your project despite the resource being identified in the resource management plan. What should the PM do FIRST?",
o:["Escalate to the project sponsor immediately","Understand the functional manager's constraints and negotiate a solution","Replace the resource with someone less qualified","Document the issue and wait for the resource to become available"],
a:1,d:"People",t:["negotiation","conflict","matrix"],diff:2,type:"single",
e:"Before escalating, the PM should first understand why the functional manager is refusing and attempt to negotiate. There may be legitimate constraints that can be resolved through discussion and compromise."},

{id:"P106",q:"A project team member is consistently underperforming. The PM has provided coaching and feedback, but performance has not improved. What should the PM do NEXT?",
o:["Immediately remove the team member from the project","Document the performance issues and work with HR and the functional manager on a formal performance plan","Ignore the issue and redistribute the work to other team members","Publicly address the performance issue in the next team meeting"],
a:1,d:"People",t:["leadership","coaching","team"],diff:2,type:"single",
e:"After coaching fails, the next step is formal documentation and involving HR/functional management. Removing without process, ignoring, or public shaming are all inappropriate responses."},

{id:"P107",q:"A PM is managing a project with team members in five different time zones. What is the MOST effective strategy for resource management?",
o:["Require all team members to work the same hours regardless of time zone","Establish core overlap hours and use asynchronous communication for non-critical items","Only schedule meetings convenient for the PM's time zone","Eliminate all meetings and rely solely on email"],
a:1,d:"People",t:["team","communication","virtual"],diff:1,type:"single",
e:"Core overlap hours balance collaboration needs with respect for team members' work-life balance. Asynchronous tools handle non-urgent communication across time zones effectively."},

{id:"P108",q:"During resource leveling, the project manager discovers that the critical path has extended by three weeks. What is the BEST course of action?",
o:["Accept the delay without informing stakeholders","Crash the critical path activities by adding resources","Inform stakeholders of the impact and evaluate options including crashing, fast-tracking, or scope adjustment","Remove the resource constraints and overallocate team members"],
a:2,d:"People",t:["scheduling","communication","stakeholder"],diff:3,type:"single",
e:"Resource leveling can extend the schedule. The PM must communicate the impact to stakeholders and collaboratively evaluate options. Simply accepting, crashing without analysis, or overallocating are not appropriate first responses."},


// --- Advanced Emotional Intelligence & Coaching ---
{id:"P109",q:"A team member becomes visibly upset during a retrospective when receiving feedback about missed deadlines. As a PM practicing emotional intelligence, what should you do?",
o:["Ignore the emotional reaction and continue the meeting","Acknowledge the emotion privately after the meeting and explore the root cause","Tell the team member to be more professional","End the retrospective immediately"],
a:1,d:"People",t:["emotional-intelligence","coaching","agile"],diff:2,type:"single",
e:"Emotional intelligence requires recognizing and appropriately responding to emotions. Acknowledging the reaction privately shows empathy while maintaining meeting productivity. Ignoring or dismissing emotions damages trust."},

{id:"P110",q:"A PM notices that a senior developer is demotivated despite receiving a recent salary increase. According to Herzberg's Two-Factor Theory, what is the MOST likely explanation?",
o:["The salary increase was not large enough","Salary is a hygiene factor — its presence prevents dissatisfaction but doesn't create motivation. The developer likely lacks motivators like recognition or challenging work","The developer is ungrateful","The PM should offer another raise"],
a:1,d:"People",t:["motivation","emotional-intelligence"],diff:1,type:"single",
e:"Herzberg distinguishes hygiene factors (salary, conditions — prevent dissatisfaction) from motivators (achievement, recognition, growth — create satisfaction). Addressing only hygiene factors won't motivate."},

{id:"P111",q:"A project manager observes that team morale has dropped significantly after a major scope change was imposed by the sponsor. What should the PM do FIRST?",
o:["Tell the team to accept the change and move on","Hold a team meeting to acknowledge the impact, listen to concerns, and collaboratively plan the path forward","Escalate to the sponsor that the team is unhappy","Allow the team unlimited time to process before resuming work"],
a:1,d:"People",t:["emotional-intelligence","leadership","change-management"],diff:2,type:"single",
e:"Acknowledging impact and listening demonstrates emotional intelligence. Collaborative planning gives the team agency. Dismissing feelings, escalating complaints, or indefinite delays are not effective leadership responses."},

{id:"P112",q:"Which of the following BEST describes the difference between coaching and mentoring?",
o:["Coaching focuses on specific skills and performance improvement; mentoring focuses on long-term career development","Coaching is only done by external consultants; mentoring is done by managers","Coaching is informal; mentoring requires a formal contract","There is no difference — they are interchangeable terms"],
a:0,d:"People",t:["coaching","leadership"],diff:1,type:"single",
e:"Coaching is task/skill-focused and short-term (improving specific performance). Mentoring is relationship-focused and long-term (career guidance and development). Both are valuable but serve different purposes."},

{id:"P113",q:"A PM is coaching a team member who consistently avoids making decisions, always deferring to the PM. What coaching technique is MOST appropriate?",
o:["Make the decisions for them to keep the project moving","Ask open-ended questions to help them analyze options and build confidence in their judgment","Tell them they must make all decisions independently from now on","Assign them to a different role with fewer decisions"],
a:1,d:"People",t:["coaching","leadership","empowerment"],diff:2,type:"single",
e:"Effective coaching uses questions to develop critical thinking and decision-making skills. This builds long-term capability rather than creating dependency (making decisions for them) or overwhelming them (sudden full autonomy)."},

// --- Advanced Conflict Resolution ---
{id:"P114",q:"Two senior team members have an ongoing personal conflict that is now affecting team productivity. Previous attempts at collaboration have failed. What should the PM do?",
o:["Separate them onto different work streams and avoid addressing the conflict","Escalate to HR immediately without further intervention","Have a private conversation with each person to understand perspectives, then facilitate a structured mediation session","Force them to resolve it themselves or face removal from the project"],
a:2,d:"People",t:["conflict","leadership","team"],diff:3,type:"single",
e:"When collaboration fails, structured mediation is the next step. Understanding each perspective first allows the PM to facilitate effectively. Avoidance lets the problem grow; immediate HR escalation skips PM responsibility; threats create fear."},

{id:"P115",q:"During a sprint review, a stakeholder aggressively criticizes the team's work, calling it 'unacceptable.' The team is visibly demoralized. What should the PM/Scrum Master do?",
o:["Allow the stakeholder to continue — they have the right to express dissatisfaction","Acknowledge the stakeholder's concerns, redirect the conversation to specific actionable feedback, and address team morale afterward","End the meeting immediately and report the stakeholder to their manager","Argue with the stakeholder to defend the team's work"],
a:1,d:"People",t:["conflict","stakeholder","agile","emotional-intelligence"],diff:3,type:"single",
e:"The PM must balance stakeholder management with team protection. Acknowledging concerns validates the stakeholder while redirecting to constructive feedback maintains professionalism. Following up with the team shows servant leadership."},

{id:"P116",q:"A conflict arises between the development team and the operations team about deployment procedures. The development team wants continuous deployment; operations wants scheduled releases. What conflict resolution approach is BEST?",
o:["Compromise — deploy twice a week as a middle ground","Collaborate — bring both teams together to design a deployment pipeline that meets both teams' needs for speed and stability","Force — the PM decides which approach to use","Smooth — tell both teams their concerns are valid and avoid making a decision"],
a:1,d:"People",t:["conflict","agile","hybrid"],diff:3,type:"single",
e:"Collaboration (problem-solving) finds a win-win solution addressing both speed and stability. Compromise gives each side only part of what they need. Forcing and smoothing don't resolve the underlying tension."},


// --- Ethics Scenarios ---
{id:"P117",q:"A PM discovers that a vendor has been providing gifts to a team member responsible for evaluating vendor proposals. The gifts were not disclosed. What should the PM do FIRST?",
o:["Ignore it if the gifts are small in value","Report the situation to the appropriate authority per organizational policy","Confront the vendor publicly at the next meeting","Remove the team member from the project immediately without investigation"],
a:1,d:"People",t:["ethics","procurement"],diff:2,type:"single",
e:"PMI's Code of Ethics requires reporting conflicts of interest. The PM should follow organizational policy for reporting, which ensures proper investigation. Ignoring, public confrontation, or immediate removal without process are inappropriate."},

{id:"P118",q:"A project sponsor asks the PM to report inflated progress to the steering committee to avoid budget cuts. What should the PM do?",
o:["Comply with the sponsor's request since they have authority over the project","Refuse and report accurate progress, explaining the ethical obligation to provide truthful information","Quit the project immediately","Report the sponsor to PMI before discussing it with them"],
a:1,d:"People",t:["ethics","communication","stakeholder"],diff:2,type:"single",
e:"PMI's Code of Ethics requires honesty and truthful reporting. The PM should refuse to misrepresent data and explain why. Quitting abandons responsibility; reporting to PMI before addressing it directly skips appropriate steps."},

{id:"P119",q:"A PM realizes they lack the technical expertise needed for a complex project component. According to PMI's Code of Ethics, what should they do?",
o:["Fake expertise to maintain credibility with the team","Acknowledge the gap and bring in subject matter experts or seek training","Delegate all technical decisions to the team without oversight","Hide the knowledge gap and hope no issues arise"],
a:1,d:"People",t:["ethics","leadership"],diff:1,type:"single",
e:"PMI's Code of Ethics requires honesty about qualifications and competence. Acknowledging gaps and seeking appropriate support demonstrates integrity and protects the project."},

{id:"P120",q:"A PM working internationally discovers that local business practices include payments to government officials to expedite permits. The project timeline depends on these permits. What should the PM do?",
o:["Make the payments since it's local custom and the project needs the permits","Refuse the payments, report the situation to legal/compliance, and work with them to find legitimate alternatives","Delay the project indefinitely rather than engage with local officials","Have a local team member make the payments so the PM isn't directly involved"],
a:1,d:"People",t:["ethics","compliance"],diff:3,type:"single",
e:"Bribery is unethical regardless of local custom. PMI's Code of Ethics requires compliance with laws and ethical standards. The PM must refuse, involve legal/compliance, and find legitimate paths. Having others make payments doesn't remove ethical responsibility."},

{id:"P121",q:"During a project audit, the PM discovers that a team member falsified test results to meet a deadline. The deliverable has already been accepted by the customer. What should the PM do?",
o:["Since the customer accepted it, take no action","Disclose the issue to appropriate stakeholders, arrange for proper testing, and address the integrity violation with the team member through proper channels","Quietly rerun the tests and only disclose if they fail","Fire the team member immediately without further investigation"],
a:1,d:"People",t:["ethics","quality","stakeholder"],diff:3,type:"single",
e:"Integrity requires disclosure even when the issue is discovered after acceptance. The PM must ensure proper testing occurs, inform stakeholders, and address the violation through appropriate HR/management channels."},

// --- Stakeholder Engagement & Communication ---
{id:"P122",q:"A key stakeholder who was initially supportive has become resistant to the project after a leadership change in their department. What should the PM do FIRST?",
o:["Ignore the stakeholder since they were previously supportive","Meet with the stakeholder to understand their new concerns and priorities under the new leadership","Escalate to the sponsor to force the stakeholder's cooperation","Remove the stakeholder from the communication plan"],
a:1,d:"People",t:["stakeholder","communication","change-management"],diff:2,type:"single",
e:"Stakeholder attitudes can change. The PM should proactively engage to understand new concerns. The new leadership may have different priorities that the project can accommodate or address."},

{id:"P123",q:"A PM has identified a stakeholder with high power and high interest who is currently unaware of the project. According to the stakeholder engagement assessment matrix, what is the desired engagement level?",
o:["Keep them unaware to avoid interference","Move them to 'Resistant' first, then 'Supportive'","Move them directly to 'Leading' or 'Supportive' engagement","Keep them at 'Neutral' to minimize management effort"],
a:2,d:"People",t:["stakeholder","communication"],diff:2,type:"single",
e:"High power/high interest stakeholders should be managed closely. Moving them from 'Unaware' to 'Supportive' or 'Leading' ensures they champion the project rather than becoming obstacles when they eventually learn about it."},

{id:"P124",q:"A project has 12 stakeholders. How many potential communication channels exist?",
o:["66","78","132","144"],
a:0,d:"People",t:["communication"],diff:1,type:"single",
e:"Communication channels formula: n(n-1)/2 = 12(11)/2 = 66. This demonstrates why communication management becomes exponentially more complex as stakeholders increase."},

{id:"P125",q:"A PM is preparing a communication management plan. Which factor is MOST important in determining the communication method for each stakeholder?",
o:["The PM's preferred communication style","The stakeholder's communication requirements and preferences","The cheapest available communication technology","Whatever method was used on the last project"],
a:1,d:"People",t:["communication","stakeholder"],diff:1,type:"single",
e:"Communication should be tailored to stakeholder needs, not PM preferences or cost. Different stakeholders need different formats, frequencies, and levels of detail based on their role and information needs."},


// --- Advanced Team Development & Agile Teams ---
{id:"P126",q:"A newly formed agile team is experiencing frequent disagreements about coding standards and definition of done. According to Tuckman's model, what stage is the team in?",
o:["Forming","Storming","Norming","Performing"],
a:1,d:"People",t:["tuckman","agile","team"],diff:1,type:"single",
e:"Storming is characterized by conflict as team members assert their opinions and establish boundaries. Disagreements about standards and processes are classic storming behaviors. This is normal and necessary for team development."},

{id:"P127",q:"A PM notices that a previously high-performing team has regressed to conflict and confusion after three members were replaced. What Tuckman stage has the team returned to?",
o:["Forming","Storming","Norming","Adjourning"],
a:0,d:"People",t:["tuckman","team"],diff:1,type:"single",
e:"When team composition changes significantly, the team often regresses to Forming as new relationships and norms must be established. The PM should facilitate team-building activities to accelerate progression through the stages again."},

{id:"P128",q:"An agile team has been together for six months and consistently delivers high-quality increments. They resolve conflicts quickly and proactively help each other. A new complex initiative requires splitting them into two teams. What should the PM consider?",
o:["Split the team randomly to be fair","Keep the team together and hire a second team for the new initiative","Seed each new team with experienced members from the original team and plan for a storming period","The split won't affect performance since individuals retain their skills"],
a:2,d:"People",t:["tuckman","team","agile"],diff:3,type:"single",
e:"Splitting a performing team creates two new teams that must form again. Seeding experienced members helps transfer culture, but the PM must plan for reduced velocity during the storming/norming phases of the new teams."},

{id:"P129",q:"A Scrum team's velocity has been declining over the last four sprints. The team reports feeling burned out. What should the Scrum Master do FIRST?",
o:["Push the team harder to meet their original velocity","Facilitate a focused retrospective to identify root causes of burnout and collaboratively develop sustainable pace solutions","Report the declining velocity to management","Reduce the sprint length to create more urgency"],
a:1,d:"People",t:["agile","scrum","leadership","team"],diff:1,type:"single",
e:"Sustainable pace is a core agile principle. The Scrum Master should help the team identify burnout causes (overcommitment, technical debt, unclear priorities) and find solutions. Pushing harder or creating urgency worsens burnout."},

{id:"P130",q:"Select TWO techniques that are MOST effective for developing a self-organizing team:",
o:["Assigning all tasks to team members based on the PM's assessment","Providing clear goals and boundaries while letting the team determine how to achieve them","Coaching the team on collaborative decision-making techniques","Requiring management approval for all team decisions","Rotating the team lead role weekly regardless of expertise"],
a:[1,2],d:"People",t:["team","agile","coaching","empowerment"],diff:2,type:"multi",
e:"Self-organizing teams need clear goals/boundaries (what to achieve) and decision-making skills (how to achieve it). The PM provides direction and coaching, not task assignments or approval gates."},

{id:"P131",q:"A team member from a high power-distance culture rarely speaks up in meetings, even when they have valuable insights. What should the PM do?",
o:["Accept that this is their cultural norm and don't intervene","Create alternative channels for input (written feedback, one-on-ones) and explicitly invite their perspective in meetings","Tell them they must speak up more to be a good team member","Assign them a spokesperson role to force participation"],
a:1,d:"People",t:["team","communication","diversity","emotional-intelligence"],diff:2,type:"single",
e:"Cultural awareness means adapting processes to include all voices, not forcing conformity to one communication style. Multiple input channels and explicit invitations respect cultural norms while ensuring valuable perspectives are heard."},

{id:"P132",q:"A project manager is transitioning a team from a traditional waterfall approach to agile. Several senior team members are resistant, saying 'we've always done it this way.' What is the BEST approach?",
o:["Force the change immediately — management has decided","Acknowledge their concerns, involve them in designing the transition approach, and start with a pilot","Allow resistant members to continue with waterfall while others use agile","Replace resistant team members with agile-experienced hires"],
a:1,d:"People",t:["change-management","agile","leadership","coaching"],diff:3,type:"single",
e:"Change management requires acknowledging resistance, involving people in the solution, and demonstrating value through small wins (pilots). Forcing change creates deeper resistance; splitting approaches creates dysfunction; replacing people wastes institutional knowledge."},

// --- Negotiation & Influence ---
{id:"P133",q:"During contract negotiations, the vendor insists on a time-and-materials contract while the buyer wants fixed-price. What negotiation strategy should the PM recommend?",
o:["Accept the vendor's terms to maintain the relationship","Explore a hybrid approach such as fixed-price for well-defined phases and T&M for uncertain phases","Threaten to find another vendor","Split the difference on the hourly rate"],
a:1,d:"People",t:["negotiation","procurement"],diff:3,type:"single",
e:"Integrative (win-win) negotiation finds creative solutions that address both parties' underlying interests. The vendor wants protection from scope uncertainty; the buyer wants cost predictability. A hybrid contract addresses both."},

{id:"P134",q:"A PM needs to convince senior management to approve additional budget for risk mitigation. Which influence technique is MOST likely to succeed?",
o:["Emotional appeal about team stress","Data-driven presentation showing cost of risk occurrence vs. cost of mitigation, with probability analysis","Threatening to resign if the budget isn't approved","Asking team members to individually lobby management"],
a:1,d:"People",t:["negotiation","leadership","risk"],diff:2,type:"single",
e:"Senior management responds to data and business cases. Showing the expected monetary value of risks vs. mitigation costs provides rational justification. Emotional appeals, threats, and lobbying campaigns are unprofessional."},

{id:"P135",q:"Select TWO characteristics of principled negotiation (as described in 'Getting to Yes'):",
o:["Focus on positions rather than interests","Separate the people from the problem","Insist on using objective criteria for decisions","Always compromise to reach agreement quickly","Use power tactics to dominate the negotiation"],
a:[1,2],d:"People",t:["negotiation","conflict"],diff:2,type:"multi",
e:"Principled negotiation separates people from problems (address relationship issues separately from substance) and uses objective criteria (market value, precedent, standards) rather than willpower or positions."},

// --- Advanced Situational Leadership ---
{id:"P136",q:"A highly skilled team member has recently been promoted to tech lead but is struggling with the new responsibilities and showing low confidence. According to Situational Leadership, which style should the PM use?",
o:["Delegating — they are highly skilled","Directing — tell them exactly what to do","Coaching — provide direction AND support as they build confidence in the new role","Supporting — provide encouragement but no direction"],
a:2,d:"People",t:["leadership","coaching"],diff:2,type:"single",
e:"Situational Leadership matches style to readiness. This person has high competence (skilled) but low confidence (new role). Coaching (S2) provides both direction for new responsibilities and support for building confidence."},

{id:"P137",q:"A PM is leading a project in a strong matrix organization. The functional manager disagrees with the PM's resource allocation decisions. How should this be resolved?",
o:["The PM's decision takes precedence in a strong matrix","The functional manager's decision always takes precedence","They should negotiate, and if unresolved, escalate to the sponsor or PMO","The team member should decide where they want to work"],
a:2,d:"People",t:["matrix","conflict","negotiation"],diff:2,type:"single",
e:"Even in a strong matrix where the PM has more authority, conflicts with functional managers should be resolved through negotiation first. Escalation to the sponsor or PMO is appropriate only when negotiation fails."},

{id:"P138",q:"A project manager discovers that a team member has been working 60+ hours per week for the past month without reporting it. What should the PM do?",
o:["Thank them for their dedication and continue","Address the situation immediately — discuss workload, redistribute tasks, and ensure sustainable pace","Report them for not following time-tracking procedures","Ignore it since the work is getting done"],
a:1,d:"People",t:["leadership","ethics","team"],diff:2,type:"single",
e:"Sustainable pace is essential for quality and team health. Unreported overtime indicates workload problems, potential burnout risk, and possibly inaccurate project metrics. The PM must address root causes, not just appreciate the symptom."},


// --- Multi-response People Questions ---
{id:"P139",q:"Select TWO actions that demonstrate servant leadership in an agile environment:",
o:["Making all technical decisions for the team","Removing organizational impediments that slow the team down","Shielding the team from unreasonable stakeholder demands while maintaining transparency","Assigning story points to each team member's tasks","Reporting individual velocity metrics to management"],
a:[1,2],d:"People",t:["leadership","agile","scrum"],diff:2,type:"multi",
e:"Servant leaders remove impediments and protect the team from disruptions while maintaining transparency. They don't make technical decisions (team does), assign points (team estimates), or report individual metrics (team-level only)."},

{id:"P140",q:"Select TWO indicators that a team needs to move from the Storming stage to Norming:",
o:["Team members begin to resolve differences and establish working agreements","The team develops shared processes and mutual respect","Team members avoid all disagreements","The PM assigns strict rules to eliminate conflict","Individual members work in isolation to avoid friction"],
a:[0,1],d:"People",t:["tuckman","team"],diff:2,type:"multi",
e:"The transition from Storming to Norming is marked by conflict resolution and establishment of shared norms/agreements. Avoiding conflict, imposed rules, or isolation indicate the team is stuck, not progressing."},

{id:"P141",q:"A PM is managing a cross-functional team where members report to different functional managers with conflicting priorities. Select TWO strategies to align the team:",
o:["Establish a shared project vision and goals that connect to each function's objectives","Create a RACI matrix and get formal agreement from all functional managers","Tell team members to ignore their functional managers' priorities","Escalate every conflict to the sponsor","Allow each team member to prioritize their functional work over project work"],
a:[0,1],d:"People",t:["team","matrix","communication","stakeholder"],diff:3,type:"multi",
e:"A shared vision creates alignment, and a RACI with formal agreement establishes clear expectations. Ignoring functional priorities creates conflict; constant escalation shows poor PM skills; prioritizing functional work undermines the project."},

{id:"P142",q:"A new team member from a different cultural background interprets feedback differently than intended, leading to misunderstandings. Select TWO appropriate PM actions:",
o:["Adapt communication style and check for understanding using techniques like paraphrasing","Provide cultural awareness training or resources for the entire team","Tell the team member to adapt to the team's communication style","Avoid giving the team member any feedback to prevent misunderstandings","Communicate only in writing to create a paper trail"],
a:[0,1],d:"People",t:["communication","diversity","team","emotional-intelligence"],diff:2,type:"multi",
e:"Adapting communication and building cultural awareness address the root cause. Forcing conformity, avoiding feedback, or restricting to written communication don't solve the underlying cultural gap."},

{id:"P143",q:"A PM notices that decisions made in meetings are frequently revisited and overturned afterward. Select TWO root causes the PM should investigate:",
o:["Key decision-makers are not present in the meetings","The team lacks a clear decision-making framework or process","Meetings are too short","The PM is too collaborative","Team members are too experienced"],
a:[0,1],d:"People",t:["communication","team","leadership"],diff:2,type:"multi",
e:"Decisions get overturned when the right people aren't involved or when there's no agreed process for how decisions are made and documented. Meeting length, collaboration, and experience are not root causes of this problem."},

// --- More Advanced People Scenarios ---
{id:"P144",q:"A project team is distributed across three countries with significant cultural differences in attitudes toward hierarchy, direct communication, and time orientation. What should the PM establish FIRST?",
o:["A strict set of rules that override all cultural norms","A team charter that acknowledges cultural differences and establishes shared working agreements","Separate communication channels for each culture","A policy requiring everyone to adopt Western business practices"],
a:1,d:"People",t:["team","diversity","communication"],diff:2,type:"single",
e:"A team charter co-created by all members acknowledges differences while establishing shared expectations. It respects diversity while creating enough common ground for effective collaboration."},

{id:"P145",q:"During a project retrospective, the team identifies that knowledge silos are creating bottlenecks. Only one person understands each critical system component. What technique should the PM implement?",
o:["Accept the risk since specialization is efficient","Implement pair programming, cross-training, or job rotation to spread knowledge","Hire backup resources for each specialist","Document everything and hope people read it"],
a:1,d:"People",t:["team","agile","risk","coaching"],diff:2,type:"single",
e:"Knowledge silos create single points of failure. Active knowledge sharing through pairing, cross-training, or rotation builds redundancy and team resilience. Documentation alone is insufficient without active learning."},

{id:"P146",q:"A PM must deliver difficult news to stakeholders: the project will miss its deadline by four weeks due to a critical vendor delay. What communication approach is BEST?",
o:["Delay telling stakeholders until you have a recovery plan fully developed","Communicate immediately with transparency: state the problem, impact, cause, and proposed options for moving forward","Send an email to avoid face-to-face confrontation","Blame the vendor in the communication to deflect responsibility"],
a:1,d:"People",t:["communication","stakeholder","ethics"],diff:3,type:"single",
e:"Transparent, timely communication builds trust even with bad news. Include the problem, impact, cause, and options. Delaying erodes trust; email avoids dialogue; blaming is unprofessional and doesn't solve the problem."},

{id:"P147",q:"A team member confides in the PM that they are being bullied by another team member but asks the PM not to take action. What should the PM do?",
o:["Respect their wishes and take no action","Explain that as PM you have a duty to ensure a safe work environment, discuss options together, and take appropriate action while being sensitive to their concerns","Immediately confront the alleged bully in front of the team","Tell the team member to handle it themselves"],
a:1,d:"People",t:["ethics","leadership","team","conflict"],diff:3,type:"single",
e:"The PM has an ethical obligation to maintain a safe work environment. While respecting the reporter's concerns, the PM cannot ignore bullying. Discussing options together balances duty of care with sensitivity."},

{id:"P148",q:"A project manager inherits a team with a history of failed projects and low trust in management. What should the PM prioritize FIRST?",
o:["Set aggressive targets to show confidence in the team","Build trust through small, consistent actions — deliver on promises, be transparent, and involve the team in planning","Restructure the entire team with new members","Ignore the history and treat it as a fresh start without acknowledgment"],
a:1,d:"People",t:["leadership","trust","team","emotional-intelligence"],diff:3,type:"single",
e:"Trust is rebuilt through consistent, reliable behavior over time. Small wins and follow-through demonstrate that this time is different. Aggressive targets risk repeating failure; ignoring history dismisses valid concerns."},

{id:"P149",q:"An experienced agile team wants to experiment with mob programming for complex features. The functional manager objects, saying it's inefficient to have multiple developers on one task. What should the PM do?",
o:["Side with the functional manager since they have authority over resources","Support the team's autonomy to choose their practices, and help them articulate the benefits (knowledge sharing, quality, reduced rework) to the functional manager","Tell the team they cannot experiment without management approval","Implement mob programming secretly without telling the functional manager"],
a:1,d:"People",t:["agile","leadership","team","negotiation"],diff:3,type:"single",
e:"Agile teams should have autonomy over their practices. The PM supports the team by helping bridge communication with management, articulating benefits in terms management values (quality, reduced rework, knowledge sharing)."},

{id:"P150",q:"Select TWO ways a PM can effectively manage upward (manage their relationship with the sponsor):",
o:["Only share good news to keep the sponsor happy","Proactively communicate risks and issues with proposed mitigation options","Understand the sponsor's communication preferences and adapt accordingly","Wait for the sponsor to ask for updates","Always agree with the sponsor's suggestions even when they conflict with project needs"],
a:[1,2],d:"People",t:["stakeholder","communication","leadership"],diff:2,type:"multi",
e:"Managing up means proactive risk communication (with solutions, not just problems) and adapting to the sponsor's style. Filtering news, being passive, or always agreeing are not effective upward management."},

{id:"P151",q:"A PM is facilitating a decision between two architectural approaches. The team is split 50/50 and discussion has become circular. What facilitation technique should the PM use?",
o:["Make the decision themselves to break the deadlock","Use a decision matrix with weighted criteria agreed upon by the team before evaluating options","Flip a coin to be fair","Table the decision indefinitely until consensus emerges naturally"],
a:1,d:"People",t:["leadership","team","communication"],diff:2,type:"single",
e:"A decision matrix with pre-agreed criteria removes emotion from the evaluation. The team agrees on what matters (criteria and weights) before scoring options, making the decision transparent and defensible."},

{id:"P152",q:"A team member consistently dominates discussions, preventing quieter members from contributing. What should the PM do?",
o:["Let it continue since they clearly have the most to say","Use facilitation techniques: round-robin input, written brainstorming before discussion, and private coaching with the dominant member","Tell the dominant member to stop talking so much","Only allow communication via written channels"],
a:1,d:"People",t:["communication","team","leadership","coaching"],diff:1,type:"single",
e:"Facilitation techniques ensure all voices are heard. Round-robin and written brainstorming create space for quieter members. Private coaching helps the dominant member develop awareness without public embarrassment."},

{id:"P153",q:"A PM is working with a team that has never used agile before. During the first sprint, the team completes only 40% of the planned work. What should the PM communicate to stakeholders?",
o:["The team failed to meet their commitment","This is normal for new agile teams — velocity will stabilize over 3-4 sprints as the team calibrates their capacity","The team needs to work harder next sprint","Agile doesn't work for this team and they should return to waterfall"],
a:1,d:"People",t:["agile","communication","stakeholder","team"],diff:2,type:"single",
e:"New agile teams need time to calibrate velocity. The PM should set stakeholder expectations that initial sprints are learning opportunities and velocity will stabilize. Blaming the team or abandoning agile prematurely are counterproductive."},

{id:"P154",q:"Select TWO responsibilities of the PM regarding team development in a predictive project:",
o:["Creating individual development plans aligned with both project needs and team members' career goals","Providing regular constructive feedback and recognition","Making all technical decisions to reduce team burden","Preventing any conflict from occurring","Ensuring team members never work outside their job description"],
a:[0,1],d:"People",t:["team","coaching","leadership"],diff:2,type:"multi",
e:"PMs develop teams through individual development plans and regular feedback/recognition. Technical decisions belong to the team; healthy conflict is productive; and stretch assignments outside job descriptions promote growth."},

{id:"P155",q:"A project requires a team member with a rare skill set. The only available person has a known interpersonal conflict with another key team member. What should the PM do?",
o:["Don't bring them on the team — the conflict risk is too high","Bring them on the team, proactively address the conflict through facilitated discussion, and establish clear working agreements","Bring them on but keep them completely separated from the other team member","Ask one of the conflicting parties to leave the project"],
a:1,d:"People",t:["conflict","team","leadership","negotiation"],diff:3,type:"single",
e:"The PM should address conflicts proactively rather than avoiding necessary resources or creating artificial separation. Facilitated discussion and working agreements can establish professional collaboration despite personal differences."},


// --- Remaining People Questions ---
{id:"P156",q:"A PM observes that the team's Definition of Done has become increasingly lenient over recent sprints, with technical debt accumulating. What should the PM do?",
o:["Accept it — the team is self-organizing and can set their own standards","Facilitate a discussion about the long-term impact of technical debt and help the team recommit to quality standards","Impose a stricter Definition of Done without team input","Report the team to management for declining standards"],
a:1,d:"People",t:["agile","quality","coaching","team"],diff:3,type:"single",
e:"Self-organization doesn't mean no accountability. The PM/Scrum Master facilitates awareness of consequences and helps the team make informed decisions about quality. Imposing standards undermines autonomy; ignoring it enables decline."},

{id:"P157",q:"A team member approaches the PM about a personal issue affecting their work performance. The PM is not a trained counselor. What is the appropriate response?",
o:["Tell them to keep personal issues out of the workplace","Listen empathetically, express support, and connect them with appropriate organizational resources (EAP, HR)","Try to counsel them on their personal issue","Immediately reassign their work to others without discussing it"],
a:1,d:"People",t:["emotional-intelligence","leadership","ethics"],diff:1,type:"single",
e:"The PM shows empathy and connects the person with professional resources. They shouldn't dismiss personal issues, attempt counseling beyond their expertise, or make unilateral decisions about the person's work without discussion."},

{id:"P158",q:"A PM is managing a team where two members have a romantic relationship that is creating perceptions of favoritism. What should the PM do?",
o:["Ignore it unless it directly impacts deliverables","Address it proactively — discuss with both individuals about maintaining professional boundaries and ensure work assignments are transparently fair","Immediately separate them onto different projects","Report them to HR for violating workplace policy"],
a:1,d:"People",t:["ethics","leadership","team"],diff:2,type:"single",
e:"Proactive, professional discussion addresses perceptions before they become problems. Transparent work assignments prevent actual favoritism. Ignoring risks team dysfunction; immediate separation or HR reporting may be premature."},

{id:"P159",q:"During a team-building event, a PM learns that several team members feel their contributions are not recognized. According to Maslow's hierarchy, which need is unmet?",
o:["Physiological needs","Safety needs","Esteem needs","Self-actualization needs"],
a:2,d:"People",t:["motivation","team"],diff:1,type:"single",
e:"Esteem needs include recognition, respect, and feeling valued. When team members feel unrecognized, their esteem needs are unmet. The PM should implement recognition practices to address this."},

{id:"P160",q:"A PM must choose between two qualified candidates for a critical role. Candidate A has superior technical skills but poor collaboration history. Candidate B has good technical skills and excellent teamwork. For an agile project, who should the PM choose?",
o:["Candidate A — technical skills are most important","Candidate B — collaboration and teamwork are essential for agile success","Neither — keep searching for a perfect candidate","Hire both and let them compete for the role"],
a:1,d:"People",t:["team","agile","leadership"],diff:2,type:"single",
e:"In agile environments, collaboration is essential. A technically good team player contributes more than a brilliant individual who disrupts team dynamics. Technical gaps can be addressed through pairing and learning; poor collaboration undermines the entire team."},

{id:"P161",q:"Select TWO techniques for managing virtual team engagement:",
o:["Longer, less frequent meetings to reduce meeting fatigue","Short, focused daily standups with cameras on when possible","Virtual team-building activities and informal social channels","Requiring 24/7 availability across all time zones","Communicating only through formal project documents"],
a:[1,2],d:"People",t:["team","virtual","communication"],diff:1,type:"multi",
e:"Short focused meetings and social connection opportunities maintain engagement in virtual teams. Long meetings cause fatigue; 24/7 availability causes burnout; formal-only communication prevents relationship building."},

{id:"P162",q:"A PM discovers that a high-performing team member is planning to leave the project in two weeks for a better opportunity. What should the PM do FIRST?",
o:["Try to convince them to stay by offering more money","Conduct a knowledge transfer plan and identify how to mitigate the impact on the project","Immediately tell the rest of the team","Report them to their manager for disloyalty"],
a:1,d:"People",t:["risk","team","leadership"],diff:2,type:"single",
e:"The PM's first priority is mitigating project impact through knowledge transfer. Retention attempts may be appropriate but aren't the PM's primary responsibility. Announcing prematurely or reporting 'disloyalty' are inappropriate."},

{id:"P163",q:"A project manager is facilitating a lessons learned session. Team members are reluctant to share failures. What technique would BEST encourage open sharing?",
o:["Make sharing mandatory and penalize those who don't participate","Start by sharing your own failures as PM to model vulnerability, and use anonymous input methods","Tell the team that failures won't be held against them (but don't change any systemic issues)","Skip the failures and only discuss successes"],
a:1,d:"People",t:["leadership","team","communication","agile"],diff:2,type:"single",
e:"Modeling vulnerability (leader goes first) and anonymous methods reduce fear. Words alone ('it won't be held against you') aren't enough without demonstrated safety. Skipping failures misses the most valuable learning."},

{id:"P164",q:"A PM is working with a team member who has Impostor Syndrome — they consistently undervalue their contributions despite excellent work. How should the PM support them?",
o:["Tell them to be more confident","Provide specific, evidence-based positive feedback tied to concrete achievements and impact","Give them easier tasks so they feel more successful","Ignore it since their work quality is fine"],
a:1,d:"People",t:["coaching","emotional-intelligence","motivation"],diff:2,type:"single",
e:"Specific, evidence-based feedback counters impostor syndrome by connecting the person to objective proof of their value. Generic encouragement, easier tasks, or ignoring the issue don't address the underlying self-perception gap."},

{id:"P165",q:"A PM needs to deliver a presentation to executives who have very limited time. What communication technique is MOST appropriate?",
o:["Start with detailed background and build to the conclusion","Use the pyramid principle — lead with the recommendation/conclusion, then provide supporting data if asked","Include every detail to demonstrate thoroughness","Use the same presentation format used for the team"],
a:1,d:"People",t:["communication","stakeholder"],diff:1,type:"single",
e:"Executives need bottom-line-up-front (BLUF) communication. The pyramid principle leads with conclusions/recommendations and provides supporting detail only as needed. This respects their time and decision-making style."},

// ═══════════════════════════════════════════════════════════════
// PROCESS DOMAIN — 75 Questions (R128–R202)
// ═══════════════════════════════════════════════════════════════

// --- Advanced EVM Scenarios ---
{id:"R128",q:"A project has the following EVM data: BAC = $500,000, EV = $200,000, AC = $250,000, PV = $225,000. What is the Estimate at Completion (EAC) assuming the current CPI continues?",
o:["$625,000","$562,500","$600,000","$525,000"],
a:0,d:"Process",t:["evm","cost"],diff:2,type:"single",
e:"CPI = EV/AC = 200,000/250,000 = 0.80. EAC = BAC/CPI = 500,000/0.80 = $625,000. The project is 20% over budget and will cost $125,000 more than planned if the trend continues."},

{id:"R129",q:"A project shows: EV = $300,000, PV = $350,000, AC = $280,000. What can you conclude about project status?",
o:["Behind schedule and under budget","Ahead of schedule and over budget","Behind schedule and over budget","Ahead of schedule and under budget"],
a:0,d:"Process",t:["evm","cost","scheduling"],diff:1,type:"single",
e:"SV = EV - PV = 300K - 350K = -50K (behind schedule). CV = EV - AC = 300K - 280K = +20K (under budget). The project has accomplished less work than planned but spent less than the work accomplished is worth."},

{id:"R130",q:"A project has CPI = 0.85 and SPI = 1.10. BAC = $1,000,000. The PM believes future work will be performed at the budgeted rate. What is the EAC?",
o:["$1,176,471","$1,000,000","$876,471","$947,059"],
a:2,d:"Process",t:["evm","cost"],diff:3,type:"single",
e:"When future work is expected at budgeted rate: EAC = AC + (BAC - EV). First find AC and EV. CPI = EV/AC = 0.85, SPI = EV/PV = 1.10. We need more info, but using EAC = AC + (BAC-EV): AC = EV/0.85. If we use EAC = BAC/CPI for current trend: 1,000,000/0.85 = $1,176,471. But the question states future at budgeted rate, so EAC = AC + (BAC-EV). With the given data: EAC = (EV/CPI) + BAC - EV = EV/0.85 + BAC - EV. Since we need a concrete answer: EAC atypical = AC + (BAC - EV). Given CPI=0.85 and assuming 50% complete (EV=500K), AC=588K, EAC=588K+500K=1,088K. The correct formula answer with BAC/CPI = $1,176,471 for typical variance. Answer A represents BAC/CPI."},

{id:"R131",q:"The To-Complete Performance Index (TCPI) for a project is calculated as 1.25. What does this indicate?",
o:["The project must perform 25% better than planned for all remaining work to meet the BAC","The project is 25% under budget","The project has a favorable cost variance","The project will finish 25% ahead of schedule"],
a:0,d:"Process",t:["evm","cost"],diff:2,type:"single",
e:"TCPI = (BAC-EV)/(BAC-AC). A TCPI > 1.0 means the project must perform better than planned on remaining work. TCPI of 1.25 means 25% improvement needed — which is very difficult to achieve and may indicate the BAC is no longer realistic."},

{id:"R132",q:"A project has earned $400,000 of value but spent $500,000. The original budget was $1,000,000. The sponsor asks: 'What is the maximum this project could cost?' Using the EAC formula with both CPI and SPI (where SPI = 0.90), what is the EAC?",
o:["$1,250,000","$1,388,889","$1,111,111","$694,444"],
a:1,d:"Process",t:["evm","cost"],diff:3,type:"single",
e:"CPI = EV/AC = 400K/500K = 0.80. Using EAC = BAC/(CPI × SPI) = 1,000,000/(0.80 × 0.90) = 1,000,000/0.72 = $1,388,889. This formula accounts for both cost and schedule inefficiency affecting remaining work."},

{id:"R133",q:"At what point does Earned Value (EV) equal Planned Value (PV) equal Actual Cost (AC)?",
o:["At project completion if on budget and on schedule","At the start of the project","Never — they are always different","Only when CPI equals exactly 1.0"],
a:0,d:"Process",t:["evm","cost"],diff:2,type:"single",
e:"If a project finishes exactly on budget and on schedule, then at completion: EV = PV = AC = BAC. At the start, all three are zero. During execution, they typically diverge."},


// --- Quality Tools (7 Basic Quality Tools) ---
{id:"R134",q:"A PM wants to identify the vital few causes responsible for the majority of defects in a software product. Which quality tool should they use?",
o:["Scatter diagram","Pareto chart","Control chart","Flowchart"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"A Pareto chart applies the 80/20 rule — it ranks causes by frequency/impact to identify the vital few (typically 20% of causes creating 80% of problems). This helps prioritize improvement efforts."},

{id:"R135",q:"A manufacturing process is producing outputs that occasionally fall outside specification limits, but the control chart shows all points within control limits. What does this indicate?",
o:["The process is out of control","The process is in control but not capable — control limits are tighter than specification limits","The control chart is wrong","The specifications need to be changed"],
a:1,d:"Process",t:["quality"],diff:3,type:"single",
e:"A process can be in statistical control (stable, predictable) but not capable (unable to consistently meet specifications). This means the process itself needs fundamental improvement, not just monitoring."},

{id:"R136",q:"Which quality tool would BEST help a team understand the relationship between two variables, such as testing hours and defect count?",
o:["Histogram","Cause-and-effect diagram","Scatter diagram","Check sheet"],
a:2,d:"Process",t:["quality"],diff:1,type:"single",
e:"Scatter diagrams plot two variables against each other to reveal correlations (positive, negative, or none). This helps determine if increasing testing hours actually correlates with finding more defects."},

{id:"R137",q:"A control chart shows seven consecutive data points on one side of the mean, all within control limits. What should the PM conclude?",
o:["The process is performing well since all points are within limits","The Rule of Seven indicates a non-random pattern — the process should be investigated for assignable causes","No action needed — only points outside control limits require attention","The control limits need to be recalculated"],
a:1,d:"Process",t:["quality"],diff:2,type:"single",
e:"The Rule of Seven: seven consecutive points on one side of the mean indicate a non-random trend (assignable cause) even if within control limits. This requires investigation — the process may be shifting."},

{id:"R138",q:"A team is brainstorming potential causes of customer complaints about slow response times. They organize causes into categories: People, Process, Technology, and Environment. Which tool are they using?",
o:["Pareto chart","Ishikawa (fishbone/cause-and-effect) diagram","Scatter diagram","Histogram"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"The Ishikawa (fishbone) diagram organizes potential causes into categories (often 6Ms: Manpower, Methods, Machines, Materials, Measurements, Mother Nature) to systematically explore root causes."},

{id:"R139",q:"What is the PRIMARY difference between quality assurance and quality control?",
o:["QA is done by the PM; QC is done by the team","QA focuses on process improvement to prevent defects; QC focuses on inspecting deliverables to find defects","QA happens at the end; QC happens throughout","QA is optional; QC is mandatory"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"QA is proactive (improve processes to prevent defects) while QC is reactive (inspect/test to find defects). QA audits processes; QC tests products. Both happen throughout the project."},

{id:"R140",q:"A project team is using a check sheet to collect defect data. After two weeks, they want to visualize the frequency distribution of defect types. Which tool should they use NEXT?",
o:["Control chart","Histogram","Scatter diagram","Flowchart"],
a:1,d:"Process",t:["quality"],diff:1,type:"single",
e:"A histogram displays frequency distribution of data collected (often via check sheets). It shows how often each defect type occurs, revealing patterns in the data distribution."},

{id:"R141",q:"Select TWO situations where a control chart would indicate the process is out of control:",
o:["A single data point falls outside the upper control limit","All data points are clustered near the mean","Eight consecutive points fall on one side of the mean","Data points show random variation within control limits","The mean shifts after a process improvement was implemented"],
a:[0,2],d:"Process",t:["quality"],diff:2,type:"multi",
e:"Out-of-control signals: points outside control limits, or patterns like 7+ consecutive points on one side of the mean (Rule of Seven — some use 8). Random variation within limits indicates a stable, in-control process."},

// --- Scope Management: Validate Scope vs Control Quality ---
{id:"R142",q:"What is the PRIMARY difference between Validate Scope and Control Quality?",
o:["Validate Scope is done by the team; Control Quality is done by the customer","Validate Scope focuses on acceptance of deliverables by the customer; Control Quality focuses on correctness and meeting quality requirements","Validate Scope happens before Control Quality","They are the same process with different names"],
a:1,d:"Process",t:["scope","quality"],diff:2,type:"single",
e:"Control Quality verifies deliverables meet quality requirements (correctness — done by QC team). Validate Scope gets formal acceptance from the customer/sponsor (acceptance — done with stakeholders). QC typically happens before Validate Scope."},

{id:"R143",q:"A deliverable passes all quality control tests but the customer refuses to accept it during scope validation. What is the MOST likely cause?",
o:["The quality tests were wrong","The deliverable meets specifications but doesn't meet the customer's actual needs or expectations","The customer is being unreasonable","The PM failed to perform quality assurance"],
a:1,d:"Process",t:["scope","quality","stakeholder"],diff:2,type:"single",
e:"This gap between 'built correctly' (QC) and 'built the right thing' (Validate Scope) often indicates requirements gaps. The deliverable meets documented specs but not actual stakeholder needs — highlighting the importance of requirements validation early."},

// --- Scheduling: Lead, Lag, Critical Path ---
{id:"R144",q:"What is the difference between lead and lag in project scheduling?",
o:["Lead accelerates a successor activity; lag adds waiting time before a successor can start","Lead is for critical path activities; lag is for non-critical activities","Lead adds buffer time; lag removes buffer time","They are the same concept applied to different dependency types"],
a:0,d:"Process",t:["scheduling","critical-path"],diff:1,type:"single",
e:"Lead allows a successor to start before its predecessor finishes (acceleration/overlap). Lag requires waiting time between activities (delay). Example: Lead — start painting before all drywall is done. Lag — wait 24 hours for paint to dry before applying second coat."},

{id:"R145",q:"A project network has the following paths: A-B-C = 20 days, A-D-E = 25 days, A-F-G = 18 days. Activity D has 3 days of total float. If Activity D is delayed by 5 days, what happens?",
o:["Nothing — it has float to absorb the delay","The critical path changes and the project is delayed by 2 days","The project is delayed by 5 days","Activity E absorbs the delay"],
a:1,d:"Process",t:["critical-path","scheduling"],diff:3,type:"single",
e:"Path A-D-E has 3 days of float. A 5-day delay exceeds the float by 2 days, making A-D-E the new critical path (25+2=27 days) and delaying the project by 2 days. Float absorbs only 3 of the 5 delay days."},

{id:"R146",q:"A PM is performing schedule compression. Which technique adds cost but maintains scope?",
o:["Fast-tracking","Crashing","Scope reduction","Resource leveling"],
a:1,d:"Process",t:["scheduling","cost"],diff:1,type:"single",
e:"Crashing adds resources to critical path activities, reducing duration but increasing cost. Fast-tracking overlaps activities (adds risk, not necessarily cost). Resource leveling may extend the schedule. Scope reduction changes deliverables."},

{id:"R147",q:"Fast-tracking a project involves performing activities in parallel that were originally planned sequentially. What is the PRIMARY risk of fast-tracking?",
o:["Increased cost due to additional resources","Increased rework if parallel activities have dependencies that create conflicts","Reduced team morale","Stakeholder dissatisfaction"],
a:1,d:"Process",t:["scheduling","risk"],diff:2,type:"single",
e:"Fast-tracking's primary risk is rework. When activities overlap, later discoveries in one activity may invalidate work already done in the parallel activity. This is especially risky when activities have logical dependencies."},


// --- Estimation Techniques ---
{id:"R148",q:"What is the PRIMARY difference between analogous and parametric estimation?",
o:["Analogous uses historical data from similar projects as a whole; parametric uses statistical relationships between variables and quantities","Analogous is more accurate; parametric is faster","Analogous is bottom-up; parametric is top-down","There is no meaningful difference"],
a:0,d:"Process",t:["estimation","cost","scheduling"],diff:1,type:"single",
e:"Analogous estimation uses actual data from similar past projects (top-down, less accurate, faster). Parametric uses statistical models with variables (e.g., $cost per line of code × number of lines). Parametric can be more accurate when the model is valid."},

{id:"R149",q:"A PM needs a quick, rough estimate for a project that is similar to one completed last year. That project cost $2M and took 18 months. The new project is approximately 20% larger. Which estimation technique and result is MOST appropriate?",
o:["Parametric: $2.4M, 21.6 months","Analogous: approximately $2.4M, approximately 21.6 months","Bottom-up: requires detailed WBS first","Three-point: need optimistic and pessimistic values"],
a:1,d:"Process",t:["estimation","cost"],diff:2,type:"single",
e:"This is analogous estimation — using a similar past project and adjusting for known differences (20% larger = $2M × 1.2 = $2.4M). It's quick and appropriate for early-stage estimates when detailed information isn't available."},

{id:"R150",q:"A three-point estimate uses: Optimistic = 10 days, Most Likely = 15 days, Pessimistic = 26 days. Using the PERT formula, what is the expected duration?",
o:["15 days","16 days","17 days","15.67 days"],
a:1,d:"Process",t:["estimation","scheduling"],diff:2,type:"single",
e:"PERT formula: (O + 4M + P) / 6 = (10 + 4(15) + 26) / 6 = (10 + 60 + 26) / 6 = 96/6 = 16 days. The formula weights the most likely estimate most heavily while accounting for uncertainty."},

{id:"R151",q:"When is bottom-up estimation MOST appropriate?",
o:["During project initiation when only high-level information is available","During detailed planning when the WBS is decomposed to work package level","When the sponsor needs a quick ROM estimate","When no historical data exists for similar projects"],
a:1,d:"Process",t:["estimation","wbs","planning"],diff:1,type:"single",
e:"Bottom-up estimation requires detailed decomposition (WBS to work packages). Each package is estimated individually and rolled up. It's the most accurate but most time-consuming method, appropriate during detailed planning."},

// --- Procurement & Contract Types ---
{id:"R152",q:"A project requires specialized software development where requirements are unclear and likely to change. Which contract type is MOST appropriate?",
o:["Firm Fixed Price (FFP)","Fixed Price Incentive Fee (FPIF)","Time and Materials (T&M)","Cost Plus Fixed Fee (CPFF)"],
a:2,d:"Process",t:["procurement"],diff:2,type:"single",
e:"T&M contracts are appropriate when scope is unclear and work is expected to change. They provide flexibility for evolving requirements. FFP requires well-defined scope; FPIF needs a defined target; CPFF is for cost-reimbursable with defined scope."},

{id:"R153",q:"In a Cost Plus Incentive Fee (CPIF) contract, the target cost is $100,000, target fee is $10,000, share ratio is 80/20 (buyer/seller), and actual cost is $120,000. What is the total fee paid to the seller?",
o:["$10,000","$6,000","$14,000","$4,000"],
a:1,d:"Process",t:["procurement","cost"],diff:3,type:"single",
e:"Cost overrun = $120K - $100K = $20K. Seller's share of overrun = 20% × $20K = $4K (deducted from fee). Fee = Target fee - seller's share = $10K - $4K = $6,000. The incentive structure motivates the seller to control costs."},

{id:"R154",q:"A PM is evaluating vendor proposals. Which procurement document is used to request proposals from vendors when the buyer knows what they need but wants vendors to propose HOW to deliver it?",
o:["Request for Information (RFI)","Request for Quotation (RFQ)","Request for Proposal (RFP)","Invitation for Bid (IFB)"],
a:2,d:"Process",t:["procurement"],diff:1,type:"single",
e:"RFP asks vendors to propose solutions (how). RFQ asks for pricing on well-defined items. RFI gathers general information about vendor capabilities. IFB requests bids on clearly specified requirements where price is the primary factor."},

{id:"R155",q:"During contract execution, the seller claims that a change requested by the buyer constitutes a scope change requiring additional payment. The buyer disagrees. What is this called and what should happen?",
o:["A claim/dispute — it should be resolved through the dispute resolution process defined in the contract","A change request — the PM should approve it immediately","A risk event — add it to the risk register","A defect — the seller must fix it at their own cost"],
a:0,d:"Process",t:["procurement","change-control"],diff:2,type:"single",
e:"When buyer and seller disagree about whether work is in-scope, it becomes a claim (contested change). The contract's dispute resolution clause defines the process: negotiation → mediation → arbitration → litigation."},

{id:"R156",q:"Select TWO advantages of a Fixed Price contract from the BUYER's perspective:",
o:["Maximum flexibility to change scope during execution","Cost certainty — the buyer knows the maximum they will pay","Lower risk — the seller bears the cost overrun risk","The buyer can closely direct how the seller performs the work","The buyer pays only for actual costs incurred"],
a:[1,2],d:"Process",t:["procurement"],diff:2,type:"multi",
e:"Fixed price gives buyers cost certainty (known maximum) and transfers cost risk to the seller. However, it requires well-defined scope (less flexibility) and the buyer doesn't direct the seller's methods (that's T&M/cost-reimbursable)."},

// --- Agile at Scale (SAFe, LeSS) ---
{id:"R157",q:"An organization has 12 agile teams working on a single large product. They need to coordinate dependencies and align on a shared vision. Which framework is MOST appropriate?",
o:["Scrum (single team)","Kanban","SAFe (Scaled Agile Framework)","Extreme Programming (XP)"],
a:2,d:"Process",t:["agile","framework"],diff:2,type:"single",
e:"SAFe is designed for scaling agile across multiple teams (Agile Release Trains). It provides coordination mechanisms, PI Planning, and alignment structures. Single-team Scrum, Kanban, and XP don't address multi-team coordination at this scale."},

{id:"R158",q:"In SAFe, what is the purpose of PI (Program Increment) Planning?",
o:["To assign individual tasks to team members for the next sprint","To align multiple agile teams on shared objectives, identify dependencies, and commit to PI objectives for the next 8-12 weeks","To create a detailed Gantt chart for the entire program","To evaluate individual team performance"],
a:1,d:"Process",t:["agile","framework"],diff:2,type:"single",
e:"PI Planning is a face-to-face event where all teams on an Agile Release Train align on vision, identify cross-team dependencies, and commit to objectives for the next Program Increment (typically 8-12 weeks, 4-5 sprints)."},

{id:"R159",q:"What is the key difference between SAFe and LeSS (Large-Scale Scrum)?",
o:["SAFe adds organizational layers and roles for coordination; LeSS minimizes additional structure and scales Scrum with minimal additions","SAFe is for small teams; LeSS is for large teams","SAFe is agile; LeSS is waterfall","There is no meaningful difference"],
a:0,d:"Process",t:["agile","framework"],diff:2,type:"single",
e:"SAFe adds structure (ARTs, Solution Trains, roles like RTE). LeSS takes a minimalist approach — it's 'barely sufficient' Scrum scaled up, with fewer additional roles and ceremonies. SAFe suits complex enterprises; LeSS suits organizations wanting simplicity."},

{id:"R160",q:"An organization using SAFe has identified a dependency between two teams that cannot be resolved within a single PI. What is the appropriate mechanism to manage this?",
o:["Ignore it and hope the teams figure it out","Use the program board to visualize the dependency and coordinate through Scrum of Scrums and the Release Train Engineer","Merge the two teams into one","Escalate to the CEO"],
a:1,d:"Process",t:["agile","framework","risk"],diff:3,type:"single",
e:"SAFe uses the program board to visualize cross-team dependencies, Scrum of Scrums for coordination, and the RTE (Release Train Engineer) to facilitate resolution. These mechanisms exist specifically for inter-team dependency management."},


// --- Hybrid Decision-Making ---
{id:"R161",q:"A project has well-defined infrastructure requirements but uncertain user interface requirements. What delivery approach is MOST appropriate?",
o:["Pure predictive (waterfall) for the entire project","Pure agile for the entire project","Hybrid — predictive for infrastructure, iterative/agile for UI development","Cancel the project until all requirements are clear"],
a:2,d:"Process",t:["hybrid","approach"],diff:2,type:"single",
e:"Hybrid approaches apply the right method to each component. Well-defined infrastructure suits predictive planning; uncertain UI benefits from iterative development with user feedback. This maximizes both predictability and adaptability."},

{id:"R162",q:"A PM is transitioning a project from predictive to hybrid. Which element should they introduce FIRST?",
o:["Daily standups for the entire organization","Iterative delivery of the highest-uncertainty components with regular stakeholder feedback","Eliminate all documentation immediately","Rename all roles to Scrum roles"],
a:1,d:"Process",t:["hybrid","approach","change-management"],diff:2,type:"single",
e:"Start with iterative delivery where it adds most value (high-uncertainty areas). This demonstrates benefits before broader adoption. Changing ceremonies, documentation, or roles without understanding why creates resistance without value."},

{id:"R163",q:"In a hybrid project, the predictive components use a change control board (CCB) while the agile components use a product backlog. A change request affects both components. How should it be handled?",
o:["Process it only through the CCB since it's more formal","Process it only through the product backlog since agile is more flexible","Process it through both mechanisms — CCB for predictive scope and backlog prioritization for agile scope","Reject the change since it crosses methodology boundaries"],
a:2,d:"Process",t:["hybrid","change-control","approach"],diff:3,type:"single",
e:"Hybrid projects need integrated change management. Changes affecting predictive components follow formal CCB processes; changes to agile components go through backlog prioritization. Both must be coordinated to maintain project coherence."},

{id:"R164",q:"Select TWO factors that would indicate a hybrid approach is more appropriate than pure agile:",
o:["Regulatory requirements mandate certain documentation and approval gates","Some components have stable, well-understood requirements while others are exploratory","The team prefers agile ceremonies","The sponsor attended a SAFe training","All requirements are equally uncertain"],
a:[0,1],d:"Process",t:["hybrid","approach","compliance"],diff:2,type:"multi",
e:"Hybrid is appropriate when regulatory needs require predictive elements (documentation, gates) or when different components have different uncertainty levels. Team preference or sponsor training alone don't justify hybrid over pure agile."},

// --- Risk Management Advanced ---
{id:"R165",q:"A risk has a 30% probability of occurring and would cost $200,000 if it materializes. A mitigation strategy costs $40,000 and would reduce the probability to 5%. Should the PM implement the mitigation?",
o:["No — the mitigation cost ($40,000) exceeds the reduced EMV","Yes — the EMV without mitigation ($60,000) exceeds the cost of mitigation ($40,000) plus residual EMV ($10,000)","Cannot determine without more information","Only if the sponsor approves"],
a:1,d:"Process",t:["risk","cost"],diff:3,type:"single",
e:"Without mitigation: EMV = 30% × $200K = $60,000. With mitigation: Cost = $40K + residual EMV (5% × $200K = $10K) = $50,000. Since $50K < $60K, mitigation saves $10,000 in expected value. Implement it."},

{id:"R166",q:"A project team identifies a risk that could either be a threat (negative outcome) or an opportunity (positive outcome) depending on market conditions. What type of risk response should the PM plan?",
o:["Only plan threat responses since risks are negative","Plan both threat and opportunity responses as contingent strategies based on which outcome materializes","Ignore the risk since it might be positive","Transfer the risk to a third party"],
a:1,d:"Process",t:["risk","planning"],diff:1,type:"single",
e:"Some risks are ambiguous — they could be threats or opportunities. The PM should plan contingent responses for both scenarios, with triggers that indicate which outcome is materializing."},

{id:"R167",q:"During a Monte Carlo simulation, the project schedule shows a 50% probability of completing by December 15 and an 80% probability of completing by January 10. The contractual deadline is December 31. What should the PM recommend?",
o:["Commit to December 15 since there's a 50% chance","Commit to December 31 and accept the ~35% risk of missing it","Communicate the risk to stakeholders — there's approximately 35% probability of missing the December 31 deadline — and discuss mitigation options","Commit to January 10 to be safe"],
a:2,d:"Process",t:["risk","scheduling","communication"],diff:3,type:"single",
e:"Monte Carlo provides probability-based schedule information. With ~65% confidence for Dec 31, there's ~35% risk of missing the deadline. The PM should transparently communicate this risk and work with stakeholders on mitigation or contingency."},

{id:"R168",q:"What is the difference between a risk trigger and a risk symptom?",
o:["They are the same thing","A trigger is an event indicating a risk is about to occur or has occurred; a symptom is an indirect indicator that a risk may be materializing","A trigger is for threats; a symptom is for opportunities","A trigger requires action; a symptom can be ignored"],
a:1,d:"Process",t:["risk"],diff:1,type:"single",
e:"Triggers are direct indicators (warning signs) that a risk event is imminent or occurring. Symptoms are indirect manifestations that suggest a risk may be materializing. Both require attention, but triggers demand immediate response."},

// --- Change Control & Integration ---
{id:"R169",q:"A stakeholder requests a change that would add significant value but the project is in the execution phase. What should the PM do FIRST?",
o:["Implement the change immediately since it adds value","Reject the change since the project is already in execution","Log the change request and perform an impact analysis before presenting it to the CCB","Ask the stakeholder to wait until the next project"],
a:2,d:"Process",t:["change-control","integration"],diff:1,type:"single",
e:"All change requests must go through the formal change control process regardless of perceived value or project phase. Log it, analyze impact (scope, schedule, cost, quality, risk), then present to the CCB for decision."},

{id:"R170",q:"A change was approved by the CCB but the PM discovers during implementation that the impact is significantly greater than the original analysis indicated. What should the PM do?",
o:["Continue implementing since it was already approved","Stop implementation, update the impact analysis, and return to the CCB with revised information for re-evaluation","Implement a partial version of the change without CCB approval","Escalate directly to the sponsor to override the CCB"],
a:1,d:"Process",t:["change-control","integration","ethics"],diff:2,type:"single",
e:"CCB approval was based on the original impact analysis. If the actual impact is significantly different, the decision basis has changed. The PM must return to the CCB with updated information for an informed re-decision."},

{id:"R171",q:"In an agile project, how is change management typically handled differently from predictive projects?",
o:["Changes are never allowed in agile","Changes are welcomed and managed through backlog prioritization — the product owner reprioritizes the backlog each iteration","Changes require the same formal CCB process as predictive","Changes are only allowed between sprints, never during"],
a:1,d:"Process",t:["agile","change-control"],diff:1,type:"single",
e:"Agile embraces change through backlog management. The Product Owner continuously reprioritizes based on new information. Changes don't need formal CCB approval — they're managed through the backlog and sprint planning cadence."},

{id:"R172",q:"A PM is closing a project phase. Which activity is MOST important during phase closure?",
o:["Celebrating with the team","Obtaining formal acceptance of phase deliverables and documenting lessons learned","Immediately starting the next phase","Releasing all resources"],
a:1,d:"Process",t:["integration","planning"],diff:1,type:"single",
e:"Phase closure requires formal acceptance (verify deliverables meet criteria) and lessons learned (capture knowledge for future phases/projects). Celebration is nice but not the most important; starting the next phase without closure creates gaps."},

// --- WBS & Scope ---
{id:"R173",q:"A work package in the WBS is estimated at 200 hours. The PM's organization uses the 8/80 rule. Is this work package appropriately decomposed?",
o:["Yes — 200 hours is within the 8/80 rule","No — the 8/80 rule states work packages should be between 8 and 80 hours of effort","It depends on the project size","The 8/80 rule doesn't apply to work packages"],
a:1,d:"Process",t:["wbs","scope","planning"],diff:2,type:"single",
e:"The 8/80 rule is a guideline that work packages should be between 8 hours (1 day) and 80 hours (2 weeks) of effort. At 200 hours, this work package should be decomposed further for better estimation and control."},

{id:"R174",q:"What is the difference between a WBS and a WBS Dictionary?",
o:["They are the same document","The WBS shows the hierarchical decomposition; the WBS Dictionary provides detailed descriptions of each work package including scope, deliverables, activities, and acceptance criteria","The WBS is for the team; the WBS Dictionary is for management","The WBS Dictionary replaces the WBS in agile projects"],
a:1,d:"Process",t:["wbs","scope","planning"],diff:1,type:"single",
e:"The WBS is the visual hierarchy (tree structure). The WBS Dictionary is the companion document providing details for each element: description, responsible party, schedule milestones, cost estimates, acceptance criteria, and references."},

{id:"R175",q:"A team member suggests adding a feature that would improve the product but was not in the approved scope. The PM should:",
o:["Allow it since it improves the product — this is gold plating","Reject it outright without consideration","Document it as a change request and process it through change control","Implement it quietly to surprise the customer"],
a:2,d:"Process",t:["scope","change-control"],diff:1,type:"single",
e:"Any addition to scope — even beneficial ones — must go through change control. Gold plating (adding unrequested features) is explicitly discouraged by PMI because it consumes resources without approved value and may introduce risk."},


// --- Advanced Agile & Scrum ---
{id:"R176",q:"During sprint planning, the development team determines they cannot commit to all the stories the Product Owner wants in the sprint. What should happen?",
o:["The Scrum Master forces the team to accept all stories","The Product Owner prioritizes and the team pulls only what they can realistically complete based on their capacity","The sprint is cancelled","Management decides how much work the team must do"],
a:1,d:"Process",t:["agile","scrum","planning"],diff:1,type:"single",
e:"The team has the final say on how much work they can commit to in a sprint. The PO prioritizes what's most important; the team determines capacity. No one outside the team can dictate sprint commitment."},

{id:"R177",q:"A Scrum team's sprint goal becomes unachievable mid-sprint due to a critical dependency failure. What should happen?",
o:["Continue the sprint and deliver whatever is possible","The Product Owner may cancel the sprint if the sprint goal becomes obsolete","The Scrum Master cancels the sprint unilaterally","Extend the sprint by one week to accommodate the delay"],
a:1,d:"Process",t:["agile","scrum"],diff:2,type:"single",
e:"Only the Product Owner can cancel a sprint, and only when the sprint goal becomes obsolete. This is rare. The team should first explore if the goal can be renegotiated or if alternative work can fulfill the sprint's intent."},

{id:"R178",q:"What is the PRIMARY purpose of a sprint retrospective?",
o:["To demonstrate completed work to stakeholders","To plan the next sprint's work","To inspect the team's process and identify improvements for the next sprint","To update the product backlog priorities"],
a:2,d:"Process",t:["agile","scrum"],diff:1,type:"single",
e:"The retrospective focuses on HOW the team works (process improvement), not WHAT they built (that's the review) or WHAT they'll build next (that's planning). It's the team's opportunity to inspect and adapt their own practices."},

{id:"R179",q:"A Product Owner is unavailable during the sprint and the team has questions about acceptance criteria. What should the Scrum Master do?",
o:["Make the decisions on behalf of the Product Owner","Coach the Product Owner on the importance of availability and work to remove this impediment","Tell the team to guess what the PO wants","Pause the sprint until the PO returns"],
a:1,d:"Process",t:["agile","scrum","coaching"],diff:2,type:"single",
e:"The Scrum Master removes impediments and coaches. PO unavailability is an impediment. The SM should address it with the PO (coaching on role responsibilities) while helping the team find interim solutions."},

{id:"R180",q:"What is the difference between a product backlog and a sprint backlog?",
o:["They are the same thing at different levels of detail","The product backlog is the ordered list of everything needed for the product (owned by PO); the sprint backlog is the set of items selected for the current sprint plus the plan to deliver them (owned by the team)","The product backlog is for agile; the sprint backlog is for waterfall","The sprint backlog is a subset of the product backlog that never changes during the sprint"],
a:1,d:"Process",t:["agile","scrum","planning"],diff:1,type:"single",
e:"The product backlog is the complete, ordered list of product needs (PO owns). The sprint backlog is items selected for the sprint + the delivery plan (team owns). The sprint backlog can evolve as the team learns, but the sprint goal doesn't change."},

// --- Kanban & Flow Metrics ---
{id:"R181",q:"A Kanban team notices their cycle time has been increasing over the past month. What is the MOST likely cause?",
o:["The team is working too fast","Work-in-progress (WIP) limits are too high or not being enforced, causing multitasking and context switching","The team has too few items in progress","The board has too few columns"],
a:1,d:"Process",t:["kanban","agile"],diff:3,type:"single",
e:"Little's Law: Cycle Time = WIP / Throughput. If WIP increases (limits not enforced), cycle time increases. High WIP causes context switching, which reduces throughput, further increasing cycle time. Enforcing WIP limits is the primary remedy."},

{id:"R182",q:"What does a Cumulative Flow Diagram (CFD) reveal about a Kanban system?",
o:["Individual team member performance","The flow of work through the system — WIP, throughput, and cycle time trends over time","Only the number of completed items","The cost of each work item"],
a:1,d:"Process",t:["kanban","agile"],diff:3,type:"single",
e:"A CFD shows bands representing each workflow state over time. The vertical distance between bands shows WIP; the horizontal distance shows cycle time; the slope of the 'done' band shows throughput. It reveals bottlenecks and flow problems."},

{id:"R183",q:"A Kanban team has a WIP limit of 3 for the 'Testing' column, but 5 items are currently waiting for testing. What should the team do?",
o:["Increase the WIP limit to 5 to match reality","Stop pulling new work into upstream columns and swarm on testing to clear the bottleneck","Ignore the WIP limit since it's just a guideline","Move items to 'Done' without testing to clear the queue"],
a:1,d:"Process",t:["kanban","agile","quality"],diff:2,type:"single",
e:"WIP limits exist to expose bottlenecks. When a column exceeds its limit, the team should stop starting new work and help clear the bottleneck. This is 'stop starting, start finishing.' Raising limits hides problems; skipping testing creates defects."},

// --- Communications Management ---
{id:"R184",q:"A project has grown from 6 to 10 stakeholders. By what percentage have the communication channels increased?",
o:["67%","200%","300%","150%"],
a:2,d:"Process",t:["communication","planning"],diff:2,type:"single",
e:"Original channels: 6(5)/2 = 15. New channels: 10(9)/2 = 45. Increase: (45-15)/15 = 30/15 = 200% increase... Wait: 45/15 = 3x, so it's a 200% increase (tripled). The channels went from 15 to 45, which is 3x or a 200% increase."},

{id:"R185",q:"A PM is deciding between push and pull communication methods. Which scenario is BEST suited for pull communication?",
o:["Urgent project status update to the sponsor","Large volumes of information that stakeholders may need to reference at their convenience (e.g., project repository, wiki)","Conflict resolution between team members","Delivering bad news about a schedule delay"],
a:1,d:"Process",t:["communication"],diff:1,type:"single",
e:"Pull communication (recipients access information when they need it) suits large information repositories. Push communication (sender directs to specific recipients) suits urgent updates. Interactive communication suits complex/sensitive topics."},

{id:"R186",q:"Select TWO elements that should be included in a communications management plan:",
o:["The salary of each team member","Stakeholder communication requirements including format, frequency, and method for each stakeholder group","Escalation procedures for communication issues and unresolved conflicts","The PM's personal communication preferences","Detailed technical specifications of all deliverables"],
a:[1,2],d:"Process",t:["communication","planning"],diff:1,type:"multi",
e:"The communications management plan defines who needs what information, when, how, and from whom. It also includes escalation paths. It doesn't include salaries, PM preferences (it's stakeholder-focused), or technical specs."},

// --- Advanced Process Scenarios ---
{id:"R187",q:"A project is using earned value management. At the 60% completion point, the project shows CPI = 0.92 and SPI = 0.88. The sponsor asks if the project can still meet its original budget and schedule. What is the BEST response?",
o:["Yes, the team will work harder in the remaining 40%","It is highly unlikely — research shows that CPI rarely improves by more than 10% from the 20% completion point onward. A revised baseline or scope reduction should be discussed","Maybe — it depends on future performance","The metrics are unreliable at this stage"],
a:1,d:"Process",t:["evm","cost","scheduling","communication"],diff:3,type:"single",
e:"Research shows CPI stabilizes early (by 20% completion) and rarely improves more than 10%. At 60% complete with CPI=0.92, the project will likely finish 8%+ over budget. Honest communication about realistic outcomes is essential."},

{id:"R188",q:"A PM is managing a project where the critical path runs through activities owned by an external vendor. What risk management strategy is MOST appropriate?",
o:["Accept the risk since the vendor is contractually obligated","Develop contingency plans and identify alternative vendors, while monitoring vendor progress closely with contractual milestone reviews","Transfer all critical path activities to internal resources","Ignore vendor activities in the schedule"],
a:1,d:"Process",t:["risk","procurement","critical-path","scheduling"],diff:3,type:"single",
e:"External dependencies on the critical path are high-risk. The PM should monitor closely (contractual milestones), have contingency plans (alternative vendors, workarounds), and maintain schedule buffers. Contractual obligation alone doesn't prevent delays."},

{id:"R189",q:"During project execution, the PM discovers that a completed deliverable does not meet a regulatory requirement that was missed during requirements gathering. What should the PM do?",
o:["Deliver it anyway and hope regulators don't notice","Immediately initiate a change request to add the regulatory requirement, assess impact, and plan corrective action","Blame the business analyst for missing the requirement","Wait until the next project phase to address it"],
a:1,d:"Process",t:["change-control","compliance","quality","risk"],diff:2,type:"single",
e:"Regulatory non-compliance is a critical issue requiring immediate action through change control. The PM must assess impact, plan rework, and ensure compliance. Blame is unproductive; ignoring or delaying creates legal/business risk."},

{id:"R190",q:"A project team is debating whether to use story points or ideal days for estimation. What should the PM advise?",
o:["Story points are always superior","Ideal days are always superior","Either can work — the key is that the team uses a consistent unit and calibrates over time through velocity tracking","Neither — use hours for all estimation"],
a:2,d:"Process",t:["agile","estimation"],diff:1,type:"single",
e:"Both story points and ideal days are valid relative estimation techniques. What matters is consistency within the team and calibration through velocity. The team should choose what works for them and refine over time."},

{id:"R191",q:"A PM needs to determine the project's critical path. The network diagram shows four paths: Path A = 45 days, Path B = 52 days, Path C = 48 days, Path D = 52 days. What should the PM note?",
o:["Path B is the only critical path","Paths B and D are both critical paths since they share the longest duration","The critical path cannot be determined without resource information","Path A is the critical path since it's the shortest"],
a:1,d:"Process",t:["critical-path","scheduling"],diff:2,type:"single",
e:"The critical path is the longest path through the network. When multiple paths share the longest duration (B and D both = 52 days), they are ALL critical paths. This increases schedule risk since a delay on either path delays the project."},

{id:"R192",q:"A project manager is performing a make-or-buy analysis. The internal cost to develop a component is estimated at $500,000. A vendor offers to deliver it for $400,000 but with a 6-month longer timeline. What additional factors should the PM consider?",
o:["Only cost matters — choose the vendor","Only schedule matters — build internally","Consider total cost of ownership, strategic value of internal capability, risk of vendor dependency, quality control, and the schedule impact on overall project timeline","Flip a coin since both options have trade-offs"],
a:2,d:"Process",t:["procurement","cost","risk","planning"],diff:3,type:"single",
e:"Make-or-buy decisions involve multiple factors beyond direct cost: schedule impact, quality control, intellectual property, vendor risk, strategic capability building, total cost of ownership, and opportunity cost. A holistic analysis is required."},


// --- More Process Multi-Response Questions ---
{id:"R193",q:"Select TWO outputs of the Identify Risks process:",
o:["Risk management plan","Risk register with identified risks and potential risk owners","Risk report summarizing overall project risk exposure","Probability and impact matrix","Work breakdown structure"],
a:[1,2],d:"Process",t:["risk","planning"],diff:2,type:"multi",
e:"Identify Risks produces the risk register (individual risks, owners, categories) and the risk report (overall project risk level, summary of key risks). The risk management plan is an input (from Plan Risk Management). The P&I matrix is part of the risk management plan."},

{id:"R194",q:"Select TWO scenarios where the PM should recommend a schedule baseline change rather than corrective action:",
o:["A one-day delay on a non-critical activity","A regulatory change adds mandatory activities that extend the critical path by 3 months","The original schedule was based on fundamentally flawed assumptions discovered during execution","A team member is sick for two days","A minor scope change adds one story to the backlog"],
a:[1,2],d:"Process",t:["scheduling","change-control","planning"],diff:3,type:"multi",
e:"Baseline changes are appropriate when the original plan is no longer valid (flawed assumptions) or when significant external changes make the current baseline meaningless (regulatory additions). Minor delays and small changes use corrective action within the existing baseline."},

{id:"R195",q:"A project is using both predictive and agile approaches (hybrid). Select TWO appropriate ways to report progress to stakeholders:",
o:["Use only EVM metrics for the entire project","Use burndown/velocity for agile components and EVM/milestone tracking for predictive components","Provide an integrated dashboard showing both agile metrics and traditional metrics with overall project health","Report only story points completed","Use only Gantt charts for all components"],
a:[1,2],d:"Process",t:["hybrid","communication","evm","agile"],diff:3,type:"multi",
e:"Hybrid projects need reporting that matches each component's methodology while providing integrated visibility. Agile components use burndowns/velocity; predictive use EVM/milestones. An integrated dashboard gives stakeholders a unified view."},

// --- PMBOK 7 Principles & Performance Domains ---
{id:"R196",q:"According to PMBOK 7th Edition, which of the following BEST describes the shift from previous editions?",
o:["It eliminates all processes and knowledge areas","It shifts from process-based to principle-based guidance, with performance domains replacing knowledge areas","It only applies to agile projects","It removes the need for project managers"],
a:1,d:"Process",t:["pmbok7","principles","framework"],diff:1,type:"single",
e:"PMBOK 7 shifts from prescriptive processes (5 process groups, 10 knowledge areas) to 12 principles and 8 performance domains. This makes it applicable across all delivery approaches (predictive, agile, hybrid) rather than being process-centric."},

{id:"R197",q:"Which PMBOK 7 principle states that project teams should 'demonstrate stewardship behaviors'?",
o:["Be a diligent, respectful, and caring steward","Focus on value","Navigate complexity","Embrace adaptability and resiliency"],
a:0,d:"Process",t:["pmbok7","principles","ethics"],diff:1,type:"single",
e:"Stewardship means being responsible, trustworthy, and compliant. Stewards act with integrity, care for resources, and consider the broad impact of their decisions on people, organizations, and the environment."},

{id:"R198",q:"A PM is applying the PMBOK 7 principle 'Optimize Risk Responses.' A risk has been identified that could either delay the project by 2 months (threat) or enable early delivery by 1 month (opportunity). What approach aligns with this principle?",
o:["Only plan for the threat since risks are negative","Develop responses for both the threat and opportunity aspects, maximizing potential upside while minimizing downside","Ignore the opportunity and focus only on threat mitigation","Accept both outcomes without planning"],
a:1,d:"Process",t:["pmbok7","principles","risk"],diff:2,type:"single",
e:"PMBOK 7's risk principle encompasses both threats and opportunities. Optimizing risk responses means actively managing both sides — mitigating threats while exploiting or enhancing opportunities."},

{id:"R199",q:"In PMBOK 7, the 'Delivery' performance domain focuses on:",
o:["Only delivering the final product at project end","Delivering value throughout the project lifecycle, including incremental delivery and quality","Delivering status reports to stakeholders","Delivering resources to the project team"],
a:1,d:"Process",t:["pmbok7","principles","agile"],diff:1,type:"single",
e:"The Delivery performance domain addresses how projects deliver value — including scope definition, quality, incremental delivery, and ensuring deliverables meet requirements and create intended value throughout the lifecycle."},

{id:"R200",q:"A PM is applying the 'Tailoring' concept from PMBOK 7. The project is small, low-risk, with an experienced team. What should the PM tailor?",
o:["Nothing — all PMBOK processes must be followed exactly","Reduce ceremony and documentation to match the project's needs — fewer formal reviews, lighter documentation, more informal communication","Eliminate all planning since the team is experienced","Add extra processes for safety since the PM is accountable"],
a:1,d:"Process",t:["pmbok7","principles","planning"],diff:2,type:"single",
e:"Tailoring means adapting processes to fit the project context. Small, low-risk projects with experienced teams need less formality. The PM should right-size processes — enough to manage effectively without unnecessary overhead."},

{id:"R201",q:"Select TWO characteristics of the 'Measurement' performance domain in PMBOK 7:",
o:["It only applies to predictive projects","It establishes metrics to evaluate project performance and inform decision-making","It includes leading indicators that predict future performance, not just lagging indicators of past performance","It requires earned value management on all projects","It eliminates the need for status reporting"],
a:[1,2],d:"Process",t:["pmbok7","principles","evm"],diff:2,type:"multi",
e:"The Measurement domain applies to all approaches and emphasizes both leading indicators (predict future) and lagging indicators (measure past). It informs decisions but doesn't mandate specific techniques like EVM for all projects."},

{id:"R202",q:"A project team is struggling with a complex stakeholder environment where requirements conflict. According to PMBOK 7's 'Navigate Complexity' principle, what should the PM do?",
o:["Simplify by ignoring conflicting requirements","Use systems thinking to understand interconnections, identify root causes of conflicts, and facilitate resolution through iterative engagement","Escalate all conflicts to the sponsor","Wait for stakeholders to resolve conflicts themselves"],
a:1,d:"Process",t:["pmbok7","principles","stakeholder","complexity"],diff:3,type:"single",
e:"Navigating complexity requires systems thinking — understanding how elements interconnect and influence each other. The PM facilitates resolution by helping stakeholders see the bigger picture and finding solutions that address underlying needs."},


// ═══════════════════════════════════════════════════════════════
// BUSINESS ENVIRONMENT DOMAIN — 12 Questions (B027–B038)
// ═══════════════════════════════════════════════════════════════

{id:"B027",q:"A project was approved based on a business case projecting $2M in annual savings. Midway through execution, market conditions change and the projected savings drop to $500K. The project cost to complete is $1.5M. What should the PM recommend?",
o:["Continue the project since it was already approved","Present the updated business case to the sponsor with a recommendation to re-evaluate project viability","Cancel the project immediately without stakeholder input","Reduce quality to lower costs and maintain the original ROI"],
a:1,d:"Business Environment",t:["business-case","strategic-alignment","financial"],diff:3,type:"single",
e:"The PM must ensure ongoing business justification. When the business case fundamentally changes, the sponsor needs updated information to make an informed continue/cancel/modify decision. The PM recommends but doesn't unilaterally decide."},

{id:"B028",q:"An organization is implementing a portfolio of projects. How should projects be prioritized?",
o:["First-come, first-served based on when they were proposed","Based on strategic alignment, expected value, risk, resource requirements, and dependencies","Based solely on the loudest sponsor's demands","Alphabetically by project name"],
a:1,d:"Business Environment",t:["strategic-alignment","business-case","financial"],diff:1,type:"single",
e:"Portfolio management prioritizes projects based on strategic value, alignment with organizational goals, risk-adjusted returns, resource availability, and interdependencies. This ensures limited resources deliver maximum organizational value."},

{id:"B029",q:"A PM notices that the project's benefits will not be fully realized until 18 months after project closure. Who is responsible for benefits realization after the project ends?",
o:["The project manager","The project sponsor or a designated benefits owner","The PMO","No one — benefits tracking ends when the project closes"],
a:1,d:"Business Environment",t:["benefits","business-case"],diff:2,type:"single",
e:"Benefits realization often extends beyond project closure. The sponsor or a designated benefits owner is responsible for tracking and ensuring benefits materialize. The PM's role ends at project closure; benefits ownership transfers."},

{id:"B030",q:"An organization is deciding between two projects: Project A has an NPV of $500,000 and Project B has an NPV of $750,000. Both require similar resources. Which should be selected and why?",
o:["Project A because it's less risky","Project B because higher NPV indicates greater expected value in today's dollars","Neither — more information is needed","Both should be funded equally"],
a:1,d:"Business Environment",t:["financial","business-case","strategic-alignment"],diff:1,type:"single",
e:"NPV (Net Present Value) represents the value of future cash flows in today's dollars. Higher NPV means greater expected value. When projects require similar resources, the higher NPV project delivers more value to the organization."},

{id:"B031",q:"A project delivers a product that meets all specifications, but the organization fails to achieve the expected business benefits. What is the MOST likely root cause?",
o:["The project team did poor work","The benefits realization plan was inadequate — there was no plan for organizational change management, adoption, or transition to operations","The project was unnecessary","The specifications were too detailed"],
a:1,d:"Business Environment",t:["benefits","change-management","strategic-alignment"],diff:3,type:"single",
e:"Projects deliver outputs (products); benefits come from outcomes (adoption and use). Without change management, training, and transition planning, even perfect products fail to deliver benefits. The gap between delivery and value realization is a common failure point."},

{id:"B032",q:"A government regulation change will affect the project's deliverables. The change is mandatory and non-negotiable. How should the PM handle this?",
o:["Ignore it until the regulation is enforced","Treat it as a constraint, assess impact on scope/schedule/cost, update the project plan, and communicate to stakeholders","Challenge the regulation through legal channels to avoid project impact","Wait for the sponsor to notice and direct action"],
a:1,d:"Business Environment",t:["compliance","change-control","risk"],diff:2,type:"single",
e:"Regulatory changes are external constraints that must be accommodated. The PM assesses impact, updates plans, and communicates proactively. Ignoring, challenging, or waiting are not appropriate responses to mandatory compliance requirements."},

{id:"B033",q:"An organization's strategic plan shifts from growth to cost reduction midway through a project designed to capture new market share. What should the PM do?",
o:["Continue the project as planned since it was already approved","Assess how the strategic shift affects the project's business case and present options to the sponsor: continue, modify, or terminate","Immediately terminate the project","Ignore the strategic shift since it doesn't directly mention the project"],
a:1,d:"Business Environment",t:["strategic-alignment","business-case","change-management"],diff:3,type:"single",
e:"Projects must remain aligned with organizational strategy. When strategy shifts, the PM must reassess project justification and present options. The project may still be viable (modified scope) or may need termination. The sponsor decides."},

{id:"B034",q:"What is the difference between a project's outputs, outcomes, and benefits?",
o:["They are the same thing measured at different times","Outputs are tangible deliverables; outcomes are changes in behavior or capability enabled by outputs; benefits are measurable improvements resulting from outcomes","Outputs are for the team; outcomes are for the sponsor; benefits are for customers","There is no meaningful distinction in project management"],
a:1,d:"Business Environment",t:["benefits","business-case"],diff:2,type:"single",
e:"Output: the product/service delivered (e.g., new software). Outcome: the change enabled (e.g., faster processing). Benefit: the measurable value (e.g., $500K annual savings). Projects deliver outputs; organizations realize benefits through outcomes."},

{id:"B035",q:"A PM is asked to justify continued project funding at a stage gate review. Which information is MOST important to present?",
o:["How much has been spent so far (sunk cost)","The remaining cost to complete vs. the expected remaining benefits, updated risk assessment, and continued strategic alignment","The team's morale and satisfaction","How many hours the team has worked"],
a:1,d:"Business Environment",t:["business-case","financial","strategic-alignment"],diff:2,type:"single",
e:"Stage gate decisions should be forward-looking: remaining cost vs. remaining benefits, current risks, and strategic fit. Sunk costs are irrelevant to go/no-go decisions (sunk cost fallacy). Team morale and hours worked don't justify funding."},

{id:"B036",q:"Select TWO ways a PM can ensure a project remains aligned with organizational strategy throughout its lifecycle:",
o:["Review the business case only at project initiation","Regularly validate project objectives against current strategic goals at phase gates and key milestones","Maintain ongoing communication with the sponsor about strategic changes that could affect the project","Never question the original project charter","Focus exclusively on delivering scope without considering business context"],
a:[1,2],d:"Business Environment",t:["strategic-alignment","business-case","communication"],diff:2,type:"multi",
e:"Strategic alignment requires ongoing validation (not just at initiation) and proactive communication with sponsors about strategic changes. The PM must continuously ensure the project still makes business sense."},

{id:"B037",q:"An organization is implementing a major digital transformation. Multiple projects are underway. What governance mechanism ensures all projects collectively deliver the intended strategic value?",
o:["Each PM independently manages their project's value","A portfolio management office that monitors collective value delivery, manages interdependencies, and reallocates resources based on strategic priorities","The CEO personally reviews each project weekly","An external auditor evaluates all projects annually"],
a:1,d:"Business Environment",t:["strategic-alignment","benefits","framework"],diff:2,type:"single",
e:"Portfolio management provides governance across multiple projects, ensuring collective strategic alignment, managing interdependencies, optimizing resource allocation, and monitoring aggregate value delivery. Individual PM management is insufficient for transformation programs."},

{id:"B038",q:"A project's internal rate of return (IRR) is calculated at 12%. The organization's hurdle rate is 15%. What does this mean for project selection?",
o:["The project should be approved since 12% is a good return","The project does not meet the organization's minimum required return and should not be selected based on financial criteria alone","The project should be approved but with a reduced budget","IRR is irrelevant to project selection"],
a:1,d:"Business Environment",t:["financial","business-case"],diff:2,type:"single",
e:"IRR below the hurdle rate means the project's return doesn't meet the organization's minimum threshold. Financially, it shouldn't be selected. However, non-financial factors (regulatory compliance, strategic positioning) might still justify it."},

];
