$(document).ready(function(){
	var container = $('<div class="container"></div>');
	var col = $('<div class="col s12"></div>');
	var information = $('<div class="col s12 information"></div>');
	var containerInformation = $('<div></div>');
	var imgMovil = $('<img class="center-block" src="img/icons/phone.png" alt="phone">');
	var titleMovil = $('<h3 class="titleMovil center-align">Para comenzar validemos tu número</h3>');
	var descriptionMovil = $('<p class="description center-align">Recibirás un SMS con un código de validación</p>');
	var register = $('<div class="input-field col s12">');
	var imgIcon = $('<img src="img/icons/phoneandnumber.png">');
	var inputNumber = $('<input id="icon_prefix" type="text" class="validate">');
	var 


	containerInformation.append(imgMovil, titleMovil, descriptionMovil);
	information.append(containerInformation, );
})