import './App.css';
import Searchbar from './components/Searchbar';
import Layout from './components/Layout';
import Dynamic from './Pages/Dynamic'
import NotFound from './Pages/404'
import About from './Pages/About'
import Profil from './Pages/Profil'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [id, setId] = useState(null);

  return (
    <Layout className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Searchbar/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profil' element={<Profil />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/:id' element={<Dynamic />}/>
        </Routes>
      </Router>
      
    </Layout>
  );
}

export default App;
