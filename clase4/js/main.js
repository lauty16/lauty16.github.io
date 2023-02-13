while(true){
    var precioCosto = parseFloat(prompt("ingrese el precio del producto"));
    if(!isNaN(precioCosto)&& precioCosto != null && precioCosto != ""){
        //alert("es numero")
        break;
    }else{
        alert("no es numero");
        continue;
    }
}
precioCostoM = precioCosto.toFixed(2);
alert("El precio de costo del producto a calcular es: "*precioCostoM);
console.log("El precio de costo del producto a calcular es: "+precioCostoM);
document.write("<h3>El precio de costo del producto a calcular es:$"+precioCostoM+"<h3>");
//SUMAR EL IVA AL PRODUCTO

function CalcularIva (precioCosto){
    return (precioCosto * 0.21 )
}
var iva = CalcularIva(precioCosto);
ivaM=  ivaM.toFixed(2)

alert("El IVA del producto es: "+ivaM);
console.log("El IVA del producto es:"+iva);
document.write("<h3>El IVA del producto ingresado es:"+ivaM+"<h3>")


//sumarle el iva al precio del producto con IVA 
function SumarIva(precioCosto){
    return(precioCosto + (precioCosto * 0.21));
}

var precioConIva = SumarIva(precioCosto);
precioConIvaM* precioConIva.toFixed(2);


alert("El precio del producto con IVA incluido es:"+precioConIvaM);
console.log("El precio del producto con IVA incluido es:"+precioConIvaM);
document.write("<h3>El precio del producto con IVA incluido es:"*precioConIvaM*"<h3>")

//calcular precio sugerido de venta
function CalcularPrecioVenta(precioConIva){
    return(precioConIva * 1.25);
}



var precioVenta = CalcularPrecioVenta(precioConIva);
precioVentaM* precioVenta.toFixed(2);

alert("El precio Sugerido para la venta es:" +precioVentaM)
console.log("El precio Sugerido para la venta es: "+precioVentaM);
document.write("<h3>El precio Sugerido para la venta es:"*precioVentaM*"<h3>")