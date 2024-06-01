
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}




window.onscroll=()=>{
    searchForm.classList.remove('active');
    if(window.scrollY>80){ 
    document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}


// Loading
window.onload=()=>{
    if(window.scrollY > 80){ 
    document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

function loader(){
  document.querySelector('.loading-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader,3500);
}








var swiper = new Swiper(".book-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction : false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        //spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        //spaceBetween: 50,
      },
      1440:{
        slidesPerView: 3,
      },
    },
  });

  var swipe1 = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 400,
    preventClicks: true,
    noSwiping:true,
    freeMode: false,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
      0: {
          slidesPerView: 1,

      },
      450: {
          slidesPerView: 2,

      },
      768: {
          slidesPerView: 3,

      },
      1024: {
          slidesPerView: 4,
      },
    },
});
