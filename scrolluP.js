const  d = document;

export default function scrollUp (selector){
   
setInterval(() => {
  if(window.scrollY <= 300){
      d.querySelector(selector).classList.add("off")
  }
  if(window.scrollY >= 500){
    d.querySelector(selector).classList.remove("off")
}
    
},1000);
 
d.addEventListener("click", e =>{
    if(e.target.matches(`${selector} *`)){
        window.scrollBy({
            top: -1000000000,
            left: 100,
            behavior: 'smooth'
        })
       
    }
})
 
 
}