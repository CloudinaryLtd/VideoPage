var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["dash/vp9", "hls/hvc1", "hls"],
    sourceTransformation: {
        "dash/vp9": [
          {
            streaming_profile: "4k_vp9"
          }
      ],
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
