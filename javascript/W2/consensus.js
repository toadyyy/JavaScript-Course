/*Gegeben sei die folgende Liste von Strings:
      BYCKSTABFNIALAT, BUCHSTRBENSFLPT, BUCNSIHBENSALAT, BVIXZIREFNZALAY, BUGH-IRREMSRLAI,
      BVIHSYABENZALRY, RYCHSTHEENSAIAT, BUIHZYABF-SACAI, RYGKS-ABFH-ALA-, BVGHSTPPENSR-AT

Die Consensus-Sequenz erhält man, indem man alle Strings untereinander schreibt
und in jeder Spalte das am häufigsten vorkommende Zeichen bestimmt und notiert.

Aufgabe: Finden Sie die Consensus-Sequenz für die obere Liste von Strings.*/



let salat = "BYCKSTABFNIALAT, BUCHSTRBENSFLPT, BUCNSIHBENSALAT, BVIXZIREFNZALAY, BUGH-IRREMSRLAI, BVIHSYABENZALRY, RYCHSTHEENSAIAT, BUIHZYABF-SACAI, RYGKS-ABFH-ALA-, BVGHSTPPENSR-AT"
let salatArr = salat.split(', ');  				//Array aus den Strings bilden
let conWord = "";
for (let i = 0; i < salatArr[0].length; i++) {		//Zählschleife über Wortlänge
	let letterCount = {};							//unser Dictionary
	let maxKey = "";
	for (let j = 0; j < salatArr.length; j++) { 	//Zählschleife über Anzahl der Wörter
		let key = salatArr[j].charAt(i);			//Buchstabe der relevanten Stelle im entsprechenden Wort
		if (!letterCount[key]) {					// falls es für den Buchstaben noch keine Anzahl im Dic gibt, setzen wir die Anzahl erstmal auf 0
			letterCount[key] = 0;
		}
		letterCount[key]++;							//Anzahl der Buchstaben-Vorkommen wird hochgezählt
		if (maxKey == "" || letterCount[key] > letterCount[maxKey]) {   //falls es noch keinen Buchstaben mit den meisten Vorkommen gibt oder der aktuelle Buchstabe nun mehr Vorkommen hat
			maxKey = key;												//wird der neue Buchstabe mit den maximalen Vorkommen gesetzt
		}
	}
	conWord += maxKey;					//nach Durchlauf der inneren Schleige kennen wir den Buchstaben mit den meisten Vorkommen und fügen ihn dem Lösungswort hinzu
}
console.log(conWord);