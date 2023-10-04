import './App.css';
import PostList from './components/post/postList';
import TabbarList from './components/tabbar/tabbarList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import PostingPage from './pages/postingpage/PostingPage';
import SearchPage from './pages/search/SearchPage';
import LoginForm from './pages/loginpage/LoginForm';


// https://boxicons.com/ for icon

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='post' element={<PostingPage/>}/>
        <Route path='search' element={<SearchPage/>}/>
        {/* <Route path='login' element={<LoginForm/>}/> */}
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  );
  return (
    <div className="App">

      {/* -------------------------------------   Tabbar --------------------------------------------------- */}
      <div className="tabbar" style={{display:"inline"}}>
        <TabbarList />
      </div>



      {/* ------------------------------------------Posts page------------------------------------------------------ */}

      {/* <div className = 'table'>
        <PostList />
      </div> */}



      
    </div>

    
    
  );
}

export default App;

/* 
ปัญหาเวลาทำงานfornt end

-can't write a javascript structure
-how to fit every content in mobile screen


*/
