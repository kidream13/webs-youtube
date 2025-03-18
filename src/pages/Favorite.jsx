import React from 'react'
import Main from '../components/section/Main'
import {FavoriteText} from '../data/favorite'
import VideoCard from '../components/video/VideoCard'

const favorite = () => {
  return (
    <Main title="즐겨찾기" 
    description="즐겨찾기 페이지입니다.">
      <section id='favorite'>
        <h2> ✨즐겨찾기한 영상입니다.</h2>
        <div className='video_inner'>
          <VideoCard videos={FavoriteText}/>
        </div>
      </section>
    </Main>
  )
}

export default favorite