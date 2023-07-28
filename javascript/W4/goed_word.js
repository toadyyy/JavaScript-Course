/*In einem geordneten Alphabet wird jedem Zeichen eine eindeutige Nummer zugewiesen.
Für unser Standardalphabet:  A → 1,  B → 2,  C → 3,  D → 4,  ...,  X → 24,  Y → 25,  Z → 26.

Kurt Gödel hat mit der nach ihm benannten Gödelisierung ein einfaches Verfahren erdacht,
um beliebige Wörter einer (formalen) Sprache eindeutig durch eine Zahl zu repräsentieren.
Dabei wird der n-ten Stelle im Wort die n-te Primzahl zugeordnet und mit der Nummer des
Zeichens potenziert und die für jede Stelle erhaltenen Werte anschließend multipliziert.

Beispiel:  ABCCBA → 21 · 32 · 53 · 73 · 112 · 131 = 2 · 9 · 125 · 343 · 121 · 13 = 1213962750.

Durch die Eindeutigkeit der Primfaktorzerlegung lässt sich umgekehrt aus jeder Zahl wieder
das ursprüngliche Wort rekonstruieren. Die folgende Zahl wurde mit dem Verfahren erzeugt:

8515841215550500262534435983514954566633469175071711107775526441643558277110411969873680306754437414445721089366150727232650858346369111136148412000000000000000000

Aufgabe: Finden Sie das Wort heraus, das durch die obere Zahl eindeutig kodiert wird.*/

let nextPrime = function(n) {
	let prime = false;
	let num = Number(n);
	while(!prime) {
		prime = true;
		num++;
		for (let i = 2; i < num; i++) {
			if (num%i==0) {
				prime = false;
				break;
			}
		}
	}
	return BigInt(num);
}
			

let goed = 8515841215550500262534435983514954566633469175071711107775526441643558277110411969873680306754437414445721089366150727232650858346369111136148412000000000000000000n;
let prime = 2n;
let nums = new Array();
while (goed > 1n) {
	if (goed % prime == 0n) {
		nums.push(prime);
		goed = goed/prime;
	}
	else {
		prime = nextPrime(prime);
	}
}

let numObj = new Object();
for (let i = 0; i < nums.length; i++) {
	let key = nums[i];
	if(!numObj[key]) {
		numObj[key] = 0;
	}
	numObj[key]++;
}

let str = "";
for (let [key, value] of Object.entries(numObj)) {
	str = str + String.fromCharCode(value + 64);
}
console.log(str);