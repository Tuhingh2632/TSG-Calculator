var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;

var operator = null;


for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){

        var value = this.getAttribute('data-value');

        if(value == '+' || value == '-' || value == '*' || value == '/'){
            operator = value;
            
           
            operand1 = parseFloat(display.textContent);
            display.innerText="";

        }else if(value == '='){
            var result = null;
            operand2 = parseFloat(display.textContent);
            switch(operator){
                case '+' : result=eval(operand1+operand2);
                break;
                case '-': result=eval(operand1-operand2);
                break;
                case '*': result=eval(operand1*operand2);
                break;
                case '/': result=eval(operand1/operand2);
                break;

            }
            display.innerText = result;
            

        }else if(value == '%'){
            operand2 = parseFloat(display.textContent);
           operand2 = operand2/100;
           display.innerText = operand2;
        }
        else if(value == 'Ac'){
            display.innerText="";
        }else if(value == '+/-'){
            operand1 = parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.innerText = operand1;
        }else if(value == 'pow'){
            display.innerText="Welcome to TSG Calculator !!";
            var sec=1;
            function saypow(){
                display.innerText=" ";
                sec++;
                if(sec ==2)
                {
                    clearInterval(id);
                  
                }
            }
            var id = setInterval(saypow,2000); 

        }
        else{
            display.innerText += value;
        }



    });
   
}
