const availableScreens = ["search", "overview", "evidence", "timeline", "vr"];

function getCurrentScreen() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("screen");
  if (availableScreens.includes(requested)) return requested;
  return "overview";
}

function activateScreen(screenName) {
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === screenName);
  });

  document.querySelectorAll("[data-screen-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.screenLink === screenName);
  });
}

activateScreen(getCurrentScreen());
