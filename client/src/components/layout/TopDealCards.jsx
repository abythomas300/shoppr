import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import axios from 'axios';
import { setProduct } from "../../features/products/productsSlice";

function TopDealsCards() {

        let products = useSelector(state => state.products.items)
        const dispatch = useDispatch()

        const handleAddToCartButtonClick = (id)=>{
          // get selected product from global state
          console.log("Target id:", id) // for test
          const selectedProduct = products.filter((product)=>{
            if(product._id === id) 
              return product
          })
          // dispatch addToCart() from cartSlice
          if(selectedProduct)
            console.log("SELECTED PRODUCT:", selectedProduct) // for test
            dispatch(addToCart(selectedProduct[0]))
        }

        const handleBuyNowButtonClick = (event)=>{
          event.preventDefault()
          console.log("buy now - button click test")
        }
        
        // API call for getting products
        const getProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/product/')
            if(response.data.success) {
              products = response.data.products
              console.log("API call success, response: ", products) // for test
              // setting products data fetched from API to productsSlice
              dispatch(setProduct(products))
              console.log("new products dispatched to products global state!") // for test
            }
          } catch(error) {
            console.log("Error in getting products, reason: ", error)
          }
        }

        // Do API call for getting products only if the productsSlice state is null (using useState is causing re-render loop)
        if(products === null)
          getProducts()

        return (
          <section className="px-6 py-10 bg-base-200"> 
            <h2 className="text-2xl font-bold text-start mb-8">Recently Added</h2>
      
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {(products && products.length > 0) ? (
                products.map((product) => (
                  <div
                    key={product.id}
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
                      <h3 className="card-title text-lg font-semibold">
                        {product.title}
                      </h3>
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
                        <button onClick={handleBuyNowButtonClick} className="btn btn-primary btn-sm text-sm">
                          Buy now
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
        )
}


export default TopDealsCards