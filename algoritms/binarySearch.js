const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11].sort((a,b) => a - b);
let count = 0;

console.log(array);

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {     
        count += 1;   
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1;
            continue;
        }
        if (item > arr[middle]) {
            start = middle + 1;
            continue;
        }
    }
    return position;
}

console.log(binarySearch(array, 4))
console.log('count:', count);