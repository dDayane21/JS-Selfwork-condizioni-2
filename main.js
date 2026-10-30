let t = 30;


/* if(t < -10){
    console.log('copriti…ancora ti raffreddi');
}

else if(t < 0){
    console.log('non è tanto il freddo quanto l’umidità');

}else if(t < 20){
    console.log('non ci sono più le mezze stagioni');

}else if(t < 30){
    console.log('mi dia una peroni sudata');
    
}else if(t >= 30){
    console.log('lu mare, lu sole, lu ientu');
} */



let commento;
switch (true) {
    case t < -10:
        commento = 'copriti…ancora ti raffreddi';
        break;

    case t < 0:
        commento = 'non è tanto il freddo quanto l’umidità';
        break;

    case t < 20:
        commento = 'non ci sono più le mezze stagioni';
        break;

    case t < 30:
        commento = 'mi dia una peroni sudata';
        break;

    case t >= 30:
        commento = 'lu mare, lu sole, lu ientu';
        break;

    default:
        if (typeof t !== 'number'){
        commento = 'Errore. Inserisci una temperatura!';
        }
        break;
}

console.log(commento);

