const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){

    let dataFrom = new FormData(signinForm);
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if(mailInput.value == "test@mail.fr" && passwordInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "blablablacookie"
        setToken(token)

        setCookie(RoleCookieName, "client", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}