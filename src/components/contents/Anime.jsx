import React from 'react'
import { AnimeText } from '../../data/anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
          <section id='anime'>
            <h2>💊추천 애니를 소개합니다.</h2>
            <div className='video_inner'>
              {AnimeText.map((ani, key)=>(
                <div className="anime" key={key}>
                  <div className="anime_thumb play__icon">
                    <Link to={`/anime/${ani.aniId}`}>
                    <img src={ani.img} alt={ani.title}/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
  )
}

export default Anime