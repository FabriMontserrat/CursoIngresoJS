/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño 
	mesDelAño = txtIdMes.value;
	var mensaje

	switch(mesDelAño)
	{
		case"Febrero":	
		mensaje = "Este mes no tiene más de 29 días"
		break

		default:
		mensaje = "este mes tiene 30 o más días"
		break

	}

	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN