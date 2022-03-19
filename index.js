import { camara } from "./camara.js";
import { darkMode } from "./darkmode.js";
import filtro from "./filtroBusqueda.js";
import contactFormValidations from "./formulario.js";
import { location } from "./geolocalizacion.js";
import { countDown } from "./Js/countDown.js";
import hamburgerMenu from "./Js/menuhamburguesa.js";
import { online } from "./Js/online.js";
import reloj_Alarma from "./Js/relojDigitalyAlarma.js";
import { ball, shortcuts } from "./Js/teclado.js";
import UserAgent from "./Js/userAgent.js";
import { narrador } from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import { Prueba } from "./prueba_responsive.js";
import scrollSpy from "./scrollForDeskop.js";

import scrollUp from "./scrolluP.js";
import { sorteoDigital } from "./sorteo.js";
import videoInteligente from "./videoInteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a")
    reloj_Alarma(".reloj",".detenerReloj",".detenerAlarma",
    ".alarma")
    scrollUp(".ScrollUp")
    responsiveMedia("youtube",
    "(min-width: 1050px)",
    `<a href = "https://www.youtube.com/watch?v=1TEYg7ZyWPk&ab_channel=Wisin%26Yandel-Topic">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/VnYDuazkyZc?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
   responsiveMedia("maps", "(min-width: 1050px)",`<a href = "https://goo.gl/maps/PLxCoUV4ponM8BJa6">Maps</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406135463!2d2.2922872514591464!3d48.8583736085598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2sco!4v1638825498184!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
   Prueba("responsive")
   UserAgent("UseAgent","mobileAndDeskop","Navigator")
   camara("webcam")
    online("conection")
    location("latitud","Longitud","precision")
    filtro(".Filtro",".card")
    sorteoDigital("sorteo",".obtenerGanador")
  scrollSpy()
  videoInteligente("#Video1","#Video2")
  contactFormValidations()
  narrador("repNarrador","stopNarrador");
})

 d.addEventListener("keydown", (e)=>{
    
    shortcuts(e)
    ball(e,".labola",".cuadro")
 })
 const Select = d.getElementById("fechaFal")

 countDown(Select,"December 3, 2022 00:23:19")

 darkMode(".Darkmode",".cuadro")










































 