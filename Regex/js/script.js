const campo = document.querySelector('#campo');
const button = document.querySelector('#button');
const regex = /abc+/g;
const validation=campo.value.match(regex);

      button.addEventListener('click', e {console.log(validation);});