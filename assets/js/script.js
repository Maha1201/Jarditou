const envoi = document.getElementById("envoyer");
envoi.addEventListener("click", valider);


document.getElementById("formulaire").reset(); // Vide le formulaire si on refresh

let nom = document.getElementById("nom");
let nom_m = document.getElementById("nom_m");
let nom_reg = /^[A-Z][a-z]+/;

let prenom = document.getElementById("prenom");
let prenom_m = document.getElementById("prenom_m");
let prenom_reg = /^[A-Z][a-z]+([-'\s][a-zA-Z][a-z]+)?/; // Lettre maj puis minuscule+ et éventuellement prénoms composés

let sexe = document.getElementById("sexe");

let date = document.getElementById("date");
let date_m = document.getElementById("date_m");

let codepostal = document.getElementById("codepostal");
let cp_reg = /^[0-9]{5}$/;

let email = document.getElementById("email");
let email_m = document.getElementById("email_m");
let email_reg = /^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/

// let select = document.querySelector("select"); // Version Lucas
let valeur = sujet.selectedIndex;  

let commentaire = document.getElementById("commentaire");

function valider(event){

    // Champs nom
    if(nom.validity.valueMissing){
        event.preventDefault();
        nom_m.textContent = "Entrez un nom";
        nom_m.style.color = "red";
    }
    else if(nom_reg.test(nom.value) == false){
        event.preventDefault();
        nom_m.textContent = "Entrez un nom valide";
        nom_m.style.color = "#9933ff";
    }
    else if(nom.validity.valueMissing == false){ // vérification en mode triche
        nom_m.textContent = "OK !";
        nom_m.style.color = "green";
    }

    // Champs prénom
    if(prenom.validity.valueMissing){
        event.preventDefault();
        prenom_m.textContent = "Entrez un prénom";
        prenom_m.style.color = "red";
    }
    else if(prenom_reg.test(prenom.value) == false){
        event.preventDefault();
        prenom_m.textContent = "Entrez un prénom valide";
        prenom_m.style.color = "#9933ff";
    }
    else if(prenom.validity.valueMissing == false){ // vérification en mode triche
        prenom_m.textContent = "OK !";
        prenom_m.style.color = "green";
    }

    // // Case sexe : on a mis en checked féminin déjà
    // if((document.getElementById("feminin").checked != 1) && (document.getElementById("masculin").checked != 1)){
    //     event.preventDefault(); // Pas besoin de required pour les cases ?
    //     sexe.textContent = "Quel est votre sexe ?";
    //     sexe.style.color = "red";
    // }

    // Champs date de naissance
    if(date.validity.valueMissing){
        event.preventDefault(); // Required nécessaire mais ça marche po trop
        date_m.textContent = "Entrez votre date de naissance";
        date_m.style.color = "red";
    }
    else if(date.validity.valueMissing == false){
        date_m.textContent = "OK !";
        date_m.style.color = "green";
    }

    // Champs code postal
    if(codepostal.validity.valueMissing){
        event.preventDefault();
        cp_m.textContent = "Entrez un code postal";
        cp_m.style.color = "red";
    }
    else if(cp_reg.test(codepostal.value) == false){
        event.preventDefault();
        cp_m.textContent = "Entrez un code postal valide";
        cp_m.style.color = "#9933ff";
    }
    else if(codepostal.validity.valueMissing == false){
        cp_m.textContent = "OK !";
        cp_m.style.color = "green";
    }

    // Champs email
    if(email.validity.valueMissing){
        event.preventDefault();
        email_m.textContent = "Entrez un mail";
        email_m.style.color = "red";
    }
    else if(email_reg.test(email.value) == false){
        event.preventDefault();
        email_m.textContent = "Entrez un mail valide";
        email_m.style.color = "#9933ff";
    }
    else if(email.validity.valueMissing == false){
        email_m.textContent = "OK !";
        email_m.style.color = "green";
    }

    // Champs select

    // select.addEventListener("change", function (){
    //     event.preventDefault();
    //     sujet_m.textContent = "Choisissez un sujet";
    //     sujet_m.style.color = "red";
    // });
    // if(valeur == 0){ // inutile puisqu'on a disable choix 0
    //     event.preventDefault();
    //     sujet_m.textContent = "Choisissez un sujet";
    //     sujet_m.style.color = "red";
    // }
    if(valeur != 0){
        sujet_m.textContent = "OK !";
        sujet_m.style.color = "green";
    }

    // Champs commentaire
    if(commentaire.validity.valueMissing){
        event.preventDefault();
        commentaire_m.textContent = "Entrez votre commentaire";
        commentaire_m.style.color = "red";
    }
    else if(commentaire.validity.valueMissing == false){
        commentaire_m.textContent = "OK !";
        commentaire_m.style.color = "green";
    }

    // Champs accepter
    if(document.getElementById("accepter").checked != 1){
        event.preventDefault();
        accepter_m.textContent = "Acceptez le traitement informatique du formulaire";
        accepter_m.style.color = "red";
    }
    else if(document.getElementById("accepter").checked == 1){
        accepter_m.textContent = "OK !";
        accepter_m.style.color = "green";
    }
}