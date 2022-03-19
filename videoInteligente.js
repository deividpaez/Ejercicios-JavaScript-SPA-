const d = document;

export default function videoInteligente(video_1, video_2) {
    const $seccion = d.querySelectorAll(".seccion[data-scroll-spy]")
    const $video1 = d.querySelector(video_1),
        $video2 = d.querySelector(video_2),
        rep = (entry) => {
            entry.forEach((entrie) => {
                if (entrie.isIntersecting) {
                   
                    if (entrie.target.getAttribute("id") == "seccion13") {
                        $video1.play()

                    }
                    if (!(entrie.target.getAttribute("id") == "seccion13")) {
                        $video1.pause()

                    }
                    if (entrie.target.getAttribute("id") == "seccion14") {
                        $video2.play()

                    } else {
                        $video2.pause()
                    }
                }
            })
        }


    const observer = new IntersectionObserver(rep, {
        threshold: [0.75]
    })

  

    $video1.addEventListener("mouseover", (e)=>{
        e.target.classList.add("isActive")
       e.target.play()
    })
    $video1.addEventListener("mouseout", (e)=>{
        e.target.classList.remove("isActive")
        e.target.pause()
    })
    $video2.addEventListener("mouseover", (e)=>{
        e.target.classList.add("isActive")
       e.target.play()
    })
    $video2.addEventListener("mouseout", (e)=>{
        e.target.classList.remove("isActive")
        e.target.pause()
    })
    d.addEventListener("visibilitychange", function() {
        if (!(d.visibilityState === 'visible')) {
         $video1.pause();
         $video2.pause()
        }
      });
      $seccion.forEach((ele) => observer.observe(ele))
}