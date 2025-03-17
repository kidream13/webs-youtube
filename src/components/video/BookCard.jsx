import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({books}) => {
  return (
            <>
                {
                    books.map((book, key)=>(
                        <div className='book' key={key}>
                            <div className='book_thumb play__icon'>
                                <Link to={`book/${book.bookId}`}>
                                    <img src={book.img} alt={book.title}/>
                                </Link>
                            </div>
                        </div>
                ))}
            </>
  )
}

export default BookCard