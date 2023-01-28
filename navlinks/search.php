<?php
// Connect to the database
$db = new mysqli("hostname", "username", "password", "database_name");

// Check the connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

// Get the search term from the form
$search_term = $_POST['search'];

// Build the query
$query = "SELECT * FROM pages WHERE title LIKE '%$search_term%' OR body LIKE '%$search_term%'";

// Execute the query
$result = $db->query($query);

// Check if there are any results
if ($result->num_rows > 0) {
    // Output the results
    while ($row = $result->fetch_assoc()) {
        echo "<h2>" . $row['title'] . "</h2>";
        echo "<p>" . $row['body'] . "</p>";
    }
} else {
    // Output a message if there are no results
    echo "No results found";
}

// Close the connection
$db->close();
?>