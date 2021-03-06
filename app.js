// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };     // for selfie modefacingMode: "user"
// Define constants
const cameraView = document.querySelector("#camera--view"),
                // cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
 // Start the video stream when the window loads
 window.addEventListener("load", cameraStart, false);


var state = 0;
// Show or hide the photo when cameraTrigger is tapped
cameraTrigger.onclick = function() {
  if (state == 0){
      // document.getElementById("camera--view").style.visibility = "hidden";
      // document.getElementById("photo").style.visibility = "visible";
      document.getElementById("camera--view").style.opacity = "1";
    state = 1;
  }
  else if (state == 1){
      // document.getElementById("photo").style.visibility = "hidden";
      // document.getElementById("camera--view").style.visibility = "visible";
      document.getElementById("camera--view").style.opacity = "0";
    state = 2;
  }
  else if (state == 2){
    document.getElementById("camera--view").style.opacity = "0.5";
  state = 0;
}
                // cameraSensor.width = cameraView.videoWidth;
                // cameraSensor.height = cameraView.videoHeight;
                // cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
                // cameraOutput.src = cameraSensor.toDataURL("image/webp");
                // cameraOutput.classList.add("taken");
};