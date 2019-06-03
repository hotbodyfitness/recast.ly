import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVid: exampleVideoData,
      currentVid: 0
    };
  } 
  optionsFunction(q) { 
    return {key: 'AIzaSyBZtrMo002RmOjW91qMh6Shhpk8imYSm9g', query: q, max: 4};
  }
  
  componentDidMount(q = 'rihanna') {
    var options = (this.optionsFunction(q));
    console.log(options);
    searchYouTube(options, results => {
      //console.log('this is data', results)
      this.setState({
        allVid: results, 
        currentVid: 0
      });
    });
  }
  clickHandler(event) {
    this.setState({
      currentVid: event.target.id
    });
  }
  
  searchHandler(){
    setTimeout(() => {
      var query = $('.form-control').val();
      console.log(query);
      this.componentDidMount(query);
    }, 500);

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search searchProperty={this.searchHandler.bind(this)} /></h5></div>
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
