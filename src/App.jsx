import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </ul>
        
        <Container customClass='min-height'>
          <Routes>
            <Route element = {<Home/>} path='/'/>
            <Route element = {<Contact/>} path='/contact'/>
            <Route element = {<Company/>} path='/company'/>
            <Route element = {<NewProject/>} path='/newproject'/>
          </Routes>
        </Container>

      <footer>Rodapé</footer>

    </Router>
  );
}

export default App;
