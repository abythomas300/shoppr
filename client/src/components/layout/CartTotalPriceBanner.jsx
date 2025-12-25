import {  useSelector, useDispatch } from "react-redux"
import { setDiscount, setTotal } from "../../features/cart/cartSlice"

function CartTotalPriceBanner() {

    const cartPrice = useSelector(state => state.cart.totalPrice)
    const cartDiscount = useSelector(state => state.cart.totalDiscount)
    const currentItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    dispatch(setTotal())
    dispatch(setDiscount())

    console.log("(.jsx) Current items in cart: ", currentItems) // for test
    console.log("(.jsx) Total price in cart: ", cartPrice) // for test
    console.log("(.jsx) Total discount in cart: ", cartDiscount) // for test
    console.log("(.jsx) Total amount to be paid by customer: ", cartPrice - cartDiscount) // for test

    return (
        <>
            <div className="card ml-2 w-full border card-xl bg-base-300 shadow-sm">
                <div className="card-body">
                    <h1 className="card-title">Price Details </h1>
                    <hr />
                    <div className="flex justify-between">
                        <h2>Price (n item)</h2>
                        <h2><b>{cartPrice}</b></h2>
                    </div>
                    <div className="flex justify-between">
                        <h2>Discount</h2>
                        <h2 className="text-success"><b>{cartDiscount}</b></h2>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h1>Total</h1>
                        <h1><b>{cartPrice - cartDiscount}</b></h1> 
                    </div>
                    {/* <p>Card body</p> */}
                    <div className="justify-end card-actions">
                        <button className="btn btn-xl btn-primary mt-2 border-2 border-black ">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotalPriceBanner