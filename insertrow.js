// const Mahin = {

//     getTextNodeFromText: function (arrayOfTexts) {
//         if (!Array.isArray(arrayOfTexts)) {
//             return [];
//         }

//         let arrayOfTextNodes = [];
//         let textNode = "";
//         for (let i = 0; i < arrayOfTexts.length; i++) {
//             textNode = document.createTextNode(arrayOfTexts[i]);
//             arrayOfTextNodes.push(textNode); // preferred
//             // columnTextNodes[i] = textNode; // same as lines 6
//         }
//         return arrayOfTextNodes;
//     },

//     getTdNodesFromTextNodes: function (arrayOfTextNodes2) {
//         // APPLY IS ARRAY CHECKING

//         let arrayOfTdNodes = [];
//         let td = null;
//         for (let i = 0; i < arrayOfTextNodes2.length; i++) {
//             td = document.createElement("TD");
//             if (arrayOfTextNodes2[i].nodeType == 3) {
//                 td.appendChild(arrayOfTextNodes2[i]);
//             }
//             // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
//             arrayOfTdNodes.push(td);
//         }
//         return arrayOfTdNodes;
//     },

//     getTrNodeFromTdNodes: function (arrayOfTdNodes) {
//         let trNode = document.createElement("TR");
//         for (let i = 0; i < arrayOfTdNodes.length; i++) {
//             trNode.appendChild(arrayOfTdNodes[i]);
//         }
//         return trNode;
//     },

//     insertRow: function (row, containerId) {
//         // let target = document.querySelector('table#sampleTable tbody');
//         target = document.getElementById(containerId);
//         target.appendChild(row);
//     },

//     insertRows: function (rowsData) {
//         for (row of rowsData) {
//             let columnTexts = row;

//             let columnOfTextNodes = Mahin.getTextNodeFromText(columnTexts);
//             let columnOfTdNodes = Mahin.getTdNodesFromTextNodes(columnOfTextNodes);
//             let tr = Mahin.getTrNodeFromTdNodes(columnOfTdNodes);

//             Mahin.insertRow(tr, 'sampleTbody');
//         }
//     }
// }

// let tableData = [
//     ['A', 'B', 'C', 'D'],  // index [0] is always thead
//     ["Column 11", "Column 22", "Column 33", 1],
//     ["Column 111", "Column 222", "Column 333", 2],
//     ["Column 1111", "Column 2222", "Column 3333", 3],
//     ["Column 11112", "Column 2222", "Column 3333", 4],
//     ["Column 11113", "Column 2222", "Column 3333", 5],
//     ["Column 11114", "Column 2222", "Column 3333", 6]
// ]


// Mahin.insertRows(tableData);







const Shuma = {

    getTextNodeFromText: function (arrayOfTexts) {
        if (!Array.isArray(arrayOfTexts)) {
            return [];
        }

        let arrayOfTextNodes = [];
        let textNode = "";
        for (let i = 0; i < arrayOfTexts.length; i++) {
            textNode = document.createTextNode(arrayOfTexts[i]);
            arrayOfTextNodes.push(textNode); // preferred
            // columnTextNodes[i] = textNode; // same as the line above
        }
        return arrayOfTextNodes;
    },

    getTdNodesFromTextNodes: function (arrayOfTextNodes) {
        // APPLY IS ARRAY CHECKING
        if (!Array.isArray(arrayOfTextNodes)) {
            return [];
        }
        let arrayOfTdNodes = [];
        let td = null;
        for (let i = 0; i < arrayOfTextNodes.length; i++) {
            td = document.createElement("TD");
            if (arrayOfTextNodes[i].nodeType == 3) {
                td.appendChild(arrayOfTextNodes[i]);
            }
            // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
            arrayOfTdNodes.push(td);
        }
        return arrayOfTdNodes;
    },

    getThNodesFromTextNodes: function (arrayOfTextNodes) {
        // APPLY IS ARRAY CHECKING
        if (!Array.isArray(arrayOfTextNodes)) {
            return [];
        }
        let arrayOfThNodes = [];
        let th = null;
        for (let i = 0; i < arrayOfTextNodes.length; i++) {
            th = document.createElement("TH");
            if (arrayOfTextNodes[i].nodeType == 3) {
                th.appendChild(arrayOfTextNodes[i]);
            }
            // arrayOfTdNodes[i] = th.appendChild(arrayOfTextNodes2[i]);
            arrayOfThNodes.push(th);
        }
        return arrayOfThNodes;
    },

    getTrNodeFromTdNodes: function (arrayOfTdNodes) {
        let trNode = document.createElement("TR");
        for (let i = 0; i < arrayOfTdNodes.length; i++) {
            trNode.appendChild(arrayOfTdNodes[i]);
        }
        return trNode;
    },

    insertRow: function (row, containerId) {
        // let target = document.querySelector('table#sampleTable tbody');
        target = document.getElementById(containerId);
        target.appendChild(row);
    },

    insertRows: function (rowsData) {
        for (row of rowsData) {
            let columnTexts = row;

            let columnOfTextNodes = Shuma.getTextNodeFromText(columnTexts);

            if (rowsData.indexOf(row) === 0) {
                let columnOfThNodes = Shuma.getThNodesFromTextNodes(columnOfTextNodes);
                let th = Shuma.getTrNodeFromTdNodes(columnOfThNodes);

                Shuma.insertRow(th, 'sampleThead');
            }
            else {
                let columnOfTdNodes = Shuma.getTdNodesFromTextNodes(columnOfTextNodes);
                let tr = Shuma.getTrNodeFromTdNodes(columnOfTdNodes);

                Shuma.insertRow(tr, 'sampleTbody');
            }
        }
    }
}

let tableData = [   // index [0] is always thead
    ['head 1', 'head 2', 'head 3', 'head 4'],
    ['A', 'B', 'C', 'D'],
    ["Column 11", "Column 22", "Column 33", 1],
    ["Column 111", "Column 222", "Column 333", 2],
    ["Column 1111", "Column 2222", "Column 3333", 3],
    ["Column 11112", "Column 2222", "Column 3333", 4],
    ["Column 11113", "Column 2222", "Column 3333", 5],
    ["Column 11114", "Column 2222", "Column 3333", 6]
]


Shuma.insertRows(tableData);




// let columnTexts = ["Column 11", "Column 22", "Column 33", "Column 44"];

// function getTextNodeFromText(arrayOfTexts) {
//     if (!Array.isArray(arrayOfTexts)) {
//         return [];
//     }

//     let arrayOfTextNodes = [];
//     let textNode = "";
//     for (let i = 0; i < arrayOfTexts.length; i++) {
//         textNode = document.createTextNode(arrayOfTexts[i]);
//         arrayOfTextNodes.push(textNode); // preferred
//         // columnTextNodes[i] = textNode; // same as lines 6
//     }
//     return arrayOfTextNodes;
// }

// let columnTextNodes = getTextNodeFromText(columnTexts);

// console.log(columnTextNodes);

// get td node from text nodes

// function getTdNodeFromTextNodes(tdOfTdNode){
//     let tdNode = "";
//     for (let td of columnTextNodes) {
//         tdNode = document.createElement('td');
//         tdNode.appendChild(td);
//     }
//     return tdNode;
// }
// let tdNodes = getTdNodeFromTextNodes(columnTextNodes);
// console.log(tdNodes);


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



// function getTdNodeFromTextNodes(tdOfTdNode) {
//     let arrayOfTdNodes = [];
//     let tdNode = "";
//     for (let td of tdOfTdNode) {
//         tdNode = document.createElement('td');
//         arrayOfTdNodes.push(tdNode);
//         tdNode.appendChild(td);
//     }
//     return arrayOfTdNodes;
// }
// let tdNodes = getTdNodeFromTextNodes(columnTextNodes);
// console.log(tdNodes);