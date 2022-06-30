import './App.css';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom"; 
import BlogPage from './components/BlogPage';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="new-blog" element={<CreateBlog />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
