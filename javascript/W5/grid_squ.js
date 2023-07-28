/*Durch Verbinden von Punkten in einem Gitter können Quadrate erzeugt werden.
In einem 1×1-Gitter gibt es insgesamt 0 Möglichkeiten, ein Quadrat zu zeichnen:

In einem 2×2-Gitter gibt es insgesamt 1 Möglichkeiten, ein Quadrat zu zeichnen:

In einem 3×3-Gitter gibt es insgesamt 6 Möglichkeiten, ein Quadrat zu zeichnen:
4×

In einem 4×4-Gitter gibt es insgesamt 20 Möglichkeiten, ein Quadrat zu zeichnen:
2×
4×
4×
9×

In einem 5×5-Gitter gibt es insgesamt 50 Möglichkeiten, ein Quadrat zu zeichnen…

Aufgabe: Wie viele mögliche Quadrate gibt es in einem 500×500-Gitter?*/

let n = 500;
let sum = 0;
for (let i = 1; i < n; i++) {
	sum += i * ((n - i)**2)
}
console.log(sum);