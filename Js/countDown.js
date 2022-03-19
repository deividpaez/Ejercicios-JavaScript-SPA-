 const d = document
export function countDown(selector,fecha,texto){
   const $Selector = selector;
   
   
setInterval(() => {
 let fechaAdelantada = new Date(fecha).getTime(),
 now = new Date().getTime(),
  Final = fechaAdelantada - now,
  days = Math.floor(Final / (1000 * 60 *60 * 24)),
  hoursr = (
      "0" + Math.floor((Final % (1000 * 60 *60 *24)) / (1000 *60 *60))
  ).slice(-2),
  minutes = ("0" + Math.floor((Final % (1000 * 60*60)) / (1000 * 60))).slice(-2),
  seconds = ("0" + Math.floor((Final % (1000 * 60)) / 1000)).slice(-2);

 $Selector.innerHTML = `<h3> Faltan: ${days} dias ${hoursr} Horas ${minutes} minutos y ${seconds} Segundos</h3>`

//   selector.innerHTML = `Faltan ${FinallAños} Años ${FinalDias} Dias ${FinalMeses} Meses Con ${FinalHoras}: ${FinalMinutos} y ${FinalSegundos} Segundos`
//    console.log(FinallAños, FinalDias, FinalMeses, FinalHoras , FinalMinutos, FinalSegundos)
   
},1000);


}
