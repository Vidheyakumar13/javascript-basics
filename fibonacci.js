/* https://javascript.info/recursion#tasks */

function fibonacci(n){
    return n <= 1 ? n : fibonacci(n-1) + fibonacci (n-2)
}
alert(fibonacci(3)) // 2 is the output
alert(fibonacci(10)) // 55 is the output