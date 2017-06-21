'use strict';

const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');
  
  const update = function(){
  	render(root);
  }

  container.append(Check(update));
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  // $('.register').on('click', function(){
  //   root.empty();
  //   container.append(RegisterNumber(update));
  // });
}

$( _ => {
    const root = $('#root');
    render(root);
});