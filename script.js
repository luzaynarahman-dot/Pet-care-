new Swiper('.card-wrapper', {
 loop: true,
 spaceBetween: 20,
 centeredSlides:false,
 
 
 pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
 breakpoints: {
     0: {
         slidesPerView: 1.1
     },
     768: {
         slidesPerView: 2
     },
     1024: {
         slidesPerView: 3
     },
     
 } 
  
});


 const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.themeIcon');
const themeText = themeToggle.querySelector('.themeText');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    // Dark mode active
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeText.textContent = 'Bright Mode';
  } else {
    // Light mode active
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeText.textContent = 'Dark Mode';
  }
});



const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.getElementById('closeMenu'); 
const sideMenu = document.getElementById('slideMenu');
const overlay = document.getElementById('overlay'); 

// 1. Menu Open/Toggle Function
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// 2. Close Icon-e click korle bondho hobe
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// 3. Overlay Close (Baire click korle bondho hobe)
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// 4. Auto Close (Menu item-e click korle bondho hobe)
const menuItems = document.querySelectorAll('.menu-item .item a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});



