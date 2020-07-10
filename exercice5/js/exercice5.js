function calculeImpot(){

    let revenu =  Number(document.getElementById("revenu").value);
    let codePostal = String(document.getElementById("codePostal").value);
    let result = document.getElementById("result");
    let montantImpot;

    if(codePostal.substr(0, 2) == 59 || codePostal.substr(0, 2) == 62 ){
        result.innerHTML = "Vous n'avez pas d'impôt à payer";
    }else{
        montantImpot = revenu / 2;
        result.innerHTML = "Vous avez "+ montantImpot +" d'impôt à payer.";
    }
}