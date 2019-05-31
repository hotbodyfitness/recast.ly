import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

//var youtubeURL = (props) => ('https://www.youtube.com/embed/' + props.video.id.videoID + '?autoplay=1');


var VideoPlayer = (props) => (
      <div className="video-player">
      {console.log('testing props.video in VideoPlayer line 12', props.video)}
      
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoID}?autoplay=1`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">w
          <h3>{props.video.snippet.title}</h3>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
  )
    

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
