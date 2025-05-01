const itemPool = ["Boomerang", "Hookshot", "Bomb Bag", "Grappling Claw", "Magic Flute"];
const masterItem = "Master Sword";
const pages = ["work", "expertise", "education", "languages", "pursuits"];
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
  if (!miniBossElement) return;
  miniBossElement.classList.remove("hidden");
  miniBossElement.dataset.page = currentPage;

  const pageBossMap = {
    work: miniBosses[2],
    expertise: miniBosses[0],
    education: miniBosses[3],
    languages: miniBosses[1],
    pursuits: miniBosses[4],
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
  let criticalHit = Math.random() < 0.2;
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
    location.reload();
  } else if (bossHealth <= 0) {
    if (currentBoss.name === "Demon Dragon Ganon") {
      alert("🏆 You have saved Hyrule and completed your quest!");
      const backdrop = document.getElementById("bossBackdrop");
      if (backdrop) backdrop.classList.remove("active");
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
    showMasterSwordPrompt();
  } else {
    chooseNextPage();
  }
}

function chooseNextPage() {
  const inputBox = document.getElementById("nextInputBox");
  if (inputBox) {
    inputBox.classList.remove("hidden");
    window.scrollTo({ top: inputBox.offsetTop, behavior: 'smooth' });
  }
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

// NEW: Prompt to retrieve Master Sword
function showMasterSwordPrompt() {
  const prompt = document.createElement("div");
  prompt.id = "swordPrompt";
  prompt.innerHTML = `
    <p>✨ You feel a surge of power... It's time to retrieve the Master Sword!</p>
    <button id="goToSword">⚔️ Go Retrieve the Master Sword</button>
  `;
  document.body.appendChild(prompt);

  document.getElementById("goToSword").addEventListener("click", () => {
    window.location.href = "/triforce.html"; // or triforce.html
  });
}

// Load cutscene and post-cutscene options if redirected
document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.includes("triforce.html") &&
    localStorage.getItem("zeldaPlayCutscene") === "true"
  ) {
    localStorage.removeItem("zeldaPlayCutscene");
    playMasterSwordCutscene();
  }
});

//Cutscene function (optional fallback usage)
function playMasterSwordCutscene() {
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
