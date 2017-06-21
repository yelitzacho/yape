'use strict';

const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');
  
  const update = function(){
  	render(root);
  }
  
  // container.append(Welcome(update));

  // const button = $('<a class="col s12 btn center-block button-yellow">REGISTRARME</a>');
  // button.click(function(){
  //   console.log(button);
  // })
  container.append(RegisterNumber(update));
  
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
}

$( _ => {
    const root = $('#root');
    render(root);
});