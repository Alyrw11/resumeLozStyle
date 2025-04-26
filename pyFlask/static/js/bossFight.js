
window.addEventListener('DOMContentLoaded', () => {
  fetch('/pyFlask/templates/bosses.html') // <<< make sure this path matches where bosses.html is located
    .then(response => response.text())
    .then(html => {
      document.getElementById('bossContainer').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading boss modal:', error);
    });
});

