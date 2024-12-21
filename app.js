// Show contribution message when the page is loaded
window.onload = function () {
    const contribute = confirm("Would you like to contribute?");
    
    if (contribute) {
        // Redirect to fund.html if the user clicks "OK"
        window.location.href = "fund.html";
    }
    // If they click "Cancel", just stay on the current page (do nothing)
};

// Handle registration
if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        const acceptTC = document.getElementById("acceptTC").checked;

        // Check if reCAPTCHA is completed
        if (grecaptcha.getResponse() === "") {
            alert("Please complete the reCAPTCHA.");
            return;
        }

        if (!acceptTC) {
            alert("You must accept the terms and conditions.");
            return;
        }

        if (localStorage.getItem(username)) {
            alert("Username already exists. Please choose a different username.");
        } else if (username && password) {
            localStorage.setItem(username, password);
            alert("Account created successfully! Redirecting to login page...");
            window.location.href = "login.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Handle login
if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("user").value;
        const password = document.getElementById("password").value;

        // Check if reCAPTCHA is completed
        if (grecaptcha.getResponse() === "") {
            alert("Please complete the reCAPTCHA.");
            return;
        }

        // Simulate login process
        if (localStorage.getItem(username) === password) {
            alert("Login successful! Redirecting...");
            window.location.href = "user.html";
        } else {
            alert("Invalid username or password.");
        }
    });
}
