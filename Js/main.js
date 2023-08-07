$(document).ready(function () {
  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  })
  $('#Telefone').mask('(00) 000000-0000');

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem:{
        required: true
      },
      veiculo:{
        required: false
      }
    },
    messages: {
      nome: 'Por favor insira o seu nome'
    },
    submitHandler: function (form) {
      console.log(form)
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos)
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })

$('.lista-tenis button').click(function(){
  const destino = $('#contato');
  const nomeVeiculo = $(this).parent().find('h3').text();

  $('#tenis-interesse').val(nomeVeiculo);

  $('html').animate({
    scrollTop: destino.offset().top
  },1000)
})
})