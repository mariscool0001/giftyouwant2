import './App.css';
import Nav from './components/Navbar';
import Home from './pages/Home';
import Familymembers from './pages/familymembers';
import Friends from './pages/friends';
import Anniversaries from './pages/Anniversaries';
import ImportantEvents from './pages/importantevents';
import Wedding from './pages/wedding';
import Personalized from './pages/personalized';
import Contact from './pages/contact';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      
      <Route path='/Home'element={<Home/>}/>
      <Route path='/familymembers'element={<Familymembers/>}/>
      <Route path='/friends'element={<Friends/>}/>
      <Route path='/anniversaries'element={<Anniversaries/>}/>
      <Route path='/importantevents'element={<ImportantEvents/>}/>
      <Route path='/wedding'element={<Wedding/>}/>
      <Route path='/personalized'element={<Personalized/>}/>
      <Route path='/contact'element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
