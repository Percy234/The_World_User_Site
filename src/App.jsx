import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import Hierarchy from './pages/Hierarchy'


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/hierarchy' element={<Hierarchy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
