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
import {useDispatch} from "react-redux";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './components/common/Loader'
import {setUserProfile, setUserRole, setLoginSuccess} from './features/auth/authSlice'
import ChatbotPage from './pages/ChatbotPage'

  function App() {
    
    const [loading, setLoadingState] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        const verifyAccess = async ()=>{
            try{
                const response = await axios.get(`http://localhost:3000/auth/verify-access`, {withCredentials: true})
                if(response.data.authenticated) {
                    dispatch(setUserProfile(response.data.userDetails))
                    dispatch(setUserRole(response.data.userDetails.role))
                    dispatch(setLoginSuccess())
                    setLoadingState(false)
                }
                setLoadingState(false)
            }catch(error){
                setLoadingState(false)
                console.log("Error loading info, try again later.", error)
            }
        }
        verifyAccess()
    , []})

    if(loading) {
        return <Loader />
    }

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
                <Route path='/chat' element={<ChatbotPage />}></Route>
                <Route path='*' element={<FallbackPage />}></Route>
            </Routes>
        </>
    )
}

export default App

