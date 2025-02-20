const displayMetres = document.getElementById("displayMetres");
const displayMils = document.getElementById("displayMils");
converted = 0;

function appendToDisplay(input) {
    if(converted == 1){
        clearDisplay();
        converted = 0;
    }
    displayMetres.value += input;
}

function clearDisplay() {
    displayMetres.value = "";
}
 
function calculate() {
    displayMils.value = kmToMils(displayMetres.value);
    converted = 1;
}

function kmToMils(number) {
    return Math.round(-(((number-100)/1500)*356)+978);
}