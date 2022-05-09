// https://javascript.info/settimeout-setinterval#tasks
function printNumber(from, to){
    let start = from;
    let timer = setInterval (function() {
        alert (start)
        if(start == to){
            clearInterval(timer);
        }
        start++;
    }, 1000)
}

printNumber(1, 10)

// using Nested setTimeout

function printNumbers(begin, end){
    let a = begin;
    setTimeout(function go() {
    alert (a)
        if(current < to ) {
        setTimeout(go, 1000)
        }
        a++;
    }, 1000);
}
printNumbers(1, 20)
