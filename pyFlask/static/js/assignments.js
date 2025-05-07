// Toggle visibility of the assignment section
function toggleDetails(button) {
    const section = button.nextElementSibling;
    if (!section) return;
  
    const isHidden = section.style.display === "none" || section.style.display === "";
  
    section.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "Hide Assignments" : "Read Assignments";
  }
  
  // Load assignment content into the right panel
  function loadAssignment(id) {
    const assignments = {
      "Peace101 Week1": `
        <h3>What Conflict & Peace Mean to Me</h3>
        <H4>Conflict and Peace Reflection</H4>
        <H6>By Allison (Aly) R. Wright</H6>
        <div style="display: flex; align-items: flex-start;">
            <img src="/pyFlask/static/images/sProjects/p101Week1.jpeg" alt="Allison R. Wright" style="width: 120px; height: 100px; margin-right: 15px; border-radius: 10px;">
            <p style="text-align: left;">I’m originally from México and currently live in Ohio, USA. I’ve been married for six years to a wonderful husband, and together we’re raising an energetic almost-three-year-old. We share our home with two cats—Gotham, a mixed breed, and Gandalf, a Maine Coon—and a Great Shepherd named Osiris.</p>
        </div>
        <p>To me, <em>conflict</em> arises when individuals or groups are not aligned on how to move forward. In my experience as a Technical Account Manager, I once worked with a client who requested an account enhancement involving changes that were technically impossible. I had to push back on the request, which led to a deadlock and some frustration.</p>
        <p><em>Peace</em>, on the other hand, comes when a resolution is found that acknowledges the goals of all parties. In this case, the client remained passionate about improving the user experience, brainstorming creative—though unworkable—solutions. I also began to feel the pressure as our project deadline approached.</p>
        <p>To break the impasse, I approached the problem from a new angle. The client wanted users to receive a clear explanation when a payment failed. Our system only returned numeric error codes. My solution was to display the code to the user and provide an option to connect with a live agent. Agents would have a reference list of error codes and their meanings, enabling them to offer personalized support.</p>
        <p>The client accepted this solution, and we were able to complete the enhancement successfully. By shifting perspectives and focusing on shared goals, we transformed a conflict into a peaceful resolution. This professional experience helped me whenever conflict arise in other projects. It help me find a new way to keep the peace and be successful in my role.</p>
      `, // week 1.2 Assginment
      "Peace101 Week1_5": `
        <h3>Overcoming Our Fear of Conflict</h3>
        <p>During my time at a growing company, I experienced a pivotal moment that shaped my development as a team leader and collaborator. As an Account Manager, I faced ongoing challenges working cross-functionally with our Support Engineering (SE) team. Communication gaps and misaligned expectations were creating friction between teams. To address the issue constructively, a peer and I organized a meeting exclusively for the Account Management team. Our goal was to identify shared patterns in our experiences, consolidate recurring challenges, and draft a list of thoughtful, solution-oriented recommendations to present to the SE leadership.</p>
        <H4>Conflict Cycle: Demarcation and Encroachment</H4>
        <p>In initiating this meeting, I helped establish a boundary—creating a space for open, internal dialogue among Account Managers, free from external judgment. This was an act of <strong>demarcation</strong> meant to enable candid discussion and peer alignment. However, the boundary was tested when a peer, deeply frustrated, redirected the meeting by venting intensely about her experiences with the SE team. In that moment, I felt she <strong>encroached</strong> on the purpose of the meeting by shifting it from collaborative problem-solving to unfiltered critique. While her frustration was likely valid, the way it was expressed disrupted the structure we had intended to maintain.</p>
        <H4>Conflict Cycle: Resistance and Surrender</H4>
        <p>My immediate response was <strong>resistance</strong>. I felt the direction of the meeting—and my efforts to facilitate it—were being undermined. In my frustration, I told her that if she couldn’t contribute constructively, she should either help us find solutions or excuse herself. My comment, though emotionally honest, escalated the tension. To prevent further disruption and discomfort for others in the room, I chose to <strong>surrender</strong> by ending the meeting prematurely. While my intention was to protect the team dynamic, the abrupt closure left the issue unresolved and limited the opportunity for mutual understanding.</p>
        <H4>Reflecting on Missed Opportunities: Principles I Failed to Apply</H4>
        <ul>
          <li><strong>Antidote for Fear</strong>: I allowed my fear of losing control and failing as a facilitator to dictate my response. Instead of responding with love and calm assertiveness, I reacted out of anxiety and irritation. I now recognize that courage and empathy—not control—are the true antidotes to fear in conflict.</li>
          <li><strong>Eyes to See</strong>: I failed to truly see my colleague. I focused on her delivery rather than the substance behind it. Had I taken a moment to ask clarifying questions and show genuine curiosity, I might have uncovered valuable insights into her experience and elevated her voice in a way that honored her intent.</li>
          <li><strong>Holy Envy</strong>: At the time, I overlooked her courage to speak up, even though it took a form I didn’t expect. In retrospect, I admire her conviction and willingness to surface hard truths. Seeing this strength could have helped me shift from frustration to empathy.</li>
          <li><strong>The Wood Principle</strong>: I did not take the time to understand her perspective deeply enough to represent it with accuracy and generosity. I now see that before disagreeing, I could have validated her point of view—acknowledging her pain, then helping the group reframe the conversation toward solutions.</li>
        </ul>
        <H4>Key Takeaway</H4>
        <p>This experience reminded me that conflict is not inherently destructive—it becomes so when handled without compassion or self-awareness. I have since committed to approaching conflict as an opportunity for growth and connection. I strive to listen more deeply, seek understanding before judgment, and lead conversations that invite both accountability and grace. By applying principles like those found in <strong>the Conflict Cycle, the Antidote for Fear</strong>, and <strong>the Wood Principle</strong>, I aim to be a more empathetic, solution-focused leader across every team I serve.</p>
        
      `,
      "Peace101 Week2": `
        <h3>Conflict Views & Styles</h3>
        <h4>Religious Liberty and LGBTQ Rights: A Reflection on Constructive and Destructive Dynamics</h4>
        <p>After reading the chapter <em>"Religious Liberty and LGBTQ Rights"</em>, I was struck by how the conflict dynamic presented is largely creative and constructive, though not without its destructive elements. In this reflection, I&rsquo;ll share how I came to see both sides of the conflict and what it taught me about collaboration, respect, and compromise.</p>
        <h4>Constructive Elements</h4>
        <p>In 2022, the Respect for Marriage Act (RMA) was signed into law, mandating that all U.S. states and territories recognize same-sex and interracial marriages. In response, The Church of Jesus Christ of Latter-day Saints (the Church)&mdash;a religious organization often known for its conservative values&mdash;surprised many by expressing public support for the legislation. This support was rooted in the Church's desire to preserve religious liberty while extending legal protections to same-sex couples. What impressed me most was the Church&rsquo;s willingness to collaborate with Equality Utah (EU), the state&rsquo;s largest LGBTQ civil rights organization. This partnership demonstrated a genuine effort to find common ground despite deeply held doctrinal differences.</p>
        <p>A particularly significant moment came when Southern Utah University (SUU) announced that Elder Jeffrey R. Holland, a member of the Quorum of the Twelve Apostles, would be the keynote speaker for the 2023 commencement ceremony, just months after the RMA passed. Some students and community members expressed concern and offense due to past remarks made by Elder Holland, particularly his 2021 &ldquo;musket fire&rdquo; metaphor, which many interpreted as hostile toward the LGBTQ community. Despite these concerns, Equality Utah defended Elder Holland&rsquo;s right to speak. While they did not necessarily agree with all of his views, they recognized the importance of respectful dialogue and freedom of speech.</p>
        <p>This moment highlighted the strength of the relationship between the Church and Equality Utah. The EU has publicly credited the Church with helping pass state-level nondiscrimination protections for LGBTQ individuals and supporting the ban on conversion therapy for minors in Utah. For me, this shows that while their foundational beliefs may differ, both groups are committed to advancing human dignity through cooperation and mutual respect.</p>
        <h4>Destructive Elements</h4>
        <p>However, the conflict also revealed destructive undercurrents. The backlash against Elder Holland&rsquo;s speaking engagement at SUU showed that not everyone embraces the spirit of collaboration that Church and EU leaders have worked to cultivate. Protesters, recalling the Church&rsquo;s support of California&rsquo;s Proposition 8 in 2008 and past rhetoric perceived as harmful, expressed fear and distrust. These reactions are understandable and demonstrate how historical wounds can resurface even amid present efforts toward peace.</p>
        <p>In my view, these destructive elements remind us that healing and trust-building are long-term processes. Even when leaders are aligned in tone and action, the broader community may lag, especially when past conflicts remain unresolved or inadequately addressed. Without continued dialogue, grassroots polarization can easily undermine progress.<br /><br /><strong>Conflict Cycle and Style Analysis</strong></p>
        <p>Demarcation is evident in the lines drawn between the Church&rsquo;s religious doctrine and Equality Utah&rsquo;s advocacy for LGBTQ rights. Encroachment occurred when the Church&rsquo;s support of Proposition 8 and previous remarks, such as Elder Holland&rsquo;s &ldquo;musket fire&rdquo; metaphor, were interpreted as violating the dignity and inclusion of LGBTQ individuals. This led to resistance, exemplified by protests against Elder Holland&rsquo;s role as keynote speaker and broader expressions of frustration within the community. Ultimately, the Church and Equality Utah demonstrated a form of surrender, not by abandoning their values, but by making space for each other&rsquo;s perspectives. For example, the Church supported nondiscrimination laws, while Equality Utah defended Elder Holland&rsquo;s right to speak. Together, they modeled what a healthy compromise can look like.</p>
        <p>Both groups primarily adopted a compromise conflict style. The Church supported the Respect for Marriage Act and other public policy changes while maintaining its doctrinal positions. Equality Utah likewise demonstrated compromise by affirming the Church&rsquo;s right to express its views, even when disagreeing with specific statements. In contrast, some protesters within the broader community employed a competitive style, openly opposing SUU&rsquo;s decision and expressing discontent. This variety of approaches reveals the layered nature of conflict, where institutions may pursue peace, but individuals may still grapple with historical grievances and unresolved emotions.</p>
        <h4>Conclusion</h4>
        <p>Overall, I found the conflict presented in the chapter to be overwhelmingly creative. The authors highlighted powerful examples of negotiation, dialogue, and a shared desire to coexist peacefully. At the same time, the tensions at SUU were a sobering reminder that collaboration at the top does not automatically translate to harmony on the ground. What I take away from this reading is the importance of both institutional and personal efforts to foster mutual understanding. I believe that when groups as ideologically different as The Church of Jesus Christ of Latter-day Saints and Equality Utah can work together, it shows that peace is not only possible&mdash;it&rsquo;s already happening in meaningful ways.</p>
        <H4>Citation</h6>
        <p>Sinkovic, M., Pulsipher, S., Blakeman, A., &amp; Carter, C. (n.d.). <em>Peace 101: Conflict and Peace Reader</em>. BYU.</p>
      `,
      "Peace101 Week2_5": `
        <h3>Types of Violence</h3>
        <p>Placeholder for thoughts.</p>
      `,
      "Peace101 Week3": `
        <h3>Types of Violence</h3>
        <p>Placeholder for thoughts.</p>
      `,
      "Peace101 Week4": `
        <h3>Transforming Conflict</h3>
        <p>Placeholder for thoughts.</p>
      `,
      "Peace101 Week5": `
        <h3>Intervening in Conflicts</h3>
        <p>Placeholder for thoughts.</p>
      `,
      "Peace101 Week6": `
        <h3>Community Conflict Analysis</h3>
        <p>Placeholder for thoughts.</p>
      `,
      "Peace101 Week7": `
        <h3>What Conflict & Peace Now Mean to Me</h3>
        <p>Placeholder for thoughts.</p>
      `,
    };
  
    const contentDiv = document.getElementById("assignmentContent");
    if (contentDiv) {
      contentDiv.innerHTML = assignments[id] || "<p>Assignment not found.</p>";
    }
  }
  