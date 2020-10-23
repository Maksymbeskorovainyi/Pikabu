// Create a variable in which the "Menu" button is nested
let menuToggle = document.querySelector('#menu-toggle');
// Create a variable in wchich the "Menu" is nested
let menu = document.querySelector('.sidebar');

// Track the click on the button and run the function
menuToggle.addEventListener('click', function (event){
  // Canceling the default link
  event.preventDefault();
  // hang the class on the menu when we click on the button "menu"
  menu.classList.toggle('visible');
})