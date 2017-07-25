function main(min, max){
    var jeu = prompt("Devine un nombre en 10 et 20 !");

    var nb = min + (max-min+1)*Math.random();
    var deci = Math.floor(nb);
    console.log(deci);
    
    do{
        if(jeu >= deci){
            jeu = prompt("C'est moin!");
        }
        else if(jeu <= deci){
            jeu = prompt("C'est plus!");
        }
    }while(jeu != deci)
    alert("Gagné!");
}
