(function () {

  // grab the images
  var myUl = document.querySelector("#artlist .pixgrid ul");

  // Centring the image
  function centerImage(theImage) {
    var myDifX = (window.innerWidth - theImage.width) / 2;
    var myDifY = (window.innerHeight - theImage.height) / 2;

    theImage.style.left = myDifX + "px";
    theImage.style.top = myDifY + "px";

    return theImage;
  }
  
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

      // Creating and adjust the images styles
      var imageSrc = e.target.src,
          largeImage = document.createElement("img");
      largeImage.id = "large-img";
      largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + ".jpg";
      largeImage.style.position = "absolute";
      largeImage.style.display = "block";

      // after image loads do the size styles
      largeImage.addEventListener("load", function () {

        // Resizing the image height if it was taller than the window height
        if (this.height > window.innerHeight) {
          this.ratio = window.innerHeight / this.height;
          this.height *= this.ratio;
          this.width *= this.ratio;
        }

        // Resizing the image width if it was wider than the window width
        if (this.width > window.innerWidth) {
          this.ratio = window.innerWidth / this.width;
          this.height *= this.ratio;
          this.width *= this.ratio;
        }

        centerImage(this);

        overlayDiv.appendChild(this); // append it after changes

      });

      largeImage.addEventListener("click", function () {
        if(overlayDiv) {
          window.removeEventListener("resize", window, false);
          window.removeEventListener("scroll", window, false);
          overlayDiv.parentNode.removeChild(overlayDiv);
        }
      }, false); // remove the overlayDiv if the image is clicked

      overlayDiv.addEventListener("click", function () {
        if(overlayDiv) {
          window.removeEventListener("resize", window, false);
          window.removeEventListener("scroll", window, false);
          overlayDiv.parentNode.removeChild(overlayDiv);
        }
      }, false); // remove the overlayDiv if the overlayDiv is clicked

      window.addEventListener("scroll", function () {
        if (overlayDiv) {
          overlayDiv.style.left = window.pageXOffset + "px";
          overlayDiv.style.top = window.pageYOffset + "px";
        }
      }, false); // Handle the Scroll event

      window.addEventListener("resize", function () {
        if (overlayDiv) {
          overlayDiv.style.width = window.innerWidth + "px";
          overlayDiv.style.height = window.innerHeight + "px";
          overlayDiv.style.left = window.pageXOffset + "px";
          overlayDiv.style.top = window.pageYOffset + "px";

          centerImage(largeImage);
        }
      }, false); // Handle the resize Event


    } // targeting the images only
  }, false); // fires when any image is clicked


})(); // Self Invoked Function