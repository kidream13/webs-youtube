import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { musicText } from '../data/music'

const music = () => {
  return (
    <Main title="음악 채널" 
          description="음악 추천 페이지입니다.">
            <section id='music'>
              <h2>🎵 추천 음악을 소개합니다.</h2>
                    <div className='music_inner'>
                      {musicText.map((music,key)=>(
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
    </Main>
  )
}

export default music