document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Fake check — replace with real authentication
  if (username === "admin" && password === "password") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "Invalid username or password.";
  }
});
