function startJourney(destination) {
    const hasPlayed = localStorage.getItem("playedTransition");
    const transition = document.getElementById("transitionVideo");
  
    if (!hasPlayed && transition) {
      // Display the transition video
      document.body.classList.add("video-active");
      transition.style.display = "block";
  
      // Ensure it's not muted (if sound is required)
      transition.muted = false;
      transition.play().catch((err) => {
        console.error("Transition video failed to play:", err);
        // Fallback: redirect immediately
        window.location.href = destination;
      });
  
      // After video ends, store flag and redirect
      transition.addEventListener("ended", () => {
        localStorage.setItem("playedTransition", "true");
        window.location.href = destination;
      });
    } else {
      // Already played — skip video
      window.location.href = destination;
    }
  }
  