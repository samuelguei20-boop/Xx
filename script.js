// SPLASH 2S
setTimeout(()=>{
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('welcome').classList.remove('hidden');
},2000);

document.getElementById('startBtn').onclick=()=>{
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('lang').classList.remove('hidden');
};

// LANGUE
document.querySelectorAll('.langBtn').forEach(btn=>{
  btn.onclick=()=>{
    document.getElementById('lang').classList.add('hidden');
    document.getElementById('rgpd').classList.remove('hidden');
  }
});

// RGPD
document.getElementById('acceptRgpd').onclick=()=>{
  document.getElementById('rgpd').classList.add('hidden');
  document.getElementById('auth').classList.remove('hidden');
};
document.getElementById('refuseRgpd').onclick=()=>{
  showPopup('Inscription annulée');
};

// TABS AUTH
document.getElementById('tabLogin').onclick=()=>{
  document.getElementById('tabLogin').classList.add('active');
  document.getElementById('tabRegister').classList.remove('active');
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
};
document.getElementById('tabRegister').onclick=()=>{
  document.getElementById('tabRegister').classList.add('active');
  document.getElementById('tabLogin').classList.remove('active');
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
};

// FAKE LOGIN/REGISTER
document.getElementById('loginForm').onsubmit=e=>{
  e.preventDefault();
  goApp();
};
document.getElementById('registerForm').onsubmit=e=>{
  e.preventDefault();
  goApp();
};

function goApp(){
  document.getElementById('auth').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
}

// NAVIGATION
document.querySelectorAll('.navBtn').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active-page'));
    document.querySelectorAll('.navBtn').forEach(b=>b.classList.remove('active'));
    document.getElementById(btn.dataset.page).classList.add('active-page');
    btn.classList.add('active');
  }
});

// POPUP
function showPopup(msg){
  const p=document.getElementById('popup');
  p.innerText=msg;
  p.classList.add('show');
  setTimeout(()=>p.classList.remove('show'),2000);
}

// MISSION DETAIL
document.querySelectorAll('.missionBtn').forEach(btn=>{
  btn.onclick=()=>{
    document.getElementById('missionDetail').classList.remove('hidden');
    document.getElementById('mName').innerText=btn.dataset.mission.toUpperCase();
  }
});

// COMPTEUR 24H
let countdown=86400;
setInterval(()=>{
  if(countdown>0){
    countdown--;
    let h=Math.floor(countdown/3600);
    let m=Math.floor((countdown%3600)/60);
    let s=countdown%60;
    document.getElementById('countdown').innerText=
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
},1000);

// XP BAR
let xp=0;
function updateXP(val){
  xp+=val;
  document.getElementById('xpText').innerText=`${xp}/10000`;
  document.getElementById('barFill').style.width=Math.min((xp/10000)*100,100)+'%';
}

// BOUTONS FAKE
document.getElementById('transferBtn').onclick=()=>showPopup('Transfert effectué');
document.getElementById('saveBtn').onclick=()=>showPopup('Enregistré');
document.getElementById('verifyBtn').onclick=()=>showPopup('Demande envoyée');
document.getElementById('locBtn').onclick=()=>showPopup('Localisation autorisée');
document.getElementById('startMission').onclick=()=>{showPopup('Mission démarrée');updateXP(1000);};
