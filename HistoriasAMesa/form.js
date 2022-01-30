var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.primeiro = document.getElementById('primeiro');
    fields.ultimo = document.getElementById('ultimo');
    fields.email = document.getElementById('email');
    fields.newsletter = document.getElementById('newsletter');
    fields.msg = document.getElementById('msg');
   })

   // VERIFICAR SE OS FIELDS ESTÃO VAZIOS

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   // VERIFICAR SE OS CARACTERES SÃO NUMEROS

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }

   // VERIFICAR SE EMAIL ESTA NO FORMATO CORRETO

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   // VERIFICAR FORM E DAR ALERTA SE ALGUMA DAS FUNÇOES ANTERIORES DETETAR ERROS

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }


function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.primeiro, isNotEmpty);
    valid &= fieldValidation(fields.ultimo, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.msg, isNotEmpty);
   
    return valid;
   }


   // SALVAR INFO

   class User {
    constructor(primeiro, ultimo, email, newsletter, msg) {
    this.primeiro = primeiro;
    this.ultimo = ultimo;
    this.email = email;
    this.newsletter = newsletter;
    this.msg = msg;
    }
   }

   // ENVIAR E FAZER REFRESH

function enviarMsg(){
    if(isValid()) {
        alert("Obrigado pela mensagem.")
    } else {
        alert("Há um erro.")
    }
}

