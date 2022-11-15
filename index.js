function fizzbuzz (param) {
    let result

    if (param % 15 == 0) {
        result = "FizzBuzz"
    } else if (param % 5 == 0) {
        result = "Buzz"
    } else if (param % 3 == 0) {
        result = "Fizz"
    } else {
        result = "Not Defined"
    }
 
    return result
}

const data1 = fizzbuzz (150)

console.log (data1)
