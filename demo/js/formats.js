const resolutions = [1920,1280,960, 640, 480, 320];
const video_collection = document.getElementsByTagName("video");
const button = document.getElementsByTagName('button');
const ar_coef = (16 / 9);
const src_domain = "https://res.cloudinary.com/";
const src_base = "/video/upload/c_limit,q_auto,w_";
let cloud_name = "demo";
let src_file = "/sea_turtle."
let last_resolution = 640;
resolutions.forEach(setOnClick)
getFautoFormat(video_collection[0].src);
button[0].addEventListener("click",updateFile);

function setOnClick(resolution) {
    document.getElementById(resolution.toString()).addEventListener("click", function () { setResolutions(resolution); });
}

function setResolutions(resolution) {
    for (let i = 0; i < video_collection.length; i++) {
        video_collection[i].width = resolution
        video_collection[i].height = resolution / ar_coef;
        video_collection[i].src = (src_domain + cloud_name + src_base + resolution.toString() + "," + video_collection[i].dataset.codec + src_file + video_collection[i].dataset.format);
        if(video_collection[i].dataset.codec == "f_auto") {
            getFautoFormat(video_collection[i].src)
        }
    }
    last_resolution = resolution;
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

  function updateFile() {
    cloud_name = (document.getElementById("cname").value );
    src_file = ("/" + document.getElementById("fname").value + ".");
    setResolutions(last_resolution);
  }
