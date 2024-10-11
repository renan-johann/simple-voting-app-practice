// Import the express module
const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route to handle vote submissions (POST request)
app.post('/vote', (req, res) => {
    const vote = req.body;  // Get the vote data from the request body
    fs.readFile('votes.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading vote data');
        }
        const votes = JSON.parse(data);
        votes.push(vote);  // Add the new vote
        fs.writeFile('votes.json', JSON.stringify(votes), (err) => {
            if (err) {
                return res.status(500).send('Error saving vote');
            }
            res.status(200).send('Vote recorded successfully');
        });
    });
});

const cors = require('cors');
app.use(cors());

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});