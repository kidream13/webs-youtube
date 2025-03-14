import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'

const today = () => {
  return (
    <Main 
      title="유튜브 추천" 
      description="유튜브 추천 페이지입니다.">
      
    <section id='todayPage'>
        <h2>😊오늘의 추천 영상입니다.</h2>

      {todayText.map((today, key)=>(        
        <div key={key} className='today_inner'>
          <div className='today_thumb play__icon'>
            <Link to ={today.page}>
            <img src={today.img} alt={today.title}/>
            </Link>
          </div>
          <div className='today_text'>
            <span className='today'>today!</span>
            <h3 className='title'>
              <Link to={today.page}>
              {today.title}
              </Link>
              </h3>
            <p className='desc'>{today.desc}</p>
            <div className='info'>
              <span className='author'>
                <Link to = {`/channel/${today.channelId}`}>
                {today.author}
                </Link>
                </span>
              <span className='date'>{today.date}</span>
            </div>
          </div>
        </div>
      ))}
    </section>


    </Main>
  )
}

export default today