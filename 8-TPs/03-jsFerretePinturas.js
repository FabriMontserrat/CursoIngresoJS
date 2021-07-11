/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada
	var temperaturaDevuelta

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value

	temperaturaIngresada = parseInt(temperaturaIngresada)

	temperaturaDevuelta = (temperaturaIngresada - 32) * (5/9)

	alert (temperaturaIngresada + "° Fahrenheit son: " + temperaturaDevuelta.toFixed(0) + "° centigrados")
 	
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada
	var temperaturaDevuelta

	temperaturaIngresada = document.getElementById("txtIdTemperatura").value

	temperaturaIngresada = parseInt(temperaturaIngresada)

	temperaturaDevuelta = (temperaturaIngresada * 9/5) + 32

	alert (temperaturaIngresada + "° centigrados son: " + temperaturaDevuelta.toFixed(0) + "° Fahrenheit")
}
