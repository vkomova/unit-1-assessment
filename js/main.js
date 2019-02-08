// var inputvalue = document.getElementById('inputval').value;
// var parsedVal = parseInt(inputvalue);

// if (Number.isInteger(value)

// var inputvalue = document.getElementById('inputval').value;
// var parsedVal = parseInt(inputvalue);


var value = document.getElementById("totalvalue");
var totalVal = parseInt(value.innerHTML);
var count = 0;
value.innerHTML = count;


// var input = 0


var addButton = document.getElementById("add");
addButton.addEventListener("click", add);
function add() {
    var inputvalue = document.getElementById('inputval').value;
    var parsedVal = parseInt(inputvalue);
    var updateVal2 = count + parsedVal;
    count = updateVal2;
    value.innerHTML = count;
    // document.getElementById("totalvalue").textContent = updateVal2;
};

var subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", subtract);
function subtract(){
    var inputvalue = document.getElementById('inputval').value;
    var parsedVal = parseInt(inputvalue);
    var updateVal1 = count - parsedVal;
    count = updateVal1;
    value.innerHTML = count;
};


