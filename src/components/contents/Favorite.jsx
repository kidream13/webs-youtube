import React from 'react'
import { favoriteText } from '../../data/favorite'
import { Link } from 'react-router-dom'

const favorite = () => {
  return (
    <section id='favorite'>
      <h2>✨즐겨찾기한 영상입니다.</h2>
      <div className='favorite_inner'>
        {favoriteText.map((favorite, key)=>(
          <div className="favorite" key={key}>
            <div className="favorite_thumb play__icon">
              <Link to={`/favorite/${favorite.favoriteId}`}>
              <img src={favorite.img} alt={favorite.title}/>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default favorite