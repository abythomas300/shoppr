import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const TrashCan = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );



function WishlistPage() {
    const SampleWhishlistProducts = [
        {
            id:1,
            title: '48 Laws of Power (Paperback, Legacy Cover)',
            price: 'Rs. 350',
            productImage: 'https://images.pexels.com/photos/16187491/pexels-photo-16187491.jpeg'
        },
        {
            id:2,
            title: 'The Passion Withing (Journal, Hardcover, Red)',
            price: 'Rs. 869',
            productImage: 'https://images.pexels.com/photos/7635576/pexels-photo-7635576.jpeg'
        },
        {
            id:3,
            title: 'Playstation 5 Dual Sense Motor Controller (Default Edition)',
            price: 'Rs. 5599',
            productImage: 'https://images.pexels.com/photos/33061113/pexels-photo-33061113.jpeg'
        }
    ]
    
    return(
        <>
            <Header /> 

            
            <div className="max-w-6xl mx-auto px-4 py-3"> {/*Main Wrapper*/}

            {/* Page Header - "My Wishlist" */}
            <div className="flex flex-row justify-center m-4  border-2 border-base-300 ">
                <div className="flex flex-row  p-2">
                    <div className="flex">
                        <span className="text-xl font-bold">My Wishlist</span>
                    </div>
                </div>
            </div>

            
            {SampleWhishlistProducts.map((product)=>{
                    return(

                    <div className="flex m-4 p-4 card bg-base-100 shadow-sm border rounded-md">
                
                    <div className="min-h-40 flex gap-4 w-full ">
                        <div className="flex max-w-40 max-h-40 min-w-40 min-h-40 " >
                            <img 
                                src={product.productImage} 
                                alt="Product Image" 
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-12 gap-4 w-full ms-4">
                            <div className="flex col-span-10 ">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg sm:text-base line-clamp-4">{product.title}</span>
                                    <span className="text-lg font-bold">{product.price}</span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex justify-center h-full">
                                    <div className="flex justify-center align-bottom">
                                            <span className="btn btn-ghost"><TrashCan/></span>
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

export default WishlistPage