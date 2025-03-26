type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n <= 0 || arr.every(n => typeof n === 'number')) {
        return arr
    }

    let newArr: MultiDimensionalArray = []

    for (const x of arr) {
        if (typeof x === 'number') {
            newArr.push(x)
        } else {
            newArr.push(...x)
        }
    }

    return flat(newArr, n - 1)

};