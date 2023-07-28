/*Eine balancierte Primzahl der Ordnung k ist eine Primzahl, die gleich dem Mittelwert
der k vorherigen und k nachfolgenden Primzahlen ist, d.h. p_n = 1/2k ∑^k_(i=1) (p_(n−i)+p_(n+i))
.

Beispiele:

5 ist die erste balancierte Primzahl der Ordnung 1.
79 ist die erste balancierte Primzahl der Ordnung 2.
17 ist die erste balancierte Primzahl der Ordnung 3.

Eine Primzahl kann auch über mehrere Ordnungen balanciert sein:

18731 ist die erste balancierte Primzahl der Ordnungen 1 und 2.
683783 ist die erste balancierte Primzahl der Ordnungen 1, 2 und 3.

Aufgabe: Finden Sie die erste balancierte Primzahl der Ordnungen 1, 2, 3 und 4.*/


let eratosthenes = function(n) { //source: https://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number
    // Eratosthenes algorithm to find all primes under n
    let array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (let i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (let i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

let primes = eratosthenes(100000000);

for (let i = 0; i < primes.length; i++) {
	let temp = 0;
	let pn = primes[i];
	for (let ord = 1; ord <= 4; ord++) {
		temp += primes[i-ord] + primes[i+ord];
		if(pn!=temp*(1/(2*ord))) {
			break;
		}
		else {
			if(ord==4) {
				console.log(pn);
			}
		}
	}
}