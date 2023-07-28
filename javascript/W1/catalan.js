/*Die Folge der Catalan-Zahlen wird nach der folgenden Rekursionsformel erzeugt:
          C_0=1 und  C_n+1= ∑^n_(i=0)(Ci*Cn−i) für  n≥0
.

Die Werte der Folge steigen damit relativ schnell an und die ersten Terme sind:
          1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, ...

Aufgabe: Finden Sie die erste Catalan-Zahl, die bereits sechzehn Ziffern hat.*/

let catalan = function(n) {
	let C = 1;
	for(let i = 0; i < n; i++) {
		C = C * 2 * (2 * i + 1)/(i + 2); //andere Formel zum berechnen einer Catalanzahl
	}
	return C;
}

let cat = 0;
let count = 0
while(cat < 999999999999999){   //Abfrage, ob Catalanzahl 16 Stellen hat
	cat = catalan(count);
	count++;
}
console.log(cat);