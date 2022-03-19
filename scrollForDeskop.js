const d = document;

export default function scrollSpy( ){
  const $seccion = d.querySelectorAll(".seccion [data-scroll-spy]")
//   console.log($seccion)

  const cd = (entries) =>{
    //   console.log("Entries",entries)
    entries.forEach((entry) =>{
       const id = entry.target.getAttribute("id")
       if(entry.isIntersecting){
         d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
       }else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
       }
    })
  }
  const observer = new IntersectionObserver(cd,{
    //   rootMargin:"-250px"
    threshold:0.5,
  })
  

  $seccion.forEach((el) => observer.observe(el))
 
}