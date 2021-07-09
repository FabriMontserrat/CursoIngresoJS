/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;

	largoDelTerreno=txtIdLargo.value;
	anchoDelTerreno=txtIdAncho.value;

	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=parseInt(anchoDelTerreno);

	var metrosDeAlambre;

	metrosDeAlambre= (((largoDelTerreno*2)+(anchoDelTerreno*2))*3);

	alert ("Usted debe comprar " + metrosDeAlambre + " metros de alambre");

}
function Circulo () 
{
	var radioDelTerreno;

	radioDelTerreno=txtIdRadio.value;

	radioDelTerreno=parseInt(radioDelTerreno);

	var metrosDeAlambre;

	metrosDeAlambre= (((Math.PI * radioDelTerreno) * 2) * 3 );



	alert ("Usted debe comprar " + metrosDeAlambre.toFixed(2) + " metros de alambre");

}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;

	largoDelTerreno=txtIdLargo.value;
	anchoDelTerreno=txtIdAncho.value;

	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=parseInt(anchoDelTerreno);

	var bolsasDeCemento
	bolsasDeCemento=((largoDelTerreno * anchoDelTerreno)*2);

	var bolsasDeCal
	bolsasDeCal=((largoDelTerreno * anchoDelTerreno)*3);

	alert ("Usted debe comprar " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal");

}


/*
toFixed(2) = cantidad de numeros que se muestran despues de la coma

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil 
Pagina de comandos matematica

*/