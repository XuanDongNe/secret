function initengahan() {
  kadoIn.style = "display:none"; ket.style = "display:none";
  Content.style = "opacity:1;margin-top:0";
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1.5);";
  
  // Add surprise confetti burst
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.8 },
      colors: ['#ff69b4', '#ff1493', '#ffc0cb']
    });
  }, 100);
}

async function mulainama() {
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = "display:inline-flex;"; setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 500);
}

function ftmuncul() { 
  // Show current sticker
  const stickers = [fotostiker, fotostiker1, fotostiker2, fotostiker3, fotostiker4];
  
  // Hide all stickers first
  stickers.forEach(sticker => {
    sticker.style.display = 'none';
  });
  
  // Show current sticker
  if (ftganti >= 0 && ftganti < stickers.length) {
    const currentSticker = stickers[ftganti];
    currentSticker.style = "display:inline-flex;opacity:1;transform:scale(1)";
    
    // Add glow effect and shake
    currentSticker.classList.add('glow');
    currentSticker.classList.add('shake');
    setTimeout(() => {
      currentSticker.classList.remove('shake');
    }, 500);
  }
  
  // Random sticker surprise
  if (Math.random() < 0.3) {
    setTimeout(() => {
      const surpriseStickers = [fotostiker6, fotostiker7, fotostiker8];
      const randomSticker = surpriseStickers[Math.floor(Math.random() * surpriseStickers.length)];
      randomSticker.style.display = 'inline-flex';
      randomSticker.style.position = 'fixed';
      randomSticker.style.top = Math.random() * 50 + '%';
      randomSticker.style.left = Math.random() * 50 + '%';
      randomSticker.style.zIndex = '999';
      randomSticker.classList.add('floating');
      
      setTimeout(() => {
        randomSticker.style.display = 'none';
      }, 3000);
    }, 1000);
  }
}
function fthilang() { 
  const stickers = [fotostiker, fotostiker1, fotostiker2, fotostiker3, fotostiker4];
  stickers.forEach(sticker => {
    sticker.style = "display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";
  });
}
function jjfoto() { fotostiker.style.animation = "rto .8s infinite alternate"; }

function bqmuncul() { bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0"; mulaiketik1(); fungsi = 1; }
function bqhilang() { wallpaper.style = "transform: scale(2);"; bodyblur.style = "opacity:.3"; bq.style = "position:relative;transition:all .7s ease;"; }
function kethalo() { new TypeIt("#halo", { strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function () { halo.innerHTML = vketikhalo; setTimeout(bqmuncul, 200); }, }).go(); }

function tombol() { 
  wallpaper.style = "transform: scale(1);"; 
  Tombol.style = "opacity:1;transform: scale(1);"; 
  fungsi = 1;
  
  // Add surprise effect
  Tombol.classList.add('glow');
  
  // Create floating text hints
  const hints = ['Click me! 😘', 'I’m waiting... 💕', 'Don’t be shy 😉'];
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  
  const hintElement = document.createElement('div');
  hintElement.innerHTML = randomHint;
  hintElement.style.position = 'fixed';
  hintElement.style.top = '70%';
  hintElement.style.left = '50%';
  hintElement.style.transform = 'translateX(-50%)';
  hintElement.style.color = '#ff69b4';
  hintElement.style.fontSize = '18px';
  hintElement.style.fontWeight = 'bold';
  hintElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
  hintElement.style.zIndex = '1000';
  hintElement.style.animation = 'floating 2s infinite';
  document.body.appendChild(hintElement);
  
  setTimeout(() => {
    hintElement.remove();
  }, 5000);
}
document.getElementById("By").onclick = function () { if (fungsi == 1) { pertanyaan(); } if (fungsi == 2) { menuju(); } }
async function menuju() { 
  // Ultimate celebration mode!
  if (window.enhancedEffects) {
    window.enhancedEffects.activateBirthdayMode();
    window.enhancedEffects.createEmojiRain(8000);
    window.enhancedEffects.screenFlash('#ffd700', 500);
  }
  
  // Multiple confetti bursts
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 360,
        origin: { 
          x: Math.random(),
          y: Math.random() * 0.8
        },
        colors: ['#ff69b4', '#ffd700', '#ff1493', '#00ff00', '#1e90ff', '#ff6347']
      });
    }, i * 300);
  }
  
  await swals.fire({
    title: 'Uci! 🎉',
    text: 'Nhớ liên hệ anhh nhaaa !!',
    icon: 'success',
    background: 'linear-gradient(45deg, #ff69b4, #ffd700)',
    color: 'white',
    confirmButtonColor: '#ff1493'
  });
  
  window.location = "https://m.me/xuanndongg"; 
}

vketik1 = kalimat.innerHTML; kalimat.innerHTML = "";
function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
    afterComplete: function () {
      aktiopsL();
    },
  }).go();
}

opsLclick = 0; opsLcheck = 0; defopsL = opsL.innerHTML;
document.getElementById("bq").onclick = function () {
  if (opsLclick == 1) {
    if (opsLcheck == 1) { setTimeout(aktipesan1, 400); }
    if (opsLcheck == 2) { mulaiketik3(); }
    if (opsLcheck == 3) { mulaiketik4(); }
    if (opsLcheck == 4) { mulaiketik5(); }
    if (opsLcheck == 5) { kethalo2(); }
    otomatis(); opsL.style.opacity = "0"; opsLclick = 0;
  }
}
function aktiopsL() { opsL.innerHTML = defopsL; opsL.style.opacity = ".8"; opsLclick = 1; opsLcheck += 1; }
function gantiopsL() { opsL.innerHTML = "[ Klik beberapa LOVE-nya ]"; opsL.style.opacity = ".8"; }
function otomatis() { kalimat.style = "opacity:0"; setTimeout(otolanj, 400); }
function otolanj() { kalimat.style = "opacity:1"; }

function aktipesan1() { kalimat.innerHTML = pesan1.innerHTML; kolombaru.style = "position:relative;opacity:1;transform:scale(1);"; }
vketik2 = pesan2.innerHTML; vketik3 = pesan3.innerHTML;
function aktipesan2() {
  wallpaper.style = "transform: scale(1.5);";
  kolombaru.style = ""; kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: ["" + vketik2, "" + vketik3], startDelay: 20, speed: 30, cursor: true, deleteSpeed: 30, breakLines: false, waitUntilVisible: true, lifelike: true,
    afterComplete: function () {
      kalimat.innerHTML = vketik3; setTimeout(aktipesan4, 1000);
    },
  }).go();
}
vketik4 = pesan4.innerHTML; pesan4.innerHTML = "";
function aktipesan4() {
  wallpaper.style = "transform: scale(1);";
  fthilang(); ftganti = 2; setTimeout(ftmuncul, 300);
  new TypeIt("#pesan4", {
    strings: ["" + vketik4], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
    afterComplete: function () {
      pesan4.innerHTML = vketik4; setTimeout(tombol, 400);
    },
  }).go();
}
// vketik5 = pesan5.innerHTML; pesan5.innerHTML = "";
// function aktipesan5() {
//   wallpaper.style = "transform: scale(1.5);";
//   fthilang(); ftganti = 3; setTimeout(ftmuncul, 300);
//   new TypeIt("#pesan5", {
//     strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
//     afterComplete: function () {
//       pesan5.innerHTML = vketik5 + " ><"; setTimeout(aktipesan6, 700);
//     },
//   }).go();
// }
// vketik6 = pesan6.innerHTML; pesan6.innerHTML = "";
// function aktipesan6() {
//   wallpaper.style = "transform: scale(1);";
//   fthilang(); ftganti = 4; setTimeout(ftmuncul, 300);
//   new TypeIt("#pesan6", {
//     strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
//     afterComplete: function () {
//       pesan6.innerHTML = vketik6; setTimeout(tombol, 400);
//     },
//   }).go();
// }

var slov = 0;

function handleInteraction(element) {
  if (!element.handled) {
    // Create burst effect at click position
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 20,
      spread: 60,
      origin: { x: x, y: y },
      colors: ['#ff1493', '#ff69b4']
    });
    
    // Add shake effect
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
    
    element.style.opacity = "0";
    element.style.transform = "scale(0) rotate(360deg)";
    element.style.transition = "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    
    slov += 1;
    element.handled = true;
    checkslov();
    
    // Create floating +1 effect
    const plusOne = document.createElement('div');
    plusOne.innerHTML = '+1 💖';
    plusOne.style.position = 'fixed';
    plusOne.style.left = rect.left + 'px';
    plusOne.style.top = rect.top + 'px';
    plusOne.style.color = '#ff1493';
    plusOne.style.fontSize = '20px';
    plusOne.style.fontWeight = 'bold';
    plusOne.style.zIndex = '1000';
    plusOne.style.pointerEvents = 'none';
    plusOne.style.animation = 'float 2s ease-out forwards';
    document.body.appendChild(plusOne);
    
    setTimeout(() => plusOne.remove(), 2000);
  }
}

document.getElementById("lv1").addEventListener("touchstart", function() {
  handleInteraction(this);
});

document.getElementById("lv1").addEventListener("click", function() {
  handleInteraction(this);
});

document.getElementById("lv2").addEventListener("touchstart", function() {
  handleInteraction(this);
});

document.getElementById("lv2").addEventListener("click", function() {
  handleInteraction(this);
});

document.getElementById("lv3").addEventListener("touchstart", function() {
  handleInteraction(this);
});

document.getElementById("lv3").addEventListener("click", function() {
  handleInteraction(this);
});

document.getElementById("lv4").addEventListener("touchstart", function() {
  handleInteraction(this);
});

document.getElementById("lv4").addEventListener("click", function() {
  handleInteraction(this);
});



function checkslov() { 
  if (slov == 4) { 
    // Major celebration for completing all hearts!
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 180,
          origin: { y: 0.4 + (i * 0.1) },
          colors: ['#ff1493', '#ff69b4', '#ffc0cb', '#ffb6c1']
        });
      }, i * 300);
    }
    
    // Screen flash effect
    document.body.style.background = 'radial-gradient(circle, #ff69b4, #ff1493)';
    setTimeout(() => {
      document.body.style.background = '';
    }, 500);
    
    kolombaru.style = "position:relative;transform:scale(1)"; 
    fthilang(); 
    ftganti = 1; 
    setTimeout(ftmuncul, 300); 
    otomatis(); 
    setTimeout(aktipesan2, 400);
    
    // Create celebration text
    const celebrationText = document.createElement('div');
    celebrationText.innerHTML = '🎉 AMAZING! 🎉';
    celebrationText.style.position = 'fixed';
    celebrationText.style.top = '30%';
    celebrationText.style.left = '50%';
    celebrationText.style.transform = 'translate(-50%, -50%) scale(0)';
    celebrationText.style.fontSize = '3em';
    celebrationText.style.fontWeight = 'bold';
    celebrationText.style.color = '#ff1493';
    celebrationText.style.textShadow = '3px 3px 6px rgba(0,0,0,0.5)';
    celebrationText.style.zIndex = '2000';
    celebrationText.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    document.body.appendChild(celebrationText);
    
    setTimeout(() => {
      celebrationText.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    setTimeout(() => {
      celebrationText.style.transform = 'translate(-50%, -50%) scale(0)';
      setTimeout(() => celebrationText.remove(), 500);
    }, 2000);
  } 
}