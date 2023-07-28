/*Wir erzeugen eine Zahlenkette nach der folgenden Iterationsvorschrift:
Wir wählen eine beliebige natürliche Zahl als Startwert für die Kette.
Wir berechnen die nächste Zahl in der Kette aus der vorherigen Zahl,
indem wir die Ziffern der vorigen Zahl quadrieren und dann addieren.
Das Erstaunliche ist, dass es für eine Kette nur zwei Möglichkeiten gibt:
Die Kette endet nach endlich vielen Iterationsschritten beim Wert 1.
Dann wird der Startwert dieser Kette als fröhliche Zahl bezeichnet.
Die Kette landet in einer Endlosschleife immer wieder beim Wert 4.
Dann wird der Startwert eine nicht-fröhliche / traurige Zahl genannt.
Beispiel:
7 ist eine fröhliche Zahl:  7 → 49 → 97 → 130 → 10 → 1
8 ist eine traurige Zahl:  8 → 64 → 52 → 29 → 85 → 89 → 145 → 42 → 20 → 4
Aufgabe: Finden Sie die Anzahl der fröhlichen Zahlen unter 10 Millionen.*/

function calcNext(num) {
	let arr = num.toString().split("");
	arr = arr.map(x => parseInt(x)**2);
	return(arr.reduce((a, b) => a + b, 0));
}

let happyNums = [1];
for (let i = 2; i < 10000000; i++) {
	let myNum = i;
	while(myNum != 4 && myNum != 1) {
		myNum = calcNext(myNum);
		if(myNum==1) {
			happyNums.push(i);
		}
	}
}
console.log(happyNums.length);