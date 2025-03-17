import React, { useEffect, useState } from 'react'
import { musicText } from '../../data/music'
import { Link } from 'react-router-dom'


const Music = ({videos, title, id}) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },500);
  },[]);

  const musicClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <section id={id} className={musicClass}>
      <h2>{title}</h2>
      <div className='music_inner overflow'>
        {videos.map((music,key)=>(
          <div className='music' key={key}>
            <div className='music_img play__icon'>
              <Link to={`/channel/${music.channelId}`}>
                <img src={music.img} alt={music.name}/>
              </Link>
            </div>
            <div className="music_info">
              <Link to={`/channel/${music.channelId}`}>
                {music.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Music