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

  direction: "horizontal",

  breakpoints: {
    // 450: {
    //   slidesPerView: 1.3
    // },
    // 520: {
    //   slidesPerView: 1.7,
    // },
    640: {
      direction: "vertical",
      slidesPerView: 4,
    },
  },
});

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

// comments section swiper
const commentsSwiper = new Swiper(".swiper.new-comments", {
  // Optional parameters
  // loop: true,
  direction: "vertical",
  // autoplay: {
  //   delay: 3000,
  // },

  spaceBetween: 5,
  slidesPerView: 4,
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

// upload image section
"use strict";
function dragNdrop(event) {
  var fileName = URL.createObjectURL(event.target.files[0]);
  var preview = document.getElementById("preview");
  var previewImg = document.createElement("img");
  previewImg.setAttribute("src", fileName);
  preview.innerHTML = "";
  preview.appendChild(previewImg);
}
function drag() {
  document.getElementById("uploadFile").parentNode.className =
    "draging dragBox";
}
function drop() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}


// hamberger menu start
const menu = document.querySelector("#navMenu");
const menuUl = document.querySelector("#navMenu_ul");
// console.log(menu);
const ary = menu.classList;
const aryUl = menuUl.classList;
let i ;
// clsName = prompt('class name for search', '')




function hamburgerMenu() {
  const set = new Set(ary);
  if(set.has("menuStyle")) {
    console.log(`yes`);
    ary.remove("menuStyle");
    aryUl.remove("menuStyleUl");
    } else {
      console.log(`no`);
      ary.add("menuStyle");
      aryUl.add("menuStyleUl");
    }
  
}


// hamberger menu end