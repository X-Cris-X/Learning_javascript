let num1 = 5;
let num2 = 3;
let resultado;
let nameDeOperacion = "multiplica";

switch(nameDeOperacion){

	case "suma":
	resultado = num1 + num2;
	console.log(resultado);
	break;
	
	case "resta":
	resultado = num1 - num2;
	console.log(resultado);
	break;

	case "divide":
	resultado = num1 / num2;
	console.log(resultado);
	break;

	case "multiplica":
	resultado = num1 * num2;
	console.log(resultado);
	break;
}