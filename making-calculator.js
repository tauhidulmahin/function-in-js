// screen to display
let screen = document.getElementById("screen");

// display digit from 0 to 9
let counter = 3;
addButtonToNumberPad('c');
addButtonToNumberPad('%');
addButtonToNumberPad('+');
br = document.createElement("BR");
numberPad.appendChild(br);
addButtonToNumberPad('-');
addButtonToNumberPad('*');
addButtonToNumberPad('/');
for (i = 9; i >= 0; i--) {

    // i expect to show mutton 3x3 column
    if (i % 3 === 0) {
        br = document.createElement("BR");
        numberPad.appendChild(br);
    }

    addButtonToNumberPad(i);

}
addButtonToNumberPad('.');
addButtonToNumberPad('=');
function addButtonToNumberPad(btnValue) {
    let txtNode = null;
    let btn = null;
    txtNode = document.createTextNode(btnValue);
    btn = document.createElement("BUTTON");
    btn.setAttribute("data-digitOrSymbol", btnValue)
    btn.setAttribute("id", "myId_" + btnValue)
    btn.onclick = (evt) => { //add event listener
        alert(evt.target.getAttribute("data-digitOrSymbol"))
        // alert(evt.target.dataset.digitOrSymbol) //should work check later
    }
    btn.appendChild(txtNode);
    let numberPad = document.getElementById("numberPad");
    numberPad.appendChild(btn);
}

// if (i >= counter) {
//     br = document.createElement("BR");
//     numberPad.appendChild(br);
//     counter += 3;

// }

//riskey
// btn.onclick = (evt) => {
//     alert(evt.target.firstChild.nodeValue)
// }