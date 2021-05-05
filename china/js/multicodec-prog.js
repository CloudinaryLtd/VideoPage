var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadar-ap",
    private_cdn: true,
    upload_prefix: "https://api-ap.cloudinary.com"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ['mp4/hvc1','webm/vp9','mp4'],
    sourceTransformation: {
      "mp4/hvc1": [
        {
          crop: "limit",
          width: 1920,  
          quality: "auto",
          video_codec: "h265"
        }
    ],
      "webm/vp9": [
        {
          crop: "limit",
          width: 1920,   
          quality: "auto",
          video_codec: "vp9"
        }
    ],
    "mp4": [
        {
          crop: "limit",
          width: 1920, 
          quality: "auto"
        }
    ]
    }
  };
  var player = cld.videoPlayer("example-player");
  player.posterOptions({ transformation: { quality: 'auto', fetchFormat: 'auto', width: 1920 } })
  player.source(src);