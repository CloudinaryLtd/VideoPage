var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["dash/vp9","hls/hvc1", "hls"],
    sourceTransformation: {
        "dash/vp9": [
            {
              streaming_profile: "full_hd_vp9"
            }
        ],
        "hls/hvc1": [
          {
            streaming_profile: "full_hd_h265"
          }
        ],
        "hls": [
          {
            streaming_profile: "full_hd"
          }
        ]
      } 
  };
  var player = cld.videoPlayer("example-player");
  player.posterOptions({ transformation: { quality: 'auto' , fetchFormat: 'auto', width: 1920, crop: 'limit'} })
  player.source(src);
