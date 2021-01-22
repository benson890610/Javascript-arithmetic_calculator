export default class Calculator {
    
    constructor() {
        this.display = document.querySelector("#display");
        this.evaluationArray = [];
        this.currentNumber = "";
        this.total = null;
        this.evaluationCommited = false;
    }
    
    loadAnimation(e) {
    
        e.target.classList.add("btnclick");
            
        setTimeout(function(){
            e.target.classList.remove("btnclick");
        }, 300);
        
    }
    
    getNumber(value) {
    
        if(this.total !== null) {
            this.currentNumber = this.total.toString() + value;
            this.evaluationCommited = false;
        } else {
            this.currentNumber += value;
        }
        
        if(this.display.textContent === "0") {
            this.display.textContent = value;
        } else {
            this.display.textContent += value;
        }
        
    }
    
    checkArrayLastItem() {
    
        if(this.evaluationArray.length > 0) {
            
            let item = this.evaluationArray[this.evaluationArray.length - 1];
            
            if(item === "+" || item === "-" || item === "/" || item === "*") {
                this.evaluationArray.pop();
            }
            
        }
        
    }
    
    evaluate() {
    
        if(this.evaluationArray.length > 0) {
            
            for(let i = 0; i < this.evaluationArray.length; i++) {
                
                if((typeof this.evaluationArray[i] === "number") && (this.evaluationArray[i + 1] === "/" || this.evaluationArray[i + 1] === "*")) {
                    
                    if(this.evaluationArray[i + 1] === "/") {
                        
                        this.evaluationArray[i] = this.evaluationArray[i] / this.evaluationArray[i + 2];
                        this.evaluationArray.splice(i + 1, 1);
                        this.evaluationArray.splice(i + 1, 1);
                        
                        i = i - 1;
                        
                        if(this.evaluationArray.length <= 1) {
                            break;
                        }
                        
                    }
                    
                    if(this.evaluationArray[i + 1] === "*") {
                        
                        this.evaluationArray[i] = this.evaluationArray[i] * this.evaluationArray[i + 2];
                        this.evaluationArray.splice(i + 1, 1);
                        this.evaluationArray.splice(i + 1, 1);
                        
                        i = i - 1;
                        
                        if(this.evaluationArray.length <= 1) {
                            break;
                        }
                        
                    }
                    
                }
                
            }
            
            for(let i = 0; i < this.evaluationArray.length; i++) {
                
                if(typeof this.evaluationArray[i] === "number" && (this.evaluationArray[i + 1]) === "+" || this.evaluationArray[i + 1] === "-") {
                    
                    if(this.evaluationArray[i + 1] === "+") {
                        
                        this.evaluationArray[i] = this.evaluationArray[i] + this.evaluationArray[i + 2];
                        this.evaluationArray.splice(i + 1, 1);
                        this.evaluationArray.splice(i + 1, 1);
                        
                        i = i - 1;
                        
                        if(this.evaluationArray.length <= 1) {
                            break;
                        }
    
                    }
                    
                    if(this.evaluationArray[i + 1] === "-") {
                        
                        this.evaluationArray[i] = this.evaluationArray[i] - this.evaluationArray[i + 2];
                        this.evaluationArray.splice(i + 1, 1);
                        this.evaluationArray.splice(i + 1, 1);
                        
                        i = i - 1;
                        
                        if(this.evaluationArray.length <= 1) {
                            break;
                        }
                        
                    }
                    
                }
                
            }
            
            this.total = this.evaluationArray[0];
            
            if(this.total.toString().includes(".")) {
                this.total = parseFloat(this.total.toFixed(4));
            }
            
            this.display.textContent = this.total;
            this.evaluationArray = [];
            this.currentNumber = "";
            this.evaluationCommited = true;
            
        }
        
    }
    
    operate(number, operation) {
    
        this.evaluationArray.push(Number(number));
        this.evaluationArray.push(operation);
            
        this.display.textContent += " " + operation + " ";
        this.currentNumber = "";
        this.total = null;
        
    }
    
    clearAllResults() {
    
        this.display.textContent = "0";
        this.evaluationArray = [];
        this.total = null;
        this.evaluationCommited = false;
        
    }
    
}