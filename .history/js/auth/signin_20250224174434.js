const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btn-signin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if(mailInput.value == "test@mail.com" && PasswordInput.value == "123"){
        alert ("Vous êtes connecté");
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-valid");
        PasswordInput.classList.add("is-invalid");
    }
}