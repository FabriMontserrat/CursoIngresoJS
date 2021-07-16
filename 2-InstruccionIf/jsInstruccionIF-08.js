function mostrar()
{
	var edad
	var estado

	edad=txtIdEdad.value
	edad=parseInt(edad)
	estado=estadoCivil.value

	if (edad > 17 && estado == "Soltero") 
	{
		alert("Es soltero y NO es menor")
	}
	


}//FIN DE LA FUNCIÓN