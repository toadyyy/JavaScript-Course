/*Eine arithmetische Folge ist eine Folge von natürlichen Zahlen, bei der die Differenz
zweier benachbarter Folgenglieder immer konstant ist, z.B. [2, 5, 8] mit Differenz 3.

Ein arithmetischer Quader ist ein Quader, dessen drei Kantenlängen eine aufsteigende
arithmetische Folge bilden. Es gibt 10 arithmetische Quader mit einem Volumen < 100:

      1×2×3 = 6,  1×3×5 = 15, 1×4×7 = 28, 1×5×9 = 45, 1×6×11 = 66,
      1×7×13 = 91, 2×3×4 = 24, 2×4×6 = 48, 2×5×8 = 80, 3×4×5 = 60

... und wenn man die Volumen aller zehn Quader addiert, erhält man als Summe 463.

Aufgabe: Finden Sie alle arithmetischen Quader mit einem Volumen < 100 Millionen
                   und addieren Sie die Volumen aller Quader. Welchen Wert hat die Summe?*/


let MAX_VOL = 100000000;
let cubSizes = {};					//Dictioniary zum festhalten aller arithmetischen Quader
let volSum = 0;
for (let i = 1; i <= MAX_VOL; i++) {
	let vol = 0;
	let stepsize = 1;				// Schrittweite zwischen den aufeinanderfolgenden Zahlen
	while(vol < MAX_VOL) {			// Schleife zum berechnen der Volumen für aktuelle Schrittweite
		vol = i * (i+stepsize) * (i+2*stepsize);
		if (vol < MAX_VOL) {		
			let key = i + ", " + (i+stepsize) + ", " + (i+2*stepsize);	// Key setzt sich aus den 3 Zahlen des Quader zusammen
			cubSizes[key] = vol;										// setzen des Volumen für das Quader
			volSum += vol;												// addieren des aktuellen Volumens auf Volumen-Gesamtsumme
		}
		stepsize++;
	}
}
console.log(Object.keys(cubSizes));
console.log(volSum);