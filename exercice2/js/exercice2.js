let phrase = document.getElementById("phrase").innerHTML;
let phraseSaisie = document.getElementById("phraseSaisie");
let result = document.getElementById("result");

function verification(){
    if(phraseSaisie.value !== phrase){
        result.innerHTML = "Vous avez fait une erreur, veuillez saisir a nouveau.";
    }else{
        result.innerHTML = "Vous avez validé les conditions de vente ";
    }
}