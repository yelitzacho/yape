'use strict';

const RegisterCode = (update) =>{
	const rowCode = $('<div class="row"></div>');
	const colCode = $('<div class="col s12 registerCode">');
	const containerCode = $('<div></div>');
	const imgCode = $('<img class="center-block" src="img/icons/message.png" alt="phone">');
	const titleCode = $('<h3 class="titleMovil center-align">Ahora ingresa tu código</h3>');
	const descriptionCode = $('<p class="description center-align">Enviaremos un SMS con el código de validación al número</p>');
	const inputCode = $('<div class="input-field col s12"></div>');
	const imgInput = $('<img src="img/icons/lock.png">');
	const inputValidate = $('<input id="inputValidate" type="text" class="validate" placeholder="-  -  -  -  -">');
	const pCode = $('<p></p>');
	// const labelCode = $('<label for="filled-in-box center-align">Reintentar en <img src="img/icons/clock.png" alt="clock"> 21s</label>');

	// pCode.append(labelCode);
	inputCode.append(imgInput, inputValidate, pCode);
	containerCode.append(imgCode, titleCode, descriptionCode);
	colCode.append(containerCode, inputCode);
	rowCode.append(colCode);

	return rowCode;
}
