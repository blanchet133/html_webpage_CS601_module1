window.onload = function () {
  document.getElementById("button").addEventListener("click", fetchPromise);
}

async function fetchPromise() {
  try {
    const response = await fetch("https://ptsv2.com/t/hz7b3-1658724590/post", {
      method: 'GET'
    });
      if(response.ok) {
        const tableData = await response.json();
        buildTable("skills", tableData);
        }
        document.getElementById("p1").innerHTML = JSON.stringify(tableData);
      } catch(error) {
      console.log("!");
      }
    }

function buildTable(tableId, data) {
  var table = document.getElementById(tableId);

  // in the following... "Object.keys(data[Object.keys(data)[0]][row])[<column>]" grabs the keys from JSON
  // to access values. I was trying to keep it more generalized but could have just hardcoded. 
  for (var i in data[Object.keys(data)[0]]) {
    var row = 
              `<tr>
              <td>${data['Software Development topics'][i][Object.keys(data[Object.keys(data)[0]][i])[0]]}</td>
              <td>${data['Software Development topics'][i][Object.keys(data[Object.keys(data)[0]][i])[1]]}</td>              
              </tr>`;
    table.innerHTML += row;
  }

}


