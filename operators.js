// prefix and postfix
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Assignment Result
let y= 2;

let x = 1 + (y *= 2); // 5

// Type Conversions
"" + 1 + 0 //"10";
"" - 1 + 0 //-1;
true + false // 1;
6 / "3" //2;
"2" * "3" //6;
4 + 5 + "px" //"45px";
"$" + 4 + 5 //"$45";
"4" - 2 //2;
"4px" - 2 //NaN ;
"  -9  " + 5 // " -9 5 " ;
"  -9  " - 5 //-14 ;
null + 1 //1 ;
undefined + 1 //NaN ;
" \t \n" - 2 //-2 ;

// Fix the addition 
let firstNumber = +prompt("First Number ? ", 1)
let secondNumber = +prompt("Second Number ?", 2)

alert(firstNumber + secondNumber)