var count = 1;
var idNumber = 2;
function insert_row_p() {
  var table = document.getElementById("Priority-Table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = count + 1;
  count = count + 1;
  cell1.setAttribute("id", "s_no_p");
  cell2.innerHTML = `<input  id="arrive_p_${idNumber}" type="number" value="arrival" />`;
  cell3.innerHTML = `<input  id="execute_p_${idNumber}" type="number" value="execute" />`;
  cell4.innerHTML = `<input  id="priority_${idNumber}" type="number" value="priority" />`;
  idNumber = idNumber + 1;
}
function Delete_row_p() {
  if (count != 1) {
    document.getElementById("Priority-Table").deleteRow(-1);
    count = count - 1;
    idNumber = idNumber - 1;
  }
}
function making_bars(array) {
  var size_arr = array.length;
  for (i = 0; i < size_arr; i++) {
    var block_to_insert;
    var container_block;
    block_to_insert = document.createElement("div");
    var width_cal = (1 / size_arr) * 100;
    // console.log(width_cal);
    block_to_insert.style.width = width_cal + "%";
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    block_to_insert.style.backgroundColor = "#" + randomColor;
    block_to_insert.style.height = "20px";
    block_to_insert.innerHTML = array[i];
    block_to_insert.style.margin = "35px 0px";
    block_to_insert.style.borderRadius = "10px";
    block_to_insert.style.textAlign = "center";
    block_to_insert.style.opacity = "50%";
    container_block = document.getElementById("progress-bar_p");
    container_block.appendChild(block_to_insert);
  }
}
function for_sort(array) {
  // var done = false;
  // while (!done) {
  //   done = true;
  //   for (var i = 1; i < array.length; i += 1) {
  //     if (array[i - 1][1] > array[i][1]) {
  //       done = false;
  //       var tmp = array[i - 1];
  //       array[i - 1] = array[i];
  //       array[i] = tmp;
  //     }
  //     else if(array[i-1][1]==array[i][1]){

  //     }
  //   }
  // }
  var store_processes = [];
  var time_passed = 0;
  var minimum_arr = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][1] < minimum_arr) {
      minimum_arr = array[i][1];
    }
  }
  // console.log(minimum_arr);
  for (var i = 0; i < array.length; i += 1) {
    array[i][1] = array[i][1] - minimum_arr;
  }
  var done = false;
  while (!done) {
    done = true;
    let arrived_process = [];
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][1] <= time_passed && array[i][2] > 0) {
        arrived_process.push(i);
      }
    }
    console.log(arrived_process);
    if (arrived_process.length != 0) {
      done = false;
      var min_temp = Number.MAX_SAFE_INTEGER;
      var index = 0;
      for (var j = 0; j < arrived_process.length; j += 1) {
        if (min_temp > array[arrived_process[j]][3]) {
          min_temp = array[arrived_process[j]][3];
          index = arrived_process[j];
        }
      }
      array[index][2] = array[index][2] - 1;
      store_processes.push(array[index][0]);
    } else {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][2] > 0) {
          done = false;
        }
      }
    }
    time_passed = time_passed + 1;
  }
  console.log(store_processes);
  making_bars(store_processes);
}
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function progress_show_p() {
  clearBox("progress-bar_p");
  const store_data = [];
  var table = document.getElementById("Priority-Table");
  var n1 = document.getElementById("Priority-Table").rows.length;
  for (i = 1; i < n1; i++) {
    var n2 = document.getElementById("Priority-Table").rows[i].cells.length;
    var temp = [];
    var x = document
      .getElementById("Priority-Table")
      .rows[i].cells.item(0).innerHTML;
    var y = document.getElementById(`arrive_p_${i}`).value;
    var z = document.getElementById(`execute_p_${i}`).value;
    var p = document.getElementById(`priority_${i}`).value;
    // console.log("x", x, y, z);
    temp.push(parseInt(x));
    temp.push(parseInt(y));
    temp.push(parseInt(z));
    temp.push(parseInt(p));
    store_data.push(temp);
  }
  for_sort(store_data);
  // making_bars(store_data);
}
