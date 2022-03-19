const d = document;
let x = 0,
    y = 0;

export function ball(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitscuadro = $stage.getBoundingClientRect()



    switch (e.keyCode) {
        case 38:

            if (limitsBall.top > limitscuadro.top) {
                e.preventDefault()
                y--
            }
        
            break;
        case 40:

            if (limitsBall.bottom < limitscuadro.bottom) {
                e.preventDefault()
                y++
            }
         
            break;
        case 37:

            if (limitsBall.left > limitscuadro.left) {
                e.preventDefault()
                x--;
            }
           
            break;
        case 39:

            if (limitsBall.right < limitscuadro.right) {
                e.preventDefault()
                x++
            }
         

            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`

}

export function shortcuts(e) {

    if (e.keyCode === 67 && e.ctrlKey) {
        alert("hola")
    }

    


}
// up es 38
// down es 40
// left es 37
// right es 39