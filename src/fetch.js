window.onload = function () {
  document.getElementById("button").addEventListener("click", fetchPromise);
  const table = document.createElement("p");
  table.setAttribute("id","p1")
  document.getElementById("tableSpace").appendChild(table);
}

async function fetchPromise() {
  try {
    const response = await fetch("https://ptsv2.com/t/hz7b3-1658724590/post", {
      method: 'GET'
    });
      if(response.ok) {
        const jsonResponse = await response.json();
        document.getElementById("p1").innerHTML = JSON.stringify(jsonResponse);
      }
     } catch(error) {
      console.log("!");
      }
    }


