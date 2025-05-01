

/*const displayNames = {
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
    "work": "/work.html",
    "skills": "/skills.html",
    "education": "/edCerts.html",
    "languages": "/languages.html",
    "hobbies": "/hobbies.html",
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
  

  const displayNames = {
  "work": "Work History",
  "expertise": "Skills & Attributes",
  "education": "Education & Certifications",
  "languages": "Languages",
  "pursuits": "Hobbies & Interests",

};

const themedNames = {
  "work": "Career Mountain", //Death Mountain
  "expertise": "Proficiency Ranch", //Hateno Village or Lon lon Ranch
  "education": "Knowledge Domain", //Zora's Domain
  "languages": "Tongues Valley", //Gerudo Valley
  "pursuits": "Leisure Village", //Kakariko Village or Rito Village

};

const adventurePages = {
  "work": "/work.html",
  "expertise": "/skills.html",
  "education": "/edCerts.html",
  "languages": "/languages.html",
  "pursuits": "/hobbies.html",

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
"hobbies": "pursuits",
"hobbies & Interests": "pursuits",
"hobbies AND Interests": "pursuits",
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

function filterVisitedPages() {
  const progress = JSON.parse(localStorage.getItem("zeldaProgress")) || { visited: [] };
  return keys.filter(key => !progress.visited.includes(key));
}

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("destinationInput");
  const container = document.getElementById("pathBtnContainer");

  if (!inputField || !container) {
    console.warn("destinationInput or pathBtnContainer not found");
    return;
  }

  let filteredKeys = filterVisitedPages();
  if (filteredKeys.length === 0) {
    container.innerHTML = `<button id="masterSwordBtn">Retrieve the Master Sword</button>`;
    document.getElementById("masterSwordBtn").addEventListener("click", playMasterSwordCutscene);
    return;
  }

  setInterval(() => {
    if (filteredKeys.length > 0) {
      const display = document.getElementById("carouselText");
      if (display) {
        display.textContent = displayNames[filteredKeys[index]];
        index = (index + 1) % filteredKeys.length;
      }
    }
  }, 2000);

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

function playMasterSwordCutscene() {
  const video = document.createElement("video");
  video.src = "/pyFlask/static/videos/intoRes.mp4"; // make sure this path is correct
  video.autoplay = true;
  video.controls = true;
  video.onended = () => {
    triggerFinalBoss(); // from gameCompletion.js
  };
  document.body.innerHTML = '';
  document.body.appendChild(video);
}//*/

/*
// ***** the version of adventure.js that works!!! **** /////
const displayNames = {
  "work": "Work History",
  "expertise": "Skills & Attributes",
  "education": "Education & Certifications",
  "languages": "Languages",
  "pursuits": "Hobbies & Interests",

};

const themedNames = {
  "work": "Career Mountain", //Death Mountain
  "expertise": "Proficiency Ranch", //Hateno Village or Lon lon Ranch
  "education": "Knowledge Domain", //Zora's Domain
  "languages": "Tongues Valley", //Gerudo Valley
  "pursuits": "Leisure Village", //Kakariko Village or Rito Village

};

const adventurePages = {
  "work": "/work.html",
  "expertise": "/skills.html",
  "education": "/edCerts.html",
  "languages": "/languages.html",
  "pursuits": "/hobbies.html",

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
"hobbies": "pursuits",
"hobbies & Interests": "pursuits",
"hobbies AND Interests": "pursuits",
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

function filterVisitedPages() {
  const progress = JSON.parse(localStorage.getItem("zeldaProgress")) || { visited: [] };
  return keys.filter(key => !progress.visited.includes(key));
}

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("destinationInput");
  const container = document.getElementById("pathBtnContainer");

  if (!inputField || !container) {
    console.warn("destinationInput or pathBtnContainer not found");
    return;
  }

  let filteredKeys = filterVisitedPages();
  if (filteredKeys.length === 0) {
    container.innerHTML = `<button id="masterSwordBtn">Retrieve the Master Sword</button>`;
    document.getElementById("masterSwordBtn").addEventListener("click", playMasterSwordCutscene);
    return;
  }

  setInterval(() => {
    if (filteredKeys.length > 0) {
      const display = document.getElementById("carouselText");
      if (display) {
        display.textContent = displayNames[filteredKeys[index]];
        index = (index + 1) % filteredKeys.length;
      }
    }
  }, 2000);

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

function playMasterSwordCutscene() {
  const video = document.createElement("video");
  video.src = "/pyFlask/static/videos/intoRes.mp4"; // make sure this path is correct
  video.autoplay = true;
  video.controls = true;
  video.onended = () => {
    triggerFinalBoss(); // from gameCompletion.js
  };
  document.body.innerHTML = '';
  document.body.appendChild(video);
}
*/

const itemPool = ["Boomerang", "Hookshot", "Bomb Bag", "Grappling Claw", "Magic Flute"];
const masterItem = "Master Sword";
const pages = ["work", "skills", "edcerts", "languages", "hobbies"];
const progress = JSON.parse(localStorage.getItem("zeldaProgress")) || {
  visited: [],
  items: [],
  masterUnlocked: false
};

let currentBoss = null;
let playerHealth = 100;
let bossHealth = 100;

function toggleDetails(button) {
  const card = button.closest('.jobCard');
  card.classList.toggle('expanded');
}

function triggerBossFight(currentPage) {
  const miniBossElement = document.getElementById("miniBoss");
  miniBossElement.classList.remove("hidden");
  miniBossElement.dataset.page = currentPage;

  //Need to change the order of the miniBosses to match the pages
  const pageBossMap = {
    work: miniBosses[2],
    skills: miniBosses[0],
    edcerts: miniBosses[3],
    languages: miniBosses[1],
    hobbies: miniBosses[4],
  };

  currentBoss = pageBossMap[currentPage] || miniBosses[Math.floor(Math.random() * miniBosses.length)];

  document.getElementById("bossName").textContent = currentBoss.name;
  document.getElementById("bossImage").src = currentBoss.img;
  document.getElementById("bossDesc").textContent = currentBoss.desc;

  playerHealth = 100;
  bossHealth = 100;
  updateBattleUI();
}

function updateBattleUI() {
  document.getElementById("playerHP").textContent = playerHealth;
  document.getElementById("bossHP").textContent = bossHealth;
}

function playerAttack() {
  let criticalHit = Math.random() < 0.2; // 20% chance
  let baseDamage = Math.floor(Math.random() * 20) + 25;
  let playerDamage = criticalHit ? baseDamage * 2 : baseDamage;

  const bossDamage = Math.floor(Math.random() * 10) + 5;

  bossHealth -= playerDamage;
  playerHealth -= bossDamage;

  if (criticalHit) {
    alert(`💥 Critical Hit! You dealt ${playerDamage} damage!`);
    playCriticalHitEffect();
  }

  updateBattleUI();
  checkBattleOutcome();
}

function playerDodge() {
  const dodgeSuccess = Math.random() > 0.5;
  if (dodgeSuccess) {
    alert("You dodged the attack! No damage taken!");
  } else {
    const bossDamage = Math.floor(Math.random() * 15) + 5;
    playerHealth -= bossDamage;
    alert(`You failed to dodge and took ${bossDamage} damage!`);
  }

  updateBattleUI();
  checkBattleOutcome();
}

function playerHeal() {
  const healAmount = Math.floor(Math.random() * 15) + 10;
  playerHealth += healAmount;
  if (playerHealth > 100) playerHealth = 100;

  const bossDamage = Math.floor(Math.random() * 10) + 5;
  playerHealth -= bossDamage;

  alert(`You healed ${healAmount} HP, but took ${bossDamage} damage from the boss attack!`);

  updateBattleUI();
  checkBattleOutcome();
}

function checkBattleOutcome() {
  if (playerHealth <= 0) {
    alert("💀 You were defeated by " + currentBoss.name + "!");
    location.reload(); // Restart the page
  } else if (bossHealth <= 0) {
    if (currentBoss.name === "Calamity Ganon") {
      alert("🏆 You have saved Hyrule and completed your quest!");

      // Remove backdrop before leaving
      const backdrop = document.getElementById("bossBackdrop");
      backdrop.classList.remove("active");

      setTimeout(() => {
        window.location.href = "/html/contact.html";
      }, 500);
    } else {
      alert("🏆 You defeated " + currentBoss.name + "!");
      defeatBoss();
    }
  }
}

function defeatBoss() {
  const page = document.getElementById("miniBoss").dataset.page;

  if (!progress.visited.includes(page)) {
    progress.visited.push(page);

    const availableItems = itemPool.filter(item => !progress.items.includes(item));
    if (availableItems.length > 0) {
      const newItem = availableItems[Math.floor(Math.random() * availableItems.length)];
      progress.items.push(newItem);
      alert("🎁 You received: " + newItem + "!");
    }

    localStorage.setItem("zeldaProgress", JSON.stringify(progress));
  }

  document.getElementById("miniBoss").classList.add("hidden");

  if (progress.visited.length >= pages.length && !progress.masterUnlocked) {
    playMasterSwordCutscene(); // <- Adding Master Sword cutscene
  } else {
    chooseNextPage();
  }
}

function chooseNextPage() {
  const inputBox = document.getElementById("nextInputBox");
  const carouselText = document.getElementById("carouselText");

  if (inputBox) {
    inputBox.classList.remove("hidden");
    window.scrollTo({ top: inputBox.offsetTop, behavior: 'smooth' });
  }
  //  No need to inject a button — adventure.js already handles that!
}

function triggerFinalBoss() {
  const miniBossElement = document.getElementById("miniBoss");
  if (!miniBossElement) return;

  miniBossElement.classList.remove("hidden");

  const backdrop = document.getElementById("bossBackdrop");
  if (backdrop) backdrop.classList.add("active");

  currentBoss = masterBoss;
  document.getElementById("bossName").textContent = masterBoss.name;
  document.getElementById("bossImage").src = masterBoss.img;
  document.getElementById("bossDesc").textContent = masterBoss.desc;

  playerHealth = 100;
  bossHealth = 150;
  updateBattleUI();

  progress.masterUnlocked = true;
  localStorage.setItem("zeldaProgress", JSON.stringify(progress));
}

function playCriticalHitEffect() {
  const miniBoss = document.getElementById("miniBoss");
  const critText = document.getElementById("criticalText");

  miniBoss.classList.add("critical-hit");
  critText.classList.remove("hidden");
  critText.classList.add("float-crit");

  setTimeout(() => {
    miniBoss.classList.remove("critical-hit");
    critText.classList.add("hidden");
    critText.classList.remove("float-crit");
  }, 1000);
}

//NEW: Automatically play Master Sword cutscene if flag is set
document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.includes("triforce.html") &&
    localStorage.getItem("zeldaPlayCutscene") === "true"
  ) {
    localStorage.removeItem("zeldaPlayCutscene");

    const container = document.createElement("div");
    container.id = "cutsceneContainer";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.src = "/videos/masterSword.mp4";
    video.autoplay = true;
    video.controls = true;
    video.onended = () => {
      triggerFinalBoss();
    };

    container.appendChild(video);
  }
});