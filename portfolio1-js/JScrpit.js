let menuIcon = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     menuIcon.classList.toggle('fa-xmark');
     nevbar.classList.toggle('active');
}
// ////////////////////////////////////////
let sections = document.querySelector('section');
let navLinks = document.querySelector('header new a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });
        };
    });
    // /////////////////////////
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /////////////////////////////////////////
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
//////////////////////////////////////////////////
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,

 });
ScrollReveal().reveal('.home-content, #abc', { origin : 'top' });
ScrollReveal().reveal('.home-img, .servicer-box, .portfolio-box, .contact form', { origin : 'button' });
ScrollReveal().reveal('.home-content h1, .col', { origin : 'left' });
ScrollReveal().reveal('.home-content p, .skill', { origin : 'right' });

//////////////////////////
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer','Android Development','Cloud Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});

























