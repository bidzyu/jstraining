const sortLH = (arr, low, high) => {
    const pivotIndex = Math.floor(low + Math.random() * (high + 1 - low));
    const pivot = arr[pivotIndex]; // выбираем рандомный(центральный элемент)

    while (high >= low) {
        
        while (arr[low] < pivot) { //пока элемент слева меньше "центрального" двигаемся вверх
            low++;
        }
        while (arr[high] > pivot) { //пока элемент справа больше "центрального" двигаемся вниз
            high--;
        }
        if (high >= low) { // если верхний итератор больше нижнего меняем местами элементы и шагаем дальше
            [arr[low], arr[high]] = [arr[high], arr[low]];
            high--;
            low++;
        }
    }
    return low; // возвращаем середину сортировки (там где пересеклись нижний и верхний итераторы)
};

const qsort = (arr, low = 0, high = arr.length - 1) => {  
    if (low < high) { // если элементов в массиве больше 0..
        const index = sortLH(arr, low, high); // сортируем массив по сторонам и записываем центральный индекс
        qsort(arr, low, index -1); //передаем нижнюю половину списка
        qsort(arr, index, high); //передаем верхнюю
    }

    return arr; // возвращаем отсортированный массив
};


qsort([3, 5, 1, 1, 2, 8, -3, 4, 7, 8, 9, 5, 1, 2, 3])