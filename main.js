
	var costo, tiempo, resultado;

	costo = prompt("Por favor, ingresa el costo de llamada por minuto");

	tiempo = prompt("Por favor, ingresa el tiempo de llamada en minutos");

	resultado = parseInt(tiempo) * parseInt(costo);
	alert(resultado);
