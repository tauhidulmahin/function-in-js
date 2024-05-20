// screen to display
let screen = document.getElementById("screen");

// display digit from 0 to 9
let buttonPad = document.getElementById("buttonPad");
let txtNode = null;
let btn = null;
let counter = 3;

for (i = 0; i < 10; i++) {

    // i expect to show mutton 3x3 column

    if (i < counter) {

        txtNode = document.createTextNode(i);
        btn = document.createElement("BUTTON");
        btn.appendChild(txtNode);
        buttonPad.appendChild(btn);

    } else {
        br = document.createElement("BR");
        buttonPad.appendChild(br);

        txtNode = document.createTextNode(i);
        btn = document.createElement("BUTTON");
        btn.appendChild(txtNode);
        buttonPad.appendChild(btn);

        counter += 3;
    }
}