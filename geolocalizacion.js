const d = document;
export function location (latitud,longitud,precision){
   const $latitud = d.getElementById(latitud),
   options = {
       enableHighAccuracy: true,
       timeout:5000,
       maximumAge:0
   },
   $longitud = d.getElementById(longitud),
   $precision = d.getElementById(precision)
   function success(pos){
  
    let crd = pos.coords;
   
    $latitud.innerText = `Su Latitud es: ${crd.latitude}`
    $longitud.innerText = `Su Longitud: ${crd.longitude} `
    $precision.innerText = `Su Precision: ${crd.accuracy} `
        //Creamos el punto a partir de la latitud y longitud de una dirección:
        var point = new google.maps.LatLng(`${crd.latitude}`,`${crd.longitude} ` );
     
        //Configuramos las opciones indicando zoom, punto y tipo de mapa
        var myOptions = {
            zoom: 10, 
            center: point, 
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     
        //Creamos el mapa y lo asociamos a nuestro contenedor
        var map = new google.maps.Map(document.getElementById("showMap"),  myOptions);
     
        //Mostramos el marcador en el punto que hemos creado
        var marker = new google.maps.Marker({
            position:point,
            map: map,
            title: "Nombre empresa - Calle Balmes 192, Barcelona"
        });
    }
  
      
       navigator.geolocation.getCurrentPosition(success,error,options)
    }
   
   function error (err){
       console.error(err.code)
   }
 