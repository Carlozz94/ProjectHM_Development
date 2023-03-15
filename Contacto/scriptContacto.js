const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mail');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:cazc.zarate94@gmail.com?subject=asunto${form.get('affair')}&body=nombre ${form.get('firstName')}
    apellidos ${form.get('lastName')}
    Mensaje ${form.get('message')}
    telefono ${form.get('phone')} `);
    $buttonMailto.click();
    clear();
}   


document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });