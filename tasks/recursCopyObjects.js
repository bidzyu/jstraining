const copyItem = (item) => {
    let newItem;
    
    if (Array.isArray(item)) {
        newItem = copyArr(item);
    } else {
        newItem = copyObj(item);
    }

    return newItem;
}

const copyArr = (arr) => {
    if (!Array.isArray(arr)) {
        return arr;
    }

    let newArr = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            newArr.push(copyArr(item));
        } else {
            newArr.push(copyObj(item));
        }
    }

    return newArr;
}

const copyObj = (obj) => {
    if (typeof(obj) !== 'object') {
        return obj;
    }

    let newObj = {};
    
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            newObj[key] = copyArr(obj[key]);
        } else {
            newObj[key] = copyObj(obj[key]);
        }
    }

    return newObj;
}