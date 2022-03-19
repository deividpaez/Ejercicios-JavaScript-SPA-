export default function reloj_Alarma(reloj, detenerReloj, detenerAlarma, alarma) {

    const d = document;

    d.addEventListener("click", (e) => {
        const divReloj = d.getElementById("reloj")
         let interval;
         if (e.target.matches(detenerReloj)) {
            clearInterval(interval == interval)
            divReloj.innerText = "Toca un Boton"
        }
   
        if (e.target.matches(reloj)) {
         
           interval = setInterval(() => {
              let clockHour =  new Date().toLocaleTimeString();
 
          divReloj.innerHTML = `<h3>${clockHour}</h3>`


            }, 1000)
   
            e.target.disabled = true
        }
        if(e.target.matches(detenerReloj)){
            clearInterval(interval)
           d.querySelector(reloj).disabled = false
        }
       
        if(e.target.matches(alarma)){
          divReloj.innerHTML = `<audio controls autoplay>
          <source src="audio/car-alarm.mp3" type="audio/mp3">
              Tu navegador no soporta audio HTML5.
      </audio>`
      e.target.disabled = true
        }
        if(e.target.matches(detenerAlarma)){
            divReloj.innerHTML = `Presiona un Boton`
            d.querySelector(alarma).disabled = false
          }

   
      

    })

}