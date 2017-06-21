'use strict';

const Welcome = (update) =>{
	const row = $('<div class="row"></div>');
	const col = $('<div class="col s12"></div>');
	const carousel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');
	const carouselItem1 = $('<div class="carousel-item" href="#one!"></div>');
	const imgItem1 = $('<img src="img/icons/icon-people.png" alt="icon people">');
	const titleItem1 = $('<h3 class="titleMovil center-align">Paga a tus amigos</h3>');
	const descriptionItem1 = $('<p class="description center-align">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');
	const carouselItem2 = $('<div class="carousel-item" href="#two!"></div>');
	const imgItem2 = $('<img src="img/icons/happy-person.png" alt="happy person">');
	const titleItem2 = $('<h3 class="titleMovil center-align">Sin número de cuenta</h3>');
	const descriptionItem2 = $('<p class="description center-align">Elige a quién pagar desde tu lista de contactos.</p>');
	const carouselItem3 = $('<div class="carousel-item" href="#three!"></div>');
	const imgItem3 = $('<img src="img/icons/group-people.png" alt="group people">');
	const titleItem3 = $('<h3 class="titleMovil center-align">Gratis y Seguro</h3>');
	const descriptionItem3 = $('<p class="description center-align">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
	const button = $('<a class="col s12 btn center-block button-yellow">REGISTRARME</a>');

	carouselItem1.append(imgItem1, titleItem1, descriptionItem1);
	carouselItem2.append(imgItem2, titleItem2, descriptionItem2);
	carouselItem3.append(imgItem3, titleItem3, descriptionItem3);
	carousel.append(carouselItem1, carouselItem2, carouselItem3);
	col.append(carousel, button);
	row.append(col);

	return row;
}

