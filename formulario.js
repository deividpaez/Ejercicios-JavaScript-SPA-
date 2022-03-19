const d = document;

export default function contactFormValidations() {


    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form *[required]")

    $inputs.forEach((input) => {
        const $span = d.createElement("span")
        $span.textContent = input.title
        $span.id = input.name
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)

    });


    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern

            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern)

                return !regex.exec($input.value) ? (
                    d.getElementById($input.name).classList.add("is-active"),
                    d.getElementById($input.name).classList.remove("none")
                ) : (d.getElementById($input.name).classList.remove("is-active"), d.getElementById($input.name).classList.add("none"))
            }
            if (!pattern) {

            }



        }


    })

    d.addEventListener("submit", (e) =>{
       
   let $loader = d.querySelector(".contact-form-loader"),
    $enviados = d.querySelector(".contact-form-response")
    $loader.classList.remove("none")
        setTimeout(()=>{
  $loader.classList.add("none")
     },3000)
        setTimeout(()=>{
            $enviados.classList.remove("none")
          },4000)
          setTimeout(()=>{
            $enviados.classList.add("none")
          },6000)
          
            $form.reset()
    })

}