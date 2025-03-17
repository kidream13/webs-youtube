import React from 'react'
import Main from '../components/section/Main'
import { AnimeText } from '../data/anime'
import AnimeCard from '../components/video/AnimeCard'

const anime = () => {
  return (
    <Main title="애니메이션 채널" 
    description="애니메이션 페이지입니다.">
      <section id='animePage'>
        <h2>💊애니 추천 페이지 </h2>
        <div className='video_inner'>
          <AnimeCard animes={AnimeText}/>
        </div>
      </section>
    </Main>
) 
  
}

export default anime