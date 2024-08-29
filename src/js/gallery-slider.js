import screen1 from '../images/screens/screen-1.jpg';
import screen2 from '../images/screens/screen-2.jpg';
import screen3 from '../images/screens/screen-3.jpg';
import screen4 from '../images/screens/screen-4.jpg';
import screen5 from '../images/screens/screen-5.jpg';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    id: '1',
    src: screen1,
  },
  {
    id: '2',
    src: screen2,
  },
  {
    id: '3',
    src: screen3,
  },
  {
    id: '4',
    src: screen4,
  },
  {
    id: '5',
    src: screen5,
  },
];

const createSlider = id => {
  const currentImage = images.filter(image => image.id === id);
  const currentImageSrc = currentImage[0].src;
  const filteredImages = images.filter(image => image.id !== id);

  return `
        <div class='slider-backdrop'> 
            <div class='slider-container'>
                <div class="swiper">
                    <ul class ="gallery-wrapper swiper-wrapper">
                        <li class='swiper-slide gallery-slide'>                        
                            <img class='slider-image' src='${currentImageSrc}'/>
                        </li>
                        ${filteredImages
                          .map(
                            image => `
                            <li class='swiper-slide'>
                                <img class='slider-image' src=${image.src}>
                            <li>
                        `
                          )
                          .join('')}                
                    </ul>      
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>   
                     <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>    
    `;
};

const screenItemRef = document.querySelector('.gallery-list');

const handleImageClick = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let currentImageId = event.target.attributes.data_id.value;
  const modal = createSlider(currentImageId);

  screenItemRef.insertAdjacentHTML('afterend', modal);

  new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });

  const slider = document.querySelector('.slider-backdrop');
  const isSliderOpen = slider.getAttribute('aria-expanded') === 'true' || false;

  const closeSlider = event => {
    if (event.code === 'Escape') {
      slider.remove();
      bodyScrollLock.enableBodyScroll(document.body);
      window.removeEventListener('keydown', closeSlider);
    }
  };

  const onBackdropClick = event => {
    console.log(event.target);
    if (event.target === event.currentTarget) {
      slider.remove();
      bodyScrollLock.enableBodyScroll(document.body);
    }
  };

  const scrollLockMethod = !isSliderOpen && 'disableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);

  slider.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', closeSlider);
};

screenItemRef.addEventListener('click', handleImageClick);
