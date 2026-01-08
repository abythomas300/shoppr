import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import axios from 'axios';
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CategoryBanner from "./CategoryBanner";
import Loader from "../common/Loader";
import { setCheckoutDetails } from '../../features/checkout/checkoutSlice'
import { useNavigate } from "react-router-dom";

function CategoryTopDealsCards() {


        const categoryName = useParams().category_name

        const [categoryProducts, setCategoryProducts] = useState([])
        const [isLoading, setLoadingState] = useState(true)

        const products = useSelector(state => state.products.items)
        const dispatch = useDispatch()

        const navigate = useNavigate()

        const handleAddToCartButtonClick = (id)=>{
          // get selected product from global state
          const selectedProduct = products.filter((product)=>{
            if(product._id === id) 
              return product
          })
          // dispatch addToCart() from cartSlice
          if(selectedProduct)
            dispatch(addToCart(selectedProduct))
        }

        const handleBuyNowButtonClick = (id) =>{
          console.log("Target ID:", id) // for test
          const selectedProduct = products.filter((product)=>{
            if(product._id === id)
              return product
          })
          if(selectedProduct)
            dispatch(setCheckoutDetails(selectedProduct))
            navigate('/orders/payment-gateway-selection')
        }

        const handleAddToWishlistButton = (id)=>{
            console.log(id)
              const selectedProduct = products.filter((item)=>{
                if(item._id === id)
                  return item
                })
                if(selectedProduct[0])
                  dispatch(addToWishlist(selectedProduct[0]))
        }
        
        // API Call
        useEffect(()=>{
          const getProductByCategory = async ()=> {
            try{
              const response = await axios.get(`http://localhost:3000/product/category/${categoryName}`)
              const categoryProducts = response.data.data
              console.log(categoryProducts[0].category.image)
              if(response.data.success === true) {
                console.log("API call success")
                setCategoryProducts(categoryProducts)
                setLoadingState(false)
              }
            }catch(error){
              console.log("Cannot get data, reason: ", error)
            }
          }
          getProductByCategory()
        }, [categoryName])

        if(isLoading) {
          return <Loader />
        }

        return (
          <>
            {(categoryProducts && categoryProducts.length>0) ? <CategoryBanner imageLink={categoryProducts[0].category.image}/> : ""}

            <section className="px-6 py-10 bg-base-200"> 
            <h2 className="text-2xl font-bold text-start mb-8">{`Discover the best in ${categoryName} category`}</h2>
      
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {(categoryProducts && categoryProducts.length > 0) ? (
                categoryProducts.map((product) => (
                  <div
                    key={product._id}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <figure className="px-4 pt-4">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="rounded-xl h-48 w-full object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <Link to={`/product/${product._id}`}>
                        <h3 className="card-title text-lg font-semibold hover:text-primary">
                          {product.title}
                        </h3>
                      </Link>
                      {product.description && (
                        <p className="text-sm text-base-content/70 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <p className="text-primary font-bold text-lg">
                        <span className="mr-1">₹</span>{product.price}
                      </p>
                      <div className="card-actions mt-2">
                        <button onClick={ ()=>{handleAddToCartButtonClick(product._id)} } className="btn btn-primary btn-sm text-sm ">
                          Add to Cart
                        </button>
                        <button onClick={()=> handleBuyNowButtonClick(product._id)} className="btn btn-primary btn-sm text-sm">
                          Buy now
                        </button>
                        <button onClick={()=> handleAddToWishlistButton(product._id)} className="btn btn-primary btn-sm text-sm">
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-base-content/70 col-span-full">
                  No recently added products yet.
                </p>
              )}
            </div>

          </section>
          </>
        )
}


export default CategoryTopDealsCards