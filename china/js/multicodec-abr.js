var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadar-ap",
    private_cdn: true,
    upload_prefix: "https://api-ap.cloudinary.com"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["hls/hvc1", "hls"],
    sourceTransformation: {
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
  player.posterOptions({ transformation: { quality: 'auto', fetchFormat: 'auto', width: 1920 } })
  player.source(src);