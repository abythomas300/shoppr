import Homepage from './pages/Homepage'
import SignupPage from './pages/SignupPage' 
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import WishlistPage from './pages/WishlistPage'

  function App() {

    // sample props for Orders page
    // const sampleOrders = [
    //     {
    //       id: "order_1",
    //       productImage: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1326",
    //       productName: "Many Lives, Many Masters (English, Paperback, Dr. Weiss Brian)",
    //       author: "Dr. Weiss Brian",
    //       variant: null,
    //       deliveryDate: "Jul 23",
    //       deliveryYear: null,
    //       price: 179,
    //       deliveryStatus: "Delivered",
    //       isRated: false,
    //       userRating: null,
    //     },
    //     {
    //       id: "order_2",
    //       productImage: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1326",
    //       productName: "NIVIA Storm with Pump Football - Size: 5",
    //       author: null,
    //       variant: "Color: White,Black Size: 5",
    //       deliveryDate: "Jan 10",
    //       deliveryYear: null,
    //       price: 402,
    //       deliveryStatus: "Delivered",
    //       isRated: false,
    //       userRating: null,
    //     },
    //     {
    //       id: "order_3",
    //       productImage: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1326",
    //       productName: "The Laws of Human Nature",
    //       author: "Greene Robert",
    //       variant: null,
    //       deliveryDate: "Apr 20",
    //       deliveryYear: "2024",
    //       price: 223,
    //       deliveryStatus: "Delivered",
    //       isRated: false,
    //       userRating: null,
    //     }
    //   ];

    return(
        <>
            {/* <SignupPage /> */}
            {/* <LoginPage /> */}
            {/* <Homepage /> */}
            {/* <CartPage /> */}
            {/* <OrderPage orders={sampleOrders}/> */}
            <WishlistPage />
        </>
    )
}

export default App

