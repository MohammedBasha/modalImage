(function () {

  // grab the images
  var myUl = document.querySelector("#artlist .pixgrid ul");
  
  myUl.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {

      var overlayDiv = document.createElement("div");
      overlayDiv.id = "overlay";
      document.body.appendChild(overlayDiv); // appending an overlay div to the end of the body

      // Styling the overlay div
      overlayDiv.style.position = "absolute";
      overlayDiv.style.top = window.pageYOffset + "px";
      overlayDiv.style.left = window.pageXOffset + "px";

      overlayDiv.style.width = window.innerWidth + "px";
      overlayDiv.style.height = window.innerHeight + "px";
      
      overlayDiv.style.backgroundColor = "rgba(0, 0, 0, .7)";
      overlayDiv.style.cursor = "pointer";

      var imageSrc = e.target.src,
          largeImage = document.createElement("img");
      largeImage.id = "large-img";
      largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + ".jpg";
      largeImage.style.position = "absolute";
      largeImage.style.display = "block";
      overlayDiv.appendChild(largeImage);

    } // targeting the images only
  }, false); // fires when any image is clicked


})(); // Self Invoked Function