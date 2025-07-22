const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// Define the port for the server
const PORT = 3000;

// Route to serve home page
app.get('/', (req, res) => {
    res.send('Hit the /api/answers endpoint to get the JSON data');
});
// Route to serve the JSON data
app.get('/api/answers', (req, res) => {
    // Define the path to the JSON file
    const filePath = path.join(__dirname, 'api', 'answers.json');
    // Read the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
    // Handle errors in reading the file    
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Could not read answers file' });
        }
        // Parse the JSON data
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).json({ error: 'Invalid JSON format' });
        }
    });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});