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
      "Peace101 Week1.5": `
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
  