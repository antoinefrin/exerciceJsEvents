function calcul(){
    let message = document.getElementById("message");
    let nombreCaractere = document.getElementById("nombreCaractere");
    let nombreMot = document.getElementById("nombreMot");

    let depassementCaractere = document.getElementById("depassementCaractere");
    let depassementMot = document.getElementById("depassementMot");

    nombreCaractere.innerHTML = message.value.length;
    nombreMot.innerHTML = message.value.split(" ").filter(i => i != "").length; // SANS le code ==> filter(i => i != "") il est ajouter 1 mot dès un espace après le mot precédent MAIS AVEC il comptabilse le mot dès la première lettre saisie 

    if (nombreCaractere.innerHTML > 100) {
        depassementCaractere.innerHTML = "Dépassement du nombre caractères autorisés.";
    }else{
        depassementCaractere.innerHTML = "";
    }
    if(nombreMot.innerHTML > 10){
        depassementMot.innerHTML = "Dépassement du nombre de mots autorisés.";
    }else{
        depassementMot.innerHTML = "";
    }
}