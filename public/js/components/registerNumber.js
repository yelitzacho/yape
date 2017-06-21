'use strict';

const RegisterNumber = (update) =>{
	const rowRegister = $('<div class="row"></div>');
	const colRegister = $('<div class="col s12 information"></div>');
	
	const containerInformation = $('<div></div>');
	const imgMovil = $('<img class="center-block" src="img/icons/phone.png" alt="phone">');
	const titleMovil = $('<h3 class="titleMovil center-align">Para comenzar validemos tu número</h3>');
	const descriptionMovil = $('<p class="description center-align">Recibirás un SMS con un código de validación</p>');
	
	const register = $('<div class="input-field col s12">');
	const imgIcon = $('<img src="img/icons/phoneandnumber.png">');
	const inputNumber = $('<input  type="text" class="validate">');
	
	const checkboxContainer = $('<p></p>');
	const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked"/>');
	const labelCheckbox =$('<label for="filled-in-box">Acepto los <a href="#">Términos y condiciones</a></label>');
	const buttonContinue = $('<a class="col s5 btn center-block button-yellow">CONTINUAR</a>');


	containerInformation.append(imgMovil, titleMovil, descriptionMovil);
	checkboxContainer.append(checkbox, labelCheckbox);
	register.append(imgIcon, inputNumber, checkboxContainer, buttonContinue);
	colRegister.append(containerInformation, register);
	rowRegister.append(colRegister);

	return rowRegister;
}