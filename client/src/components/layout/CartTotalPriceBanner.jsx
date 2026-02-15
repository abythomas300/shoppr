import {  useSelector, useDispatch } from "react-redux"
import { setDiscount, setTotal } from "../../features/cart/cartSlice"

function CartTotalPriceBanner() {

    const cartProducts = useSelector(state => state.cart.items)
    const cartPrice = useSelector(state => state.cart.totalPrice)
    const cartDiscount = useSelector(state => state.cart.totalDiscount)
    const dispatch = useDispatch()

    dispatch(setTotal())
    dispatch(setDiscount())

    return (
        <>
            <div className="card ml-2 w-full border card-xl bg-base-300 shadow-sm">
                <div className="card-body">
                    <h1 className="card-title">Price Details </h1>
                    <hr />
                    <div className="flex justify-between">
                        <h2>Price ( {cartProducts.length === 1 ? `1 item`: `${cartProducts.length } items`} ) </h2>
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
                    <div className="justify-end card-actions">
                        <button className="btn btn-xl btn-primary mt-2 border-2 border-black ">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotalPriceBanner