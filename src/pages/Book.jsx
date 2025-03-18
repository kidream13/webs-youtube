import React from 'react'
import Main from '../components/section/Main'
import { BookText } from '../data/book'
import VideoCard from '../components/video/VideoCard'

const book = () => {
  return (
    <Main title="도서사이트" 
      description="도서사이트 페이지입니다.">
      <section id='bookPage'>
        <h2>📘도서 추천 페이지 </h2>
        <div className='video_inner'>
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default book