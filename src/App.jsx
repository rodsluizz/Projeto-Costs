import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/layout/Projects';

function App() {
  return (
    <Router>
        <Navbar/>
        <Container customC lass='min-height'>
          <Routes>
            <Route element = {<Home/>} path='/'/>
            <Route element = {<Contact/>} path='/contact'/>
            <Route element = {<Company/>} path='/company'/>
            <Route element = {<NewProject/>} path='/newproject'/>
            <Route element = {<Projects/>} path='/projects'/>
          </Routes>
        </Container>

      <Footer></Footer>

    </Router>
  );
}

export default App;
