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
.from('.livros-col--up', {
    yPercent: 200,
    scrub: 1,
    duration: 5
})
.from('.livros-col--down', {
    yPercent: -200,
    scrub: 1,
    duration: 5
}, "<")
.from('.intro p', {
    opacity: 0,
    duration: .5,
}, "<3")
.from('.intro h1', {
    opacity: 0,
    y: 50,
    duration: 1, 
    ease:"back"
}, "-=2")
.from('.intro h2', {
    opacity: 0,
    y: 50,
    duration: 1, 
    ease:"back"
}, "-=.5")





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