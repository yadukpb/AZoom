document.getElementById("user-email").innerHTML = localStorage.getItem("email");

const emailLocalStorage = localStorage.getItem("email");

if (!emailLocalStorage) {
  window.location.href = "./login.html";
}
