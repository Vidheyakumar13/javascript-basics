let calculator = new Calculator();
calculator.read();

alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());

function Calculator(){
    this.read = function(){
        this.a = +prompt('Insert the Value of a', 0);
        this.b = +prompt('Insert the value of b', 0)
    }
    this.sum = function(){
        return this.a + this.b
    }
    this.mul = function(){
        return this.a * this.b
    }

}
