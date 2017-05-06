import React  from 'react';
//import VideoListItem from './video_list_item'
import './styles.css';


const VideoListItem =({video,onVideoSelect})=>{
console.log(video);
const ImageUrl=video.snippet.thumbnails.default.url;
  return (<div onClick={()=>onVideoSelect(video)} className="VideoListItem" >

      <img alt="image" src={ImageUrl}/>
      <div className="videoName">{video.snippet.title}</div>


    </div>)


    }




const VideoList =(props)=>{

const VideoItems=props.videos.map((video)=>{
  return<div className="VideoList"> <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etaq} video={video} /></div>
});
return (
  <div>{VideoItems}</div>

);

    }


 export default VideoList;
