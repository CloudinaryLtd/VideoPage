var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["hls/h265", "hls"],
    sourceTransformation: {
        "hls/h265": [
          {
            streaming_profile: "4k_h265"
          }
        ],
        "hls": [
          {
            streaming_profile: "4k"
          }
        ]
      } 
  };
  var player = cld.videoPlayer("example-player");
  player.source(src);