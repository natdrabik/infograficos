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

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
    }
});
tl.from('.intro h1', {
    y: 10,
  opacity:0,
  duration: .5
})
// .from('#menu', {
//   y: 10,
//   opacity:0,
//   duration: .5
// }, "<")
.to('.livros-col--up', {
    y: 0,
})
.to('.livros-col--down', {
    y: 100,
})


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