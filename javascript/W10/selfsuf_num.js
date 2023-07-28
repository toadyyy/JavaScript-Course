/*Wir erinnern uns zurück an die Fibonacci-Folge, bei der die nächste Zahl in der Folge die
Summe der zwei vorherigen Zahlen ist, und möchten dieses Prinzip nun verallgemeinern:

Wir wählen eine n-stellige Zahl und setzen die Ziffern dieser Zahl als Startwerte der Folge.
Die nächste Zahl in der Folge berechnen wir dann aus der Summe der n vorherigen Zahlen.

  Beispiel: (mit der 2-stelligen Zahl 75)
    7 → 5 → 12 → 17 → 29 → 46 → 75 → 121 → 196 → ...

  Beispiel: (mit der 3-stelligen Zahl 197)
    1 → 9 → 7 → 17 → 33 → 57 → 107 → 197 → 361 → ...

In den oberen Beispielen können wir außerdem sehen, dass die Ausgangszahl selbst in der
Folge auftreten kann. Wir bezeichnen diese Ausgangszahlen als selbsterzeugende Zahlen.

Aufgabe: Finden Sie die Summe aller selbsterzeugenden Zahlen unter einer Millionen.*/

let selfNums = [];
for (let i = 0; i < 1000000; i++) {
	let sNum = i.toString().split('');
	let numArr = sNum.map(Number);
	let digits = numArr.length;
	let nextNum = 0;
	while (nextNum < i) {
		nextNum = 0;
		counter = digits;
		for (let j = numArr.length - counter; j < numArr.length; j++) {
			nextNum += numArr[j];
		}
		numArr.push(nextNum);
	}
	if (nextNum == i) {
		selfNums.push(i);
	}
}
console.log(selfNums.reduce((a,b) => a + b, 0));
	