(() => {
  const links = [...document.querySelectorAll('[data-section]')];
  const sections = links.map(link => document.getElementById(link.dataset.section));
  if (!links.length || sections.some(section => !section)) return;

  let scheduled = false;
  const updateNavigation = () => {
    const offset = document.querySelector('.site-header').offsetHeight + 72;
    let current = sections[0].id;
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= offset) current = section.id;
    });
    links.forEach(link => {
      if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  updateNavigation();
})();
