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
  
  const pages = {
    "work": "/work.html",
    "expertise": "/skills.html",
    "education": "/edCerts.html",
    "languages": "/languages.html",
    "pursuits": "/hobbies.html",
    "contact": "/contact.html",
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
  
  setInterval(rotateCarousel, 2000);
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("destinationInput").addEventListener("input", function () {
      const val = this.value.toLowerCase().trim();
      const container = document.getElementById("pathBtnContainer");
  
      if (pages[val]) {
        const themeName = themedNames[val];
        container.innerHTML = `
          <p>You have chosen to go: <strong>${themeName}</strong></p>
          <a href="${pages[val]}" class="startBtn">Enter ${themeName}</a>
          <div class="triforce"><div></div></div>
        `;
      } else {
        container.innerHTML = '';
      }
    });
  });
  