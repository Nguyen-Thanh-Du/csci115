window.addEventListener("scroll", function () {
    let hiddenDiv = document.querySelector(".logo-box");

    if (window.scrollY > 150) {  // Show after scrolling 100px down
        hiddenDiv.style.display = "flex"; // Make the div visible
        hiddenDiv.style.opacity = "1";     // Optional: Add fade-in effect
    } else {
        hiddenDiv.style.display = "none";  // Hide it again
        hiddenDiv.style.opacity = "0";     // Optional: Fade out effect
    }
});