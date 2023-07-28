/*Die Folge der Fibonacci-Zahlen wird nach der folgenden Rekursionsformel erzeugt:

        F_1=1 ,  F_2=1  und  F_n+1=F_n+F_n−1 für  n≥2.

Die ersten Terme der Folge sind damit:  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
Wir möchten in dieser Aufgabe die Teilbarkeit der Fibonacci-Zahlen untersuchen.

Aufgabe: Finden Sie die Fibonacci-Zahl mit einem Wert < 100 Billionen,
die durch die meisten anderen Fibonacci-Zahlen teilbar ist.*/

let n = 0;
let fib_list = [1, 1];			//ersten beiden Zahlen der Fib-Folge
let maxDiv = 0;
let maxInd = 0;
while (n < 100000000000000) {
	let divCount = 0;
	n = fib_list[fib_list.length - 2] + fib_list[fib_list.length - 1]; // berechnen der nächsten Zahl in der Folge
	fib_list.push(n);			//	hinzufügen zur Liste
	for (let i = 0; i < fib_list.length - 1; i++) {		//Schleife über Fib-Listenlänge
		if (n%fib_list[i] == 0) {						//Berechnen der Teiler der aktuellen Zahl durch die anderen Fib-Zahlen
			divCount++;									//inkrementieren der Teileranzahl
		}
	}
	if (divCount > maxDiv) {					// Abfrage ob die Teileranzahl größer als der Bisherige war
		maxDiv = divCount;						// setzen der neuen maximalen Teilerzahl
		maxInd = fib_list.length - 1;			// Speichern des Indexes der entsprechenden Zahl
	}
}
console.log(fib_list[maxInd]);				//Zahl mit den meisten Teilern wird anhand des ermittelten Indexes ausgegeben
