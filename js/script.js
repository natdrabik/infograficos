gsap.registerPlugin(ScrollTrigger);

var btMenu = document.getElementById('btMenu');

if(btMenu){

  var menu = document.getElementById('menu');
  var linksMenu = menu.querySelectorAll('a');

btMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('has-menu');
}

for (linkMenu of linksMenu) {
    linkMenu.addEventListener('click', closeMenu);
}

function closeMenu() {
    document.body.classList.remove('has-menu');
}
}

gsap.from('.intro h1', {
	scrollTrigger: '.intro h1', // start the animation when ".box" enters the viewport (once)
	y: 10,
  opacity:0,
  duration: .5
});

// gsap.to('.livros-col--up', {
//     scrollTrigger: '.intro',
//     yPercent: 100,
//     duration: .5
// })
// gsap.to('.livros-col--down', {
//     scrollTrigger: '.intro',
//     yPercent: -100,
//     duration: .5
// })


// var tlProjects = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#links",
//     }
// })
// .from('#links a', {
//   y: 10,
//   opacity:0,
//   duration: .5,
//   stagger: 0.2,
//   delay:.5
// })