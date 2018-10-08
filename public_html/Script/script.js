
var globCellRetournee1 = null;
var globCellRetournee2 = null;
var nbEssai = 0;
var pairTrouve = 0;
var nbUtilisateur = 0;

//l'utlisateur doit entre un nombre(paire) de cases

var contenu = ["#81F7F3", "#FF4000", "#F3F781", "#DA81F5", "#000000","	#cccc00","#00cc00","#0000cc","#cc0000"];



/**
 * 
 * @param {type} a
 * @returns {undefined}
 */
function start(){
    nbUtilisateur = prompt("Entrer le nombre de case");
    while (!(nbUtilisateur%2==0) || (nbUtilisateur>18)){
        nbUtilisateur = prompt("Entrer le nombre de case (il doit etre pair et inferieur a 11)");
    }
    generTableau(nbUtilisateur);
    attribuerCouleur(contenu, nbUtilisateur);
}


/**
 * @param {element html} a
 * Pour chaque clic l'utilisateur doit combiner une paire de couleur,
 * si la combinaison est correcte les cases trouvés disparaissent
 * sinon elles se retournent 
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
            globCellRetournee1.style.backgroundColor = "white";
            globCellRetournee2.style.backgroundColor = "white";
        }
        else{
            pairTrouve+=1;
            //faire disparaitre la pair trouvé
            globCellRetournee1.style.display = "none";
            globCellRetournee2.style.display = "none";
            
            if(pairTrouve == nbUtilisateur/2){
                alert("Gagner \n votre nombre d'essai :"+nbEssai);
                location.reload();
            }
            
        }
        globCellRetournee1 = null;
        globCellRetournee2 = null;
    }
}



/**
 * @param {number}
 * Creer le tableau de jeu, en fonction du nombre entere en parametre
 */
function generTableau(nb) {
    var res = "<tbody>";
    var ligne =0;
    var col =0;
    switch(nb){
        case "12" :
            ligne = 4;
            col = 3;
            break;
        case "16" :
            ligne = 4;
            col = 4;
            break;
        case "18" :
            ligne = 3;
            col = 6;
            break;
        default :
            ligne = 2;
            col = nb/2;
    }
    for (i = 0; i < ligne; i++) {
        res+= "<tr>";
        for(j=0; j< col; j++){
           res = res + "<td>" + i+j + " </td>"; 
        }
       res+="</tr>"; 
    }
    res += "</tbody>";
    document.getElementById("memo").innerHTML = res;
    
}

/**
 * 
 * @param {tab} tab
 * @param {number} nb
 * Attribuer les couleurs du tableau donné en parametre au cellule du tableau html
 */
function attribuerCouleur(tab, nb) {
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
 /**
  * 
  * @param {tab} tab
  * @returns {tableau}
  * Melanger le contenu du tableau donné en parametre 
  */
function shuffle(tab) {
    for (var i = 0; i < tab.length; i++) {
        var j = Math.floor(Math.random() * Math.floor(tab.length));
        var tanpon = tab[i];
        tab[i] = tab[j];
        tab[j] = tanpon;
    }
    return tab;
}

/**
 * 
 * @param {tab} tab
 * Affichage du tableau donné en parametre
 */
function affTab(tab) {
    var res = "";
    for (var i = 0; i < tab.length; i++) {
        res += tab[i];
    }
    alert(res);
    
}