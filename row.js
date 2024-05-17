let Mahin = {

    getTextNodeFromText: function (arrayOfTexts) {
        if (!Array.isArray(arrayOfTexts)) {
            return [];
        }
    
        let arrayOfTextNodes = [];
        let textNode = "";
        for (let i = 0; i < arrayOfTexts.length; i++) {
            textNode = document.createTextNode(arrayOfTexts[i]);
            arrayOfTextNodes.push(textNode)
    
        }
        return arrayOfTextNodes;
    },

    getTdNodesFromTextNodes: function (arrayOfTdNodes) {
        let arrayOfTd = [];
        let tdNodes = "";
        for (let i = 0; i < arrayOfTdNodes.length; i++) {
    
            tdNodes = document.createElement("td");
    
            if (arrayOfTdNodes[i].nodeType === 3) {
                tdNodes.appendChild(arrayOfTdNodes[i]);
    
            }
            arrayOfTd.push(tdNodes);
    
        }
        return arrayOfTd;
    },

    getTrNodeFromTdNodes: function (arrayOfTrNodes) {
    
        let trNode = document.createElement("tr");
        for (let i = 0; i < arrayOfTrNodes.length; i++) {
            
            trNode.appendChild(arrayOfTrNodes[i]);
    
        }
        return trNode;
    
    },

    insertRow: function (raw, containerId) {
    
        target = document.getElementById(containerId);
        target.appendChild(raw);
    },

    // insertRows: function (rowsData) {
    //     for (row of rowsData) {
    //         let columnTexts = row;

    //         let columnOfTextNodes = Mahin.getTextNodeFromText(columnTexts);
    //         let columnOfTdNodes = Mahin.getTdNodesFromTextNodes(columnOfTextNodes);
    //         let tr = Mahin.getTrNodeFromTdNodes(columnOfTdNodes);

    //         Mahin.insertRow(tr, 'sampleTbody');
    //     }
    // }
}

let columnTexts = [
    ['A', 'B', 'C', 'D'],  // index [0] is always thead
    ["Column 11", "Column 22", "Column 33", 1],
    ["Column 111", "Column 222", "Column 333", 2],
    ["Column 1111", "Column 2222", "Column 3333", 3],
    ["Column 11112", "Column 2222", "Column 3333", 4],
    ["Column 11113", "Column 2222", "Column 3333", 5],
    ["Column 11114", "Column 2222", "Column 3333", 6]
]

// Mahin.insertRows(columnTexts);


let columnTextNodes = Mahin.getTextNodeFromText(columnTexts);
console.log(columnTextNodes);



let columnOfTdNodes = Mahin.getTdNodesFromTextNodes(columnTextNodes);
console.log(columnOfTdNodes);



let columnOfTrNodes = Mahin.getTrNodeFromTdNodes(columnOfTdNodes);
console.log(columnOfTrNodes);


let getRows = Mahin.insertRow(columnOfTrNodes, 'sampleTbody');
console.log(getRows);

