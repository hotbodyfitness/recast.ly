var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    method: 'GET',  
    success: (data) => callback(data),
    data: {
      key: options.key,
      part: 'snippet'
      // videoEmbeddable: true,
      // maxResults: options.max || 5,
      // q: options.query,
      // type: 'video'
    }
  });
};

export default searchYouTube;
