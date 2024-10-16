document.getElementById("addButton").addEventListener("click", function() {
    const batsmanName = document.getElementById("batsmanName").value;
    const runsScored = parseInt(document.getElementById("runsScored").value);
    const ballsFaced = parseInt(document.getElementById("ballsFaced").value);
    
    if (batsmanName && !isNaN(runsScored) && !isNaN(ballsFaced) && ballsFaced > 0) {
        const strikeRate = (runsScored * 100 / ballsFaced).toFixed(2);
        
        const tableBody = document.getElementById("statsTable").getElementsByTagName("tbody")[0];
        const newRow = tableBody.insertRow();
        
        newRow.insertCell(0).textContent = batsmanName;
        newRow.insertCell(1).textContent = ballsFaced;
        newRow.insertCell(2).textContent = runsScored;
        newRow.insertCell(3).textContent = strikeRate;
        
        // Clear the input fields after adding
        document.getElementById("batsmanName").value = '';
        document.getElementById("runsScored").value = '';
        document.getElementById("ballsFaced").value = '';
    } else {
        alert("Please enter valid data.");
    }
});

document.getElementById("removeButton").addEventListener("click", function() {
    const tableBody = document.getElementById("statsTable").getElementsByTagName("tbody")[0];
    const rows = tableBody.getElementsByTagName("tr");
    
    if (rows.length > 0) {
        tableBody.deleteRow(rows.length - 1); // Remove the last row
    } else {
        alert("No rows to remove.");
    }
});