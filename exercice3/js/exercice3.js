function euro(){
    let valeurEuro = document.getElementById("euro").value;
    valeurEuro = parseFloat(valeurEuro);
    document.getElementById("dollar").value = valeurEuro * 1.24 + "$";
}

function dollar(){
    let valeurDollar = document.getElementById("dollar").value;
    valeurDollar = Number(valeurDollar);
    document.getElementById("euro").value = valeurDollar / 1.24 + "€";
}