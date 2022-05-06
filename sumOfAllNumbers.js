/* https://javascript.info/recursion#tasks */

// using a for loop 
function sumOfAll(n){

let sum = 0;
for (let i=0; i<=n ; i++){
    sum +=i;
}
return sum
}
alert ( sumOfAll(100))

// using recursion 

function sumOfAllRecursion(m){
    if(m == 1){
        return 1;
    } else {
        return m + sumOfAllRecursion(m - 1)
    }
}
alert(sumOfAllRecursion(5))

// using the formula

function sumOfAllFormula(f){
    return f * (f+1) / 2
}
alert ( sumOfAllFormula (10))