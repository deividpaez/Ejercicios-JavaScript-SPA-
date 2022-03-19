const d = document;
export function sorteoDigital(id, botonganador) {
    const $sorteos = d.getElementById(id),
        personas = ["JavaScript", "PHP", "JAVA", "C", "Python", "Ruby", "Go", "Visual Basic", "Rust", "Perl","Jonatahn"]

    personas.forEach((el) => {
        $sorteos.insertAdjacentHTML("afterbegin", `<ul><li>${el}</li></ul>`)
    })

   
    d.addEventListener("click", (e) =>{
        let winner = Math.floor(Math.random() * personas.length)
        if(e.target.matches(botonganador)){
           alert(`El ganador es ${personas[winner]}`)
 
           //location.reload()
        }
      
    })
    // console.log(personas[winner])


}