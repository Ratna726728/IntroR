function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add validation here

    // Send data to the backend (replace the URL with your Spring Boot API endpoint)
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend (e.g., redirect to another page)
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}