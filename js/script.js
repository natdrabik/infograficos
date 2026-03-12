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
        trigger: "#intro",
    }
});
tl.from('#intro h1', {
    y: 10,
  opacity:0,
  duration: .5
})
.from('#menu', {
  y: 10,
  opacity:0,
  duration: .5
}, "<")
.to('#intro h1 .h1a', {
    opacity:0,
    duration: .5,
    delay:1
})
.from('#intro h1 .h1b', {
  x: 0,
  duration: 1
}, "<")
.from('#intro p', {
  y: 10,
  opacity:0,
  duration: .5
}, "-=2")

var tlSkills = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
    }
})
tlSkills.from('#about h2', {
    y: 10,
  opacity:0,
  duration: .5,
  delay:.5
})
tlSkills.from('#about img', {
    y: 10,
  opacity:0,
  duration: .5,
})
.from('#about p', {
  y: 10,
  opacity:0,
  duration: .5,
  stagger: 0.2
})

var tlSkills = gsap.timeline({
    scrollTrigger: {
        trigger: "#skills",
    }
})
tlSkills.from('#skills h2', {
    y: 10,
  opacity:0,
  duration: .5,
  delay:.5
})
.from('#skills li', {
  y: 10,
  opacity:0,
  duration: .5,
  stagger: 0.2
})

var tlProjects = gsap.timeline({
    scrollTrigger: {
        trigger: "#projects",
    }
})
tlProjects.from('#projects h2', {
    y: 10,
  opacity:0,
  duration: .5,
  delay:.5
})
.from('#projects article', {
  y: 10,
  opacity:0,
  duration: .5,
  stagger: 0.2
})

var tlProjects = gsap.timeline({
    scrollTrigger: {
        trigger: "#links",
    }
})
.from('#links a', {
  y: 10,
  opacity:0,
  duration: .5,
  stagger: 0.2,
  delay:.5
})