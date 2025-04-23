// Track items collected
let items = JSON.parse(localStorage.getItem('zeldaResumeItems') || '[]');

function collectItem(itemName) {
  if (!items.includes(itemName)) {
    items.push(itemName);
    localStorage.setItem('zeldaResumeItems', JSON.stringify(items));
    alert(`🎉 You acquired: ${itemName}!`);
  }
}

function checkTriforceUnlock() {
  if (items.length >= 3) {
    window.location.href = "triforce.html";
  }
}
