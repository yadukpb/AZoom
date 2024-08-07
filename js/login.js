document
  .getElementById("btn-form-login")
  .addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email is empty
    if (email.length === 0) {
      alert("Email is required");
      return;
    }

    // Check if password is empty
    if (password.length === 0) {
      alert("Password is required");
      return;
    }

    // Check if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email");
      return;
    }

    localStorage.setItem("email", email);

    alert("Login successful!");
    window.location.href = "./index.html";
  });

// check local storage
const emailStorage = localStorage.getItem("email");

if (emailStorage) {
  window.location.href = "./index.html";
}
