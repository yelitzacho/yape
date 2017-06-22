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

  $('#continue').on('click', function(){
    state.components = "RegisterCode"
    update();
  });

  $('#inputValidate').keyup(function(){
    if ($(this).val() === 12345) {
      state.components = "Check"
      update();
    }
  });

  // $('#continue').attr('disabled','disabled');


  // $('#filled-in-box').change(function(){
  //   if ($('#phone').val().length == 9 &&
  //      ($('filled-in-box').prop('checked') == true)){
  //         $('#continue').removeAttr('disabled');
  //   }
  // })

  // let numberPattern = /\b[9]{1}[0-9]{8}\b/;
  // $('#phone').on('keyup', () =>{
  //   if ($('#phone').val().length == 9) {
  //     if ($('#filled-in-box').is(':checked') ? true : false) {
  //       $('#continue').removeAttr('disabled');
  //     } else {
  //       $('#continue').attr('disabled','disabled');
  //   }
  // }});

  // if (($('#phone').val()).length == 9) {
  //   if($('#filled-in-box').prop('checked') == true){
  //     $('#continue').removeAttr('disabled');
  //   } else {
  //     $('#continue').attr('disabled','disabled');
  //   }
  // }


//   if ($('#phone').val().length == 9 || isNaN($('#phone').val())) {
//     return false;
//   }

//     if($(this).val() !=''){
//       $('#continue').removeAttr('disabled');
//     }

// function checkRadioBox(nameRadioBox) {
//   return $(nameRadioBox).is(":checked") ? true : false;
// }

  // function checkForm(idForm) {
  //   $(idForm)+" *".on("change keydown", function(){
  //     if (checkInput("#phone", numberPattern) &&
  //       checkBox("#filled-in-box"))
  //     {
  //       enableSubmit(idForm);
  //     }else{
  //       disableSubmit(idForm);
  //     }
  //   });
  // }

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