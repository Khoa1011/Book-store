
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

document.querySelectorAll('.btn, .btnLeanrMore').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định
  });
});


window.onscroll=()=>{
    searchForm.classList.remove('active');
    if(window.scrollY>80){ 
    document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=()=>{
    if(window.scrollY > 80){ 
    document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();

}

// Loading
function loader(){
  document.querySelector('.loading-container').classList.add('active');

}

function fadeOut(){
  setTimeout(loader,4000);
}



// $(document).ready(function(){
//   $('.dropdown').click(function(){
//     // Lấy submenu tương ứng với dropdown
//     let submenu = $(this).next('.dropdown-content');

//     // Kiểm tra nếu submenu đang hiển thị, thì ẩn nó đi
//     if (submenu.hasClass('show')) {
//       submenu.removeClass('show');
//     } else {
//       // Nếu submenu không hiển thị, thì hiển thị nó lên và ẩn tất cả các submenu khác
//       $('.dropdown-content').removeClass('show');
//       submenu.addClass('show');
//     }
//   });
// });



// let previewContainer = document.querySelector('.product-preview');
// let previewBox = previewContainer.querySelector('.preview .active');
// let closeBtns = previewContainer.querySelectorAll('#close-details-btn');


// let productContainer = document.querySelector('.product');
// let featuredSlider = productContainer.querySelector('.featured-slider');
// let prd = featuredSlider.querySelectorAll('.prd');
// // Xử lý khi nhấp vào nút đóng
// closeBtns.forEach(closeBtn => {
//   closeBtn.onclick = () => {
//     previewContainer.style.display='none';
//   };
// });


// // Xử lý khi nhấp vào nút "Learn more"
// prd.forEach(btn => {
//   btn.onclick = () => {
//     previewContainer.style.display ='flex';
//     previewBox.style.display='inline-block';
//     let name = btn.getAttribute('data-name');
//     previewBox.forEach(preview => {
//       let Target = preview.getAttribute('data-target');
//       if (name === Target) {
//         preview.classList.add('active');
        
//       } else {
//         preview.classList.remove('active'); // Ẩn các chi tiết sản phẩm khác nếu có
//       }
//     });
//   };
// });





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
