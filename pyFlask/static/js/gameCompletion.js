const itemPool = ["Boomerang", "Hookshot", "Bomb Bag", "Grappling Claw", "Magic Flute"];
const masterItem = "Master Sword";
const pages = ["work", "skills", "edcerts", "languages", "hobbies"];
const progress = JSON.parse(localStorage.getItem("zeldaProgress")) || {
  visited: [],
  items: [],
  masterUnlocked: false
};

function toggleDetails(button) {
  const card = button.closest('.jobCard');
  card.classList.toggle('expanded');
}

function triggerBossFight(currentPage) {
  document.getElementById("miniBoss").classList.remove("hidden");
  document.getElementById("miniBoss").dataset.page = currentPage;
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

    if (!progress.masterUnlocked && progress.visited.length === pages.length) {
      progress.items.push(masterItem);
      progress.masterUnlocked = true;
      alert("🗡️ You unlocked the Master Sword and defeated the final boss!");
      window.location.href = "/html/contact.html";
    }

    localStorage.setItem("zeldaProgress", JSON.stringify(progress));
  }

  document.getElementById("miniBoss").classList.add("hidden");
  chooseNextPage();
}

function chooseNextPage() {
  const next = prompt("Where would you like to go next? (skills, edcerts, languages, hobbies)");
  if (next) window.location.href = `/html/${next}.html`;
}
