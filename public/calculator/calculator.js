// Array to store calculations 
var valuesToCalculate = [];
// Set total to zero.
var total = 0;
// Variable for storing a number more than one digit long
var keyedValue = "";
// Add event listener to get button value
var buttonPress = document.addEventListener('click', calculate);


function calculate(){
    // Get presed value from html and event listener
    var pressedValue = event.target.value;
    // If AC then call allClear
    if(pressedValue === "AC"){
        allClear();
        displayTotal(total);
    // If CE then call clear
    } else if (pressedValue === "CE"){
        clearEntry();
        displayTotal(total);
    // If = then replace display with running total 
    } else if (pressedValue === "="){
        // Push number string to array
        valuesToCalculate.push(keyedValue);
        // Reset storage for number string to 0
        keyedValue = "";
        calculateTotal();
        displayTotal(total);
    // Check if operation sign
    } else if (pressedValue === "+" || pressedValue === "-" || pressedValue === "*" || pressedValue === "/") {
        // Push number string to array
        valuesToCalculate.push(keyedValue);
        // Reset storage for number string to 0
        keyedValue = ""
        // Add operator to array
        valuesToCalculate.push(pressedValue);
        displayTotal(pressedValue);
    } else if (pressedValue != NaN){
        // Check is pressed value is undefied or null
        if(pressedValue == null){
            console.log("Pressed outside a button")
        // Add more than one digit to storage
        } else {
        keyedValue = keyedValue.concat(pressedValue);
        displayTotal(keyedValue);
        }
    } 

}
    
// Clear everything and reset calc 
function allClear(){
    //Erase current stored number
    console.log("AC");
    keyedValue = "";
    // Erase global array
    valuesToCalculate = [];
    //Set values to zero
    total = 0;
}
// Clear last inputed value
function clearEntry(){
    console.log("CE");
    // Erase current stored number
    keyedValue = ""; 
    // Set display to 0
    total = 0;
}
      
// Calculate total    
function calculateTotal(){
    var calcString = valuesToCalculate.join(' ');
    total = eval(calcString);
}

// Display total on LCD screen
function displayTotal(inputed){
    document.getElementById("display").value = inputed;
}





