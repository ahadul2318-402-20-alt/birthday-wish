

function goToSurprise() {
window.location.href = "surprise.html";
}



function revealSurprise() {

    const content = document.getElementById("birthdayContent");
    const music = document.getElementById("birthdayMusic");

    if (!content) {
        return;
    }

    content.classList.remove("hidden-content");

    content.style.opacity = "0";
    content.style.transform = "translateY(50px)";

    setTimeout(function() {

        content.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        content.style.opacity = "1";
        content.style.transform = "translateY(0)";

    }, 50);

    if (music) {
        music.volume = 0.5;
        music.play().catch(function(error) {
            console.log("Music could not start:", error);
        });
    }

    setTimeout(function() {

        const messageSection =
            document.querySelector(".surprise-section");

        if (messageSection) {
            messageSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 700);
}


function openGift() {


const giftBox = document.querySelector(".gift-box");
const finalMessage = document.getElementById("finalMessage");

if (!giftBox || !finalMessage) {
    return;
}

if (giftBox.classList.contains("opened")) {
    return;
}

giftBox.classList.add("opened");

const giftLid =
    giftBox.querySelector(".gift-lid");

const giftBow =
    giftBox.querySelector(".gift-bow");

if (giftLid) {

    giftLid.style.transform =
        "translateY(-45px) rotate(-8deg)";

}

if (giftBow) {

    giftBow.style.transform =
        "translateX(-50%) translateY(-55px) scale(1.2)";

    giftBow.style.opacity = "0";

}

setTimeout(function() {

    finalMessage.classList.add("show");

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}, 700);


}


document.addEventListener("DOMContentLoaded", function() {

const finalMessage =
    document.getElementById("finalMessage");

if (finalMessage) {
    finalMessage.classList.remove("show");
}

createRunningBackgrounds();


});

/* =========================================
RUNNING BACKGROUND SYSTEM
========================================= */

function createRunningBackgrounds() {


createIntroParticles();

createMessageParticles();

createMemoryParticles();

createSpecialParticles();

createJourneyParticles();

createFinalParticles();


}



function createIntroParticles() {


const section =
    document.querySelector(".surprise-intro");

if (!section) {
    return;
}

createParticles(
    section,
    ["❤️", "💗", "💖", "✨"],
    "intro-particle",
    25
);


}

/* =========================================
2. MESSAGE PARTICLES
Falling hearts
========================================= */

function createMessageParticles() {


const section =
    document.querySelector(".surprise-section");

if (!section) {
    return;
}

createParticles(
    section,
    ["❤️", "💗", "💕", "🌸"],
    "message-particle",
    30
);


}



function createMemoryParticles() {


const section =
    document.querySelector(".memories-section");

if (!section) {
    return;
}

createParticles(
    section,
    ["✨", "✦", "✧", "⋆"],
    "memory-particle",
    35
);


}

/* =========================================
4. SPECIAL PARTICLES
Glowing bubbles
========================================= */

function createSpecialParticles() {

const section =
    document.querySelector(".special-section");

if (!section) {
    return;
}

createParticles(
    section,
    ["✨", "💫", "✦", "🌸"],
    "special-particle",
    30
);


}



function createJourneyParticles() {


const section =
    document.querySelector(".journey-section");

if (!section) {
    return;
}

createParticles(
    section,
    ["✦", "✧", "⋆", "✨"],
    "journey-particle",
    35
);


}



function createFinalParticles() {


const section =
    document.querySelector(".final-section");

if (!section) {
    return;
}

createParticles(
    section,
    ["✨", "💖", "❤️", "✦", "💫"],
    "final-particle",
    40
);


}



function createParticles(
section,
symbols,
className,
amount
) {


section.style.position = "relative";

const container =
    document.createElement("div");

container.className =
    className + "-container";

container.style.position = "absolute";
container.style.inset = "0";
container.style.overflow = "hidden";
container.style.pointerEvents = "none";
container.style.zIndex = "1";

section.insertBefore(
    container,
    section.firstChild
);


for (let i = 0; i < amount; i++) {

    const particle =
        document.createElement("span");

    particle.className = className;

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 110 + "%";

    particle.style.fontSize =
        (10 + Math.random() * 18) + "px";

    particle.style.opacity =
        0.2 + Math.random() * 0.6;

    particle.style.animationDuration =
        (6 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        -(Math.random() * 10) + "s";

    container.appendChild(particle);

}


}



const runningStyle =
document.createElement("style");


runningStyle.innerHTML = `

.intro-particle,
.message-particle,
.memory-particle,
.special-particle,
.journey-particle,
.final-particle {


position: absolute;

pointer-events: none;

user-select: none;


}

/* INTRO */

.intro-particle {


animation:
    introRunning
    9s
    linear
    infinite;


}

/* MESSAGE */

.message-particle {


animation:
    messageRunning
    10s
    linear
    infinite;


}

/* MEMORY */

.memory-particle {


animation:
    memoryRunning
    8s
    linear
    infinite;


}

/* SPECIAL */

.special-particle {


animation:
    specialRunning
    9s
    ease-in-out
    infinite;


}

/* JOURNEY */

.journey-particle {


animation:
    journeyRunning
    12s
    linear
    infinite;


}

/* FINAL */

.final-particle {


animation:
    finalRunning
    7s
    linear
    infinite;


}



@keyframes introRunning {

0% {
    transform:
        translateY(120px)
        rotate(0deg)
        scale(.7);
}

50% {
    transform:
        translateY(-40vh)
        translateX(30px)
        rotate(180deg)
        scale(1);
}

100% {
    transform:
        translateY(-110vh)
        translateX(-30px)
        rotate(360deg)
        scale(.6);
}


}

@keyframes messageRunning {


0% {
    transform:
        translateY(-120px)
        rotate(0deg);
}

100% {
    transform:
        translateY(110vh)
        rotate(360deg);
}


}

@keyframes memoryRunning {


0% {
    transform:
        translateY(110vh)
        translateX(-30px)
        scale(.5);
}

50% {
    transform:
        translateY(0)
        translateX(30px)
        scale(1.2);
}

100% {
    transform:
        translateY(-110vh)
        translateX(-20px)
        scale(.5);
}


}

@keyframes specialRunning {


0% {
    transform:
        translate(0, 100vh)
        scale(.5);
}

50% {
    transform:
        translate(40px, 0)
        scale(1.2);
}

100% {
    transform:
        translate(-40px, -110vh)
        scale(.6);
}


}

@keyframes journeyRunning {


0% {
    transform:
        translateY(110vh)
        translateX(0)
        rotate(0deg);
}

50% {
    transform:
        translateY(0)
        translateX(50px)
        rotate(180deg);
}

100% {
    transform:
        translateY(-110vh)
        translateX(-50px)
        rotate(360deg);
}


}

@keyframes finalRunning {


0% {
    transform:
        translateY(110vh)
        scale(.4)
        rotate(0deg);
}

50% {
    transform:
        translateY(0)
        scale(1.3)
        rotate(180deg);
}

100% {
    transform:
        translateY(-110vh)
        scale(.5)
        rotate(360deg);
}


}

`; 

document.head.appendChild(runningStyle);