/*In einem geordneten Alphabet kann für jedes Zeichen das dazu komplementäre Zeichen
bestimmt werden, indem man die Position vom Anfang und Ende des Alphabets abzählt.
Für unser Standardalphabet:  A → Z,  B → Y,  C → X,  D → W,  ...,  X → C,  Y → B,  Z → A.

Das reverse Komplement zu einem String erhält man, indem man den String umdreht
und für jedes Zeichen das komplementäre Zeichen einsetzt, z.B.:  HALLO → LOOZS.
Ein reverses Palindrom ist ein String, der seinem reversen Komplement entspricht.

Gegeben sei der folgende Text:
      SJFUQPKMNPIYDWBENBYMGKOLPEDQGGTTJWLUPIYZTGABRKFBAZIKPLZAD

Aufgabe: Finden Sie alle reversen Palindrome, die in dem oberen Text vorkommen.
Welches Wort bleibt übrig, wenn Sie alle reversen Palindrome entfernen?*/

function complemStr(str) {		//Methode zum ermitteln des komplementären Strings
	var dict = {
		A: "Z",
		B: "Y",
		C: "X",
		D: "W",
		E: "V",
		F: "U",
		G: "T",
		H: "S",
		I: "R",
		J: "Q",
		K: "P",
		L: "O",
		M: "N",
		N: "M",
		O: "L",
		P: "K",
		Q: "J",
		R: "I",
		S: "H",
		T: "G",
		U: "F",
		V: "E",
		W: "D",
		X: "C",
		Y: "B",
		Z: "A"};
	var arr = str.split("");		//String -> array
	arr = arr.map(x => [dict[x]]);	//jedes Element im Array wird zu seinem Komplement
	return arr.join("");			//array->String
}

var subStrings = [];
var string = "SJFUQPKMNPIYDWBENBYMGKOLPEDQGGTTJWLUPIYZTGABRKFBAZIKPLZAD";
for (var i = 0; i < string.length ; i++) {				//Zählschleife über Länge des Strings
	for (var j = 0; j < string.length - i; j++) {		//Zweiter Zeiger bis wohin der Substring gehen soll
		let subString = string.substring(j, j + i + 1);	//Substring
		let comStr = complemStr(subString);				//bilden des Komplementstrings
		if(subString === comStr.split("").reverse().join("") && !subStrings.includes(subString)) { //Abfrage ob Komplementärer String ein Palindrom ist
			subStrings.push(subString);					//wenn ja wird der urspr Substring der Liste der Reversen Palindrome hinzugefügt
		}
	}
}
for (var i = subStrings.length - 1; i >= 0; i--) {
	string = string.replace(subStrings[i], "");			//Entfernen aller reversen Palindrome aus ursprünglichen String
}
console.log(string);