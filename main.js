//Pop-up help: como usar 
const helpIcon = document.querySelector('#help-icon');
////// Form Validation (dois nomes, min de 9 dígitos telefone[isso provavelmente sera com um array]);
const form = document.querySelector("form");
const errorMsgDisplay = document.querySelector('#error-msg');
const errorMsgName = '<p>Inisire <b>Nome</b> e <b>Sobrenome</b> ao contato.</p>';
const errorMsgTel = '<p>Confira se o número possui ao menos <b>8 dígitos</b> e <b>apenas números.</b></p>';
const telArrayAll = [];
let telInput = document.querySelector('#tel-input');
let nameInput = document.querySelector('#name-input');
let contactsLines = '';

helpIcon.addEventListener('click', (e) => {
    alert('Para utilizar nossa agenda de contatos corretamente adicione nome e sobrenome ao campo de contato, e um telefone de no mínimo 8 dígitos.')
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Validação Nome// function nameValidation()
    nameValidator();
    //Validação Telefone// funciont telValidation()
    telValidator();
    //Inserir row com contato// function newContactAdd()
    newContactAdd();

    telInput.value = '';
    nameInput.value = '';
});

function newContactAdd() {

    if (errorMsgDisplay.classList.contains('error-msg'))  {
        console.log('error');
    } else {
        telArrayAll.push(telInput.value);
        
        let newLine = '<tr>';
        newLine += `<td>${nameInput.value}</td>`;
        newLine += `<td>${telInput.value}</td>`;
        newLine += '</tr>';

        contactsLines += newLine;

        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = contactsLines;
    }
}

function nameValidator() {
    
    let nameInputArray = nameInput.value.split(' ');

    if (nameInputArray.length < 2 ) {
        errorNameInput ();
    } else {
        console.log('sucess');
        console.log(nameInputArray.length >= 2)
        return nameInputArray.length >= 2;
    }
};

function telValidator() {
    //Tel.value as array
    let telInputArray = telInput.value.split('');

    //Validação caracteres dígitos
    for(let i = 0; i < telInputArray.length; i++) {
        let caracterTel = parseInt(telInputArray[i]);

        if (Number.isInteger(caracterTel) === false ) {
            errorTelInput();
            errorMsgDisplay.innerHTML += `<p>"${telInputArray[i]}" não é um número...</p>`
        }
    }    
    //Validação número de dígitos
    if ( telInputArray.length < 8 ) {
        errorTelInput();
    } else {
        return telInputArray.length >= 8
    }
}

function errorNameInput () {

    errorMsgDisplay.classList.add('error-msg')
    errorMsgDisplay.innerHTML = errorMsgName;

    setTimeout(() => {
        errorMsgDisplay.classList.remove('error-msg');
    }, 5000)
};

function errorTelInput() {

    errorMsgDisplay.classList.add('error-msg')
    
    if (errorMsgDisplay.innerHTML === errorMsgName) {
        errorMsgDisplay.innerHTML += errorMsgTel;
    } else {
        errorMsgDisplay.innerHTML = errorMsgTel;
        
    }

    setTimeout(() => {
        errorMsgDisplay.classList.remove('error-msg');
    }, 5000)
};
