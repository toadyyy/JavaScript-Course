/*Wir erzeugen eine Liste von Zahlen nach dem folgenden Siebverfahren:
Wir beginnen, indem wir die Liste der natürlichen Zahlen von 1 bis n aufschreiben:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ...
Die nächste Zahl nach der 1 ist die 2, also streichen wir jede 2. Zahl aus der Liste:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ...
Die nächste Zahl nach der 2 ist die 3, also streichen wir jede 3. Zahl aus der Liste:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ...
Die nächste Zahl nach der 3 ist die 7, also streichen wir jede 7. Zahl aus der Liste:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ...
Die nächste Zahl nach der 7 ist die 9, also streichen wir jede 9. Zahl aus der Liste:
(usw.)
Wir setzen dies fort, bis n erreicht ist bzw. keine Zahl mehr gestrichen werden kann.
Die auf diese Weise erhaltenen Zahlen werden als glückliche Zahlen bezeichnet.
Wichtig: Nach jedem Schritt wird nur noch die Liste der überlebenden Zahlen betrachtet.

Aufgabe: Finden Sie die Anzahl der glücklichen Zahlen unter 1 Millionen.*/
let n = 100;
let arr = new Array();
for (let i = 1; i <= n; i++) {
	arr[i-1] = i;
}
let steps = 2;
let j = 0;
let nextArr = new Array();
for (let i = 0; i < arr.length; i++) {
	if (i+1%steps == 0) {
		continue;
	}
	else {
		nextArr[j] = arr[i];
		j++;
	}
}	
let index = 0;
steps = arr[index];
let finalArrs = new Array();
while (steps < n) {
	index++;
	steps = arr[index];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i+1%steps==0) {
			continue;
		}
		else {
			nextArr[j] = arr[i];
			j++;
		}
	}
}
console.log(nextArr);