
let accumlator = new Accumlator(0);
accumlator.read();
accumlator.read();

alert(accumlator.value);

function Accumlator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += +prompt('How much to add? ', 0);
    };
}

