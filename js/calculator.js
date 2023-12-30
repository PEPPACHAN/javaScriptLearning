var calculatorInputs = document.getElementById("calculateForm").addEventListener("input", calculate);

// exprs.forEach(expr => {expr.addEventListener("input", colculate)});

function calculate(event){
    event.preventDefault();
    var elements = document.getElementById("calculateForm");

    var input1 = elements.input1.value;
    var input2 = elements.input2.value;
    var operation = elements.operation.value;
    var result = document.getElementById("result")

    switch (operation){
        case ("+"):{
            result.innerHTML = parseInt(input1) + parseInt(input2);
            break;
        }
        case ("-"):{
            result.innerHTML = parseInt(input1) - parseInt(input2);
            break;
        }
    }
}

// console.log("it's log");
// console.info("it's info");
// console.error("it's error");
// console.warn("it's warning");

// var num = 100;
// if (num < 10){
//     num++;
// }else{
//     console.log(num);
// }


// function onTextClick(){
//     document.getElementById("text").innerHTML = "ON BUTTON!!!!!";
// }
