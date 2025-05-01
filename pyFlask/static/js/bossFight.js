window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('bossContainer');
  if (!container) return console.warn("No #bossContainer found on this page.");

  try {
    const response = await fetch('/bosses');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const html = await response.text();
    container.innerHTML = html;
    console.log("Boss UI loaded from bosses.html");
  } catch (err) {
    console.error("Failed to load bosses.html:", err);
  }
});
