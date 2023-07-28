/*Die Summe der Quadrate der ersten zehn natürlichen Zahlen ist:
          1^2 + 2^2 + ... + 10^2 = 385.

Das Quadrat der Summe der ersten zehn natürlichen Zahlen ist:
         (1 + 2 + ... + 10)^2 = 3025.

Die Differenz zwischen beiden beträgt also 3025 - 385 = 2640.

Aufgabe: Finden Sie die Differenz zwischen der Summe der Quadrate und
                   dem Quadrat der Summe der ersten hundert natürlichen Zahlen*/

let sum1 = 0;
let sum2 = 0;
for (x = 1; x <= 100; x++) {
	sum1 = sum1 + (x * x);     // direktes Summieren der Quadrate für Summe1
	sum2 = sum2 + x;		// erstmal nur Summiere für Summe 2
}
sum2 = sum2 * sum2;			//nun wird Summe 2 quadriert
console.log(sum2 - sum1);