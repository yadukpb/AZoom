document.getElementById("header-logo").addEventListener("click", function () {
  window.location.href = "./index.html";
});

document.getElementById("btn-login").addEventListener("click", function () {
  window.location.href = "./login.html";
});

document.getElementById("btn-register").addEventListener("click", function () {
  window.location.href = "./register.html";
});

document
  .getElementById("btn-my-account")
  .addEventListener("click", function () {
    window.location.href = "./my-account.html";
  });

document.getElementById("btn-logout").addEventListener("click", function () {
  localStorage.removeItem("email");
  window.location.href = "./login.html";
});

// check local storage
const email = localStorage.getItem("email");

if (email) {
  document.getElementById("btn-login").style.display = "none";
  document.getElementById("btn-register").style.display = "none";
  document.getElementById("btn-logout").style.display = "block";
  document.getElementById("btn-my-account").style.display = "block";
} else {
  document.getElementById("btn-login").style.display = "block";
  document.getElementById("btn-register").style.display = "block";
  document.getElementById("btn-logout").style.display = "none";
  document.getElementById("btn-my-account").style.display = "none";
}





document.addEventListener("DOMContentLoaded", () => {
  const btnContinue = document.getElementById('btn-continue');
  const btnPay = document.getElementById('btn-pay');
  const btnBack = document.getElementById('btn-back');
  const reservationDetail = document.getElementById('reservation-detail');
  const paymentDetail = document.getElementById('payment-detail');
  const successMessage = document.getElementById('success-message');

  btnContinue.addEventListener('click', () => {
      reservationDetail.style.display = 'none';
      paymentDetail.style.display = 'flex';
  });

  btnPay.addEventListener('click', () => {
      paymentDetail.style.display = 'none';
      successMessage.style.display = 'flex';
  });

  btnBack.addEventListener('click', () => {
      paymentDetail.style.display = 'none';
      reservationDetail.style.display = 'flex';
  });
});
