function loadAssignment(id) {
    const assignments = {
      "Peace101 Week1": `
        <h3>What Conflict & Peace Mean to Me</h3>
        <p>Placeholder for thoughts.</p>
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
        <h3>Community Conflict Analysis/h3>
        <p>Placeholder for thoughts.</p> 
     `,
      "Peace101 Week7": `
        <h3>What Conflict & Peace Now Mean to Me</h3>
        <p>Placeholder for thoughts.</p>
      `,
    };
  
    document.getElementById("assignmentContent").innerHTML = assignments[id] || "<p>Assignment not found.</p>";
  } 
  