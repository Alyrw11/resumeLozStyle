const displayNames = {
  "work": "Work History",
  "expertise": "Skills & Attributes",
  "education": "Education & Certifications",
  "languages": "Languages",
  "pursuits": "Hobbies & Interests",
};

const themedNames = {
  "work": "Career Mountain",
  "expertise": "Proficiency Ranch",
  "education": "Knowledge Domain",
  "languages": "Tongues Valley",
  "pursuits": "Leisure Village",
};

const adventurePages = {
  "work": "/work.html",
  "expertise": "/skills.html",
  "education": "/edCerts.html",
  "languages": "/languages.html",
  "pursuits": "/hobbies.html",
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
      } else {
        container.innerHTML = '';
      }
    });
  });
});
