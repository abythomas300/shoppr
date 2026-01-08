import {configureStore} from '@reduxjs/toolkit'
import productReducer from './features/products/productsSlice'
import cartReducer from './features/cart/cartSlice'
import orderReducer from './features/orders/ordersSlice'
import wishlistReducer from './features/wishlist/wishlistSlice'
import userReducer from './features/user/userSlice'
import authReducer from './features/auth/authSlice'
import checkoutReducer from './features/checkout/checkoutSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        orders: orderReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        user: userReducer,
        auth: authReducer,
        checkout: checkoutReducer
    }
})

export default store