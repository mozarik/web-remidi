// Akan mereturn array yang bernilai [1 s/d end]
function insertArray(end) {
    var arr = []
    for (var i = 1; i < end + 1; i++) {
        arr.push(i)
    }
    return arr
}

//mengembalikan array genap
function checkEven(listArray) {
    var even = []

    for (var i = 0; i <= listArray.length; i++) {
        if (listArray[i] % 2 == 0) {
            even.push(listArray[i])
        }
    }
    return even
}

//mengembalikan array ganjil
function checkOdd(listArray) {
    var odd = []

    for (var i = 0; i <= listArray.length; i++) {
        if (listArray[i] % 2 != 0) {
            odd.push(listArray[i])
        }
    }
    //Fix for trailing comma at the end of JavaScript 
    odd.pop()
    return odd
}


// Cari jumlah total dan rata rata dari array ganjil dan genap
function arrayTotal() {
    //Get Nilai N Value from HTML
    let nilaiN = parseInt(document.querySelector('#inputUser').value)
    //Arrow function to Sum all of array

    const arrSum = arr => arr.reduce((a, b) => a + b, 0)
    // arrSum([20, 10, 5, 10]) -> 45

    const arrAvg = arr => {
        let sum = arr.reduce((previous, current) => current += previous)
        let avg = sum / arr.length
        return avg
    }

    // Complete
    let initArray = insertArray(nilaiN)
    let evenArray = checkEven(initArray)
    let oddArray = checkOdd(initArray)

    //AvgEven and Odd
    let sumArrayEven = arrSum(evenArray)
    let sumArrayOdd = arrSum(oddArray)
    let avgArrayEven = arrAvg(evenArray)
    let avgArrayOdd = arrAvg(oddArray)

    //Console log check first
    console.log(`InitArray ${initArray}`);
    console.log(`evenArray ${evenArray}`);
    console.log(`oddArray ${oddArray}`);
    console.log(`sumArrayEven ${sumArrayEven}`);
    console.log(`sumArrayOdd ${sumArrayOdd}`);
    console.log(`avgArrayEven ${avgArrayEven}`);
    console.log(`avgArrayOdd ${avgArrayOdd}`);


    //create HTML element 
    document.querySelector("#arrayBuat").innerHTML = `Output [Array yang dibuat] : ${initArray}`
    document.querySelector("#arrayGenap").innerHTML = `Output [Array Yang Genap] : ${evenArray}`
    document.querySelector("#arrayGanjil").innerHTML = `Output [Array yang Ganjil] : ${oddArray}`
    document.querySelector("#arraySumGenap").innerHTML = `Output [Jumlah Sum dari Array Genap] : ${sumArrayEven}`
    document.querySelector("#arraySumGanjil").innerHTML = `Output [Jumlah Sum dari Array Ganjil] : ${sumArrayOdd}`
    document.querySelector("#arrayAvgGenap").innerHTML = `Output [Average dari Array Genap] : ${avgArrayEven}`
    document.querySelector("#arrayAvgGanjil").innerHTML = `Output [Average dari Array Ganjil] : ${avgArrayOdd}`
}