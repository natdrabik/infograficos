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

//1. surge o título
//1.1 My - fade
//1.2 reading - jump up
//1.3 2025 - jump?
//2. livros correm
//3. subtítulo

gsap.timeline()
.from('.intro p', {
    opacity: 0,
    duration: 1,
})
.from('.intro h1', {
    opacity: 0,
    y: 50,
    duration: 2, 
    ease:"elastic"
}, "-=.5")
.from('.intro h2', {
    opacity: 0,
    y: 50,
    duration: 2, 
    ease:"elastic"
}, "-=1")

// gsap.from('.livros-col--up', {
//     yPercent: -100,
//     scrub: 1,
//     scrollTrigger: {
//         trigger: '.intro',
//         start: 'top top', // when the top of the trigger hits the top of the viewport
//         end: 'bottom top',
//     }
// })
// gsap.from('.livros-col--down', {
//     yPercent: 100,
//     scrub: 1,
//     scrollTrigger: {
//         trigger: '.intro',
//         start: 'top top', // when the top of the trigger hits the top of the viewport
//         end: 'bottom top',
//     }
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