import React from 'react'

import { CiRouter, CiMonitor, CiHeadphones,CiVideoOn,CiChat1, CiBurger, CiYoutube, } from "react-icons/ci";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { RiYoutubeFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header_logo'>
        <a href="/">
          <em aria-hidden='true'></em>
          <span>my<br/>youtube</span>
        </a>
      </h1>
      <nav className='header_menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><CiRouter />My Youtube</a>
          </li>
          <li>
            <a href='/today'><CiMonitor />
            추천 영상</a>
          </li>
          <li>
            <a href='/music'><CiHeadphones />추천 음악</a>
          </li>
          <li>
            <a href='/movie'><CiVideoOn />추천 영화</a>
          </li>
          <li>
            <a href='/book'><CiChat1 />추천 도서</a>
          </li>
          <li>
            <a href='/anime'><CiBurger />추천 애니</a>
          </li>
          <li>
            <a href='/youtube'><CiYoutube />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href="/youtube">MyYoutube</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/java">JAVA</a>
          </li>
          <li>
            <a href="/search/oracle">ORACLE</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header_sns'>
      <ul>
        <li>
          <a href="https://github.com">
          <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://youtube.com">
          <RiYoutubeFill />
          </a>
        </li>
        <li>
          <a href="https://google.com">
          <FcGoogle />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
          <BiLogoInstagramAlt />
          </a>
        </li>        
      </ul>
      </div>
    </header>
  )
}

export default Header