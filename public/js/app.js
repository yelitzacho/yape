'use strict';

const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');

  const update = function(){
    render(root);
  }

  if (state.components === null) {
    container.append(Welcome(_=>render(root)));
  } else if (state.components === "RegisterNumber") {
    container.append(RegisterNumber(_=>render(root)));
  } else if (state.components === "RegisterCode") {
    container.append(RegisterCode(_=>render(root)));
  } else if (state.components === "CreateUser") {
    container.append(CreateUser(_=>render(root)));
  } else if (state.components === "Check") {
    container.append(Check(_=>render(root)));
  }

  root.append(container);

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $('.register').on('click', function(){
    state.components = "RegisterNumber"
    update();
  });

  $('#continue').attr('disabled','disabled');

  const numberPattern = /^(\b[9]{1}[0-9]{8}\b)*$/;
  const valor = $('#phone').val();

  $('#phone').keyup(function(){
    if ($('#phone').val().length == 9) {
      // console.log(valor.length);
      $('#continue').removeAttr('disabled');
    }
  });

  $('#continue').on('click', function(){
    state.components = "RegisterCode"
    update();
  });

  const codePattern = /^(\b[0-9]{5}\b)*$/;

  $('#inputValidate').keyup(function(){
    if ($('#inputValidate').val().length == 5) {
      state.components = "CreateUser"
      update();
    }
  });

  $('#newUser').attr('disabled','disabled');

  $('#inputName').keyup(function(){
    if ($('#inputName').val().length < 1) {
      return false
    } else if ($('#inputMail').val().length < 1) {
      return false;
    } else if ($('#inputLock').val().length) {
      return false;
    } else {
      $('#newUser').removeAttr('disabled');
    }
  });

  $('#newUser').on('click', function(){
    state.components = "Check"
    update();
  });


 //  $('#continue').removeAttr('disabled');
 //     }

  // $('#filled-in-box').change(function(){
  //   if ($('#phone').val().length == 9 &&
  //      ($('filled-in-box').prop('checked') == true)){
  //         $('#continue').removeAttr('disabled');
  //   }
  // })

}

const state = {
  data: null,
  selectedData: null,
  components: null
};

$( _ => {
    const root = $('#root');
    render(root);
});