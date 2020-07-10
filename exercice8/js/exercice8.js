function refresh(){
    let millisecondes = 1000; // rafraîchissement en millisecondes pour éviter un décalage de l'horloge
    setTimeout("showHours()", millisecondes);
}

function showHours(){
    let date = new Date()
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    
    if (heure < 10){
        heure = "0" + heure; // Boucle "if" pour mettre un 0 devant les chiffres de 0 à 9 ex: 08(h):04(m):03(s)
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (seconde < 10){
        seconde = "0" + seconde;
    }

    let time = heure + ":" + minute + ":" + seconde;
    document.getElementById("horloge").innerHTML = time;
    refresh();
 }

/*
function horloge() {
    let date = new Date()
    document.getElementById("horloge").innerHTML = date.getHours() + ":"+ date.getMinutes() +":"+ date.getSeconds();
    setTimeout("horloge()",900);
      console.log("Exécution de horloge()");
}
horloge();*/