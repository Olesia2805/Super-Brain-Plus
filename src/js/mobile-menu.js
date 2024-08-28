(() => {
  const Refs = {
    mobileMenuRef: document.querySelector('div[data-id="mobile-menu"]'),
    openMenuBtnRef: document.querySelector(
      'button[data-action="mobile-menu-open"]'
    ),
    closeMenuBtnRef: document.querySelector(
      'button[data-action="mobile-menu-close"]'
    ),
    navLinks: document.querySelectorAll('.mobile-nav-link'),
  };

  const toggleMenu = () => {
    const isMenuOpen =
      Refs.openMenuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    Refs.openMenuBtnRef.setAttribute('aria-expanded', !isMenuOpen);
    Refs.mobileMenuRef.classList.toggle('show-mobile-menu');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    const closeMenu = event => {
      if (event.code === 'Escape') {
        Refs.mobileMenuRef.classList.remove('show-mobile-menu');
        window.removeEventListener('keydown', closeMenu);
      }
    };

    const onBackdropClick = event => {
      if (event.target === event.currentTarget) {
        Refs.mobileMenuRef.classList.remove('show-mobile-menu');
      }
    };

    Refs.mobileMenuRef.addEventListener('click', onBackdropClick);
    Refs.navLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    window.addEventListener('keydown', closeMenu);
  };

  Refs.openMenuBtnRef.addEventListener('click', toggleMenu);
  Refs.closeMenuBtnRef.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    Refs.mobileMenuRef.classList.remove('show-mobile-menu');
    Refs.openMenuBtnRef.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
