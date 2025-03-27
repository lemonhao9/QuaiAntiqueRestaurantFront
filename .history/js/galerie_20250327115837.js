const galerieImage = document.getElementById("allImages");
let monImage = getImage("titre", "../images/platGalerie5.jpg");
// récupérer les informations des images

let titre = "titre"
let imgSource = "../images/platGalerie5.jpg";

galerieImage.innerHTML = monImage;

function sanitizeHtml(text){
    const tempHtml = document.createElement('div');
    tempHtml.textContent = text;
    return tempHtml.innerHTML;
}

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
        <div class="image-card text-white">
            <img src="${urlImage}" alt="platGalerie1" class="rounded w-100">
            <p class="titre-image">${titre}</p>
            <div class="action-image-buttons" data-show="admin">
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </div>`;
}