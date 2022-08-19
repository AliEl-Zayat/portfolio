window.onscroll = function(){
  let section = document.querySelector(".resume")
    if(window.scrollY >= section.offsetTop){
        const perConts = document.querySelectorAll(".skill-progbar") 
        perConts.forEach(function (perCont) {
        perCont.style.transition = "width 2s ease-in-out";
        perCont.style.width = perCont.getAttribute("data-progress")
        perCont.parentElement.parentElement.querySelector(".floatingpercent").innerHTML = perCont.getAttribute("data-progress")
      })
    }else{
      const perConts = document.querySelectorAll(".skill-progbar") 
      perConts.forEach(function (perCont) {
        perCont.style.transition = "width 2s ease-in-out";
        perCont.style.width = "0%"
        perCont.parentElement.parentElement.querySelector(".floatingpercent").innerHTML = "0%"
      })
    }
  let cardsSection = document.querySelector(".about");
  let nums = document.querySelectorAll(".nums");
  let started = false;
  
  if(window.scrollY >= cardsSection.offsetTop){
  if(!started){
      nums.forEach((num) => startCount(num))
    }
    started = true
  }
function startCount(el){
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal) {
      clearInterval(counter);
    }
  },1000 / goal)
}
}

// window.onscroll = function(){

// }
