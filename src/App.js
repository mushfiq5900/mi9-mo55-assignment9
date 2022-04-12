import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/not_found/NotFound';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
