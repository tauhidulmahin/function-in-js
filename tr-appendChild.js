let col11 = document.createTextNode("Column 11");
let col22 = document.createTextNode("Column 22");
let col33 = document.createTextNode("Column 33");


function td(txtNode){
	
  let td = document.createElement("TD");
  td.appendChild(txtNode);  
  return td;

}

function tr(tdNode, tdNode2, tdNode3){

  let tr = document.createElement("TR")
  tr.appendChild(tdNode);
  tr.appendChild(tdNode2);
  tr.appendChild(tdNode3);
  return tr;

}

let td11 = td(col11);
let td22 = td(col22);
let td33 = td(col33);

let trX = tr(td11, td22, td33)

let tbody = document.querySelector('#sampleTable tbody');

tbody.appendChild(trX);
