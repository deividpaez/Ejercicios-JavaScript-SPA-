const d = document;
export default function filtro(input,selector){
   const $cards = d.querySelectorAll(selector)
   
   
d.addEventListener("keyup", e =>{
    if(e.target.matches(input)){
       $cards.forEach((el)=>
       el.textContent.toLowerCase().includes(e.target.value)
       ? el.classList.remove("filter")
       :el.classList.add("filter")
       )
    }
  
})


  

}