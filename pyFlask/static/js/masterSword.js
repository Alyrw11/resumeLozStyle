document.addEventListener("DOMContentLoaded", () => {
    if (
      window.location.pathname.includes("triforce.html") &&
      localStorage.getItem("zeldaPlayCutscene") === "true"
    ) {
      localStorage.removeItem("zeldaPlayCutscene");
  
      const container = document.createElement("div");
      container.id = "cutsceneContainer";
  
      const video = document.createElement("video");
      video.src = "/videos/masterSword.mp4";
      video.controls = true;
      video.autoplay = true;
  
      video.onended = () => {
        showPostCutsceneOptions();
      };
  
      container.appendChild(video);
      document.body.appendChild(container);
    }
  });
  
  function showPostCutsceneOptions() {
    const message = document.createElement("div");
    message.id = "masterSwordMessage";
    message.innerHTML = `
      <h2>🗡️ You received the Master Sword!</h2>
      <button id="fightNow">⚔️ Fight the Final Boss</button>
      <button id="prepareFirst">🛡️ Prepare First</button>
    `;
    document.body.appendChild(message);
  
    document.getElementById("fightNow").addEventListener("click", triggerFinalBoss);
    document.getElementById("prepareFirst").addEventListener("click", () => {
      const prep = document.createElement("div");
      prep.innerHTML = `
        <p> Take your time to prepare...</p>
        <button id="readyToFight">I'm Ready!</button>
      `;
      document.body.appendChild(prep);
  
      document.getElementById("readyToFight").addEventListener("click", triggerFinalBoss);
    });
  }
  