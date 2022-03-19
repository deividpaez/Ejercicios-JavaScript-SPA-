const d = document,
n = navigator;
export default function UserAgent(id,id2,id3){
  const $Deteccion = d.getElementById(id),
  Mobile_Deskop = d.getElementById(id2),
  navigator = d.getElementById(id3)
  
   $Deteccion.innerHTML = 
   `<ul>
   <li>  User Agent: <strong>${n.userAgent}</strong></li>
   <li>Plataforma: <strong>${n.userAgentData.platform}</strong></li>
      <li>Navegador: <strong> ${n.userAgentData.brands[1].brand} V.${n.userAgentData.brands[1].version}</strong></li>
   </ul>`

   
   if(n.userAgentData.mobile === true){
    Mobile_Deskop.innerHTML = `<p>Este Contenido solo se ve en Mobile</p>`
   }else{
    Mobile_Deskop.innerHTML = `<p>Este Contenido solo se ve en Escritorio</p>`
   }
   switch (n.userAgentData.brands[1].brand) {
       case 'Google Chrome' :
           navigator.innerHTML = `Hola chrome`
           break;
           case 'Chromium' :
            navigator.innerHTML = `Hola Edge`
            break;
       default:
           break;
   }
}