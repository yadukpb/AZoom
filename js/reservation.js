const emailLocalStorage = localStorage.getItem("email");

if (!emailLocalStorage) {
  window.location.href = "./login.html";
}
