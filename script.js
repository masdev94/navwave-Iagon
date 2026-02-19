const navItems = Array.from(document.querySelectorAll('.nav-item'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

function setActiveTab(targetItem) {
  navItems.forEach((item) => item.classList.toggle('active', item === targetItem));

  const tabId = targetItem.dataset.tab;
  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `panel-${tabId}`);
  });
}

navItems.forEach((item) => {
  item.addEventListener('click', () => setActiveTab(item));
});

const initialActiveItem = document.querySelector('.nav-item.active') || navItems[0];
if (initialActiveItem) {
  setActiveTab(initialActiveItem);
}
