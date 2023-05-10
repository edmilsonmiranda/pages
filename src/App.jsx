import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import NotFound from './components/pages/NotFound'


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
