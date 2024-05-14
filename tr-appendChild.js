let col11 = document.createTextNode("Column 11");
let col22 = document.createTextNode("Column 22");
let col33 = document.createTextNode("Column 33");


function td(txtNode){
	
  let td = document.createElement("TD");
  td.appendChild(txtNode);  
  return td;

}

function tr(tdNode){

  let tr = document.createElement("TR")
  tr.appendChild(tdNode)
  return tr;

}

let td11 = td(col11);
let td22 = td(col22);
let td33 = td(col33);

function showtr() {
  let tbody = document.querySelector('#sampleTable tbody');

  tbody.appendChild(td11);
  tbody.appendChild(td22);
  tbody.appendChild(td33);
    
}

// let trX = tr(td11);

// tbody.appendChild(trX);
