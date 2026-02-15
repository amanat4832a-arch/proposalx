/* Screen Navigation */
const screens=document.querySelectorAll(".screen");
const nextBtns=document.querySelectorAll(".next-btn");
let current=0;
nextBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");
  });
});

/* Typing Animation */
const typingText="Hey… there’s something I wanted to tell you 💕";
let i=0;
function type(){
  if(i<typingText.length){
    document.getElementById("typingText").innerHTML+=typingText[i];
    i++;
    setTimeout(type,40);
  }
}
type();

/* Choice Buttons Screen 2 */
const choiceResponse=document.getElementById("choice-response");
document.querySelectorAll(".choice-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.dataset.choice==="good") choiceResponse.textContent="Let's make it more happy 😊";
    else choiceResponse.textContent="Then try to make it good 😌";
    setTimeout(()=>{
      screens[1].classList.remove("active");
      screens[2].classList.add("active");
    },1200);
  });
});

/* Puzzle Screen 3 */
const puzzleBtns=document.querySelectorAll(".puzzle-btn");
const puzzleResponse=document.getElementById("puzzle-response");
let puzzleSequence=[];
const correctSequence=["1","3","2"];
puzzleBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    puzzleSequence.push(btn.dataset.num);
    if(puzzleSequence.join("")===correctSequence.join("")){
      puzzleResponse.textContent="Uhh huuu u did it cutie, very good 💖";
      setTimeout(()=>{
        screens[2].classList.remove("active");
        screens[3].classList.add("active");
      },1500);
    }
    if(puzzleSequence.length>=3 && puzzleSequence.join("")!==correctSequence.join("")){
      puzzleSequence=[];
      puzzleResponse.textContent="Try again 😅";
    }
  });
});

/* Stars & Shooting Star */
const starContainer=document.querySelector(".stars");
for(let i=0;i<100;i++){
  const s=document.createElement("div");
  s.className="star";
  s.style.top=Math.random()*100+"%";
  s.style.left=Math.random()*100+"%";
  s.style.opacity=Math.random();
  starContainer.appendChild(s);
  setInterval(()=>{ s.style.opacity=Math.random(); },Math.random()*2000+500);
}
setInterval(()=>{
  const shoot=document.querySelector(".shooting-star");
  shoot.style.top=Math.random()*40+"%";
  shoot.style.left="-10%";
  shoot.style.opacity=1;
  shoot.style.transition="all 1.5s linear";
  shoot.style.transform="translate(120vw,50vh)";
  setTimeout(()=>{
    shoot.style.opacity=0;
    shoot.style.transition="none";
    shoot.style.transform="none";
  },1500);
},6000);

/* Petals Screen 1 */
const petalContainer=document.querySelector(".petals");
for(let i=0;i<30;i++){
  const p=document.createElement("div");
  p.className="petal";
  p.style.left=Math.random()*100+"%";
  petalContainer.appendChild(p);
  animatePetal(p);
}
function animatePetal(p){
  let y=-10;
  let x=parseFloat(p.style.left);
  const speed=Math.random()*1+0.5;
  function fall(){
    y+=speed;
    x+=Math.sin(y/30);
    p.style.top=y+"px";
    p.style.left=x+"%";
    p.style.transform=`rotate(${y*3}deg)`;
    if(y<window.innerHeight) requestAnimationFrame(fall);
    else { y=-10; fall();}
  }
  fall();
}

/* Butterflies Screen 4 */
const butterflyContainer=document.querySelector(".butterflies");
for(let i=0;i<10;i++){
  const b=document.createElement("div");
  b.className="butterfly";
  b.style.left=Math.random()*100+"%";
  butterflyContainer.appendChild(b);
  animateButterfly(b);
}
function animateButterfly(b){
  let y=window.innerHeight;
  let x=Math.random()*window.innerWidth;
  function fly(){
    y-=1.2;
    x+=Math.sin(y/50)*2.5;
    b.style.top=y+"px";
    b.style.left=x+"px";
    if(y>-20) requestAnimationFrame(fly);
    else { y=window.innerHeight; fly();}
  }
  fly();
}

/* Hearts Screen 5 */
const heartContainer=document.querySelector(".hearts");
for(let i=0;i<20;i++){
  const h=document.createElement("div");
  h.className="heart";
  h.style.left=Math.random()*100+"%";
  heartContainer.appendChild(h);
  animateHeart(h);
}
function animateHeart(h){
  let y=window.innerHeight;
  function rise(){
    y-=1;
    h.style.top=y+"px";
    if(y>-20) requestAnimationFrame(rise);
    else { y=window.innerHeight; rise();}
  }
  rise();
}

/* YES Button Click */
document.querySelector(".yes-btn").addEventListener("click",()=>{
  document.getElementById("final-message").textContent="I knew it 😌💖";
  for(let i=0;i<80;i++){
    const piece=document.createElement("div");
    piece.className="confetti-piece";
    piece.style.left="50%";
    piece.style.top="50%";
    piece.style.background=`hsl(${Math.random()*360},100%,60%)`;
    document.querySelector(".confetti").appendChild(piece);
    const angle=Math.random()*2*Math.PI;
    const distance=Math.random()*200+50;
    const x=Math.cos(angle)*distance;
    const y=Math.sin(angle)*distance;
    piece.animate([{transform:"translate(0,0)"},{transform:`translate(${x}px,${y}px)`,opacity:0}],{duration:1500,easing:"ease-out"});
  }
});