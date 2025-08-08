import './styles/main.css'
import './styles/reset.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop.js'

import Navbar from './components/navbar/Navbar.js'
import Footer from './components/footer/Footer.js'
import Projects from './pages/Projects.js';
import Contacts from './pages/Contacts.js';
import Home from './pages/Home.js';
import Project from './pages/Project.js';


function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/project/:id' element={<Project />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
