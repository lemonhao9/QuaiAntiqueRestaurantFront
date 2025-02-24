//Implémenter le JavaScript de ma page

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputVaidatePassword = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup",validateForm);
inputMail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm);
inputVaidatePassword.addEventListener("keyup",validateForm);

function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPreNom);
    validateMail(inputMail);
}

function validateMail(input){
    //Définit mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = inputMail.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
    }