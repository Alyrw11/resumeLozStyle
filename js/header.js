// loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("/html/header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      });
  });
  