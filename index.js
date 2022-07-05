const calculator = {
    number1: +prompt("number1"),
    operator: prompt("operator"),
    number2: +prompt("number2"),
    result: 0,

    justForthis: function() {
        console.log(this);
    }, 

    total: function() {
        this.result = this.number1 + this.number2;
        console.log(this.result);
    },

    multiplication: function() {
        this.result = this.number1 * this.number2;
        console.log(this.result);
    },

    minus: function() {
        this.result = this.number1 - this.number2;
        console.log(this.result);
    },

    division: function() {
        this.result = this.number1 / this.number2;
        console.log(this.result);
    },

    input: function() {
        switch (this.operator) {
            case "+":
                this.total()
                break;

            case "*":
                this.multiplication()
                break;
            
            case "-":
                this.minus()
                break; 
                
            case "/":
                this.division()
                break;    
            default:000
                break;
        }
    }

}
console.log(calculator["number1"]);
console.log(calculator["operator"]);
console.log(calculator["number2"]);
calculator.input();
 
 
