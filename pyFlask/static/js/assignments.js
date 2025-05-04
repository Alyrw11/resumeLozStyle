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
        <p>To me, conflict arises when individuals or groups are not aligned on how to move forward. In my experience as a Technical Account Manager, I once worked with a client who requested an account enhancement involving changes that were technically impossible. I had to push back on the request, which led to a deadlock and some frustration.</p>
        <p>Peace, on the other hand, comes when a resolution is found that acknowledges the goals of all parties. In this case, the client remained passionate about improving the user experience, brainstorming creative—though unworkable—solutions. I also began to feel the pressure as our project deadline approached.</p>
        <p>To break the impasse, I approached the problem from a new angle. The client wanted users to receive a clear explanation when a payment failed. Our system only returned numeric error codes. My solution was to display the code to the user and provide an option to connect with a live agent. Agents would have a reference list of error codes and their meanings, enabling them to offer personalized support.</p>
        <p>The client accepted this solution, and we were able to complete the enhancement successfully. By shifting perspectives and focusing on shared goals, we transformed a conflict into a peaceful resolution. This professional experience helped me whenever conflict arise in other projects. It help me find a new way to keep the peace and be successful in my role.</p>
      `, //
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
  