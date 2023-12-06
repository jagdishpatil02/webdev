console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const container = select('.container');
let masterTL = gsap.timeline( { repeat: -1, repeatDelay: 3, delay: 0.5 });
let sparks = gsap.utils.toArray('.spark');

function animateLogo() {
    
    gsap.set(sparks, {
        transformOrigin: 'center center',
        scale: 0.25,
        opacity: 0
    })
    
    tl = gsap.timeline({ delay: 1 });
    tl.from('.disney', {
        opacity: 0,
        ease: 'none',
        duration: 2
    })
    .fromTo('.mask-arc', {
        drawSVG: "100% 100%",
        
    }, {
        drawSVG: "100%",
        duration: 1,
        ease: 'power2.in'
    }, 0.5)
    .from('.glow', {
        scale: 0,
        duration: 0.7,
        ease: 'sine.in'
    }, 0.5)
    .from('.glow', {
        motionPath: {
            path: ".glow-path",
            align: ".glow-path",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        duration: 1,
        ease: 'power2.in'
    }, 0.5)
    .set('.glow', {
        opacity: 0
    }, "-=0.5")
    .from('.plus', {
        scale: 0,
        duration: 0.7,
        ease: 'elastic(1, 0.7)',
        transformOrigin: "center center"
    }, "-=0.55")
    .fromTo('.plus-glow', {
        scale: 0,
        transformOrigin: "center center",
    },{
        scale: 3.0,
        opacity: 1,
        ease: 'sine.inOut',
        duration: 0.1
    }, "-=0.70")
    .to('.plus-glow', {
        // scale: 0,
        opacity: 0,
        duration: 1.3,
        ease: 'power2'
    }, "-=0.7")
    
    return tl;
}

function sparkle() {
    
    stl = gsap.timeline();
    
    sparks.forEach((target, i ) => {

        let tl = gsap.timeline();

        tl.set(target, {
            opacity: 1
        })
        .to(target, {
            duration: 1.5,
            physics2D: {
                velocity: 'random(100, 400)',
                angle:'random(360, 0)',
                gravity: 100
            },
            scale: 0,
            opacity: 0,
            ease: 'sine'
        })
        
        stl.add(tl, 0);
    })
    
    return stl;
}
                   

function init() {
    gsap.set(container, { autoAlpha: 1 });
    masterTL.add(animateLogo()).add(sparkle(), '-=1.30');
}

window.onload = () => {
	init();
    // GSDevTools.create();
};