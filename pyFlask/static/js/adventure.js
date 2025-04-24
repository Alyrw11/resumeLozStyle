const options = {
  "work": "Temple of Work History",
  "skills": "Dungeon of Skills",
  "edcerts": "Shrine of Knowledge",
  "languages": "Tower of Tongues",
  "hobbies": "Forest of Fun"
};

const pages = {
  "work": "static/html/work.html",
  "skills": "static/html/skills.html",
  "edcerts": "static/html/edCerts.html",
  "languages": "static/html/languages.html",
  "hobbies": "static/html/hobbies.html"
};

let keys = Object.keys(options);
let index = 0;

function rotateCarousel() {
    const display = document.getElementById("carouselText");
    if (display) {
        display.textContent = options[keys[index]];
          ndex = (index + 1) % keys.length;
    }
}      

setInterval(rotateCarousel, 2000);

document.getElementById("destinationInput").addEventListener("input", function() {
  const val = this.value.toLowerCase().trim();
  const container = document.getElementById("pathBtnContainer");

  if (pages[val]) {
    container.innerHTML = `<a href="${pages[val]}" class="start-btn">Enter ${options[val]}</a>`;
  } else {
    container.innerHTML = '';
  }
});
