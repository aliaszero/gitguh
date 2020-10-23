let opera1;
let opera2;
let opera3;

function init() {
	let resultado = document.getElementById("resultado");

	let reset = document.getElementById("reset");

	let cero = document.getElementById("cero");
	let uno = document.getElementById("uno");
	let dos = document.getElementById("dos");
	let tres = document.getElementById("tres");
	let cuatro = document.getElementById("cuatro");
	let cinco = document.getElementById("cinco");
	let seis = document.getElementById("seis");
	let siete = document.getElementById("siete");
	let ocho = document.getElementById("ocho");
	let nueve = document.getElementById("nueve");

	let suma = document.getElementById("suma");
	let resta = document.getElementById("resta");
	let multiplicacion = document.getElementById("multiplicacion");
	let division = document.getElementById("division");
	let igual = document.getElementById("igual");
}

cero.onclick = function (e) {
	resultado.textContent = resultado.textContent + "0";
};

uno.onclick = function (e) {
	resultado.textContent = resultado.textContent + "1";
};

dos.onclick = function (e) {
	resultado.textContent = resultado.textContent + "2";
};

tres.onclick = function (e) {
	resultado.textContent = resultado.textContent + "3";
};
cuatro.onclick = function (e) {
	resultado.textContent = resultado.textContent + "4";
};
cinco.onclick = function (e) {
	resultado.textContent = resultado.textContent + "5";
};
seis.onclick = function (e) {
	resultado.textContent = resultado.textContent + "6";
};
siete.onclick = function (e) {
	resultado.textContent = resultado.textContent + "7";
};
ocho.onclick = function (e) {
	resultado.textContent = resultado.textContent + "8";
};
nueve.onclick = function (e) {
	resultado.textContent = resultado.textContent + "9";
};

reset.onclick = function (e) {
	borrar();
};
suma.onclick = function (e) {
	opera1 = resultado.textContent;
	operacion = "+";
	limpiar();
};
multiplicacion.onclick = function (e) {
	opera1 = resultado.textContent;
	operacion = "*";
	limpiar();
};
resta.onclick = function (e) {
	opera1 = resultado.textContent;
	operacion = "-";
	limpiar();
};
division.onclick = function (e) {
	opera1 = resultado.textContent;
	operacion = "/";
	limpiar();
};
igual.onclick = function (e) {
	opera2 = resultado.textContent;
	resolver();
};

function borrar() {
	resultado.textContent = "";
	opera1 = 0;
	opera2 = 0;
	operacion = "";
}

function limpiar() {
	resultado.textContent = "";
}

function resolver() {
	let res = 0;
	switch (operacion) {
		case "+":
			res = parseInt(opera1) + parseInt(opera2);
			break;
		case "*":
			res = parseFloat(opera1) * parseFloat(opera2);
			break;
		case "-":
			res = parseInt(opera1) - parseInt(opera2);
			break;
		case "/":
			res = parseFloat(opera1) / parseFloat(opera2);
			break;
	}

	borrar();
	resultado.textContent = res;
}
