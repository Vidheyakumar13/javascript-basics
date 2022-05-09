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