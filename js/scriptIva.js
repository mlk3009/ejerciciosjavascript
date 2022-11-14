var calcular = document.getElementById("calcular");
var valorTotal = document.getElementById("valor");

calcular.addEventListener('click', ()=>calcularIVA(valorTotal));

function calcularIVA(valorTotal){
    valorTotal = valorTotal.value;
    var IVA, precioSinIva;
    
    IVA = (valorTotal * 0.22);
    precioSinIva = (valorTotal - IVA);
    
    if(valorTotal == null || valorTotal == 0){
        alert("porfavor, ingrese un valor valido");
        location. reload();
    } else {
        document.getElementById("valores").innerHTML = "el valor agregado es de: $" + IVA + " y el valor bruto del producto es de: $" + precioSinIva;
    }
}