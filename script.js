/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

    }, 2500);

});

/* ==========================================
   PASSWORD
========================================== */

const PASSWORD = "1408";

const passwordInput = document.getElementById("password");

function addNumber(number){

    passwordInput.value += number;

}

function checkPassword(){

    if(passwordInput.value === PASSWORD){

        document.getElementById("password-page").classList.add("hidden");

        document.getElementById("question-page").classList.remove("hidden");

    }

    else{

        alert("Wrong Password ❤️");

        passwordInput.value = "";

    }

}

/* ==========================================
   QUESTION PAGE
========================================== */

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseenter", () => {

    const x = Math.random()*260 - 130;
    const y = Math.random()*180 - 90;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});

yesBtn.addEventListener("click", () => {

    document.getElementById("question-page").classList.add("hidden");

    document.getElementById("birthday-page").classList.remove("hidden");

});

/* ==========================================
   CONTINUE BUTTON
========================================== */

document.getElementById("continue-btn").addEventListener("click", () => {

    document.getElementById("birthday-page").classList.add("hidden");

    document.getElementById("menu-page").classList.remove("hidden");

});

/* ==========================================
   MENU NAVIGATION
========================================== */

const menuPage = document.getElementById("menu-page");

const letterPage = document.getElementById("letter-page");
const photosPage = document.getElementById("photos-page");
const finalPage = document.getElementById("final-page");

const loveSong = document.getElementById("love-song");

loveSong.volume = 0.80;

document.getElementById("letter-card").addEventListener("click", () => {

    menuPage.classList.add("hidden");

    letterPage.classList.remove("hidden");

});

document.getElementById("photos-card").addEventListener("click", () => {

    menuPage.classList.add("hidden");

    photosPage.classList.remove("hidden");

});

document.getElementById("final-card").addEventListener("click", () => {

    menuPage.classList.add("hidden");

    finalPage.classList.remove("hidden");

});
/* ==========================================
   LETTER PAGE
========================================== */

const envelope = document.getElementById("open-envelope");
const letterPaper = document.querySelector(".letter-paper");
const letterText = document.getElementById("letter-text");

const letterMessage = `Happy Birthday, my love!

To my beautiful girl, today is all about celebrating you. You make my world brighter just by being in it, and I'm so grateful for every smile, every laugh, and every moment we share.

I hope this year brings you as much happiness as you've given me. You deserve all the love, joy, and success in the world.

I love you endlessly, and I'm so blessed to call you mine.

Enjoy your special day, my Queen. 👑

Forever yours ❤️`;

let typingIndex = 0;
let typingTimer = null;

function typeLetter() {

    if (typingIndex < letterMessage.length) {

        letterText.textContent += letterMessage.charAt(typingIndex);

        typingIndex++;

        typingTimer = setTimeout(typeLetter, 28);

    }

}

function startLetterTyping() {

    clearTimeout(typingTimer);

    typingIndex = 0;

    letterText.textContent = "";

    typeLetter();

}

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelope.classList.add("hide");

        letterPaper.classList.add("show");

        startLetterTyping();

    }, 700);

});
/* ==========================================
   BACK BUTTONS
========================================== */

document.getElementById("back-menu-1").addEventListener("click", () => {

    letterPaper.classList.remove("show");

    envelope.classList.remove("open");
    envelope.classList.remove("hide");

    menuPage.classList.remove("hidden");
    letterPage.classList.add("hidden");

    letterText.textContent = "";

    clearTimeout(typingTimer);

});

document.getElementById("back-menu-2").addEventListener("click", () => {

    photosPage.classList.add("hidden");

    menuPage.classList.remove("hidden");

});

document.getElementById("back-menu-3").addEventListener("click", () => {

    stopParticles();

    loveSong.pause();

    loveSong.currentTime = 0;

    finalPage.classList.add("hidden");

    menuPage.classList.remove("hidden");

});
/* ==========================================
   FINAL PAGE PARTICLES (PART A)
========================================== */

let heartInterval = null;
let flowerInterval = null;

const heartsContainer = document.querySelector(".floating-hearts");
const flowersContainer = document.querySelector(".falling-flowers");

function createHeart(){

    if(!heartsContainer) return;

    const heart = document.createElement("span");

    const hearts = ["❤️","💖","💕","💗","💝","💓"];

    heart.className = "heart-particle";

    heart.textContent =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
        (18 + Math.random()*24) + "px";

    heart.style.animationDuration =
        (8 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {

        heart.remove();

    });

}

function createFlower(){

    if(!flowersContainer) return;

    const flower = document.createElement("span");

    const flowers = ["🌸","🌺","🌼","💮"];

    flower.className = "flower-particle";

    flower.textContent =
        flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "%";

    flower.style.fontSize =
        (18 + Math.random()*18) + "px";

    flower.style.animationDuration =
        (9 + Math.random()*5) + "s";

    flowersContainer.appendChild(flower);

    flower.addEventListener("animationend", () => {

        flower.remove();

    });

}

function startParticles(){

    if(heartInterval || flowerInterval) return;

    heartInterval = setInterval(createHeart,700);

    flowerInterval = setInterval(createFlower,900);

}

function stopParticles(){

    clearInterval(heartInterval);

    clearInterval(flowerInterval);

    heartInterval = null;

    flowerInterval = null;

    if(heartsContainer){

        heartsContainer.innerHTML = "";

    }

    if(flowersContainer){

        flowersContainer.innerHTML = "";

    }

}
/* ==========================================
   LOVE SONG
========================================== */

const loveSong = new Audio("music/until-i-found-you.mp3");

loveSong.loop = true;
loveSong.volume = 0.8;

/* ==========================================
   FINAL PAGE EVENTS (PART B)
========================================== */

const finalCard = document.getElementById("final-card");

finalCard.addEventListener("click", () => {

    startParticles();

    loveSong.currentTime = 0;

    loveSong.play().catch(err => {

        console.log("Audio couldn't play automatically:", err);

    });

});

const hugButton = document.getElementById("hug-btn");

hugButton.addEventListener("click", () => {

    hugButton.textContent = "🥰 Hug Received!";

    for(let i=0;i<18;i++){

        createHeart();

    }

    setTimeout(()=>{

        hugButton.textContent="💖 Hug Me";

    },2000);

});
