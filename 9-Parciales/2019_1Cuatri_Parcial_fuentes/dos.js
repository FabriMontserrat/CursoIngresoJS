function mostrar()
{
	var nombrenovio;
	var nombrenovia;
	var pesonovio;
	var pesonovia;

	nombrenovio = prompt ("Ingrese el nombre del novio");
	nombrenovia = prompt ("Ingrese el nombre de la novia");
	pesonovio = prompt ("Ingrese el peso de " + nombrenovio);
	pesonovia = prompt ("Ingrese el peso de " + nombrenovia);

	pesonovio=parseInt(pesonovio);
	pesonovia=parseInt(pesonovia);
	var pesopromedio;

	pesopromedio = ((pesonovio + pesonovia) / 2 );

	alert("ustedes se llaman " +nombrenovio+ " y " + nombrenovia +" pesan " + pesonovio + " y " + pesonovia + " kilos, que sumados son " + (pesonovio + pesonovia) + " kilos y el promedio de peso es " + pesopromedio);
	  
}

//alert("ustedes se llaman " + nombrenovio + " y " + nombrenovia " pesan " + pesonovio + " y " pesonovia + " kilos, que sumados son " + pesopromedio " kilos y el promedio de peso xx")