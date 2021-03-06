//import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

// var VideoList = (props) => (
//   <div className="video-list">    
//     {props.videos.map(video => {
//       return <VideoListEntry video={video} />;
//     })}
//   </div>
// );

//Josh: could we rename click on line 17 to clickHandler={props.clickHandler} on line 17 
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video, i) => {
      return <VideoListEntry click={props.click} index={i} video={video} />; 
    })}
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//ReactDOM.render(<VideoList videoz={['yes']} />, document.getElementById('video'));