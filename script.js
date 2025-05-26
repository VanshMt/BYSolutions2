// header scrolling effect
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('header').addClass('nav-show');
  
    }
    else {
      $('header').removeClass('nav-show');
    }
  
  })
  
  //hamburger
  const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
  
    hamburger.onclick = () => {
  
      navbar.classList.toggle("nav-active");
  
      //Animation links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
      });
      //hamburger animation
      hamburger.classList.toggle("toggle");
    }
  
  }
  
  window.onload = () => navSlide();

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to our About Us page!");
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulating form submission response
  document.getElementById('response').innerText = `Thank you, ${name}! Your message has been received.`;
  
  // Clear the form fields
  document.getElementById('contact-form').reset();
});
