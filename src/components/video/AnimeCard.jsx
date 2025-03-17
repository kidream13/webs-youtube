import React from 'react'
import { Link } from 'react-router-dom'

const AnimeCard = ({animes}) => {
  return (
        <>
            {
                animes.map((anime, key)=>(
                    <div className='anime' key={key}>
                        <div className='anime_thumb play__icon'>
                            <Link to={`anime/${anime.animeId}`}>
                                <img src={anime.img} alt={anime.title}/>
                            </Link>
                        </div>
                    </div>
            ))}
        </>
  )
}

export default AnimeCard