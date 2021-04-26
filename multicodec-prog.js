var cld = cloudinary.Cloudinary.new({
    cloud_name: "hadard"
  });
  var src = {
    publicId: "bur-4k",
    sourceTypes: ["mp4/h265","webm","mp4"],
    sourceTransformation: {
      "mp4/h265": [
        {
            quality: "auto",
            video_codec: "h265"
        }
      ],
      "webm": [
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
  player.source(src);