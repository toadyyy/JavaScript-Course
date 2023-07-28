/*Eine Spiegel-Primzahl ist eine Primzahl, bei der man die Zahl rückwärts schreiben kann
und dadurch eine andere Primzahl als die ursprüngliche erhält (auch Mirpzahl genannt).

Die Zahl 157 ist eine Zahl mit ein paar interessanten Eigenschaften:

Die 157 ist selbst eine Spiegel-Primzahl, da 157 und 751 beides Primzahlen sind.
Listet man alle Primzahlen der Reihe nach auf, ist 157 die 37. Primzahl in der Liste.
Die 37 ist ebenfalls eine Spiegel-Primzahl, da 37 und 73 beides Primzahlen sind.
Berechnet man die Summe der Ziffern von 157, ergibt das den Wert 1 + 5 + 7 = 13.
Die 13 ist ebenfalls eine Spiegel-Primzahl, da 13 und 31 beides Primzahlen sind.
Einige weitere Zahlen, die diese Eigenschaften erfüllen, sind z.B. 7523, 10079 & 997741.

Aufgabe: Finden Sie die Summe aller Zahlen unter 1 Millionen,
die alle drei oben genannten Eigenschaften erfüllen.*/

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i == 0) return false;
  return num > 1;
}

function reversedNum(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )                 
}

function checksum(num) {
    return(
		parseFloat(
		num
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0)
		)
	)
}
		
 
let primeList = [];
for (let i = 0; i < 1000000; i++) {
	if(isPrime(i)) {
		primeList.push(i);
	}
}

let mirpList = [];
for (let j = 0; j < primeList.length; j++) {
	let prime = primeList[j];
	if (primeList.includes(reversedNum(prime)) && reversedNum(prime) != prime) {
		if(primeList.includes(j+1) && primeList.includes(reversedNum(j+1)) && j+1 != reversedNum(j+1))  {
			if(primeList.includes(checksum(prime)) && primeList.includes(reversedNum(checksum(prime))) && checksum(prime) != reversedNum(checksum(prime))) {
				mirpList.push(prime);
			}
		}
	}
}

let sum = 0;
for (let i = 0; i < mirpList.length; i++) {
	sum += mirpList[i];
	console.log(mirpList[i]);
}
console.log(sum);