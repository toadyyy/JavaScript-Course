class Generator {
    constructor(n) {
        this.n = n;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    randomArr() {
        let arr = new Array(this.n);
        for (let x = 0; x < arr.length; x++) {
            arr[x] = this.getRandomInt(this.n);
        }
        return arr;
    }
    
    bestCase() {
        let arr = this.randomArr(this.n);
        return arr.sort(function(a,b) {
            return a - b;
        });
    }
    
    worstCase() {
        return this.bestCase(this.n).reverse();
    }
}


class MergeSort {
    constructor(arr) {
        this.arr = arr;
        this.swapOp = 0;
    }

    run() {
        this.t0 = new Date();
        this.mergeSort(this.arr);
        this.t1 = new Date();
        document.getElementById("mergesortL").innerHTML = (this.t1.valueOf() - this.t0.valueOf()).toString();
        document.getElementById("mergesortV").innerHTML = this.swapOp.toString();
        console.log('mergesort');
        console.log('time:', this.t1.valueOf() - this.t0.valueOf());
        console.log('swap:', this.swapOp);
        return this.arr;
    }

    mergeSort(array){
        this.swapOp += 1;
        let len = array.length;
        let middle = Math.floor(len / 2);
        if(len < 2){
            return array
        }
        let left = array.splice(0, middle);
        return this.merge(this.mergeSort(left), this.mergeSort(array));
    }

    merge(leftArray, rightArray) {
        this.swapOp += 1;
        let arrayNew = [];
        //prüfen ob ein Array leer ist
        while(leftArray.length != 0 && rightArray.length != 0) { 
            if (rightArray[0] < leftArray[0]) {
                arrayNew.push(rightArray.shift()) //erstes Element aus left entfernen und in arrayNew schreiben
            } else {
                arrayNew.push(leftArray.shift())
            }
        }
        //alles zusammen fassen
        arrayNew = [].concat(arrayNew, leftArray, rightArray);
        return arrayNew;
    }
}


class BubbleSort {
    constructor(arr) {
        this.arr = arr;
        this.swapOp = 0;
    }

    run() {
        this.t0 = new Date();
        this.bubblesort(this.arr);
        this.t1 = new Date();
        document.getElementById("bubblesortL").innerHTML = (this.t1.valueOf() - this.t0.valueOf()).toString();
        document.getElementById("bubblesortV").innerHTML = this.swapOp.toString();
        console.log('time:', this.t1.valueOf() - this.t0.valueOf());
        console.log('bubblesort');
        console.log('swap:', this.swapOp);
        return this.arr;
    }

    bubblesort(array) {
        for (let max = array.length - 1; max > 0; max--) {
            let swapped = false;
            for (let i = 0; i < max; i++) {
                let left = array[i];
                let right = array[i + 1];
                //tauschen wenn links größer rechts
                if (left > right) {
                    this.swap(array, i, i+1);
                    swapped = true;
                }
            }
            //wenn nicht mehr getauscht wurde: aussteigen
            if(!swapped) {
                return array;
            }
        }
    }

    //tauschen
    swap(array, x, y) {
        this.swapOp += 1;
        let elem = array[y];
        array[y] = array[x];
        array[x] = elem;
        return array;
    }
}


class QuickSort {
    constructor(arr) {
        this.arr = arr;
        this.swapOp = 0;
    }

    run() {
        this.t0 = new Date();
        this.quicksortStart(this.arr);
        this.t1 = new Date();
        document.getElementById("quicksortL").innerHTML = (this.t1.valueOf() - this.t0.valueOf()).toString();
        document.getElementById("quicksortV").innerHTML = this.swapOp.toString();
        console.log('quicksort');
        console.log('time:', this.t1.valueOf() - this.t0.valueOf());
        console.log('swap:', this.swapOp);
        return this.arr;
    }

    quicksortStart(array) {
        this.quicksortRec(array, 0, array.length - 1, false, false);
    }

    quicksortRec(array, left, right, done, done2) {
        if(!done && !done2) {
            if(left >= right) {
                return true;
            }
            let pivotPosition = this.partition(array, left, right);
            done = this.quicksortRec(array, left, pivotPosition -1, done);
            done2 = this.quicksortRec(array, pivotPosition +1, right, done2);
        }
    }

    partition(array, left, right) {
        let pivot = array[right];
        let l = left;
        let r = right - 1;
        while(l < r) {
            while(array[l] < pivot) { 
                l++
            }
            while(r > left && array[r] >= pivot) {
                r--;
            }
            //links und rechts tauschen
            if(l < r) {
                array = this.swap(array, l, r);
                l++;
                r--;
            }
        }
        if (l == r && array[l] < pivot) {
            l++;
        }
        if(array[l] != pivot) {
            array = this.swap(array, l, right);
        }
        return l;
    }

    //tauschen
    swap(array, x, y) {
        this.swapOp += 1;
        let elem = array[y];
        array[y] = array[x];
        array[x] = elem;
        return array;
    }
}

function generateArr(size) {
    size = Number(size);
    arrCase = document.querySelector('input[name="arrCase"]:checked').value;
    gen = new Generator(size);
    arr = undefined;
    if (arrCase == 'randomArr') {
        arr = gen.randomArr();
    }  else if (arrCase == 'bestCase') {
        arr = gen.bestCase();
    } else if (arrCase == 'worstCase') {
        arr = gen.worstCase();
    }

    let bubblesort = new BubbleSort(arr.slice());
    bubblesort.run()

    let mergesort = new MergeSort(arr.slice());
    mergesort.run()

    let quicksort = new QuickSort(arr.slice());
    sortedArr = quicksort.run()

    const arrField1 = document.getElementById('arrUnsorted');
    arrField1.innerHTML = arr.join(', ');

    const arrField2 = document.getElementById('arrSorted');
    arrField2.innerHTML = sortedArr.join(', ');
}
