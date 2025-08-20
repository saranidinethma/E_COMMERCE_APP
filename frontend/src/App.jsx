import React from 'react'
import { Routes,Route } from 'react-router-dom'
import home from './pages/home'
import collection from './pages/collection'
import about from './pages/about'
import contact from './pages/contact'
import product from './pages/product'
import card from './pages/cart'
import login from './pages/login'
import placeOrder from './pages/placeOrder'
import orders from './pages/orders'
import Navbar from './components/navBar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
      <Routes>
    <Route path='/' element={<home/>} />
    <Route path='/collection' element={<collection />} />
    <Route path='/about' element={<about />}/>
    <Route path='/contact'element={<contact />} /> 
    <Route path='/product/:productId' element={<product />} />
    <Route path='/cart'element={<cart />} />
    <Route path='/login' element={<login />} />
    <Route path='/placeOrder' element={<placeOrder />} />
    <Route path='/orders' element={<orders />} />
      </Routes>
    </div>
  )
}

export default App
