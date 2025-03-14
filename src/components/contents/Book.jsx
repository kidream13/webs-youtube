import React from 'react'
import { Link } from 'react-router-dom'
import { BookText } from '../../data/book'


const Book = () => {
  return (
        <section id='video'>
          <h2>📘추천 도서를 소개합니다.</h2>
          <div className='video_inner'>
            {BookText.map((book, key)=>(
              <div className="video" key={key}>
                <div className="video_thumb play__icon">
                  <Link to={`/book/${book.bookId}`}>
                  <img src={book.img} alt={book.title}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Book