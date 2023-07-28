/*Eine Bruchzahl Z / N besteht aus einer natürlichen Zahl Z im Zähler und N im Nenner.
Wir wollen in der Aufgabe gekürzte Brüche betrachten, d.h. Z < N und ggT(Z, N) = 1.
Listet man alle gekürzten Brüche für N ≤ 10 ohne Duplikate auf, erhält man:

1/10,  1/9,  1/8,  1/7,  1/6,  1/5,  2/9,  1/4,  2/7,  3/10,  1/3,  3/8,  2/5,  3/7,  4/9,  1/2,
 5/9,  4/7,  3/5,  5/8,  2/3,  7/10,  5/7,  3/4,  7/9,  4/5,  5/6,  6/7,  7/8,  8/9,  9/10.

Es sind also insgesamt 31 verschiedene Brüche und die Summe ihrer Zähler ist 108.

Aufgabe: Finden Sie die Summe der Zähler aller gekürzten Brüche für N ≤ 1000.*/

function gcd(a,b) {
   if(!b) { //b == 0
		return a;
   }
   else {
	   return gcd(b, a % b);
   }
}

let fractions = [];
for (let n = 1000; n >= 1; n--) {
	for (let z = n - 1; z >= 1; z--) {
		if (gcd(n,z)==1) {
			fractions.push([z,n]);
		}
	}
}
let sum = 0;
for (let i = 0; i < fractions.length; i++) {
	sum += fractions[i][0];
}
console.log(sum);