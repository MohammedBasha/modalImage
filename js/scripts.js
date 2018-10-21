(function () {

  // grab the images
  var myUl = document.querySelector("#artlist .pixgrid ul");
  
  myUl.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      console.log(e);
    } // targeting the images only
  }, false); // fires when any image is clicked


})(); // Self Invoked Function