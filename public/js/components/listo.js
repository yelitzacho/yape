'use strict';

const Check = (update) =>{
	const rowCheck = $('<div class="row check"></div>');
	const colCheck = $('<div class="col s12"></div>');
	const check = $('<img src="img/icons/check.png" alt="check">');
	const titleCheck = $('<h3>¡Bien!</h3>');
	const pCheck = $('<p>Ahora ya puedes usar Yape</p>');

	colCheck.append(check, titleCheck, pCheck);
	rowCheck.append(colCheck);

	return rowCheck;
}