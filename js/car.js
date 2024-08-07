document
  .getElementById("rental-period")
  ?.addEventListener("change", function (event) {
    const period = event.target.value;

    switch (period) {
      case "daily":
        document.getElementById("total-price").innerText = "$100";
        break;
      case "weekly":
        document.getElementById("total-price").innerText = "$700";
        break;
      case "monthly":
        document.getElementById("total-price").innerText = "$3000";
        break;
    }
  });

document.getElementById("btn-continue")?.addEventListener("click", function () {
  const emailLocalStorage = localStorage.getItem("email");

  if (!emailLocalStorage) {
    alert("Please login first!");
    window.location.href = "./login.html";
    return;
  }

  const rentalDate = document.getElementById("rental-date").value;

  if (!rentalDate) {
    alert("Rental date is required!");
    return;
  }

  const currentDate = new Date();

  if (new Date(rentalDate) < currentDate) {
    alert("Rental date must be greater than or equal to the current date!");
    return;
  }

  document.getElementById("reservation-detail").style.display = "none";
  document.getElementById("payment-detail").style.display = "flex";
});

document.getElementById("btn-back")?.addEventListener("click", function () {
  document.getElementById("reservation-detail").style.display = "flex";
  document.getElementById("payment-detail").style.display = "none";
});

document.getElementById("btn-pay")?.addEventListener("click", function () {
  // Get the input values
  const fullName = document.getElementById("full-name").value;
  const cardNumber = document.getElementById("card-number").value;
  const expirationDate = document.getElementById("expiry-date").value;
  const cvv = document.getElementById("cvv").value;

  // Check if full name is empty
  if (!fullName) {
    alert("Full name is required!");
    return;
  }

  // Check if full name is alphabets only
  if (!/^[a-zA-Z ]+$/.test(fullName)) {
    alert("Full name must be alphabets only!");
    return;
  }

  // Check if card number is empty
  if (!cardNumber) {
    alert("Card number is required!");
    return;
  }

  // Check if the card number is 16 digits
  // Remove all spaces from the card number
  if (cardNumber.replace(/\s/g, "").length !== 16) {
    alert("Card number must be 16 digits!");
    return;
  }

  // Check if expiration date is empty
  if (!expirationDate) {
    alert("Expiration date is required!");
    return;
  }

  // Check if the expiration date is in the correct format
  const [month, year] = expirationDate.split("/");

  // Check if the expiration date is in the correct format
  if (month.length !== 2 || year.length !== 2) {
    alert("Invalid expiration date format!");
    return;
  }

  // Check if the expiration date is valid
  if (!(parseInt(month) >= 1 && parseInt(month) <= 12) || parseInt(year) < 24) {
    alert("Invalid expiration date!");
    return;
  }

  // Check if cvv is empty
  if (!cvv) {
    alert("CVV is required!");
    return;
  }

  // Check if the cvv is 3 digits
  if (cvv.length !== 3) {
    alert("CVV must be 3 digits!");
    return;
  }

  document.getElementById("payment-detail").style.display = "none";
  document.getElementById("success-message").style.display = "flex";
});

// Listen to the input event on the full name input field
document
  .getElementById("full-name")
  .addEventListener("input", function (event) {
    // Get the input value
    const fullName = event.target.value;

    // Check if the input is alphabets and space
    if (/^[a-zA-Z ]+$/.test(fullName)) {
      // Convert the input to uppercase
      document.getElementById("full-name").value = fullName.toUpperCase();
    } else {
      // Remove the last character from the input
      document.getElementById("full-name").value = fullName.slice(0, -1);
    }
  });

// Listen to the input event on the card number input field
document
  .getElementById("card-number")
  .addEventListener("input", function (event) {
    const cardNumber = event.target.value.replace(/\s/g, "");

    if (cardNumber.length === 0) {
      document.getElementById("card-number").value = "";
      return;
    }

    // Check if the card number is more than 16 characters
    if (cardNumber.length > 16) {
      document.getElementById("card-number").value = cardNumber
        .slice(0, 16)
        .match(/.{1,4}/g)
        .join(" ");
      return;
    }

    // Check if the card number is numbers only
    if (/^[0-9]+$/.test(cardNumber)) {
      // Add space after every 4 characters
      document.getElementById("card-number").value = cardNumber
        .match(/.{1,4}/g)
        .join(" ");
    } else {
      // Remove the last character from the input
      if (cardNumber.length === 1) {
        // Remove the last character from the input
        document.getElementById("card-number").value = cardNumber.slice(0, -1);
      } else {
        // Remove the last character from the input
        document.getElementById("card-number").value = cardNumber
          .slice(0, -1)
          .match(/.{1,4}/g)
          .join(" ");
      }
    }
  });

// Listen to the input event on the expiry date input field
document
  .getElementById("expiry-date")
  .addEventListener("input", function (event) {
    // Get the input value
    // Replace all / with empty string
    const expiryDate = event.target.value.replace(/\//g, "");

    // Check if the expiry date is empty
    if (expiryDate.length === 0) {
      document.getElementById("expiry-date").value = "";
      return;
    }

    // Check if the expiry date is more than 4 characters
    if (expiryDate.length > 4) {
      document.getElementById("expiry-date").value = expiryDate
        .slice(0, 4)
        .match(/.{1,2}/g)
        .join("/");
      return;
    }

    // Check if the expiry date is numbers only
    if (/^[0-9]+$/.test(expiryDate)) {
      // Add / after every 2 characters
      document.getElementById("expiry-date").value = expiryDate
        .match(/.{1,2}/g)
        .join("/");
    } else {
      // Remove the last character from the input
      if (expiryDate.length === 1) {
        // Remove the last character from the input
        document.getElementById("expiry-date").value = expiryDate.slice(0, -1);
      } else {
        // Remove the last character from the input
        document.getElementById("expiry-date").value = expiryDate
          .slice(0, -1)
          .match(/.{1,2}/g)
          .join("/");
      }
    }
  });

// Listen to the input event on the cvv input field
document.getElementById("cvv").addEventListener("input", function (event) {
  // Get the input value
  const cvv = event.target.value;

  // Check if the cvv is empty
  if (cvv.length === 0) {
    document.getElementById("cvv").value = "";
    return;
  }

  // Check if the cvv is more than 3 characters
  if (cvv.length > 3) {
    // Remove the last character from the input
    document.getElementById("cvv").value = cvv.slice(0, -1);
  }

  // Check if the cvv is numbers only
  if (!/^[0-9]+$/.test(cvv)) {
    // Remove the last character from the input
    document.getElementById("cvv").value = cvv.slice(0, -1);
  }
});

// init the payment detail to be hidden
document.getElementById("payment-detail").style.display = "none";
document.getElementById("success-message").style.display = "none";
