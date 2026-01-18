import StarRating from "../common/StarRating"

function OrderedProductCards(props) {

    const orderedProducts = props.orderedItems

    return (
        orderedProducts.map((product)=>{
            return(
                <>
                <div className="min-h-40 flex gap-4 w-full ">
                    <div className="flex max-w-40 max-h-40 min-w-40 min-h-40 " >
                        <img 
                            src={product.images[0]}
                            alt="Product Image" 
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="grid grid-cols-10  gap-4 w-full ms-4">
                        <div className="flex col-span-12 ">
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg sm:text-base line-clamp-4">{product.title}</span>
                                <span className="text-lg font-bold">Rs. {product.price}</span>
                                  <div className=" flex gap-2 col flex-wrap mt-4">
                                    <StarRating />
                                  </div>
                            </div>
                        </div>
                    </div> 
                </div>  
                </>
            )
        })
    )
}

export default OrderedProductCards