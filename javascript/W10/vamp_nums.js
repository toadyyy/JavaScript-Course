/*Die Zahl 1260 hat eine interessante Eigenschaft: Wir können aus ihren Ziffern ein Produkt
mit zwei halb so langen Zahlen bilden, das als Ergebnis wieder die ursprüngliche Zahl hat:

   1260 = 21 × 60

Die Zahlen mit dieser Eigenschaft werden als Vampirzahlen bezeichnet. Weitere Beispiele:

   6880 = 80 × 86
   102510 = 201 × 510

Für einige Zahlen kann man auf diese Art sogar mehrere unterschiedliche Produkte bilden.

Aufgabe: Finden Sie die kleinste Vampirzahl mit zwei unterschiedlichen Produkten.*/

function permute(permutation) {		//source: https://stackoverflow.com/a/37580979/1647737
	var length = permutation.length,
	result = [permutation.slice()],
	c = new Array(length).fill(0),
	i = 1, k, p;
	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} 
		else {
			c[i] = 0;
			++i;
		}
	}
return result;
}

let i = 1000;
let vamps = 0;
while(vamps < 2) {
	vamps = 0;
	let nums = [];
	let sNum = i.toString().split('');
	let numArr = sNum.map(Number);
	let permuts = permute(numArr);
	if ((permuts[0].length)%2==0) {
		let len = permuts[0].length/2;
		for (let j = 0; j < permuts.length; j++) {
			let num1 = permuts[j].slice(0, len);
			let num2 = permuts[j].slice(len);
			num1 = parseInt(num1.join(''));
			num2 = parseInt(num2.join(''));
			if(num1*num2==i && !nums.includes(num1)) {
				vamps++;
				nums.push(num1);
				nums.push(num2);
			}
			if (vamps > 1) {
				console.log(i);
				console.log(nums);
				break;
			}
		}
	}
	i++;
}