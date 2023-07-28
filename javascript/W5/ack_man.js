/*Die Ackermann-Funktion ist wie folgt rekursiv definiert:

A(0,n)=n+1

A(m,0)=A(m−1,1)

A(m,n)=A(m−1,A(m,n−1))

Aufgabe: Berechnen Sie den Wert von A(3,12).*/

function ack(m,n) {
	if (m == 0) {
		return n + 1;
	}
	else if (m == 1) {
		return 2+(n+3)-3;
	}
	else if (m == 2) {
		return 2*(n+3)-3;
	}
	else if (m == 3) {
		return 2**(n+3)-3;
	}
}
console.log(ack(3,12));	