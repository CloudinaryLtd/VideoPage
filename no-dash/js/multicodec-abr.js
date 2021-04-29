var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["hls/hvc1", "hls"],
    sourceTransformation: {
        "hls/hvc1": [
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
  player.posterOptions({ transformation: { quality: 'auto' , fetchFormat: 'auto'} })
  player.source(src);
