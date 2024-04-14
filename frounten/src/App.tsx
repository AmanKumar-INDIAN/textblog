
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SingUP from './pages/SingUP'
import SingIn from './pages/SingIn'
import Blog from './pages/Blog'
import SinglePageBlog from './pages/SinglePageBlog'
import Publish from './pages/Publish'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/singup' element={<SingUP />} />
          <Route path='/singin' element={<SingIn />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/Publish' element={<Publish />} />
          <Route path='/singleblog/:id' element={<SinglePageBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
