document.addEventListener("DOMContentLoaded", function(){
  const container = document.querySelector(".container");
const button = document.querySelector(".button");
  const input = document.querySelector("input");

  const animateStart = () => {
    container.classList.add("told-stan");
  }
  const InputChangeHandler = (event)
 => {
   if (event.target.value.includes("Where did ")) {
     container.classList.add("eye-squint");
   } else {
     container.classList.remove("eye-squint");
   }

   if (event.target.value === ("Where did your mom go?")) {
      container.classList.add("animating-tear");
    } else if (container.classList.value.includes("animating-tear")) {
      container.classList.remove("animating-tear");
    }

   if (event.target.value === ("Where did you get such cool glasses?")) {
         container.classList.add("animating-smile");
       } else if (container.classList.value.includes("animating-smile")) {
         container.classList.remove("animating-smile");
       }
 }
   button.addEventListener("click", animateStart);
   input.addEventListener("input", (event) => InputChangeHandler(event));


});