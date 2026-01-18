import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import StarRating from "../components/common/StarRating";
import {useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {setOrderDetails} from "../features/orders/ordersSlice"
import OrderedProductCards from "../components/layout/OrderedProductCards";
import formatDate from "../utils/dateConverter";


function OrdersPage() {
    
    const orderedItems = useSelector(state => state.orders.items)
    const userDetails = useSelector(state => state.auth.userDetails)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()

        useEffect(()=>{
            // Check whether user is logged in
            if(!isLoggedIn) {
                navigate('/login')
            }

            // API call
            const getOrders = async () => {
                try {
                    const response = await axios.post('http://localhost:3000/orders', {userId: userDetails._id})
                    if(response.data.success === true) {
                        const orderDetails = response.data.orders
                        dispatch(setOrderDetails(orderDetails))

                        // TODO: loading state set to false
                    }
                }catch(error) {
                    console.log("Cannot get order details, reason: ", error)
                }
            }

            getOrders()
        }, [])

    return(
        <>
            <Header /> 

            {/* Page Header - "My Wishlist" */}
            <PageHeader pageName={'My Orders'}/>

            <div className="flex flex-col min-h-screen"> {/*Main Wrapper*/}

                <div className="grow">

                    { 
                    (orderedItems && orderedItems.length > 0) ?
                    orderedItems.map((item)=>{
                            return(
                                <>
                                    <div className="flex m-4 p-4 card bg-base-100 shadow-sm">
                                    <p>Orders on {formatDate(item.placedAt)}</p> 
                                    </div>
                                    <div className="flex m-4 p-4 card bg-base-100 shadow-sm border rounded-md" key={item._id}>
                                        <OrderedProductCards orderedItems={item.orderItems} />
                                    </div>

                                </>)
                    }
                    )
                    : <p className="text-center text-base-content/70 col-span-full">Seems like you haven't bought any products from us yet.</p>}
                
                </div>

            </div>

            <Footer />
        </>
    )
}

export default OrdersPage