import React from 'react'
import Main from '../components/section/Main'
import BookCard from '../components/video/BookCard'
import { BookText } from '../data/book'

const book = () => {
  return (
    <Main title="도서사이트" 
      description="도서사이트 페이지입니다.">
      <section id='bookPage'>
        <h2>📘도서 추천 페이지 </h2>
        <div className='video_inner'>
          <BookCard books={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default book