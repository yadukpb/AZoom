// Scroll to latest cars when clicking find cars button
document.getElementById("find-cars").addEventListener("click", function () {
  document.getElementById("latest-car").scrollIntoView({ behavior: "smooth" });
});

// Scroll left on latest cars
document
  .getElementById("latest-scroll-left")
  .addEventListener("click", function () {
    document.getElementsByClassName("card-container")[0].scrollLeft -= 300;
  });

// Scroll right on latest cars
document
  .getElementById("latest-scroll-right")
  .addEventListener("click", function () {
    document.getElementsByClassName("card-container")[0].scrollLeft += 300;
  });

// Scroll left on popular cars
document
  .getElementById("popular-scroll-left")
  .addEventListener("click", function () {
    document.getElementsByClassName("card-container")[1].scrollLeft -= 300;
  });

// Scroll right on popular cars
document
  .getElementById("popular-scroll-right")
  .addEventListener("click", function () {
    document.getElementsByClassName("card-container")[1].scrollLeft += 300;
  });

// Redirect to car.html when clicking rent now button
document.querySelectorAll(".rent-now").forEach((item) => {
  item.addEventListener("click", function () {
    window.location.href = "./car.html";
  });
});
