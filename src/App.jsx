
import './App.css'

import MyAccountPage from './pages/MyAccountPage'
import HomePage from './pages/HomePage'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AccountPage from './pages/AccountPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import OdemePage from './pages/OdemePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import SepetPage from './pages/SepetPage'
import ShopPage from './pages/ShopPage'
import WishListPage from './pages/WishListPage'






import { DataContext } from "./context/DataProvider";
import { useContext } from "react";
import OrderViewPage from './pages/OrderViewPage'






function App() {
  const {modalOpen} = useContext(DataContext);
  console.log(modalOpen);
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='acount' element={<AccountPage/>}/>
      <Route path='blogdetails/:id' element={<BlogDetailsPage/>}/>
      <Route path='blogs' element={<BlogPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='myacount' element={<MyAccountPage/>}/>
      <Route path='odeme' element={<OdemePage/>}/>
      <Route path='productdetails/:id' element={<ProductDetailsPage/>}/>
      <Route path='orderView/:id' element={<OrderViewPage/>}/>
      <Route path='sepet' element={<SepetPage/>}/>
      <Route path='shop' element={<ShopPage/>}/>
      <Route path='wishlist' element={<WishListPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
