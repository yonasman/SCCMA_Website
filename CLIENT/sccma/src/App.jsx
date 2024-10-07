import { Routes, Route } from 'react-router-dom';
import Home from '../Markup/Pages/Home'
import News from '../Markup/Pages/News'
import About from '../Markup/Pages/About'
import Contact from '../Markup/Pages/Contact'
import NotFound from '../Markup/Pages/NotFound'
import './App.css'
import SharedLayout from '../Markup/Components/SharedLayout/SharedLayout';
import Donate from '../Markup/Pages/Donate';
import Staff from '../Markup/Pages/Staff'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/donate' element={<Donate/>}/>
            <Route path='/staffs' element={<Staff/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
