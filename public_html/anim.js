function main(min, max) {
    var jeu = prompt("Devine un nombre en 10 et 20 !");
    var parti = 0;
    var cpt = 0;
    var continuer;
    var nb = min + (max - min + 1) * Math.random();
    var deci = Math.floor(nb);
    console.log(deci);

    do {
        do {
            cpt++;
            if (jeu >= deci) {
                jeu = prompt("C'est moin!");
            } else if (jeu <= deci) {
                jeu = prompt("C'est plus!");
            }
        } while (jeu != deci)
        parti++;
        continuer = confirm("Gagné en " + cpt + " essai et " + parti + " parties .\nVeux-tu rejouer ?");
    } while (continuer == true);
    alert("the end");
}

