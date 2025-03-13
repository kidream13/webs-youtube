import React from 'react'
import Main from '../components/section/Main'
import Portfolio from '../components/contents/Portfolio'
import Anime from '../components/contents/Anime'
import Book from '../components/contents/Book'
import Movie from '../components/contents/Movie'
import Music from '../components/contents/Music'
import Today from '../components/contents/Today'
import Youtube from '../components/contents/Youtube'

const home = () => {
  return (
    <Main title="유튜브 채널" description = "유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <Movie/>
      <Book/>
      <Anime/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default home