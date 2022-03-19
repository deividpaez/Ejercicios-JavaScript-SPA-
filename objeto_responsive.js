const d = document,
w = window;

export default function responsiveMedia(id,mediaQ,mobileContent,deskopContent){
  let breakpoint = w.matchMedia(mediaQ)

  const responsive = (e)=>{
     if(e.matches){
       d.getElementById(id).innerHTML = deskopContent
     }else{
        d.getElementById(id).innerHTML = mobileContent
     }
  }
  breakpoint.addEventListener("change",responsive)
  responsive(breakpoint)
}
  