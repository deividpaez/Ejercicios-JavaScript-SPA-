const d = document,
n = navigator;
export function online(id){
  let $online = d.getElementById(id)
  
const isOnLine = () =>{
    
    if(n.onLine){
        $online.innerText = "Conectado"
        $online.classList.add("conectionOn")
        $online.classList.remove("conectionOff")
    }else{
        $online.classList.remove("conectionOn")
        $online.innerText = "Desconectado"
        $online.classList.add("conectionOff")
    }
}

  d.addEventListener("online",  isOnLine())
    
  d.addEventListener("offline", isOnLine())

    
  
    
  
     
  
  }