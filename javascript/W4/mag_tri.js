/*Das Floyd'sche Dreieck (links) wird erzeugt, indem wir die natürlichen Zahlen
der Reihe nach, d.h. von oben nach unten, von links nach rechts aufschreiben,
wobei jede neue Zeile immer eine Zahl mehr als die vorherige Zeile enthält.

Das Pascal'sche Dreieck (rechts) wird erzeugt, indem wir in jeder Zeile außen
die Zahl 1 schreiben und dann alle anderen Zahlen aus der Summe der beiden
links und rechts unmittelbar diagonal darüber liegenden Zahlen bestimmen.

            01                        01            
          02  03                    01  01          
        04  05  06                01  02  01        
      07  08  09  10            01  03  03  01      
    11  12  13  14  15        01  04  06  04  01    
  16  17  18  19  20  21    01  05  10  10  05  01  
Wir wollen das Wachstum der Zahlen in den beiden Dreiecken untersuchen
und suchen uns dafür zufällig eine Zeile heraus und betrachten die Summe.

Aufgabe: In Zeile x des Floyd'schen Dreiecks ist die Zeilensumme 83215.
Was ist die Zeilensumme in Zeile x des Pascal'schen Dreiecks?*/

let sum = 0;
let row = 0;
let x = 1;
while (sum != 83215) {
	row++;
	let arr = new Array(row);
	for (let i = 0; i < row; i++) {
		arr[i] = x;
		x++;
	}
	sum = arr.reduce((pv, cv) => pv + cv, 0);
}
let pascal = 2**(row-1);
console.log(pascal);
		
	