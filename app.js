var count_fcfs = 1;
var idNumber_fcfs = 2;
function insert_row_fcfs() {
  var table = document.getElementById("FCFS-Table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = count_fcfs + 1;
  count_fcfs = count_fcfs + 1;
  cell1.setAttribute("id", "s_no_fcfs");
  cell2.innerHTML = `<input  id="arrive_${idNumber_fcfs}_fcfs" type="number" value="arrival" />`;
  cell3.innerHTML = `<input  id="execute_${idNumber_fcfs}_fcfs" type="number" value="execute" />`;
  idNumber_fcfs = idNumber_fcfs + 1;
}
function Delete_row_fcfs() {
  if (count_fcfs != 1) {
    document.getElementById("FCFS-Table").deleteRow(-1);
    count_fcfs = count_fcfs - 1;
    idNumber_fcfs = idNumber_fcfs - 1;
  }
}

function for_sort_fcfs(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1][1] > array[i][1]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
}
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}
function making_bars_fcfs(array) {
  var size_arr = array.length;
  var total_length = 0;
  for (i = 0; i < size_arr; i++) {
    total_length = total_length + array[i][2];
  }
  for (i = 0; i < size_arr; i++) {
    var block_to_insert;
    var container_block;
    block_to_insert = document.createElement("div");
    var width_cal = (array[i][2] / total_length) * 100;
    // console.log(width_cal);
    block_to_insert.style.width = width_cal + "%";
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    block_to_insert.style.backgroundColor = "#" + randomColor;
    block_to_insert.style.height = "20px";
    block_to_insert.innerHTML = array[i][0];
    block_to_insert.style.margin = "35px 0px";
    block_to_insert.style.borderRadius = "10px";
    block_to_insert.style.textAlign = "center";
    block_to_insert.style.opacity = "50%";
    container_block = document.getElementById("progress-bar_fcfs");
    container_block.appendChild(block_to_insert);
  }
}
function progress_show_fcfs() {
  clearBox("progress-bar_fcfs");
  const store_data = [];
  var table = document.getElementById("FCFS-Table");
  var n1 = document.getElementById("FCFS-Table").rows.length;
  for (i = 1; i < n1; i++) {
    var n2 = document.getElementById("FCFS-Table").rows[i].cells.length;
    var temp = [];
    var x = document
      .getElementById("FCFS-Table")
      .rows[i].cells.item(0).innerHTML;
    var y = document.getElementById(`arrive_${i}_fcfs`).value;
    var z = document.getElementById(`execute_${i}_fcfs`).value;
    // console.log("x", x, y, z);
    temp.push(parseInt(x));
    temp.push(parseInt(y));
    temp.push(parseInt(z));
    store_data.push(temp);
  }
  for_sort_fcfs(store_data);
  making_bars_fcfs(store_data);
}
