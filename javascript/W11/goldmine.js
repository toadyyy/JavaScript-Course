/*Ein Goldgräber möchte sich von links oben nach rechts unten durch eine Goldmine graben
und dabei eine möglichst große Menge an Gold mitnehmen. Bei jedem Schritt kann er sich
ein Feld nach rechts oder nach unten bewegen und das Gold an der Stelle einsammeln.

Die folgende Karte zeigt den Querschnitt einer Goldmine und den Weg des Goldgräbers:

[[ 869, 327, 766, 897, 982 ],
 [ 799, 904, 658,  35, 850 ],
 [ 370, 197, 254, 578, 889 ],
 [ 463, 301, 503, 879,  44 ],
 [ 195, 268, 476, 963, 669 ]]
Im oberen Beispiel kann er eine maximale Summe von 6573 (Einheiten) Gold mitnehmen.
Die folgenden Dateien enthalten die Karte einer weiteren Goldmine: map.json | map.min.js.

Aufgabe: Finden Sie die max. Summe an Gold, die er auf einem Weg mitnehmen kann.*/
let data = require("./map.json");
for (let i = 1; i < data[0].length; i++) {
	data[i][0] += data[i-1][0];
	data[0][i] += data[0][i-1];
}
let size = data.length;
for (let i = 1; i < size; i++) {
	for (let j = 1; j < size; j++) {
		if(data[i-1][j] < data[i][j-1]) {
			data[i][j] += data[i][j - 1];
		}
		else {
			data[i][j] += data[i - 1][j];
		}
	}
}
console.log(data[size - 1][size - 1]);
	