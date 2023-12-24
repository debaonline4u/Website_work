// Function to fetch and parse CSV data
function fetchData() {
    Papa.parse('data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            // Call function to update the table with new data
            updateTable(results.data);
        }
    });
}

// Function to update the table with new data
function updateTable(data) {
    // Get the table element
    var table = document.getElementById('data-table');

    // Clear existing table content
    table.innerHTML = '';

    // Add header row
    var headerRow = table.insertRow(0);
    for (var key in data[0]) {
        if (data[0].hasOwnProperty(key)) {
            var headerCell = headerRow.insertCell(-1);
            headerCell.textContent = key;
        }
    }

    // Add data rows
    for (var i = 0; i < data.length; i++) {
        var dataRow = table.insertRow(-1);
        for (var key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                var cell = dataRow.insertCell(-1);
                cell.textContent = data[i][key];
            }
        }
    }
}

// Fetch data initially
fetchData();

// Set up interval to fetch data at regular intervals (e.g., every 5 seconds)
setInterval(fetchData, 5000);
