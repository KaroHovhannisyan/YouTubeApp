import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search'
import './components/styles.css'
const API_KEY="AIzaSyBQr6Rf7w9-sk3rnNm8fhjb7qv4C-KPbSI";

class App extends Component
{
constructor(props)
   {
  super(props);
  this.state={videos:[],
  selectedVideo:null};
  this.videoSearch("kargin sketch");
   }
videoSearch(search)
{
     YTSearch({key:API_KEY,term:search},(videos)=>
     {
     this.setState({videos:videos,
     selectedVideo:videos[0],
   });
 });
}
render () {
  return (<div>
      <SearchBar onSearch={(search)=>{this.videoSearch(search)}} />

      <VideoDetail  video={this.state.selectedVideo} />
  < VideoList  onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}} videos={this.state.videos}  />

    </div>);
}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
