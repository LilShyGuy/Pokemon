console.log("pika")
var startbutton=document.querySelector('#startknop')
var intro=document.querySelector('#intro')
var challenge = document.querySelector('#challenge')
var battlestart = document.querySelector('#battlestart')
var back = document.querySelector('#back')
var chosegya =document.querySelector('#gyarados')
var choseswmprt = document.querySelector('#swampert')
var choose = document.querySelector('#choose')
var naam=document.querySelector('#naam')
var swampie = document.querySelector('#swampie')
var gyara= document.querySelector('#gyara')
var attacks = document.querySelector('#attacks')
var tackle = document.querySelector('#tackle')
var attacked = document.querySelector('#attacked')
var earthquake = document.querySelector('#earthquake')
var watergun = document.querySelector('#watergun')
var randomattack = document.querySelector('#emptyattack')
var Voltorb = document.querySelector('#enemy')
var volhp = document.querySelector('#health')
var hp = document.querySelector('#healthy')
var  audio = new Audio("img/audio.mp3")
var won = document.querySelector('#won')
var lost = document.querySelector('#lost')
var suicide = document.querySelector('#sd')
var pp = document.querySelector('#pp')
var  audioo = new Audio("img/pokemon.mp3")
var myAudio = document.getElementById("myAudio");
var retry =document.getElementById('retry')
var Letry =document.getElementById('Letry')
// naam geven aan alle html elementen zodat je het hier kan gebruiken

function chllng(){
  battlestart.classList.toggle('hidden')
  back.classList.toggle('hidden')
}
// als deze functie word geroepen gaat het battlestart hidden dus krijg je die niet meer te zien en komt back te voorschijn. 


function undoatt(){
  gyara.classList.toggle('attackingmo')
  swampie.classList.toggle('attackingmo')
}
// bij deze functie gaat de class attackingmo uit dit zorgt ervoor dat er na een aanval weer terug gaat naar zijn plek


function uwin(){
  back.classList.toggle('hidden')
  won.classList.toggle('hidden')
}
// hier komt de achtergrond te zien van als je hebt gewonnen en gaat de battle scherm weg


startbutton.addEventListener('click', function () {
  intro.classList.toggle('hidden');
  battlestart.classList.toggle('hidden')
  console.log("startbutton werkt")
  setTimeout (chllng, 3000);
  myAudio.pause();
})
// intro gaat weg battlestart komt tevoorschijn en er komt startbutton werkt in je console te staan na 3 sec komt chllng en word de audio gepauzeerd 

choseswmprt.addEventListener('click', function(){
  choose.classList.toggle('hidden');
  hp.classList.toggle('hidden')
  swampie.classList.toggle('hidden')
  attacks.classList.toggle('hidden')
  naam.textContent="Swampert"
})
// je hebt swampert gekozen dus hij komt in beeld samen met je health bar en de naam komt er te staan ook de aanvallen

chosegya.addEventListener('click', function(){
  choose.classList.toggle('hidden');
  hp.classList.toggle('hidden')
  gyara.classList.toggle('hidden')
  attacks.classList.toggle('hidden')
  naam.textContent="Gyarados"
})
// je hebt Gyarados gekozen dus hij komt in beeld samen met je health bar en de naam komt er te staan ook de aanvallen

function youreturn(){
  Voltorb.src="img/voltorb.png"
  // voltorb zijn source verandert dus de foto verandert naar voltorb.png
if(volhp.value<=0 && hp.value<=0){
  console.log('you both died try again')
  back.classList.toggle('hidden');
  won.classList.toggle('hidden');
  pp.textContent="you were so close,  reload if you want to try again!"
 // als de value van voltorb en de speler gelijk of minder is dan nul dan komt er in je console "you both died try again" te staan. back gaat weg won gaat weg dit is won omdat de if hieronder ook geactiveerd word en dus won het togglen weer uit gaat en de tekst word aangepast

}

  if(volhp.value<=0){
    console.log('W')
    back.classList.toggle('hidden');
    won.classList.toggle('hidden');
  }
  // als voltorb zn health value gelijk is aan 0 dan komt de win screen 

  if (hp.value<=0){
    console.log('you died try again')
    back.classList.toggle('hidden');
    lost.classList.toggle('hidden');
  }
  // als jouw health value gelijk staat aan 0 dan komt lost scherm 

  else{
  attacks.classList.toggle('hidden');
   attacked.classList.toggle('hidden');
}
// anders als geen van toepassing zijn gaat tekst weg en komen aanvallen terug in het scherm

}

function aanvalterug (){
  var enemyattacks= ["Tackle", "Thunder bolt", "Swift"]
  // een lijst(Array) met mogelijke aanvallen
 var randomGetal = Math.floor(Math.random()*3);
 // een random getal dat word afgerond
 Voltorb.src="img/voltorb-a.png"
  attacked.textContent=enemyattacks[randomGetal];
  console.log(randomGetal)

  if(randomGetal==0) {
  hp.value-=10;
  attacked.textContent="Voltorb used Tackle, It was effective!" 
}
// als de getal gelijk staat aan 0 dan is dat tackle
  if(randomGetal==1) {
    hp.value-=20;
    attacked.textContent="Voltorb used Thunderbolt, It was super effective!" 
  }

  if(randomGetal==2) {
    var swift = Math.floor(Math.random()*6);
   console.log(swift)
      if(swift==5){
           hp.value-=40
           attacked.textContent="Voltorb used Swift, It was super effective!" 
            }

      else{
            attacked.textContent="Voltorb used Swift, the attack missed!" 
              }
  }
  // als de getal gelijk staat aan 2 dan is dat swift en word er weer een random getal gegenereerd en heb je 1 op 6 kans dat het aanval raakt of niet

  if (volhp.value <= 15) {
    attacked.textContent = "Voltorb used Self-Destruct, It was super effective!";
    suicide.classList.toggle('hidden')
    Voltorb.classList.toggle('hidden')
    volhp.value = 0;
    hp.value -= 25;
  }
  // als voltorb zijn health 15 of minder is dan doet voltorb een aanval genaamd self destruct en dan is zijn eigen health 0 en doet het jouw 25 damage

   setTimeout (youreturn, 3000);
}

tackle.addEventListener('click', function(){
   attacks.classList.toggle('hidden');
   gyara.classList.toggle('attackingmo')
   swampie.classList.toggle('attackingmo')
   setTimeout(undoatt, 500)
   attacked.classList.toggle('hidden');
  attacked.textContent="You used Tackle, It was effective!"
  health.value -=10
  //kon effectiever doormiddel van functie maar er ging telkens wat mis daarin en dus weer terug naar deze versie.

  if(volhp.value<=0)  {
    console.log("dood")
    setTimeout(uwin, 2000)
  }
  //als voltorb geen health meer heeft dus 0 is komt de scherm van je hebt gewonnen

  else{
    console.log('levend')
    setTimeout(aanvalterug, 3000);
  }
  //anders een aanvalterug
})


earthquake.addEventListener('click', function(){
  attacks.classList.toggle('hidden');
  attacked.classList.toggle('hidden');
  gyara.classList.toggle('attackingmo')
  swampie.classList.toggle('attackingmo')
  setTimeout(undoatt, 500)
 attacked.textContent="You used Earthquake, It was super effective!"
 health.value -=20
 if(volhp.value<=0)  {
  console.log("dood")
  setTimeout(uwin, 2000)
}
//als voltorb geen health meer heeft dus 0 is komt de scherm van je hebt gewonnen

 else{
   console.log('levend')
   setTimeout(aanvalterug, 3000);
 }
//anders een aanvalterug
})

watergun.addEventListener('click', function(){
  attacks.classList.toggle('hidden');
  attacked.classList.toggle('hidden');
  gyara.classList.toggle('attackingmo')
  swampie.classList.toggle('attackingmo')
  setTimeout(undoatt, 500)
 attacked.textContent="You used Water Gun, It's not very  effective!"
 health.value -=5
 
 if(volhp.value<=0)  {
  console.log("dood")
  setTimeout(uwin, 2000)
}
//als voltorb geen health meer heeft dus 0 is komt de scherm van je hebt gewonnen
 else{
   console.log('levend')
   setTimeout(aanvalterug, 3000);
 }
//anders een aanvalterug
})


function randomaanval(){
  var aanvallen= ["Tackle", "Earthquake", "Water Gun", "Mud Shot"]
  var rndomGetal = Math.floor(Math.random()*4);
  audio.play();
  gyara.classList.toggle('attackingmo')
  swampie.classList.toggle('attackingmo')
  setTimeout(undoatt, 500)
  attacked.textContent=aanvallen[rndomGetal];
  console.log(rndomGetal)
  // er word een random getal gekozen tot en met 4 wat gelijk staat aan 1 van de aanvallen in de array. de pokemon laat bewegen en een audio afspeelt

  if(rndomGetal==0) {
  volhp.value-=10;
  attacked.textContent="You used Tackle, It was effective!" 
  
}
  if(rndomGetal==1) {
    volhp.value-=20;
    attacked.textContent="You used Earthquake, It was super effective!"            
  }

  if(rndomGetal==2) {
    volhp.value-=5;
    attacked.textContent="You used Water Gun, It's not very  effective!" 
  }

  if(rndomGetal==3){
    volhp.value-=25
    attacked.textContent="You used Mud Shot, It was super effective!"            
  }
   
}

emptyattack.addEventListener('click', function(){
  attacks.classList.toggle('hidden');
  attacked.classList.toggle('hidden');
  setTimeout(randomaanval, 0100)
//aanvallen gaan weg en tekst komt tevoorschijn met random aanval

  if(volhp.value<=0)  {
    console.log("dood")
    setTimeout(uwin, 2000)
  }
  //als voltorb geen health meer heeft dus 0 is komt de scherm van je hebt gewonnen
  else{
    console.log('levend')
    setTimeout(aanvalterug, 3000);
  }
//anders een aanvalterug
})

var Lcounter = 0;
var counter = 0;
var counterElement = document.getElementById('win-counter');
var LcounterElement = document.getElementById('lose-counter');

retry.addEventListener('click', function(){
  Voltorb.classList.remove('hidden');
  suicide.classList.add('hidden')
  volhp.value=100
  hp.value=100
  back.classList.toggle('hidden');
  won.classList.toggle('hidden');
  counter++;
  counterElement.textContent = `${counter} W's`;
  console.log('aye congrats on the win');
});
// zorgt ervoor dat je win counter optelt en weer kan battlen dus beide hp is weer 100 Etc.

Letry.addEventListener('click', function(){
  Voltorb.classList.remove('hidden');
  suicide.classList.add('hidden')
  volhp.value=100
  hp.value=100
  setTimeout(youreturn,1000)
  back.classList.toggle('hidden');
  lost.classList.toggle('hidden');
  Lcounter++;
  LcounterElement.textContent = `${Lcounter} L's`;
  console.log('aye congrats on the L');
});
//zorgt ervoor dat je verlies counter optelt en weer kan battlen dus beide hp is weer 100 Etc.