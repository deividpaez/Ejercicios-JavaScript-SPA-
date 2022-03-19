const d = document;


export function Prueba (idform){
  const $form = d.getElementById(idform)
  let tester;
  d.addEventListener("submit", (e) =>{
  
    if(e.target === $form){
          e.preventDefault()
          tester = window.open($form.direccion.value,
            "tester",
            `left = 300,top=10,width=${$form.ancho.value}, height=${$form.alto.value}`)
        
      }
     
     d.addEventListener("click", (e)=>{
      if(e.taget === $form.cerrar) tester.close()
     })
    
  })
}   