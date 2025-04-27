window.addEventListener('DOMContentLoaded', () => {
  if (typeof miniBosses !== 'undefined') {
    console.log('Mini Bosses loaded:', miniBosses);

    // Create bossContainer if needed (this is optional, assuming HTML already has it)
    const bossContainer = document.getElementById('bossContainer');
    if (!bossContainer) {
      const container = document.createElement('div');
      container.id = 'bossContainer';
      document.body.appendChild(container);
    }

    // Optionally you can pre-load anything visual here if needed
  } else {
    console.error('MiniBosses not loaded!');
  }
});