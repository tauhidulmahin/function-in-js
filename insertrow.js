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
            // columnTextNodes[i] = textNode; // same as lines 6
        }
        return arrayOfTextNodes;
    },

    getTdNodesFromTextNodes: function (arrayOfTextNodes2) {
        // APPLY IS ARRAY CHECKING

        let arrayOfTdNodes = [];
        let td = null;
        for (let i = 0; i < arrayOfTextNodes2.length; i++) {
            td = document.createElement("TD");
            if (arrayOfTextNodes2[i].nodeType == 3) {
                td.appendChild(arrayOfTextNodes2[i]);
            }
            // arrayOfTdNodes[i] = td.appendChild(arrayOfTextNodes2[i]);
            arrayOfTdNodes.push(td);
        }
        return arrayOfTdNodes;
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
            let columnOfTdNodes = Shuma.getTdNodesFromTextNodes(columnOfTextNodes);
            let tr = Shuma.getTrNodeFromTdNodes(columnOfTdNodes);

            Shuma.insertRow(tr, 'sampleTbody');
        }
    }
}

let tableData = [
    ['A', 'B', 'C', 'D'],  // index [0] is always thead
    ["Column 11", "Column 22", "Column 33", 1],
    ["Column 111", "Column 222", "Column 333", 2],
    ["Column 1111", "Column 2222", "Column 3333", 3],
    ["Column 11112", "Column 2222", "Column 3333", 4],
    ["Column 11113", "Column 2222", "Column 3333", 5],
    ["Column 11114", "Column 2222", "Column 3333", 6]
]


Shuma.insertRows(tableData);













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