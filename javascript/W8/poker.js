/*In einem Kartenspiel mit 52 Karten hat jede Karte einen Wert (Rank) und eine Farbe (Suit).
Die Kartenwerte sind aufsteigend sortiert: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
Die Kartenfarbe ist eins von vier möglichen Symbolen: Clubs, Diamonds, Hearts, Spades.

Beim Poker erhält jeder Spieler 5 Karten und versucht folgende Kombinationen zu legen:

One Pair: Zwei Karten mit dem gleichen Wert.
Two Pairs: Zwei verschiedene Paare.
Three of a Kind: Drei Karten mit dem gleichen Wert.
Straight: Alle Karten haben aufeinanderfolgende Werte.
Flush: Alle Karten haben die gleiche Farbe.
Full House: Ein Drilling und ein Paar.
Four of a Kind: Vier Karten mit dem gleichen Wert.
Straight Flush: Alle Karten haben aufeinanderfolgende Werte und die gleiche Farbe.
Royal Flush: Die Karten mit Werten 10, Jack, Queen, King, Ace in der gleichen Farbe.
... wobei One Pair als die schwächste und Royal Flush als die beste der Kombinationen gilt.

Es gewinnt derjenige Spieler, der mit seinen Karten eine bessere Kombination legen kann.
Legen beide Spieler die gleiche oder gar keine Kombination, so ist das ein Unentschieden.

Hinweis: Im echten Poker würde bei gleichen Kombinationen noch überprüft, welcher Spieler
die höherwertigen Karten hat, sodass z.B. ein 8er-Paar gegen ein 5er-Paar gewinnt.
Wir möchten dieses zusätzliche Kriterium hier zur Vereinfachung aber weglassen.

Alice und Bob haben 1000 Poker-Spiele ausgetragen. Folgenden Dateien listen für alle Partien
die Karten von Alice und von Bob mit ihrem Wert und ihrer Farbe auf: poker.json | poker.min.js.

Aufgabe: Bestimmen Sie, wie viele Partien Alice und wie viele Bob gewonnen hat
und berechnen Sie das Produkt der beiden erhaltenen Zahlen.*/

const data = require("./poker.json");
let results = ["high", "onep", "twop", "toak", "strt", "flsh", "fuho", "foak", "strf", "rofl"];

let putRanks = function(n) { //converts everything to ints and assigns the "picture" cards to ints as well and returns it as an array
	let ranks = [];
	for (let j = 0; j < n.length; j++) {
		if (n[j].Rank == "Jack") {
			ranks.push(11);
		}
		else if(n[j].Rank == "Queen") {
			ranks.push(12);
		}
		else if(n[j].Rank == "King") {
			ranks.push(13);
		}
		else if(n[j].Rank == "Ace") {
			ranks.push(14);
		}
		else {
			ranks.push(parseInt(n[j].Rank));
		}
	}
	return ranks.sort((a, b) => a - b);
}

let isSuited = function(n) { //returns true if the hand is suited
	let isSuit = false;
	let card = n[0].Suit;
	for (let i = 1; i < n.length; i++) {
		if(n[i].Suit == card) {
			isSuit = true;
			card = n[i].Suit;
		}
		else {
			isSuit = false;
			break;
		}
	}
	return isSuit;
}

let evalHand = function(n,m) {
	let card = n[0];
	let dupl = [0, 0];
	let j = 0;
	let str = 0;
	for (let i = 1; i < n.length; i++) {
		if (n[i] == card) {
			dupl[j] += 1;
		}
		else if(n[i] == card + 1) {
			str += 1;
		}
		else {
			if (dupl[j] > 0) {
				j+=1;
			}
		}
		card = n[i];
	}
	if (card[0] == 10 && str == 4 && m) {
		return "rofl";
	}
	else if(str == 4 && m) {
		return "strf";
	}
	else if(dupl[0] == 3) {
		return "foak";
	}
	else if((dupl[0] == 2 && dupl[1] == 1) || (dupl[0] == 1 && dupl [1] == 2)) {
		return "fuho";
	}
	else if(m) {
		return "flsh";
	}
	else if(str == 4) {
		return "strt";
	}
	else if(dupl[0] == 2) {
		return "toak";
	}
	else if(dupl[0] == 1 && dupl[1] == 1) {
		return "twop";
	}
	else if(dupl[0] == 1) {
		return "onep";
	}
	else {
		return "high";
	}
}

let bobWins = 0;
let aliceWins = 0;
for (let i = 0; i < data.length; i++) {
	let bHand = data[i].Bob;
	let aHand = data[i].Alice;
	let bRanks = [];
	let aRanks = [];
	aRanks = putRanks(aHand);
	bRanks = putRanks(bHand);
	let aRes = evalHand(aRanks, isSuited(aHand));
	let bRes = evalHand(bRanks, isSuited(bHand));
	if (results.indexOf(aRes) > results.indexOf(bRes)) {
		aliceWins++;
	}
	else if(results.indexOf(bRes) > results.indexOf(aRes)) {
		bobWins++;
	}
}
console.log(aliceWins*bobWins);