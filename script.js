AOS.init({
  duration:1200,
  once:true
});

const btn = document.getElementById("open");
const cover = document.querySelector(".cover");
const content = document.getElementById("content");
const music = document.getElementById("music");

  btn.onclick = function(){
    cover.style.display = "none";
    content.style.display = "block";
    document.body.style.overflow = "auto";
    music.play();

    window.scrollTo({
    top:0,
    behavior:"smooth"
    });
    
 

};

// ================= SAKURA ANIMATION =================

const sakuraContainer = document.querySelector(".sakura-container");

function createSakura(){

  const sakura = document.createElement("div");

  sakura.classList.add("sakura");

  sakura.style.left = Math.random()*100 + "vw";

  sakura.style.animationDuration = (6 + Math.random()*6) + "s";

  sakura.style.opacity = Math.random();

  sakuraContainer.appendChild(sakura);

  setTimeout(()=>{
    sakura.remove();
  },12000);

}

setInterval(createSakura,700);


// ================= COUNTDOWN =================

const weddingDate = new Date("Apr 3, 2026 10:00:00").getTime();

setInterval(function(){

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);

// ================= LIGHTBOX =================

document.addEventListener("DOMContentLoaded", function(){

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {

  img.addEventListener("click", function(){

    lightbox.style.display = "flex";
    lightboxImg.src = this.src;

  });

});

closeBtn.addEventListener("click", function(){

  lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

  if(e.target === lightbox){
    lightbox.style.display = "none";
  }

});

});

// ================= RSVP =================

const form = document.getElementById("formucapan");

form.addEventListener("submit", async function(e){

e.preventDefault();

const nama = document.getElementById("nama").value;
const pesan = document.getElementById("ucapan").value;

await fetch("/.netlify/functions/saveucapan", {
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({nama,pesan})
});

alert("Ucapan berhasil dikirim");

form.reset();

});

// ================= NAMA TAMU =================

const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get("to");

if(namaTamu){

document.getElementById("guest-name").textContent =
decodeURIComponent(namaTamu);

}

// ================= COPY REKENING =================

function copyRekening(){

const rekening = document.getElementById("rekening").innerText;

navigator.clipboard.writeText(rekening);

alert("Nomor rekening berhasil disalin");

}

// ================= GOLD SPARKLE =================

const sparkleContainer = document.querySelector(".sparkle-container");

function createSparkle(){

const sparkle = document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.style.left = Math.random()*100+"vw";

sparkle.style.animationDuration = (4 + Math.random()*4)+"s";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},8000);

}

setInterval(createSparkle,500);
