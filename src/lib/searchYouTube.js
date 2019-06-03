var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    method: 'GET',  
    
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      videoEmbeddable: 'true',
      type: 'video',
      maxResults: options.max
    },
    success: data => callback(data.items)
  });
};

export default searchYouTube;
