import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
// class VideoListItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     console.log('vidVar', this.props.vidVar)
//     return (<li>{this.props.video}</li>
//       )
//   } 
// } 

var VideoList = (props) => (
  <div className="video-list">
    {console.log('this should be the array', props.videos)}
    {props.videos.map(video => {
      return <VideoListEntry video={video} /> 
    })}
  </div>
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>
);

// var VideoList = (props) => (

//   <div className="video-list">
//     {console.log(props.videos)};
//     <div><h5><em>videoListEntry</em></h5></div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//ReactDOM.render(<VideoList videoz={['yes']} />, document.getElementById('video'));