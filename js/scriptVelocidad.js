var calcular = document.getElementById("calcular");
var distancia = document.getElementById("distancia");
var tiempo = document.getElementById("tiempo");


calcular.addEventListener('click', ()=>calcularVelocidad(distancia, tiempo));

function calcularVelocidad(distancia, tiempo){
    distancia = distancia.value;
    tiempo = tiempo.value;

    var velocidad;
    
    velocidad = (distancia / tiempo);
    
    if(velocidad == null || velocidad == 0){
        alert("porfavor, ingrese valores validos");
        location. reload();
    } else {
        document.getElementById("velocidad").innerHTML = "La velocidad a la que se dirige el auto es de: " + velocidad + "km/h";
    }
}