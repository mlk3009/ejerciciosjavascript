(function(){
    var convertir = document.getElementById("convertir");

    convertir.addEventListener('click', ()=> convertirPulgadas(pulgadas));
    
    function convertirPulgadas(pulgadas){
        var pulgadas = document.getElementById("pulgadas").value;
        var centimetros = document.getElementById("centimetros");
    
        centimetros.value = (pulgadas * 2.54);
    } 
    
    
    var calcular = document.getElementById("calcular");
    var valorTotal = document.getElementById("valor");
    
})();

(function(){
calcular.addEventListener('click', ()=>calcularIVA(valorTotal));

function calcularIVA(valorTotal){
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
}
})();