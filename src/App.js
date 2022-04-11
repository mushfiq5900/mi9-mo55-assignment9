import './App.css';
import Blogs from './components/blogs/Blogs';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Dashboard></Dashboard>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
