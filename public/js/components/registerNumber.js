'use strict';

const RegisterNumber = (update) =>{
	const rowRegister = $('<div class="row"></div>');
	const colRegister = $('<div class="col s12 information"></div>');
	const formRegister =$('<form id="form"></form>');
	const containerInformation = $('<div></div>');
	const imgMovil = $('<img class="center-block" src="img/icons/phone.png" alt="phone">');
	const titleMovil = $('<h3 class="titleMovil center-align">Para comenzar validemos tu número</h3>');
	const descriptionMovil = $('<p class="description center-align">Recibirás un SMS con un código de validación</p>');
	
	const register = $('<div class="input-field col s12">');
	const imgIcon = $('<img src="img/icons/phoneandnumber.png">');
	const inputNumber = $('<input id="phone" type="number" class="validate">');
	
	const checkboxContainer = $('<p></p>');
	const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box"/>');
	const labelCheckbox =$('<label for="filled-in-box">Acepto los <a href="#">Términos y condiciones</a></label>');
	const buttonContinue = $('<a id="continue" class="submit btn button-yellow">CONTINUAR</a>');      

	containerInformation.append(imgMovil, titleMovil, descriptionMovil);
	checkboxContainer.append(checkbox, labelCheckbox);
	register.append(imgIcon, inputNumber, checkboxContainer, buttonContinue);
	formRegister.append(containerInformation, register);
	colRegister.append(formRegister);
	rowRegister.append(colRegister);

	// buttonContinue.attr('disabled','disabled');

	return rowRegister;

	// const numberPattern = /^(\b[9]{1}[0-9]{8}\b)*$/;

	// $('#phone').keyup(function(){
	//   if ($('#phone').val().length == 9) {
	//     if ($('#filled-in-box').prop('checked') == true){
	//     	$('#phone').removeAttr('disabled');
	//     }
	//   };
	// });
}