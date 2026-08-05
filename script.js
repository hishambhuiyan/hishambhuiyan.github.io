const words = [
    "Android App Developer",
    "Java Developer",
    "Firebase Expert",
    "Material Design",
    "UI / UX Enthusiast"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();



// Navbar Blur

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {

        nav.style.background = "rgba(5,8,22,.75)";
        nav.style.backdropFilter = "blur(25px)";
        nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(255,255,255,.05)";
        nav.style.boxShadow = "none";

    }

});



// Button Ripple

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});



// Fade Animation

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.15});

document.querySelectorAll(".hero-left,.hero-right").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});
