const display = document.getElementById("display");
converted = 0;

function appendToDisplay(input) {
    if(converted == 1){
        clearDisplay();
        converted = 0;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
 
function calculate() {
    display.value = kmToMils(display.value);
    display.value += " mils";
    converted = 1;
}

function kmToMils(number) {
    return Math.round(-(((number-100)/1500)*356)+978);
}