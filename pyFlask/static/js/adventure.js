const displayNames = {
    "work": "Work History",
    "skills": "Skills & Attributes",
    "education": "Education & Certifications",
    "languages": "Languages",
    "hobbies": "Hobbies & Interests",
    "contact": "Contact Information",
  };
  
  const themedNames = {
    "work": "Temple of Career Experience",
    "skills": "Skill Canyon",
    "education": "Knowledge Domain",
    "languages": "Tongues Valley",
    "hobbies": "Hobbie Village",
    "contact": "Wright Castle",
  };
  
  const pages = {
    "work": "pyFlask/static/html/work.html",
    "skills": "static/html/skills.html",
    "education": "static/html/edCerts.html",
    "languages": "static/html/languages.html",
    "hobbies": "static/html/hobbies.html",
    "contact": "static/html/contact.html",
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
  