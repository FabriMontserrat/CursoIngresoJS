/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas
    var marcaLamparas
    var precio
    var descuento
    var precioConDescuento

    cantidadLamparas = txtIdCantidad.value
    cantidadLamparas = parseInt(cantidadLamparas)
    precio = (cantidadLamparas * 35)
    marcaLamparas = document.getElementById("Marca").value

    if (cantidadLamparas > 5) 
    {
        descuento = 0.5
        document.getElementById("txtIdprecioDescuento").value = (precio * descuento)
    }

    else       
        if (cantidadLamparas == 5) 
        {
            if (marcaLamparas == "ArgentinaLuz") 
            {
            descuento = 0.6
            document.getElementById("txtIdprecioDescuento").value = (precio * descuento)
            }
            else
                {
                descuento = 0.7
                precioConDescuento = precio*descuento
                document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2)
                }
        }
        else
            if (cantidadLamparas == 4) 
            {
                if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") 
                {
                descuento = 0.75
                precioConDescuento = precio * descuento
                document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2)
                }
                else
                    {
                    descuento = 0.8
                    precioConDescuento = precio * descuento
                    document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2)
                    }
            }
            else
                if (cantidadLamparas == 3) 
                {
                    if (marcaLamparas == "ArgentinaLuz") 
                    {
                    descuento = 0.85
                    precioConDescuento = precio * descuento
                    document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2) 
                    }
                    else
                        if (marcaLamparas == "FelipeLamparas") 
                        {
                        descuento = 0.90
                        precioConDescuento = precio * descuento
                        document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2)
                        }

                        else
                        {
                        descuento = 0.95
                        precioConDescuento = precio * descuento
                        document.getElementById("txtIdprecioDescuento").value= precioConDescuento.toFixed(2)
                        }
                }
                else
                    {
                    document.getElementById("txtIdprecioDescuento").value = cantidadLamparas * precio  
                    }
if (document.getElementById("txtIdprecioDescuento").value > 120) 
    {
        var ingresosBrutos
        ingresosBrutos = txtIdprecioDescuento.value * 1.10
        alert("IIBB Usted pago: " + ingresosBrutos.toFixed(2))
    }   
}
