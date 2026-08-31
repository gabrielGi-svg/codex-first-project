const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('#sidebarOverlay');

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('visible', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeSidebar();
});

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((link) => link.classList.remove('active'));
    item.classList.add('active');
    if (window.innerWidth <= 900) closeSidebar();
  });
});
