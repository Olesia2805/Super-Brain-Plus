import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    id: '1',
    src: '../images/screens/screen-1.jpg',
  },
  {
    id: '2',
    src: '../images/screens/screen-2.jpg',
  },
  {
    id: '3',
    src: '../images/screens/screen-3.jpg',
  },
  {
    id: '4',
    src: '../images/screens/screen-4.jpg',
  },
  {
    id: '5',
    src: '../images/screens/screen-5.jpg',
  },
];

const createSlider = id => {
  const filteredImages = images.filter(image => image.id !== id);

  return `
        <div class='slider-backdrop'> 
            <div class='slider-container'>
                <div class="swiper">
                    <ul class ="gallery-wrapper swiper-wrapper">
                        <li class='swiper-slide gallery-slide'>
                            <img class='slider-image' src='../images/screens/screen-${id}.jpg'/>
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

  const closeSlider = event => {
    if (event.code === 'Escape') {
      slider.remove();
      window.removeEventListener('keydown', closeSlider);
    }
  };

  window.addEventListener('keydown', closeSlider);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      slider.remove();
    }
  };

  slider.addEventListener('click', onBackdropClick);
};

screenItemRef.addEventListener('click', handleImageClick);
