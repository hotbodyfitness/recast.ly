var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    method: 'GET',  
    
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      videoEmbeddable: 'true',
      type: 'video',
      maxResults: options.max
    },
    success: (data) => callback(data.items)
  });
};

export default searchYouTube;
