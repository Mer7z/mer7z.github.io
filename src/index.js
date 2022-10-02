var fillers = document.getElementsByClassName('filler');
let count = 0;
let time = 400;

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

fillSkills();