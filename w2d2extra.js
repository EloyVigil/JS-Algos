const unionUnsorted = (arrLeft, arrRight) => {
    const map = {}
    const newArr = [...arrLeft]
    for (let i = 0; i < arrLeft.length; i++) {
        !map[arrLeft[i]] ? map[arrLeft[i]] = 1 : map[arrLeft[i]]++;
    }
    for (let j = 0; j < arrRight.length; j++) {
        map[arrRight[j]] ? map[arrRight[j]]-- : newArr.push(arrRight[j]);
    }
    return newArr;
}

console.log(unionUnsorted([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]));
console.log(unionUnsorted([2, 1, 10, 7, 9], [3, 10, 2, 7, 9, 5, 2]));
console.log(unionUnsorted([2, 2, 7, 1, 2], [2, 2, 6, 7, 6]));