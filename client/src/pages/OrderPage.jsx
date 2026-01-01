import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import StarRating from "../components/common/StarRating";
import {useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrashCan = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );



function OrdersPage() {
    
    const orderedItems = useSelector(state => state.orders.items)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()

    // redirect non-logged in user to login page
        useEffect(()=>{
            if(!isLoggedIn)
                navigate('/login')
        })

    return(
        <>
            <Header /> 

            {/* Page Header - "My Wishlist" */}
            <PageHeader pageName={'My Orders'}/>

            <div className="max-w-6xl mx-auto px-4 py-3"> {/*Main Wrapper*/}

            {orderedItems.map((item)=>{
                    return(

                    <div className="flex m-4 p-4 card bg-base-100 shadow-sm border rounded-md" key={item.id}>
                
                    <div className="min-h-40 flex gap-4 w-full ">
                        <div className="flex max-w-40 max-h-40 min-w-40 min-h-40 " >
                            <img 
                                src={item.images[0]} 
                                alt="Product Image" 
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-10  gap-4 w-full ms-4">
                            <div className="flex col-span-12 ">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg sm:text-base line-clamp-4">{item.title}</span>
                                    <span className="text-lg font-bold">Rs. {item.price}</span>
                                    <span className="text-sm italic ">Ordered on DD/MM/YY</span>
                                      <div className=" flex gap-2 col flex-wrap ">
                                      <StarRating />
                                      </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>)
            })}
            </div>

            <Footer />
        </>
    )
}

export default OrdersPage