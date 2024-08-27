(() => {
  const Refs = {
    privasyRef: document.querySelector('a[data-id="privasy"]'),
    termsRef: document.querySelector('a[data-id="terms"]'),
    homeRefs: document.querySelectorAll('a[data-location="home"]'),
    faqRefs: document.querySelectorAll('a[data-location="faq"]'),
    galleryRefs: document.querySelectorAll('a[data-location="gallery"]'),
    benefitsRefs: document.querySelectorAll('a[data-location="benefits"]'),
    aboutRefs: document.querySelectorAll('a[data-location="about"]'),
    playRefs: document.querySelectorAll('a[data-location="play"]'),
    advantagesRefs: document.querySelectorAll('a[data-location="advantages"]'),
  };

  const currentUrl = window.location.href;

  if (currentUrl.includes('/privacy.html')) {
    Refs.privasyRef.classList.add('active');
  }

  if (currentUrl.includes('/terms.html')) {
    Refs.termsRef.classList.add('active');
  }

  const handleNavChange = event => {
    let currentHash = event.currentTarget.location.hash;

    switch (currentHash) {
      case '#faq':
        Refs.faqRefs[0].classList.add('active-nav-link');
        Refs.faqRefs[1].classList.add('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#gallery':
        Refs.galleryRefs[0].classList.add('active-nav-link');
        Refs.galleryRefs[1].classList.add('active-nav-link');

        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#benefits':
        Refs.benefitsRefs[0].classList.add('active-nav-link');
        Refs.benefitsRefs[1].classList.add('active-nav-link');

        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#about':
        Refs.aboutRefs[0].classList.add('active-nav-link');
        Refs.aboutRefs[1].classList.add('active-nav-link');

        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#play':
        Refs.playRefs[0].classList.add('active-nav-link');
        Refs.playRefs[1].classList.add('active-nav-link');

        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#advantages':
        Refs.advantagesRefs[0].classList.add('active-nav-link');
        Refs.advantagesRefs[1].classList.add('active-nav-link');

        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.homeRefs[0].classList.remove('active-nav-link');
        Refs.homeRefs[1].classList.remove('active-nav-link');
        break;

      case '#home':
        Refs.faqRefs[0].classList.remove('active-nav-link');
        Refs.faqRefs[1].classList.remove('active-nav-link');

        Refs.galleryRefs[0].classList.remove('active-nav-link');
        Refs.galleryRefs[1].classList.remove('active-nav-link');

        Refs.benefitsRefs[0].classList.remove('active-nav-link');
        Refs.benefitsRefs[1].classList.remove('active-nav-link');

        Refs.aboutRefs[0].classList.remove('active-nav-link');
        Refs.aboutRefs[1].classList.remove('active-nav-link');

        Refs.playRefs[0].classList.remove('active-nav-link');
        Refs.playRefs[1].classList.remove('active-nav-link');

        Refs.advantagesRefs[0].classList.remove('active-nav-link');
        Refs.advantagesRefs[1].classList.remove('active-nav-link');
        break;
    }
  };

  window.addEventListener('popstate', handleNavChange);
})();
