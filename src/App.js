import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import NotFound from './NotFound'
import Projects from './projects';
import Contact from './Contact';

function App() {
  return (

<div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
</div>

  );
}

export default App;
