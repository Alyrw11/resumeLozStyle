const displayNames = {
  "work": "Work History",
  "expertise": "Skills & Attributes",
  "education": "Education & Certifications",
  "languages": "Languages",
  "pursuits": "Hobbies & Interests",
  "contact": "Contact Information",
};

const themedNames = {
  "work": "Career Mountain", //Death Mountain
  "expertise": "Proficiency Ranch", //Hateno Village or Lon lon Ranch
  "education": "Knowledge Domain", //Zora's Domain
  "languages": "Tongues Valley", //Gerudo Valley
  "pursuits": "Leisure Village", //Kakariko Village or Rito Village
  "contact": "Wright Castle", //Hyrule Castle
};

const adventurePages = {
  "work": "/work.html",
  "expertise": "/skills.html",
  "education": "/edCerts.html",
  "languages": "/languages.html",
  "pursuits": "/hobbies.html",
  "contact": "/contact.html",
};

// Synonyms: user input → key used in adventurePages
const inputSynonyms = {
"Education & Certifications": "education",
"Education and Certifications": "education",
"Knowledge Domain": "education",
"education": "education",
"career mountain": "work",
"work history": "work",
"Skills and Attributes": "expertise",
"Skills & Attributes": "expertise",
"skills": "expertise",
"expertise": "expertise",
"proficiency Ranch": "expertise",
"tongues valley": "languages",
"temple of languages": "languages",
"leisure village": "pursuits",
"hobbies & Interests": "pursuits",
"hobbies AND Interests": "pursuits",
"final trial": "contact",
"wright castle": "contact"
};

let keys = Object.keys(displayNames);
let index = 0;

function rotateCarousel() {
  const display = document.getElementById("carouselText");
  if (display) {
    display.textContent = displayNames[keys[index]];
    index = (index + 1) % keys.length;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("destinationInput");
  const container = document.getElementById("pathBtnContainer");

  if (!inputField || !container) {
    console.warn("destinationInput or pathBtnContainer not found");
    return;
  }

  // Start rotating display text
setInterval(rotateCarousel, 2000);

["input", "change"].forEach(evt => {
  inputField.addEventListener(evt, function () {
    let val = this.value.trim().toLowerCase();

    // map synonyms to actual key
    if (inputSynonyms[val]) {
      val = inputSynonyms[val];
    }

    if (adventurePages[val]) {
      const themeName = themedNames[val] || displayNames[val] || val;
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