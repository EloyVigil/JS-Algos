//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let runner1 = 0;
    let runner2 = 0;
    let newArr = [];
    if(rightArr.length == 0 && leftArr.length == 0){
        return "Both Arrays are empty"
    }
    if(leftArr.length == 0){
        return rightArr
    } 
    if(rightArr.length == 0){
        return leftArr
    } 
    while (runner1 < leftArr.length || runner2 < rightArr.length){
        if(leftArr[runner1] < rightArr[runner2]){
            newArr.push(leftArr[runner1]);
            runner1++;
        } else if(leftArr[runner1] == rightArr[runner2]){
            newArr.push(leftArr[runner1]);
            newArr.push(rightArr[runner2]);
            runner1++;
            runner2++;
        } else {
            newArr.push(rightArr[runner2]);
            runner2++;
        }
    }
    return newArr;
}

// // should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));
// // should return [1,2,3,4,5,6,7]
console.log(combine([1,2,3,4,5],[6,7]));
// // // should return [78]
console.log(combine([78],[]));
// // // should return []
console.log(combine([],[]));
// // // should return [0,1,2,3,7,9,11,15,109]
console.log(combine([3,9,10],[0,1,2,7,11,15,109]));
