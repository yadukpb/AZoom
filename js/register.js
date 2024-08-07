document
  .getElementById("btn-form-register")
  .addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

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

    // Check if confirm password is empty
    if (confirmPassword.length === 0) {
      alert("Confirm password is required");
      return;
    }

    // Check if email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email");
      return;
    }

    // Check if password and confirm password are the same
    if (password !== confirmPassword) {
      alert("Password and confirm password must be the same");
      return;
    }

    localStorage.setItem("email", email);

    alert("Register successful!");
    window.location.href = "./index.html";
  });
