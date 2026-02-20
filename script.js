function runBot() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("status").innerText = "Running Automation...";

    fetch("http://127.0.0.1:5000/run-bot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("status").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("status").innerText = "Error connecting to server!";
    });
}