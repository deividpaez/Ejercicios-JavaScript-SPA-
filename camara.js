const d = document,
  n = navigator;
export function camara(id) {
  const $video = d.getElementById(id)
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then((stream) => {
      $video.srcObject = stream;
   $video.play()
    }).catch((err) => {
    $video.insertAdjacentHTML("beforebegin",`<p> <mark>Se genero el< siguiente Error ${err}</mark></p>`)
    })
  }
}