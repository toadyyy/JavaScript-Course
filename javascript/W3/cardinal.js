let A = [5,4,8,7,9,6,3,1,2]
let count = 0;
function sort(i,j) {
	count++;
	for(let i = 0; i < count; i++) {
		process.stdout.write(" ");
	}	
	let c,k;
	if(i + 1 < j) {
		k = Math.floor((j- i + 1) / 3);
		process.stdout.write("for i = " + i + " j = " + j + " k = " + k + " A = ");
		for (let i = 0; i < A.length; i++) {
			process.stdout.write(A[i] + " ");
		}
		console.log();
		sort(i, j-k);
		sort(i+k, j);
		sort(i,j-k);
	}
	else {
		if(A[i]>A[j]) {
			c = A[i];
			A[i] = A[j];
			A[j] = c;
		}
	}
}
sort(0,8);