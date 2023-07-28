/*In einem geordneten Alphabet wird jedem Zeichen ein Wert zugewiesen.
Für unser Standardalphabet:  A → 1,  B → 2,  C → 3,  ...,  Y → 25,  Z → 26.
Zusätzlich möchten wir das Leerzeichen mit dem Wert 27 aufnehmen.

Eine einfache Methode zur Verschlüsselung von Nachrichten ist folgende:
Wir bestimmen für jedes Zeichen den alphabetischen Wert und addieren
als Offset den Wert des vorherigen Zeichens drauf. Für das erste Zeichen
verwenden wir als Offset einen geheimen Wert, den so genannten Seed.
Das Ergebnis muss ggf. wieder in den Bereich [1-27] verschoben werden.

Beispiel: Wir verschlüsseln das Wort "KATZE" und verwenden als Seed 5:

K → 11 +  5 = 16 → P
A →  1 + 11 = 12 → L
T → 20 +  1 = 21 → U
Z → 26 + 20 = 19 → S
E →  5 + 26 =  4 → D

Wenn man den Seed 5 kennt, ist es durch Umkehren der Rechenschritte
sehr einfach, aus "PLUSD" das Wort "KATZE" wieder zu entschlüsseln.
Wenn man den Seed nicht kennt, kann man mehrere Werte ausprobieren
und z.B. die Häufigkeitsverteilung der Zeichen in den erhaltenen Texten
untersuchen, um die richtige Nachricht unter allen möglichen zu finden.

Sie erhalten nun die folgende verschlüsselte Nachricht:

YBPNIHVYSQXQNEIALTENWSEDIYYPDBDWSTGNB

sowie den Hinweis, dass es sich dabei um einen deutschen Satz handelt
und der Buchstabe 'E' im Deutschen statistisch am häufigsten vorkommt.

Aufgabe: Entschlüsseln Sie die Nachricht und bestimmen Sie das letzte Wort.*/

let c = "YBPNIHVYSQXQNEIALTENWSEDIYYPDBDWSTGNB";
let rounds = 26;
for (let j = 0; j < rounds; j++) {
	let seed = j;
	let m = new Array();
	for (let i = 0; i < c.length; i++) {
		let mi = (c[i].charCodeAt() - 64 - seed)%27;
		if (mi < 0) {
			mi = mi + 27;
		}
		m.push(mi);
		seed = mi;
	}
	for (let k = 0; k < m.length; k++) {
		if (m[k] == 0) {
			m[k] = "";
		}
		else {
			m[k] = String.fromCharCode(m[k] + 64);
		}
	}
	console.log(m);
}
//KRYPTOGRAPHIE IST EINE DETEKTIVARBEIT für seed 14