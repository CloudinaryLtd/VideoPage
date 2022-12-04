const resolutions = [1920,1280,960, 640, 480, 320];
const video_collection = document.getElementsByTagName("video");
const ar_coef = (16 / 9);
resolutions.forEach(setOnClick)

function setOnClick(resolution) {
    document.getElementById(resolution.toString()).addEventListener("click", function () { setResolutions(resolution); });
}

function setResolutions(resolution) {
    for (let i = 0; i < video_collection.length; i++) {
        video_collection[i].width = resolution
        video_collection[i].height = resolution / ar_coef;
        console.log(resolution / ar_coef);
    }
  } 
