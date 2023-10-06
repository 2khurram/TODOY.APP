let arr = [];

function inputVar() {

    let finput = document.getElementById('finput');
    let aadButton = document.getElementById('aadButton');

    if (finput.value == "") {
        alert("Please provide input")
    } else {
        arr.push(finput.value);
    }
    var txt = "";
    for (let i = 0; i < arr.length; i++) {
        // const element = array[i];
        txt += ` <div class="footer">
     <input id="input" type="text" value="${arr[i]}">
     </div>
 
 <div class="edit-button">
     <input type="button"  onclick="edit(${i})" value="EDIT">
 </div>
 <div class="delete-button">
     <input type="button" id="deleteButton" value="DELETE"onclick="dlet(${i});">
 </div>`;
    }
    document.getElementById("spn").innerHTML = txt;
}
function dlet(a) {
    confirm("are you sure you want to deleted Press a button!\nEither OK or Cancel.");
    arr.splice(a, 1);
    console.log(arr);
}
function edit(b) {
    var pro = prompt("edit todo list ");
    arr[a] = pro;

    console.log(arr);
}
