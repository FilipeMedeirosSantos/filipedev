/* ══════════════════════════════════════════
   FILIPE DEV — article.js
   Lógica das páginas de artigo
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL SPY (sidebar nav) ── */
  const sections = document.querySelectorAll('.guide-section[id]');
  const navBtns  = document.querySelectorAll('.nav-btn[href^="#"]');

  if (sections.length && navBtns.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-60px 0px 0px 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ── CHECKLIST (artigo) ── */
  document.querySelectorAll('.check-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      const box = item.querySelector('.check-box');
      if (box) box.textContent = item.classList.contains('checked') ? '✓' : '';
    });
  });

  /* ── MINI CHECKLIST (sidebar) ── */
  document.querySelectorAll('.mini-check').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('done'));
  });

  /* ── READING PROGRESS BAR ── */
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── BREADCRUMB: VOLTAR COM HISTÓRICO ── */
  const backLinks = document.querySelectorAll('a.breadcrumb, a.back-btn');
  backLinks.forEach(link => {
    if (link.href && link.href !== '#') return; // link real, não interferir
    link.addEventListener('click', e => {
      if (document.referrer && document.referrer.includes(location.hostname)) {
        e.preventDefault();
        history.back();
      }
    });
  });

});
