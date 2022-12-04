const resolutions = [1920,1280,960, 640, 480, 320];
const video_collection = document.getElementsByTagName("video");
const ar_coef = (16 / 9);
const src_base = "https://res.cloudinary.com/demo/video/upload/c_limit,q_auto,w_";
const src_file = "/sea_turtle."
resolutions.forEach(setOnClick)
getFautoFormat(video_collection[0].src);

function setOnClick(resolution) {
    document.getElementById(resolution.toString()).addEventListener("click", function () { setResolutions(resolution); });
}

function setResolutions(resolution) {
    for (let i = 0; i < video_collection.length; i++) {
        video_collection[i].width = resolution
        video_collection[i].height = resolution / ar_coef;
        video_collection[i].src = (src_base + resolution.toString() + "," + video_collection[i].dataset.codec + src_file + video_collection[i].dataset.format);
        if(video_collection[i].dataset.codec == "f_auto") {
            getFautoFormat(video_collection[i].src)
        }
    }
  } 

  function getFautoFormat(url) {
    console.log(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          document.getElementById("fauto").textContent = "Video Native Auto Format: " + xhttp.getResponseHeader('content-type');
      }
    };
    xhttp.open("HEAD", url, true);
    xhttp.send();
  }
