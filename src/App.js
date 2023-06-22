import './App.css';
import Nav from './components/Navbar';
import Home from './pages/Home';
import Familymembers from './pages/familymembers';
import Friends from './pages/friends';
import Anniversaries from './pages/Anniversaries';

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
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
     </Routes>
    </div>
  );
}

export default App;
