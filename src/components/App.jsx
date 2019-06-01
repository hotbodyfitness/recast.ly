import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>Player</em><VideoPlayer video={exampleVideoData[0]} /></h5></div>

//       </div>
//       <div className="col-md-5" id="video">
//         <VideoList videos = {exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVid: exampleVideoData,
      currentVid: 0
    };
  }
  //Josh's Notes: event.target 
  clickHandler(event) {
    this.setState({
      currentVid: event.target.id
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Player</em><VideoPlayer video={this.state.allVid[this.state.currentVid]} /></h5></div>

          </div>
          <div className="col-md-5" id="video">
            <VideoList click={this.clickHandler.bind(this)} videos={this.state.allVid} />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;










//2 ways to only take in 5 videos
//1.handle filtering in app (to only take in first 5 )
//OR
//2. include in api post request, edit the body
//      in that body look for a key: value pair that asks
//      for how many videos asked for 