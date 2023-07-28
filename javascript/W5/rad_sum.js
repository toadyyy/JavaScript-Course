/*Das Radikal von n ist das Produkt der eindeutigen Primfaktoren von n.
Beispiel:  504 = 23 × 32 × 7  →  rad(504) = 2 × 3 × 7 = 42.

Aufgabe: Finden Sie die Summe der Radikale für alle n ≤ 100.000.*/

function calcPrimes(n) {
	primes = [2];
	for (let i = 2; i < n; i++) {
		let prime = false;
		for (let j = 2; j < i; j++) {
			if (i%j==0) {
				prime = false;
				break;
			}
			else {
				prime = true;
			}
		}
		if (prime) {
			primes.push(i);
		}
	}
	return primes;
}

function rad(n,list) {
	let prod = 1;
	if (n == 2) {
		prod *= 2;
	}
	else {
		for (let i = 0; i < list.length; i++) {
			if (n%list[i]==0) {
				prod*=list[i];
				while(n%list[i]==0) {
					n = n/list[i];
				}
			}
		}
	}
	return prod;
}

let num = 1e5;
let primeList = calcPrimes(num);
let sum = 0;
for (let i = 1; i <= num; i++) {
	sum += rad(i,primeList);
}
console.log(sum);

