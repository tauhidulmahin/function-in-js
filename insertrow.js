let columnTexts = ["Column 11", "Column 22", "Column 33", "Column 44"];


function getTextNodeFromText(arrayOfTexts) {
    if (!Array.isArray(arrayOfTexts)) {
        return [];
    }

    let arrayOfTextNodes = [];
    let textNode = "";
    for (let i = 0; i < arrayOfTexts.length; i++) {
        textNode = document.createTextNode(arrayOfTexts[i]);
        arrayOfTextNodes.push(textNode); // preferred
        // columnTextNodes[i] = textNode; // same as lines 6
    }
    return arrayOfTextNodes;
}

let columnTextNodes = getTextNodeFromText(columnTexts);

console.log(columnTextNodes);

// get td node from text nodes


// function getTdNodeFromTextNodes(tdOfTdNode) {
    
//     let tdNode = "";
//     for (let td of columnTextNodes) {
//         tdNode = document.createElement('td');
//         tdNode.appendChild(td);
//     }
//     return tdNode;
// }
// let tdNodes = getTdNodeFromTextNodes(columnTextNodes);
// console.log(tdNodes);



function getTdNodeFromTextNodes(tdOfTdNode) {
    let arrayOfTdNodes = [];
    let tdNode = "";
    for (let td of columnTextNodes) {
        tdNode = document.createElement('td');
        arrayOfTdNodes.push(tdNode);
        tdNode.appendChild(td);
    }
    return arrayOfTdNodes;
}
let tdNodes = getTdNodeFromTextNodes(columnTextNodes);
console.log(tdNodes);
