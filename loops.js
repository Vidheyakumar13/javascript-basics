// last loop value
let i=3;
while (i){
    alert (i--) /* first iteration : 2 
                   second iteration: 1
                   third iteration : 0*/
}

//which loop does the while loop shows

// 1. prefix
let j=0;
while (++j < 10) alert(j) // The output will run from 0 to 9

// 2. postfix
let a=0
while (a++ < 10) alert(a) // The output will run from 0 to 10

// Replace "for" with "while"

for (let b=0; b<3; b++){
    alert (`number ${b}!`)
    console.log(alert);
}

let c = 0;
while (c<3){
    alert(`number ${c}`)
    console.log(alert);
}

// Repeat until the number is correct

let number;
do{
    number = prompt("Entert the Number is greater than 50 ", 0)
} while(number<=50 && number)