import Calculator from "/projects/calculator/lib.js";

const calcDisplay = document.querySelector("#calculator");
const calculator = new Calculator();

calcDisplay.addEventListener("click", function(e){
    
    // Get number from calculator
    if(e.target.classList.contains("number")) {
        
        let value = e.target.textContent;
        
        calculator.getNumber(value);
        calculator.loadAnimation(e);
        
    }
    
    // Operation pressed
    if(e.target.classList.contains("operator")) {
        
        let operator = e.target.textContent;
        
        if(calculator.currentNumber !== "" || calculator.evaluationCommited) {
            
            if(calculator.evaluationCommited && calculator.total !== null) {
                calculator.currentNumber = calculator.total;
            }
            
            switch(operator) {
            
                case "+":
                    calculator.operate(calculator.currentNumber, "+");
                    break;
                case "-":
                    calculator.operate(calculator.currentNumber, "-");
                    break;
                case "/":
                    calculator.operate(calculator.currentNumber, "/");
                    break;
                default:
                    calculator.operate(calculator.currentNumber, "*");
                
            }   
               
        }
        
        calculator.loadAnimation(e);
        
    }
    
    // Evaluation commited
    if(e.target.classList.contains("calculate")) {
        
        if(calculator.currentNumber !== "") {
            calculator.evaluationArray.push(Number(calculator.currentNumber));
        }
        
        calculator.checkArrayLastItem();
        calculator.evaluate();
        calculator.loadAnimation(e);
        
    }
    
    // Clear all results
    if(e.target.classList.contains("clear")) {
        calculator.clearAllResults();
        calculator.loadAnimation(e);
    }
    
});