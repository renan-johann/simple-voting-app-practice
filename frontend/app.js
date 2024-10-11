document.getElementById('confirmVote').addEventListener('click', function () {
    const vote = document.getElementById('voteInput').value;

    if (vote) {
        fetch('http://localhost:3000/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vote }),
        })
        .then(response => response.text())
        .then(message => {
            document.getElementById('message').innerText = message;
        })
        .catch(error => {
            document.getElementById('message').innerText = 'Error: ' + error;
        });
    } else {
        document.getElementById('message').innerText = 'Please enter a vote';
    }
});