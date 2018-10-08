var globCellRetournee1 = null;
var globCellRetournee2 = null;

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clic(a) {

    if (globCellRetournee1 == null) {// Aucune cell retournée
        globCellRetournee1 = a;
        a.style.backgroundColor = a.getAttribute("name");
    } else if (globCellRetournee2 == null) {// Cell 1 retournée pas la 2
        globCellRetournee2 = a;
        a.style.backgroundColor = a.getAttribute("name");
    } else {// Les 2 cell sont retournées

        if ( globCellRetournee1.getAttribute("name") != globCellRetournee2.getAttribute("name") ) {
            nbEssai += 1;
            // alert(nbEssai);
            globCellRetournee1.style.backgroundColor = "white";
            globCellRetournee2.style.backgroundColor = "white";
        }
        else{
            pairTrouve+=1;
            if(pairTrouve == nbUtilisateur/2){
                alert("Gagner \n votre nombre d'essai :"+nbEssai);
            }
        }
        globCellRetournee1 = null;
        globCellRetournee2 = null;
    }
}

var nbEssai = 0;
var pairTrouve = 0;
var nbUtilisateur = prompt("Entrer le nombre de case");
while (!(nbUtilisateur % 2 == 0) && nbUtilisateur > 11) {
    nbUtilisateur = prompt("Entrer le nombre de case (il doit etre pair et inferieur a 11)");
}
var contenu = ["#81F7F3", "#FF4000", "#F3F781", "#DA81F5", "#000000"];

generTableau(nbUtilisateur);
attribuerCouleur(contenu, nbUtilisateur);


function generTableau(nb) {
    var res = "<tbody>";
    var entre = nb / 2;
    for (i = 0; i < entre; i++) {
        res = res + "<tr><td>" + i + " </td> <td>" + i + " </td></tr>";
    }
    res += "</tbody>";
    document.getElementById("memo").innerHTML = res;
}

function attribuerCouleur(tab, nb) {
    var tableauhtml = document.getElementById("memo");
    var tabCellule = document.querySelectorAll("td");
    var tabCouleur = [];
    for (var i = 0; i < (nb / 2); i++) {
        tabCouleur.push(tab[i]);
        tabCouleur.push(tab[i]);
    }
    tabCouleur = shuffle(tabCouleur);

    for (var i = 0; i < nb; i++) {
        tabCellule[i].setAttribute("name", tabCouleur[i]);
        tabCellule[i].setAttribute("onClick", "clic(this)");
        tabCellule[i].setAttribute("id", tabCouleur[i] + i);
    }
}

function shuffle(tab) {
    for (var i = 0; i < tab.length; i++) {
        var j = Math.floor(Math.random() * Math.floor(tab.length));
        var tanpon = tab[i];
        tab[i] = tab[j];
        tab[j] = tanpon;
    }
    return tab;
}

function affTab(tab) {
    var res = "";
    for (var i = 0; i < tab.length; i++) {
        res += tab[i];
    }
    alert(res);
}