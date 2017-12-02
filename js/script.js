function AddTable(){
    var id= 1
    var table = document.getElementById("table")
    var tableRef = document.getElementById("table").getElementsByTagName('tbody')[0];
  
    var row = tableRef.insertRow(tableRef.rows.length)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var idNext = id++;
    cell1.innerHTML = idNext;
    cell2.innerHTML = document.getElementById("task").value;
 
}

