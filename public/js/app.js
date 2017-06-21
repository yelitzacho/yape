'use strict';
// const root = $('#root');

const render = (root) => {
  root.empty();

  const container = $('<div class="container"></div>');
  const update = function(){
  	render(root);
  }
  container.append(Welcome(update));
  if(){ //si el boton esta presionado
  	container.append(RegisterNumber(update));
  }
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
}

$( _ => {
    const root = $('#root');
    render(root);
});
