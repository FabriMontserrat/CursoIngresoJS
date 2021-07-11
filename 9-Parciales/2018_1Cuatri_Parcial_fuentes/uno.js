
function mostrar()
{
	
	var anchoRectangulo
	var	largoRectangulo
	var perimetro

	anchoRectangulo = prompt ("Ingrese el ancho del rectangulo");
	largoRectangulo = prompt ("Ingrese largo del rectangulo");

	largoRectangulo = parseInt(largoRectangulo)
	anchoRectangulo = parseInt(anchoRectangulo)

	perimetro = (largoRectangulo * 2) + (anchoRectangulo * 2)
	
	alert ("El perimetro del rectangulo es: " + perimetro) 


}
	