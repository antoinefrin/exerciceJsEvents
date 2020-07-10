let tableau = document.createElement("table");
let titreRangee = document.createElement("tr");
let colonneA = document.createElement("td");
let colonneB = document.createElement("td");
let colonneC = document.createElement("td");
let colonneD = document.createElement("td");

colonneA.innerHTML = "Numéro Client";
colonneB.innerHTML = "Nom";
colonneC.innerHTML = "Prenom";
colonneD.innerHTML = "Mail";

titreRangee.appendChild(colonneA);
titreRangee.appendChild(colonneB);
titreRangee.appendChild(colonneC);
titreRangee.appendChild(colonneD);

tableau.appendChild(titreRangee);
let i = 999;

function newClient(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let mail = document.getElementById("mail").value;
    let body = document.getElementsByTagName("body")[0];

    i++;
    let rangee = document.createElement("tr");

    let colonneClientNumber = document.createElement("td");
    let colonneNom = document.createElement("td");
    let colonnePrenom = document.createElement("td");
    let colonneMail = document.createElement("td");
    let colonneClientNumberText = document.createTextNode("client N° "+i);

    
    colonneNom.innerHTML = nom;
    colonnePrenom.innerHTML = prenom;
    colonneMail.innerHTML = mail;

    colonneClientNumber.appendChild(colonneClientNumberText);
    rangee.appendChild(colonneClientNumber);
    rangee.appendChild(colonneNom);
    rangee.appendChild(colonnePrenom);
    rangee.appendChild(colonneMail);
    tableau.appendChild(rangee);

    body.appendChild(tableau);
    
    // style css tableau
    $("td").css("background-color", "red");
    $("td").css("width", "150px");

}
console.log(newClient);
console.log(tableau);