function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
        console.log("Running the inner loop again")
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                console.log(`Im swapping larger value ${array[i]} with smaller value ${array[i + 1]}`)
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return array
}

let test1 = [5, 4, 7, 9, 10, 55, 47, 89, -77, -34]
console.log(bubbleSort(test1))