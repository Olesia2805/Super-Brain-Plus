document.addEventListener('DOMContentLoaded', function () {
  const ItemsTopRow = document.querySelectorAll('.top-row .animate-item');
  const ItemsBottomRow = document.querySelectorAll('.bottom-row .animate-item');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function handleScroll() {
    ItemsTopRow.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('slide-in-top');
      }
    });

    ItemsBottomRow.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('slide-in-bottom');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
