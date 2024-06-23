// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');

//     function changeActiveClass() {
//         let index = sections.length;

//         while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

//         navLinks.forEach((link) => link.classList.remove('active'));
//         navLinks[index].classList.add('active');
//     }

//     changeActiveClass();
//     window.addEventListener('scroll', changeActiveClass);

// });


let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)