/*Eine Primzahl ist eine natürliche Zahl p ≥ 2, die nur durch 1 und sich selbst teilbar ist.

Gegeben sei der folgende Text:
            NILYOKVMXQEYPTIYRKIOFQMPMWFDZKAXBZPFHQYELGEIOUNYGJ

Betrachtet man ausschließlich Zeichen, die an bestimmten Positionen im Text stehen,
und schreibt sie hintereinander, kann man auf die Weise neue Sätze und Wörter bilden.

Hinweis: Das erste Zeichen im Text steht für uns an Position 1.

Aufgabe: Finden Sie den Text, den man erhält, wenn man aus dem oberen Text
                   nur die Zeichen herausschriebt, die an Position einer Primzahl stehen.*/


let txt = "NILYOKVMXQEYPTIYRKIOFQMPMWFDZKAXBZPFHQYELGEIOUNYGJ"
let len = txt.length
let outtxt = ""

for (let i = 1; i <= len; i++) { //Zählschleife über Länge des Textes
	if (i > 1) {
		let prim = 0;
		for (let a = 1; a < i; a++) { //Zählen der Teiler
			if (i%a == 0) {
				prim++;
			}
		}
		if (prim < 2) {  //wenn weniger als 2 Teiler -> Primzahl
			outtxt = outtxt + txt.charAt(i - 1); //entsprechender Buchstabe wird ins Lösungswort geschrieben
		}
		prim = 0;
	}
}
console.log(outtxt);