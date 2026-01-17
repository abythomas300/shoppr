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

const TrashCan = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );



function OrdersPage() {
    
    const orderedItems = useSelector(state => state.orders.items)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()

    // redirect non-logged in user to login page
        useEffect(()=>{
            // Check whether user is logged in
            if(!isLoggedIn) {
                navigate('/login')
            }

            // API call
            const getOrders = async () => {
                try {
                    const response = await axios.post('http://localhost:3000/orders', {userId: "692a05b42c355ec8b213489b"})
                    if(response.data.success === true) {
                        const orderDetails = response.data.orders
                        console.log("ORDER DETAILS: ", orderDetails) // for test
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
                                    <div className="flex m-4 p-4 card bg-base-100 shadow-sm " key={item._id}>
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