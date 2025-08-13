// AOS JS
AOS.init();

//Hero Swiper Slider

var swiper = new Swiper('.heroSwiper',{
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    // autoplay:{
    //    delay: 2000,
    // },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

// Show hero Element

const swiperNextBtn = document.querySelectorAll('.swiper-button-next');
const swiperPrevBtn = document.querySelectorAll('.swiper-button-prev');
const heroShape1 =document.querySelector('.hero-shape-1');
const heroShape2 =document.querySelector('.hero-shape-2');

function ResetAnim(heroElement){
    heroElement.classList.add('show-element');
    // remove animation
    setTimeout(() =>{
        heroElement.classList.remove('show-element');
    }, 2800); // animation duration

}

swiperNextBtn.forEach(nextBtn =>{
    nextBtn.addEventListener('click',() =>{
        ResetAnim(heroShape1);
        ResetAnim(heroShape2);
    });
})

swiperPrevBtn.forEach(prevBtn =>{
    prevBtn.addEventListener('click',() =>{
        ResetAnim(heroShape1);
        ResetAnim(heroShape2);
    });
})

//Menu Swiper Slider

var swiper = new Swiper('.menuSwiper',{
    slidesPerView: 6,
    spaceBetween: 30,
    speed: 1000,
    autoplay:{
        delay: 2000,
    },
    breakpoints:{
        1400:{slidesPerView: 6,},
        991:{slidesPerView: 4,},
        767:{slidesPerView: 4,},
        575:{slidesPerView: 3.2,},
        0:{slidesPerView: 3.2,},
    }
});

// active menu box

 const menuBoxs = document.querySelectorAll('.slide-menu-box');
 const menuBoxImgs = document.querySelectorAll('.slide-menu-img');


 menuBoxs.forEach((menuBox, index) =>{
     menuBox.addEventListener('click', () =>{
         menuBoxImgs.forEach(img => img.classList.remove('active-menu-box'));
          menuBoxImgs[index].classList.add('active-menu-box');
     });
})

// Our Disher Swiper Slider

var swiper = new Swiper('.disheSwiper',{
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay:{
        delay: 2000,
    },

    breakpoints:{
        1400:{slidesPerView: 3,},
        1000:{slidesPerView: 3,},
        991:{slidesPerView: 2,},
        767:{slidesPerView: 1,},
        575:{slidesPerView: 1,},
        0:{slidesPerView: 1,},
    }
});

//All Dishes Swiper Show & Hide

// dishes Menu

const burgerMenu = document.querySelector('.burger-menu');
const pizzaMenu = document.querySelector('.pizza-menu');
const sandwichMenu = document.querySelector('.sandwich-menu');
const shakeMenu = document.querySelector('.shake-menu');
const iceCreamMenu = document.querySelector('.ice-cream-menu');
const dessertMenu = document.querySelector('.dessert-menu');

// Dishes Swiper Slides

const burgerSwiper = document.querySelector('.burger-swiper');
const pizzaSwiper = document.querySelector('.pizza-swiper');
const sandwichSwiper = document.querySelector('.sandwich-swiper');
const shakeSwiper = document.querySelector('.shake-swiper');
const iceCreamSwiper = document.querySelector('.ice-cream-swiper');
const dessertSwiper = document.querySelector('.dessert-swiper');

burgerMenu.addEventListener('click', () =>{
    burgerSwiper.classList.add('show-dishes')
    burgerSwiper.style.display = 'block';
    pizzaSwiper.style.display = 'none';
    sandwichSwiper.style.display = 'none';
    shakeSwiper.style.display = 'none';
    iceCreamSwiper.style.display = 'none';
    dessertSwiper.style.display = 'none';

});

pizzaMenu.addEventListener('click', () =>{
    pizzaSwiper.classList.add('show-dishes')
    pizzaSwiper.style.display = 'block';
    burgerSwiper.style.display = 'none';
    sandwichSwiper.style.display = 'none';
    shakeSwiper.style.display = 'none';
    iceCreamSwiper.style.display = 'none';
    dessertSwiper.style.display = 'none';

});


sandwichMenu.addEventListener('click', () =>{
    sandwichSwiper.classList.add('show-dishes')
    sandwichSwiper.style.display = 'block';
    burgerSwiper.style.display = 'none';
    pizzaSwiper.style.display = 'none';
    shakeSwiper.style.display = 'none';
    iceCreamSwiper.style.display = 'none';
    dessertSwiper.style.display = 'none';

});

shakeMenu.addEventListener('click', () =>{
    shakeSwiper.classList.add('show-dishes')
    shakeSwiper.style.display = 'block';
    burgerSwiper.style.display = 'none';
    pizzaSwiper.style.display = 'none';
    sandwichSwiper.style.display = 'none';
    iceCreamSwiper.style.display = 'none';
    dessertSwiper.style.display = 'none';

});

iceCreamMenu.addEventListener('click', () =>{
    iceCreamSwiper.classList.add('show-dishes')
    iceCreamSwiper.style.display = 'block';
    burgerSwiper.style.display = 'none';
    pizzaSwiper.style.display = 'none';
    sandwichSwiper.style.display = 'none';
    shakeSwiper.style.display = 'none';
    dessertSwiper.style.display = 'none';

});

dessertMenu.addEventListener('click', () =>{
    dessertSwiper.classList.add('show-dishes')
    dessertSwiper.style.display = 'block';
    burgerSwiper.style.display = 'none';
    pizzaSwiper.style.display = 'none';
    sandwichSwiper.style.display = 'none';
    shakeSwiper.style.display = 'none';
    iceCreamSwiper.style.display = 'none';

});


// Review Swiper Slider

var swiper = new Swiper('.reviewSwiper',{
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay:{
        delay: 2000,
    },

    breakpoints:{
        1400:{slidesPerView: 3,},
        1000:{slidesPerView: 3,},
        991:{slidesPerView: 2,},
        767:{slidesPerView: 1,},
        575:{slidesPerView: 1,},
        0:{slidesPerView: 1,},
    }
});