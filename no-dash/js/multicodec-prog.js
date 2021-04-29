var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ['mp4/hvc1','mp4'],
    sourceTransformation: {
      "mp4/hvc1": [
        {
            quality: "auto",
            video_codec: "h265"
        }
    ],
    "mp4": [
        {
            quality: "auto"
        }
    ]
    }
  };
  var player = cld.videoPlayer("example-player");
  player.posterOptions({ transformation: { quality: 'auto' , fetchFormat: 'auto'} })
  player.source(src);