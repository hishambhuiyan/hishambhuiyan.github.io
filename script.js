// =====================
// TYPING EFFECT
// =====================

new Typed("#typing", {
    strings: [
        "Android App Developer",
        "Java Developer",
        "Firebase Expert",
        "Material Design Lover"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1800,
    loop: true
});

// =====================
// PARTICLES
// =====================

tsParticles.load("particles-js", {
    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#4cc9ff"
        },

        links: {
            enable: true,
            distance: 140,
            color: "#4cc9ff",
            opacity: .15
        },

        move: {
            enable: true,
            speed: 1
        },

        opacity: {
            value: .4
        },

        size: {
            value: {
                min:1,
                max:4
            }
        }

    }

});

// =====================
// SCROLL ANIMATION
// =====================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(
".skill-card,.project-card,.github-card,.info-box,.about-image,.about-text"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =====================
// GITHUB API
// =====================

const USERNAME="hishambhuiyan";

fetch(`https://api.github.com/users/${USERNAME}`)

.then(res=>res.json())

.then(data=>{

document.getElementById("repoCount").innerText=data.public_repos;

document.getElementById("followers").innerText=data.followers;

document.getElementById("following").innerText=data.following;

});

// =====================
// COUNT ANIMATION
// =====================

function counter(id,target){

let count=0;

let speed=target/80;

let element=document.getElementById(id);

let interval=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(interval);

}

element.innerText=Math.floor(count);

},20);

}

// Example

// counter("repoCount",20);

// =====================
// ACTIVE MENU
// =====================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =====================
// NAVBAR BG
// =====================

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>40){

nav.style.background="rgba(6,8,22,.85)";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(5,8,22,.55)";

nav.style.boxShadow="none";

}

});

// =====================
// SCROLL TO TOP
// =====================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});
