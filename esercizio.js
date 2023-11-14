let stockMaglietteBlu = 20
let stockMaglietteVerde = 20
let stockMaglietteRosso = 20

alert("Buongiorno e benvenuto sul mio shop di magliette online!")
let colore = prompt("Inserisci il colore desiderato tra Blu, Verde e Rosso!")
let ordine = parseInt(prompt("Buongiorno! Inserisci la quantità di magliette da acquistare!"))


switch(colore){
    case "Blu":
        if (ordine <= stockMaglietteBlu){
            alert("Complimenti! Hai acquistato " + ordine + " magliette di colore " + colore)
            let rimanenza = stockMaglietteBlu - ordine
            alert("Rimangono in magazzino " + rimanenza + " magliette di colore " + colore)
        } else {
            alert("Numero di magliette non disponibili in magazzino")
        }
        break;
    case "Rosso":
        if (ordine <= stockMaglietteRosso){
            alert("Complimenti! Hai acquistato " + ordine + " magliette di colore " + colore)
            let rimanenza = stockMaglietteRosso - ordine
            alert("Rimangono in magazzino " + rimanenza + " magliette di colore " + colore)
        } else {
            alert("Numero di magliette non disponibili in magazzino")
        }
        break;
    case "Verde":
        if (ordine <= stockMaglietteVerde){
            alert("Complimenti! Hai acquistato " + ordine + " magliette di colore " + colore)
            let rimanenza = stockMaglietteVerde - ordine
            alert("Rimangono in magazzino " + rimanenza + " magliette di colore " + colore)
        } else {
            alert("Numero di magliette non disponibili in magazzino")
        }
        break;       
    default:
        alert("L'operazione non è supportata")
        break;
}











