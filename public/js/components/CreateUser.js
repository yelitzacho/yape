'use strict';

const CreateUser = (update) =>{
	const rowUser = $('<div class="row"></div>');
	const colUser = $('<div class="col s12 registerCode">');
	const containerUser = $('<div></div>');
	const imgUser = $('<img class="center-block" src="img/icons/lockone.png" alt="lockone">');
	const titleUser = $('<h3 class="titleMovil center-align">Crea tu usuario Yape</h3>');
	const descriptionUser = $('<p class="description center-align">Ingresa un nombre, email y clave de usuario</p>');
	const inputUser = $('<div class="input-field col s12"></div>');
	const imgInputName = $('<img src="img/icons/user.png">');
	const inputValidateName = $('<input type="text" class="validate" placeholder="Nombre">');
	const imgInputMail = $('<img src="img/icons/message-gray.png">');
	const inputValidateMail = $('<input type="text" class="validate" placeholder="correo@ejemplo.com">');
	const imgInputLock = $('<img src="img/icons/lock.png">');
	const inputValidateLock = $('<input type="text" class="validate" placeholder="Ingresa clave de 6 dígitos">');
	const pUser = $('<p></p>');
	const labelUser = $('<label for="filled-in-box center-align">Cuida esta clave como oro, es tu acceso a Yape</label>');
	const buttonCrearCuenta = $('<a class="btn cenock button-yellow disabled" dis>CREAR CUENTA</a>');      


	pUser.append(labelUser);
	inputUser.append(imgInputName, inputValidateName, imgInputMail, inputValidateMail, imgInputLock, inputValidateLock,pUser);
	containerUser.append(imgUser, titleUser, descriptionUser);
	colUser.append(containerUser, inputUser, buttonCrearCuenta);
	rowUser.append(colUser);

	return rowUser;
}
