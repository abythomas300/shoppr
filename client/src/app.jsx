import Homepage from './pages/Homepage'
import SignupPage from './pages/SignupPage' 
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import WishlistPage from './pages/WishlistPage'
import ProductPage from './pages/ProductPage'   
import UserProfile from './pages/UserProfile'
import FallbackPage from './pages/FallbackPage'
import OTPPage from './pages/OTPPage'
import CategoryPage from './pages/CategoryPage'
import {Routes, Route} from 'react-router-dom'
import './api/axiosConfig'
import PaymentGatewaySelectionPage from './pages/PaymentGatewaySelectionPage'

  function App() {

    return(
        <>
            <Routes>
                <Route path='/' element={<Homepage />}></Route> 
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/signup' element={<SignupPage />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/orders' element={<OrderPage />}></Route>
                <Route path='/wishlist' element={<WishlistPage />}></Route>
                <Route path='/product/:product_id' element={<ProductPage />}></Route>
                <Route path='/category/:category_name' element={<CategoryPage />}></Route>
                <Route path='/profile' element={<UserProfile />}></Route>
                <Route path='/otp' element={<OTPPage />}></Route>
                <Route path='/orders/payment-gateway-selection' element={<PaymentGatewaySelectionPage />}></Route>
                <Route path='*' element={<FallbackPage />}></Route>
            </Routes>
        </>
    )
}

export default App

