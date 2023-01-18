//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

const intersectUnsorted = (arrLeft, arrRight) => {
    let newArr = [];
    let newObj = {};

    //loop through first array
    for(i=0; i<arrLeft.length; i++){
        //if key in object add to count value
        if(arrLeft[i] in newObj){
            newObj[arrLeft[i]] += 1
        } else {
            //if key not in object add key and count value
            newObj[arrLeft[i]] = 1;
        }
    }
    //loop through second array
    for(i=0; i<arrRight.length; i++){
        //if values match add to new array
        if(arrRight[i] in newObj && newObj[arrRight[i]] > 0){
            newArr.push(arrRight[i])
            newObj[arrRight[i]] -= 1;
        }
    }
    return newArr;

}

console.log(intersectUnsorted([6, 7, 2, 7, 6, 2], [2, 7, 2, 1, 2]));
console.log(intersectUnsorted([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
console.log(intersectUnsorted([1, 5, 9], [2, 6, 10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!

//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)
