var v = parseInt(prompt("Buongiorno prof! Che voto mi merito sull'esercitazione?"))


if(v < 18){
    alert("Spiacente, voto insufficiente!");
} else if(v >= 18 && v < 21){
    alert("Voto: Sufficiente!");
} else if(v >= 21 && v < 24){
    alert("Voto: Buono!");
} else if(v >= 24 && v < 27){
    alert("Voto: Distinto!");
} else if(v >= 27 && v < 29){
    alert("Voto: Ottimo!");
} else if(v == 30){
    alert("Voto: Eccellente!");
} else{
    alert("Valore non valido!")
}




