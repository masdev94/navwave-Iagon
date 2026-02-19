// activate on load + keep active with hash changes
(() => {
  const links = Array.from(document.querySelectorAll(".link"));

  const setReady = () => {
    links.forEach((link) => link.classList.add("ready"));
  };

  const ensureActiveHash = () => {
    if (!location.hash) {
      const first = links[0];
      if (first) {
        history.replaceState(null, "", first.getAttribute("href"));
      }
    }
  };

  const syncActive = () => {
    const hash = location.hash;
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === hash;
      link.classList.toggle("active", isActive);
    });
    setReady();
  };

  document.addEventListener("DOMContentLoaded", () => {
    ensureActiveHash();
    syncActive();
  });

  window.addEventListener("hashchange", syncActive);

  document.addEventListener("click", (event) => {
    if (event.target.closest(".link")) {
      syncActive();
    }
  });
})();
