const myMerge = (arr1, arr2) => {
    
    let i = 0,
        j = 0;
    const sortArr = [];
    
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arr1.length && j < arr2.length) {
        sortArr.push(
            (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++]
        );
    }
    
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...sortArr,
        ...arr1.slice(i),
        ...arr2.slice(j)
    ];

};

const myMergeSort = (arr) => {
    
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }

    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    
    // Находим середину массива и делим его на два
    let middle = Math.floor(arr.length / 2),
        leftPart = arr.slice(0, middle),
        rightPart = arr.slice(middle);
    
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return myMerge(myMergeSort(leftPart), myMergeSort(rightPart));
};