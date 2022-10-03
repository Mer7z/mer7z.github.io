var fillers = document.getElementsByClassName('filler');
var button = document.getElementById('btn-menu');
var leftSec = document.getElementsByClassName('left-section');
var skillSec = document.getElementsByClassName('skills-container');
let count = 0;
let time = 400;
var filling = false;

button.addEventListener('click', function(e){
  let target = e.target;
  button.classList.toggle('active');
  leftSec[0].classList.toggle('active');
});

window.addEventListener('scroll', function(e){
  if(skillSec[0].getBoundingClientRect().y <= window.innerHeight - 200){
    if(!filling){
      filling = true;
      fillSkills();
    }
  }
})


function fillSkills(){
  setTimeout(()=>{
    if(count < fillers.length){
      fillers[count].classList.add('active');
      count++;
      time = time - (40 + (count));
      fillSkills();
    }
  }, time)
}

if(skillSec[0].getBoundingClientRect().y <= window.innerHeight - 200){
  if(!filling){
    filling = true;
    fillSkills();
  }
}