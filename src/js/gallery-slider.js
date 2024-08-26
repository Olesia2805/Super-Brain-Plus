import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
import '../css/layout/gallery-slider.css';

new SimpleLightbox('.gallery-list a', {
  showCounter: false,
  close: false,
}).refresh();
