var count = 1;
var idNumber = 2;
function insert_row_1() {
  var table = document.getElementById("SJF-Table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = count + 1;
  count = count + 1;
  cell1.setAttribute("id", "s_no_1");
  cell2.innerHTML = `<input  id="arrive_1_${idNumber}" type="number" value="arrival" />`;
  cell3.innerHTML = `<input  id="execute_1_${idNumber}" type="number" value="execute" />`;
  idNumber = idNumber + 1;
}
function Delete_row_1() {
  if (count != 1) {
    document.getElementById("SJF-Table").deleteRow(-1);
    count = count - 1;
    idNumber = idNumber - 1;
  }
}
function for_sort(array) {
  var array2 = [];
  for (let i = 0; i < array.length; i++) {
    var temp = [];
    temp.push(array[i][1]); //arrival
    temp.push(array[i][0]); //id
    temp.push(array[i][2]); //burst
    array2.push(temp);
  }
  array2.sort();
  var running = [];
  var ready = [];
  var vis = [];
  for (let i = 0; i <= array2.length; i++) {
    vis.push(0);
  }
  vis[array2[0][1]] = 1;

  var temp1 = [];
  temp1.push(array2[0][2]);
  temp1.push(array2[0][1]);
  ready.push(temp1);
  for (let i = 1; i < array2.length; i++) {
    if (array2[i][0] == array2[0][0]) {
      var temp2 = [];
      temp2.push(array2[i][2]);
      temp2.push(array2[i][1]);
      ready.push(temp2);
      vis[array2[i][1]] = 1;
    }
  }

  var time = 0;
  while (ready.length > 0) {
    ready.sort();
    var temp3 = [];
    temp3.push(ready[0][0]);
    temp3.push(ready[0][1]);
    for (let i = 0; i < ready.length; i++) {
      ready[i] = ready[i + 1];
    }
    ready.pop();
    time += temp3[0];
    running.push(temp3[1]);
    for (let i = 0; i < array2.length; i++) {
      if (array2[i][0] <= time && vis[array2[i][1]] == 0) {
        var temp4 = [];
        temp4.push(array2[i][2]);
        temp4.push(array2[i][1]);
        ready.push(temp4);
        vis[array2[i][1]] = 1;
      }
    }
  }
  var arr = [];
  for (let i = 0; i < running.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (running[i] == array2[j][1]) {
        var temp5 = [];
        temp5.push(running[i]);
        temp5.push(array2[j][2]);
        arr.push(temp5);
      }
    }
  }

  array = arr;
  making_bars(array);
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function making_bars(array) {
  var size_arr = array.length;
  var total_length = 0;
  for (i = 0; i < size_arr; i++) {
    total_length = total_length + array[i][1];
  }
  for (i = 0; i < size_arr; i++) {
    var block_to_insert;
    var container_block;
    block_to_insert = document.createElement("div");
    var width_cal = (array[i][1] / total_length) * 100;
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
    container_block = document.getElementById("progress-bar_1");
    container_block.appendChild(block_to_insert);
  }
}

function progress_show_1() {
  clearBox("progress-bar_1");
  var store_data = [];
  var table = document.getElementById("SJF-Table");
  var n1 = document.getElementById("SJF-Table").rows.length;
  for (i = 1; i < n1; i++) {
    var n2 = document.getElementById("SJF-Table").rows[i].cells.length;
    var temp = [];
    var x = document
      .getElementById("SJF-Table")
      .rows[i].cells.item(0).innerHTML;
    var y = document.getElementById(`arrive_1_${i}`).value;
    var z = document.getElementById(`execute_1_${i}`).value;
    // console.log("x", x, y, z);
    temp.push(parseInt(x));
    temp.push(parseInt(y));
    temp.push(parseInt(z));
    store_data.push(temp);
  }
  // console.log(store_data);
  for_sort(store_data);
  // console.log(store_data);
  // making_bars(store_data);
}
