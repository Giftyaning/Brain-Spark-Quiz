window.addEventListener("load", function () {
  const bgMusic = document.getElementById("bgMusic");
  const volumeSlider = document.getElementById("volumeSlider");

  bgMusic.volume = 0.5;

  // Auto-play with error handling
  function attemptPlay() {
    bgMusic.play().catch((error) => {
      document.body.addEventListener(
        "click",
        function enableAudio() {
          bgMusic.play();
          document.body.removeEventListener("click", enableAudio);
        },
        { once: true }
      );
    });
  }

  attemptPlay();

  volumeSlider.addEventListener("input", function () {
    bgMusic.volume = this.value;
  });

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && bgMusic.paused) {
      attemptPlay();
    }
  });
});