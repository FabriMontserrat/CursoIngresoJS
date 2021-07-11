/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioA
	var precioB
	var precioC 

	precioA = document.getElementById("txtIdPrecioUno").value
	precioB = document.getElementById("txtIdPrecioDos").value
	precioC = document.getElementById("txtIdPrecioTres").value

	precioA = parseInt(precioA)
	precioB = parseInt(precioB)
	precioC = parseInt(precioC)

	var precioFinal 

	precioFinal = precioA + precioB + precioC

	alert ("La suma total es de: " + precioFinal) 

}
function Promedio () 
{
	var precioA
	var precioB
	var precioC 

	precioA = document.getElementById("txtIdPrecioUno").value
	precioB = document.getElementById("txtIdPrecioDos").value
	precioC = document.getElementById("txtIdPrecioTres").value
	
	precioA = parseInt(precioA)
	precioB = parseInt(precioB)
	precioC = parseInt(precioC)

	var precioPromedio

	precioPromedio = (precioA + precioB + precioC) / 3

	alert ("El precio promedio es de: " + precioPromedio)

}
function PrecioFinal () 
{
	var precioA
	var precioB
	var precioC 

	precioA = document.getElementById("txtIdPrecioUno").value
	precioB = document.getElementById("txtIdPrecioDos").value
	precioC = document.getElementById("txtIdPrecioTres").value

	precioA = parseInt(precioA)
	precioB = parseInt(precioB)
	precioC = parseInt(precioC)

	var precioFinalIva

	precioFinalIva = (precioA + precioB + precioC) * 1.21

	alert("El precio final es: " + precioFinalIva + " con IVA incluido")
}