import React from 'react'
import { Link } from 'react-router-dom'

const VideoSearch = ({videos}) => {
  return (
    <>
      {
        videos.map((video, key)=>(
            <div className='video' key={key}>
                <div className='video_thumb play__icon' style={{backgroundImage:`url(${video.snippet.thumbnails?.high?.url || 'default-image-url.jpg'})`}}>
                  <Link to={`/video/${video.id.videoId}`} />
                </div>
                <div className='video_info'>
                  <div className="title">
                    <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                  </div>
                  <div className="info">
                    <span className="author">
                      <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                    </span>
                  </div>
                </div>
            </div>

        ))}

    </>
  );
};

export default VideoSearch