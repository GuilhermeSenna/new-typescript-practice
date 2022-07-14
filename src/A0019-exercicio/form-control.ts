import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

// let formHandler = document.getElementById('form') as HTMLFormElement;

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);

    if (shouldSendForm(this)) console.log('FORMULÁRIO VALIDADO!');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach(input => {
        if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
    });
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'senhas não batem');
        showErrorMessage(password2, 'senhas não batem');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES),
    );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        '.error-message',
    ) as HTMLSpanElement;

    errorMessage.innerText = msg;

    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(
        () => (send = false),
    );

    return send;
}

// showErrorMessage(username, 'MENSAGEM');
// hideErrorMessages(form);

// if(ele.addEventListener){
//     ele.addEventListener("submit", callback, false);  //Modern browsers
// }

// const handleForm = (e) => {
//     console.log(e);
// };

// formHandler.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     // const element = e.currentTarget as HTMLInputElement

//     // interface formulario {
//     //     usuario: string;
//     //     email: string;
//     //     senha: string;
//     //     confirmarSenha: string;
//     // }

//     // const { username.value: usuario, email, password.value: senha, password2.value: confirmarSenha }: formulario = e.target;

//     // const usuario = username.value;
//     // const email = email.value;
//     // const senha = password.value;
//     // const confirmarSenha = password2.value;

//     console.log(usuario, email, senha, confirmarSenha);
// });
