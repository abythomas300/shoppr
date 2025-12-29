import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductReviewSection from '../components/layout/ProductReviewSection'
import StickyPageHeader from "../components/layout/PageHeader"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../components/common/Loader'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

function ProductPage() {

  const params = useParams()
  const targetProductId = params.product_id
  const [productDetails, setProductDetails] = useState(null)
  const [loading, setLoadingState] = useState(true)
  console.log("URL PARAMETERS:", params.product_id) // for test

  const products = useSelector(state => state.products.items)
  const dispatch = useDispatch()


  const handleAddToCartButtonClick = (id) =>{
    console.log("Target ID:", id) // for test
    const selectedProduct = products.filter((product)=>{
      if(product._id === id)
        return product
    })
    if(selectedProduct)
      dispatch(addToCart(selectedProduct[0]))
  }

  const handleBuyNowButtonClick = (id) =>{
    console.log("Target ID:", id) // for test
    const selectedProduct = products.filter((product)=>{
      if(product._id === id)
        return product
    })
    if(selectedProduct)
      console.log("Product selected to buy: ", selectedProduct[0])
  }

  // API Call
  useEffect(()=>{
    const getProduct = async()=>{
      try {
        const response = await axios.get(`http://localhost:3000/product/${targetProductId}`)
        if(response.data.success === true) {
          const productDetails = response.data.data
          console.log(productDetails) // for test
          setProductDetails(productDetails)
          setLoadingState(false)
        }
      }catch(error) {
        console.log("Cannot get product, reason: ", error)
      }
    }
    getProduct()
  }, [targetProductId])

  if(loading) {
    return <Loader />
  }

    return(
        <>
        <Header />
      
        <StickyPageHeader pageName={productDetails.title}/>

        {/* Main Wrapper */} 
        <div className="max-w-6xl mx-auto px-4 py-3">

            {/* Product Details wrapper */}
            <div className=" grid grid-cols-12 p-2">

                {/* product image wrapper */}
                <div className="col-span-12 md:col-span-5 p-4">

                    {/* image only wrapper */}
                    <div className="flex p-4">
                        <img 
                            src={productDetails.images[0]} 
                            alt={`${productDetails.title}-image`}
                            className="object-contain" 
                        />
                    </div>
                    {/* image CTA buttons */}
                    <div className="grid gap-2 my-4">
                        <div className="col-span-12 p-6 btn border bg-primary text-lg"
                          onClick={()=>{handleBuyNowButtonClick(productDetails._id)} }
                        >
                          Buy Now
                        </div>
                        <div className="col-span-12 p-6 btn border bg-primary text-lg"
                          onClick={()=>{handleAddToCartButtonClick(productDetails._id)} }
                        >
                          Add to Cart 
                        </div>
                    </div>
                    
                </div>


                {/*Product details wrapper */}
                <div className="flex flex-col min-h-[140px] col-span-12 md:col-span-7  p-4 gap-4">

                    {/* Navigation and options */}
                    <div className="flex justify-between gap-4 ">
                        {/* Breadcrumbs */}
                        <div className="breadcrumbs text-sm grow">
                            <ul>
                                <li><a >Home</a></li>
                                <li><a >Products</a></li>
                                <li><a >{productDetails.category.name}</a></li>
                                <li><a >{productDetails.title}</a></li>
                            </ul>
                        </div>
                        {/* Compare checkbox */}
                        <div className="flex py-1 gap-2">
                            <span className='text-sm btn btn-xs '>
                                Compare
                                <input type="checkbox" />
                            </span>
                        </div>
                        {/* Share option */}
                        <div className="flex py-1">
                            <span className='text-sm btn btn-xs '>
                                Share 
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="jWKn+i">
                                    <path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" class="g9gS7K" fill="#c2c2c2" fill-rule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    {/* Product name , rating and others*/}
                    <div className="flex flex-col  gap-2 text-lg"> 
                        <span>{productDetails===null? "product-title": productDetails.title}</span>
                        <div className="flex gap-4">
                            <span className="badge badge-sm badge-success align-middle">⭐{productDetails.ratings}</span>
                            <span className="text-sm"> {productDetails.reviewCount} Reviews </span>
                        </div>
                        
                        <div className="inline ">
                        <span className='text-2xl font-semibold'>Rs. {productDetails.price - productDetails.discount}</span>
                        <span className='text-1xl line-through ms-4'>Rs.{productDetails.price}</span>
                        <span className='text-1xl ms-4 font-bold text-success'>{Math.round((productDetails.discount / productDetails.price)*100)}% off</span>
                        </div>
                    </div>
                    {/* Warranty info */}
                    <div className="flex">
                        {
                          productDetails.warranty ? 
                          <span>1 Year Warranty <a href="" className='link text-info'>Know more</a></span>
                          : 
                        <div className='hidden'/>}
                    </div>
                    {/* Product specifications */}
                    <div className="grid grid-cols-12">
                        {/* specification header */}
                        <div className="flex col-span-12 border-2 border-base-300 p-4 text-lg">
                            <h1>Specifications</h1>
                        </div>
                        {/* specification details table*/}
                        <div className="flex col-span-12  border border-base-300 w-full">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>Specification</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                  <tbody>
                                    <tr>
                                      <td>Brand </td>
                                      <td>{productDetails.brand}</td>
                                    </tr>
                                    <tr>
                                      <td>Model Number</td>
                                      <td>{productDetails._id}</td>
                                    </tr>
                                    <tr>
                                      <td>Description</td>
                                      <td>{productDetails.description}</td>
                                    </tr>
                                    <tr>
                                      <td>Discount</td>
                                      <td>{productDetails.discount}</td>
                                    </tr>
                                    <tr>
                                      <td>Stock Available</td>
                                      <td>{productDetails.stock}</td>
                                    </tr>
                                    <tr>
                                      <td>Product Posted At</td>
                                      <td>{productDetails.updatedAt}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product review wrapper */}
                <div className="flex min-h-[140px] col-span-12 p-4 gap-4">
                  <ProductReviewSection />
                </div>

                

            </div>

        </div>

        <Footer/>
        
        </>
    )
}

export default ProductPage