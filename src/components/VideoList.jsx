import exampleVideoData from '../data/exampleVideoData.js';

// class VideoListItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (<li>{this.props.vidVar}</li>)
//   } 
// }

// var VideoList = (props) => (
  // <ul>
  //   {props.videoz.map(video => {
  //     <VideoListItem vidVar={video} />
  //   })}
  // </ul>
  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  // </div>
// );

var VideoList = (props) => (

  <div className="video-list">
    <div><h5><em>{props.videoz[0]}</em></h5></div>
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