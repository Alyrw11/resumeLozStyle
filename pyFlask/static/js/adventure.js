const displayNames = {
  "work": "Work History",
  "expertise": "Skills & Attributes",
  "education": "Education & Certifications",
  "languages": "Languages",
  "pursuits": "Hobbies & Interests",
  "contact": "Contact Information",
};

const themedNames = {
  "work": "Career Mountain",
  "expertise": "Proficiency Ranch",
  "education": "Knowledge Domain",
  "languages": "Tongues Valley",
  "pursuits": "Leisure Village",
  "contact": "Wright Castle",
};

const adventurePages = {
  "work": "/work.html",
  "expertise": "/skills.html",
  "education": "/edCerts.html",
  "languages": "/languages.html",
  "pursuits": "/hobbies.html",
  "contact": "/contact.html",
};

const inputSynonyms = {
  "education & certifications": "education",
  "education and certifications": "education",
  "knowledge domain": "education",
  "education": "education",
  "career mountain": "work",
  "work history": "work",
  "skills and attributes": "expertise",
  "skills & attributes": "expertise",
  "skills": "expertise",
  "expertise": "expertise",
  "proficiency ranch": "expertise",
  "tongues valley": "languages",
  "languages": "languages",
  "lang": "languages",
  "temple of languages": "languages",
  "leisure village": "pursuits",
  "hobbies": "pursuits",
  "hobbies & interests": "pursuits",
  "hobbies and interests": "pursuits",
  "wright castle": "contact",
  "wright": "contact",
};

let allKeys = Object.keys(displayNames);
let index = 0;

// Filter out pages the user has already visited
function getUnvisitedPages() {
  const progress = JSON.parse(localStorage.getItem("zeldaProgress")) || { visited: [] };
  return allKeys.filter(key => !progress.visited.includes(key));
}

function rotateCarousel(unvisitedKeys) {
  const display = document.getElementById("carouselText");
  if (!display || unvisitedKeys.length === 0) return;

  display.textContent = displayNames[unvisitedKeys[index]];
  index = (index + 1) % unvisitedKeys.length;
}

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("destinationInput");
  const container = document.getElementById("pathBtnContainer");

  if (!inputField || !container) {
    console.warn("Missing #destinationInput or #pathBtnContainer");
    return;
  }

  const unvisitedKeys = getUnvisitedPages();

  // If all pages visited → show Master Sword button
  if (unvisitedKeys.length === 0) {
    container.innerHTML = `
      <button id="masterSwordBtn">⚔️ Retrieve the Master Sword</button>
    `;
    document.getElementById("masterSwordBtn").addEventListener("click", () => {
      localStorage.setItem("zeldaPlayCutscene", "true");
      window.location.href = "/html/triforce.html";
    });
    return;
  }

  // Start rotating unvisited options in carousel
  setInterval(() => rotateCarousel(unvisitedKeys), 2000);

  ["input", "change"].forEach(evt => {
    inputField.addEventListener(evt, function () {
      let val = this.value.trim().toLowerCase();
      if (inputSynonyms[val]) {
        val = inputSynonyms[val];
      }

      if (adventurePages[val] && unvisitedKeys.includes(val)) {
        const themeName = themedNames[val] || displayNames[val];
        container.innerHTML = `
          <p>You have chosen to go: <strong>${themeName}</strong></p>
          <a href="${adventurePages[val]}" class="startBtn">Enter ${themeName}</a>
          <div class="triforce"><div></div></div>
        `;

//Discard popup

document.getElementById("disclaimerTriggerBtn").addEventListener("click", () => {
  const popup = document.createElement('div');
  popup.id = 'disclaimer-popup';
  popup.style = `
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    font-family: 'Press Start 2P', cursive;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  `;
  popup.innerHTML = `
    <div>
      <p style="max-width: 400px;">⚠️ This site is currently under construction. You may encounter bugs or unfinished features. Continue your quest?</p>
      <button id="continueQuestBtn" style="margin-top: 1rem; padding: 10px; font-size: 12px;">Continue</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("continueQuestBtn").addEventListener("click", () => {
    window.location.href = adventurePages[val];
  });
});
} else {
container.innerHTML = '';
}
});
});

const restartBtn = document.getElementById("restartQuestBtn");
if (restartBtn) {
restartBtn.addEventListener("click", () => {
window.location.href = "/index.html";
});
}
});