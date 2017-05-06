import React from 'react'
import './styles.css'

const VideoDetail=({video})=>
{
  if(!video){

    return <img src='http://media02.hongkiat.com/progress-bar-designs/9-Progress-Bar-by-Roman-Bulah.jpg' />
  }
     const VideoId=video.id.videoId;

     const url="https://www.youtube.com/embed/"+VideoId;
     console.log(url);
     return (<div>
  <iframe  src={url} frameBorder="0" allowfullscreen></iframe>
  <div className="videoTitle">{video.snippet.title}</div>
  <div className="videoAbout">{video.snippet.description}</div>

     </div>);


};
export default VideoDetail;
