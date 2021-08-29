const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        count++;
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }   
    }

    return [...quickSort(less), pivot , ...quickSort(greater)];
}

console.log(quickSort(array))
console.log('count:', count);