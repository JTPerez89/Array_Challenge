// task 1

function alwaysHungry(arr) {
    let pos = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 'food') {
            console.log('yummy');
            pos++;
        } else if(i == arr.length - 1 && pos == 0) {
                console.log("I'm hungry")
        }
    }
}

/* alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
 */

// task 2

function highPass(arr, cutoff) {
    let filteredArr = [];

    for(i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

/* let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); */

// task 3

function betterThanAverage(arr) {
    let sum = 0;
    let count = 0;

    for(i=0; i<arr.length; i++){
        sum += arr[i];
        if(i == arr.length - 1){
            sum /= arr.length;
        }
    } 

    for(p=0; p<arr.length; p++)
        if(arr[p] > sum){
            count++
        }

    return count;
}

/* let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); */

// task 4

function reverse(arr) {
    for(i=0; i<arr.length/2; i++) {
        let holder = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = holder;
    }
    return arr;
}

/* let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);
 */

// task 5

function fibonacciArray(n) {
    let fibArr = [0, 1];
    let sum = 0;

    for(i=0; i<=n; i++) {
        sum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
        fibArr.push(sum);
    }
    return fibArr;
}

/* let result = fibonacciArray(10);
console.log(result); */