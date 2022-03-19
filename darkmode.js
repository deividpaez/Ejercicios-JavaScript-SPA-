const d = document,
ls = localStorage;
export function darkMode (selector,cuadro){
   d.addEventListener("click", e =>{
    let $btn = d.querySelector(selector); 
    let moon = "🌕",
    sun = "☀️"
    if(e.target.matches(selector)){
     
      switch (d.body.classList.contains("darkmode")) {
        case false:
          d.body.classList.add("darkmode")
          d.querySelector(cuadro).classList.add("darkmodecaja")
          ls.setItem("theme","darkmode")
          break;
      case true:
        d.body.classList.remove("darkmode")
        d.querySelector(cuadro).classList.remove("darkmodecaja")
        ls.setItem("theme","lighmode")
        break;
        default:
          break;
      }
      
      
      

       
        switch ($btn.textContent) {
            case moon:
                $btn.textContent = sun
                break;
        case sun:
            $btn.textContent = moon
            break;
            default:
                break;
        }
      }
   })
   d.addEventListener("DOMContentLoaded",(e) =>{
       if(ls.getItem("theme") === null) ls.setItem("theme","lighmode")
       if(ls.getItem("theme") === "lighmode")  {
        d.body.classList.remove("darkmode")
        d.querySelector(cuadro).classList.remove("darkmodecaja")
       }
      
       if(ls.getItem("theme") === "darkmode") {
        d.querySelector(cuadro).classList.add("darkmodecaja")
        d.body.classList.add("darkmode")
       }
       
   })
 

}


