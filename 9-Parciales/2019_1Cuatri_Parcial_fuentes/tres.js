function mostrar()
{
	var preciooriginal
	var descuento

	preciooriginal=prompt("Ingrese el valor original del producto")
	descuento=prompt("Ingrese el porcentaje de descuento")

	document.getElementById("elPrecioFinal").value = (preciooriginal - (preciooriginal / 100 * descuento));


}
