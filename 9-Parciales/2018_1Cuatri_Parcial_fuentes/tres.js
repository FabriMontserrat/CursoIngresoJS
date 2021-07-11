function mostrar()
{
	var precioInicial
	var descuento
	var precioConDescuento

	precioInicial = prompt("Ingrese el precio")
	descuento = prompt("Ingrese % de descuento")

	precioInicial = parseInt(precioInicial)
	descuento = parseInt(descuento)
	
	precioConDescuento = precioInicial - (precioInicial / 100 * descuento)

	document.getElementById("elPrecioFinal").value = precioConDescuento

}
