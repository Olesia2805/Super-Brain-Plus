const Refs = {
  privasyRef: document.querySelector('a[data-id="privasy"]'),
  termsRef: document.querySelector('a[data-id="terms"]'),
};

const currentUrl = window.location.href;

if (currentUrl.includes('/privacy.html')) {
  Refs.privasyRef.classList.add('active');
}

if (currentUrl.includes('/terms.html')) {
  Refs.termsRef.classList.add('active');
}
