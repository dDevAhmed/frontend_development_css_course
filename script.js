document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  function changeActiveClass() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  changeActiveClass();
  window.addEventListener('scroll', changeActiveClass);
});


// Function to check scroll position and toggle 'active' class on back to top button
function checkScroll() {
  const backToTop = document.querySelector('.back-to-top');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

// Attach the function to the window's scroll event
window.addEventListener('scroll', checkScroll);
