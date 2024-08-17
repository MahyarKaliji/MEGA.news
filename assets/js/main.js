// popular posts section swiper
const popularSwiper = new Swiper(".swiper.popular-posts", {
  // Optional parameters
  loop: true,

    // autoplay: {
    //   delay: 3000,
    // },

  breakpoints: {
    350: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
    },
    1520: {
      slidesPerView: 3.5,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// new posts section swiper
const newPostSwiper = new Swiper(".swiper.new-posts", {
 
  loop: true,
 
  spaceBetween: 20,

  direction: 'horizontal',

  breakpoints: {
    // 450: {
    //   slidesPerView: 1.3
    // },
    // 520: {
    //   slidesPerView: 1.7,
    // },
    640: {
      direction: 'vertical',
      slidesPerView: 4,
    }
  },
})

// trendy posts section swiper
const trendySwiper = new Swiper(".swiper.trendy-posts", {
  // Optional parameters
  loop: true,

    // autoplay: {
    //   delay: 3000,
    // },

  breakpoints: {
    350: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
      // centeredSlides: true,
    },
    1520: {
      slidesPerView: 3.5,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// popular posts section swiper
const topSwiper = new Swiper(".swiper.top-posts", {
  // Optional parameters
  loop: true,

    // autoplay: {
    //   delay: 3000,
    // },

  breakpoints: {
    350: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
      // centeredSlides: true,
    },
    1520: {
      slidesPerView: 3.5,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


const topTagsSwiper = new Swiper(".swiper.top-tags", {
  // Optional parameters
  loop: true,

    // autoplay: {
    //   delay: 3000,
    // },

    spaceBetween: 24,
    slidesPerView: 7,
  // breakpoints: {
  //   350: {
  //     spaceBetween: 20,
  //     slidesPerView: 1,
  //   },
  //   640: {
  //     slidesPerView: 1.8,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 2.5,
  //   },
  //   1280: {
  //     slidesPerView: 3,
  //     // centeredSlides: true,
  //   },
  //   1520: {
  //     slidesPerView: 3.5,
  //   },
  //   1920: {
  //     slidesPerView: 4,
  //     spaceBetween: 24,
  //   },
  // },
});

