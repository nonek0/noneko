const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-menu');
const links = document.querySelectorAll('#sidebar a');
const sections = document.querySelectorAll('.content-section');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    sections.forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('active');
    });
    if (target) {
      document.getElementById(target).classList.add('active');
      document.getElementById(target).classList.remove('hidden');
    }
    sidebar.classList.remove('open');
  });
});
