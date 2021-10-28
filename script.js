//This calculator uses the eval() function to evaluate string expressions
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
console.log(operator);
let sm_display = document.getElementById("in-sm");
let bg_display = document.getElementById("in-bg");

var expression = ""; //expression is created depending on user's input
console.log(expression);

var tempStatement = []; //holds and converts values in "expression" to a format executable by eval eg.(× is converted to *)
let statement = ""; //captures elements of array "tempStatement[]" and concatenates them to form a statement executed by eval()

/*Display numbers*/
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () =>{
        expression += `${number[i].innerHTML}`;
        sm_display.textContent = expression;
    });
}

/*Display operators and decimal point*/

//clear everything
operator[0].addEventListener('click', () =>{ 
    sm_display.textContent = ""; 
    bg_display.textContent = "";
    expression = "";
    count = 0
    tempStatement = [];
    statement = "";
});

//addition subtraction division multiplication
for (let i = 3; i < 7; i++) {
    operator[i].addEventListener('click', () =>{
        if(expression == ""){
            expression = "";
        }
       else if(expression[expression.length - 1] - 0 != expression[expression.length - 1] && expression[expression.length - 1] != '%' 
               && expression[expression.length - 1] != '(' && expression[expression.length - 1] != ')'){
           let temp = "";
           for (let i = 0; i < expression.length - 1; i++) {
               temp += expression[i];
           }
           temp+= operator[i].innerHTML;
           expression = temp;
           sm_display.textContent = expression;
       }
        else{
            expression += `${operator[i].innerHTML}`;
            sm_display.textContent = expression;
        }
    }); 
}

//Percentage
operator[2].addEventListener('click', () =>{
    if(expression == ""){
        expression = expression;
    }
    else if(expression[expression.length - 1] - 0 != expression[expression.length - 1]){
        console.log("invalid format");
        expression = expression;
    }
    else{
        expression += `${operator[2].innerHTML}`;
        sm_display.textContent = expression;
    }
});


//Decimal point
operator[8].addEventListener('click', () =>{
    if(expression[expression.length - 1] == "."){
        expression = expression;
    }
    else if(expression == "" || expression[expression.length - 1] - 0 != expression[expression.length - 1]){
        expression += `0${operator[8].innerHTML}`;
        sm_display.textContent = expression;
    }
    else{
        expression += `${operator[8].innerHTML}`;
        sm_display.textContent = expression;
    }
});


//bracket
var count = 0; //the bracket to be inserted depends on the value of this variable... no say i no tell you
operator[1].addEventListener('click', () =>{
    if(count == 0){
        expression += '(';
        sm_display.textContent = expression;
        count++;
    }
    else{
        expression += ')';
        sm_display.textContent = expression;
        count--;
    }
});

//equals
operator[9].addEventListener('click', () =>{
    calc();
    bg_display.textContent = solution; //display solution
    
    //clear everything
    solution = 0;
    expression = ""; 
    statement = "";
    tempStatement = []
    sm_display.textContent = expression;
});


var solution = 0;
function calc() {
    console.log(expression);
    for (let i = 0; i < expression.length; i++) {
        if(expression[i] == '×'){
            tempStatement.push('*');
        }
        else if(expression[i] == '÷'){
            tempStatement.push('/');
        }
        else if(expression[i] == '%'){
            tempStatement.push('/100');
        }
        else{
            tempStatement.push(expression[i]);
        }
    }

    for (let i = 0; i < tempStatement.length; i++) {
        statement += tempStatement[i];
    }
    solution = eval(statement);
    console.log(statement);
    console.log(solution);
}