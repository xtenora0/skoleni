// CLVC landing page — interactions

document.addEventListener('DOMContentLoaded', () => {
  // Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // AOS scroll animations
  if (window.AOS) {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header shadow on scroll
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 10px 30px -18px rgba(0,0,0,0.6)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Registration form (client-side only — no backend on GitHub Pages).
  // Replace this handler with a real integration (Formspree, Google Forms,
  // serverless function, etc.) before going live.
  const form = document.getElementById('registrationForm');
  const formNote = document.getElementById('formNote');

  if (form && formNote) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = data.get('fullname');

      formNote.textContent = `Děkujeme, ${name}! Vaše registrace byla zaznamenána, ozveme se vám co nejdříve.`;
      form.reset();
    });
  }
});
