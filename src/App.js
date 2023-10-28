import './App.css';
import PostList from './components/post/postList';
import TabbarList from './components/tabbar/tabbarList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import PostingPage from './pages/postingpage/PostingPage';
import SearchPage from './pages/search/SearchPage';
import LoginForm from './pages/loginpage/LoginForm';
import ProfilePage from './pages/profile/ProfilePage';
import { AuthProvider } from './services/authContext';
import PrivateRoute from './ProtectedRoute';
import Layout from './Layout';


// https://boxicons.com/ for icon

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='post' element={<PostingPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='*' element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );

}

export default App;

