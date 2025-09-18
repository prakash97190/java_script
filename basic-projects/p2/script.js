const display= document.getElementById("display");
function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function pop_back(){
    let s=display.value;
    let update=s.slice(0,-1);
    display.value=update;
}

function calculate(){
    try {
        let expression=display.value;
        expression=expression.replace(/%/g,"/100*");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }

}

document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || key === ".") {
        // numbers and dot
        appendValue(key);
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
        // operators
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        // calculate on Enter or '='
        calculate();
    } else if (key === "Backspace") {
        // delete one character
        pop_back();
    } else if (key === "Escape" || key==="C") {
        // clear on Esc
        clearDisplay();
    }
});