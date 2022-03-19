 const d = document;
export function narrador(escuchar,stop) {

    let utterance = window.speechSynthesis,
    $voces = d.getElementById("voces"),
    $texto = d.getElementById("textoNarrador"),
    $reproducir = d.getElementById(escuchar),
    $detenerse = d.getElementById(stop)
   
  
  setTimeout(()=>{
    const voices = utterance.getVoices()
   for (let i = 0; i < voices.length; i++) {
     let $option = d.createElement("option",{name:"hola"})
     $option.textContent = voices[i].name
     $voces.insertAdjacentElement("afterbegin",$option)
   } 
   },1000)


    
 $voces.addEventListener("click",(e)=>{
  

 })
$reproducir.addEventListener("click",(e)=>{
  
  let $vozSelect = $voces.value,
   voices = utterance.getVoices()
  
for (let i = 0; i < voices.length; i++) {

if($vozSelect == voices[i].name){
 let texto = new SpeechSynthesisUtterance($texto.value)
  texto.voice = speechSynthesis.getVoices()[i]
  speechSynthesis.speak(texto)
}

} 
 

})

  }