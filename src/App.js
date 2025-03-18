import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(()=> import ('./pages/Home'));
const Today = lazy(()=> import ('./pages/Today'));
const Music = lazy(()=> import ('./pages/Music'));
const Movie = lazy(()=> import ('./pages/Movie'));
const Book = lazy(()=> import ('./pages/Book'));
const Anime = lazy(()=> import ('./pages/Anime'));
const Port = lazy(()=> import ('./pages/Port'));
const Favorite = lazy(()=> import ('./pages/Favorite'));
const Channel = lazy(()=> import ('./pages/Channel'));
const Video = lazy(()=> import ('./pages/Video'));
const Search = lazy(()=> import ('./pages/Search'));
const Not = lazy(()=> import ('./pages/Not'));
const Main = lazy(()=> import ('./components/section/Main'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback = {<Main/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/today' element={<Today/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/port' element={<Port/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
          <Route path='/channel/:channelID' element={<Channel/>}/>
          <Route path='/video/:videoID' element={<Video/>}/>
          <Route path='/search/:searchID' element={<Search/>}/>
          <Route path='/*' element={<Not/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App