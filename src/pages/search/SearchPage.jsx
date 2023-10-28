import React from 'react' //rafce
import './search.css';
import PostList from '../../components/post/postList'
import TabbarList from '../../components/tabbar/tabbarList'
import LoginForm from '../loginpage/LoginForm'

const SearchPage = () => {
  return (
    <div className="App">
      {/* -------------------------------------   Tabbar --------------------------------------------------- */}
      <div className="tabbar" style={{ display: "inline" }}>
        <TabbarList />
      </div>
      <div className='searchmain'>
        <h1 className='headsearch'> What DO You Looking For...?</h1>
        <span className='Music'> Music </span>
        <span className='Game'> Game </span>
        <span className='Sport'> Sport </span>
        <span className='Animal'> Animal </span>
        <span className='Anime'> Anime </span>
        <span className='Food'> Food </span>
      </div>

    </div>
  )
}

export default SearchPage