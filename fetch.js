

document.addEventListener("DOMContentLoaded", (e) => {
  let $lista = document.getElementById("Personas"),
    $PersonasAsyn = document.getElementById("PersonasAsyn"),
    $axios = document.getElementById("axios"),
    $axiosAsync = document.getElementById("axios-Async"),
    $fragmento = document.createDocumentFragment();
  fetch("https://jsonplaceholder.typicode.com/users", {})
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then((json) => {

      json.forEach((element) => {
        let $li = document.createElement("li")
        $li.innerHTML = `Nombre: ${element.name}`
        $fragmento.appendChild($li)
      });

      $lista.appendChild($fragmento)
    })
    .catch((err) => {
      $lista.textContent = `Error N${err.status}`
      console.log(err)
    })
    .finally(() => {

    });

  (async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users", {}),
        json = await res.json();


      if (!(res.ok)) {
        throw {
          error: res.status,
          errorText: res.statusText
        }
      } else {
        json.forEach((el) => {
          let $li = document.createElement("li");
          $li.innerHTML = `Nombre: ${el.name}`;
          $fragmento.appendChild($li)
        })
        $PersonasAsyn.appendChild($fragmento)
      }
      // console.log(res)
    } catch (error) {
      console.log(error.error, error.errorText, error)
    } finally {

    }
  })();

  (() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.data.forEach((el) => {
          let $li = document.createElement("li");
          $li.innerHTML = `Nombre: ${el.name}`;
          $fragmento.appendChild($li);
        })
        $axios.appendChild($fragmento)
      })
      .catch((err) => {
        err.response.statusText = "Error al conectar"
        console.log(err.response, err.response.statusText)
      })
  })();


(async()=>{
 const $fragment = document.createDocumentFragment();
 axios
 .get("https://jsonplaceholder.typicode.com/users")
 
})();



})