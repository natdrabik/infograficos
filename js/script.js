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

const intro = gsap
      .timeline()
.from('.livros-col--up', {
    yPercent: 200,
    scrub: 1,
    duration: 3
})
.from('.livros-col--down', {
    yPercent: -200,
    scrub: 1,
    duration: 3
}, "<")
.from('.intro p', {
    opacity: 0,
    // y: 50,
    duration: 1,
    // ease:"back"
}, "<1")
.from('.intro h1', {
    opacity: 0,
    // y: 50,
    duration: 1, 
    // ease:"back"
}, "<0.2")
.from('.intro h2', {
    opacity: 0,
    // y: 50,
    duration: 1, 
    // ease:"back"
}, "<0.2")


gsap.to('.livros-col--down', { 
      yPercent: 0,
      scrollTrigger: {
        trigger: '.resumo',
        start: 'top bottom', // when the top of the trigger hits the top of the viewport
        end: 'bottom bottom', // end after scrolling 500px beyond the start
        markers: true,
      }
    })