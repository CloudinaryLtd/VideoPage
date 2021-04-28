var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ['mp4/hvc1','webm/vp9','mp4'],
    sourceTransformation: {
      "mp4/hvc1": [
        {
            quality: "auto",
            video_codec: "h265"
        }
    ],
      "webm/vp9": [
        {
            quality: "auto",
            video_codec: "vp9"
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
  player.posterOptions({ transformation: { quality: 'auto' } })
  player.source(src);