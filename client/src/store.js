import {configureStore} from '@reduxjs/toolkit'
import productReducer from './features/products/productsSlice'
import cartReducer from './features/cart/cartSlice'
import orderReducer from './features/orders/ordersSlice'
import wishlistReducer from './features/wishlist/wishlistSlice'
import userReducer from './features/user/userSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        orders: orderReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        user: userReducer
    }
})

export default store