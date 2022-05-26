var Submit = document.getElementById("Submit");
Submit.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var Branch = document.getElementById("Branch").value;
    var gender = document.getElementById("gender").value;

    if (!name || !email || !phone || !Branch || !gender) {
        alert("Fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = Branch;
    cell5.innerHTML = gender;

    row++;

}