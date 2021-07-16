function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10);

	if (numeroRandom + 1 > 8) 
		{
			alert("Excelente")
		}
	else
		if (numeroRandom + 1 > 3) 
		{
			alert("Aprobo")
		}
		else
			alert("Vamos, la proxima se puede")

}//FIN DE LA FUNCIÓN