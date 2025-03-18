import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

const Search =() =>{
const {searchID} = useParams();

  //search/123 -> useParams {searchID:"123"} =>이걸 반환한다.

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(()=>{
    setVideos([]);
    fetchVideos(searchID);
    setLoading(false)
  },[searchID])

  const fetchVideos = (query, pageToken='') => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
    .then((data)=> {
      setNextPageToken(data.nextPageToken)
      setVideos((prevVideo)=>[...prevVideo, ...data.items])
  })
    .catch((error)=>{
      console.log('Error fetching data', error)
    })
  }

  const handleLoadMore = () =>{
    if(nextPageToken){
      fetchVideos(searchID, nextPageToken)
    }
  }

  const searchPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title="유튜브 검색페이지" 
    description="검색 페이지입니다.">
      <section id='searchPage' className={searchPageClass}>
        <div className="video_inner search">
          <VideoSearch videos={videos}/>
        </div>
        <div className='video_more'>
          {nextPageToken && (
            <button onClick={handleLoadMore}>더 보기</button>
          )}
        </div>
      </section>
    </Main>
    )
}

export default Search