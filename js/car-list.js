// Redirect to car.html when clicking rent now button
document.querySelectorAll(".rent-now").forEach((item) => {
  item.addEventListener("click", function () {
    window.location.href = "./car.html";
  });
});
