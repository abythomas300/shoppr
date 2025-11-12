import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductReviewSection from '../components/layout/ProductReviewSection'

function ProductPage() {
    return(
        <>
        <Header />
        
        {/* Main Wrapper */}
        <div className="max-w-6xl mx-auto px-4 py-3">

            {/* Product Details wrapper */}
            <div className=" grid grid-cols-12 p-2">

                {/* product image wrapper */}
                <div className="col-span-12 md:col-span-5 p-4">

                    {/* image only wrapper */}
                    <div className="flex p-4">
                        <img 
                            src="https://images.pexels.com/photos/32967534/pexels-photo-32967534.jpeg" 
                            alt="Product Image"
                            className="object-contain" 
                        />
                    </div>
                    {/* image CTA buttons */}
                    <div className="grid gap-2 my-4">
                        <div className="col-span-12 p-6 btn border bg-primary text-lg">Add to Cart </div>
                        <div className="col-span-12 p-6 btn border bg-primary text-lg">Buy Now </div>
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
                                <li><a >Gaming</a></li>
                                <li><a >Playstation 5</a></li>
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
                        <span>SONY PlayStation5 Console (slim) CFI-2008A01X 1024 GB  (White)</span>
                        <div className="flex gap-4">
                            <span className="badge badge-sm badge-success align-middle">⭐4.7 star </span>
                            <span className="text-sm">5,410 Ratings and 389 Reviews </span>
                        </div>
                        <span className='text-lg'>Rs.54,990</span>
                    </div>
                    {/* Warranty info */}
                    <div className="flex">
                        <span>1 Year Warranty <a href="https://www.playstation.com/en-in/ps5/" className='link text-info'>Know more</a></span>
                    </div>
                    {/* Product specifications */}
                    <div className="grid grid-cols-12">
                        {/* specification header */}
                        <div className="flex col-span-12 border-2 border-base-300 p-4 text-lg">
                            <h1>Specifications</h1>
                        </div>
                        {/* specification details table*/}
                        <div className="flex col-span-12  border border-base-300 ">
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
                                      <td>SONY</td>
                                    </tr>
                                    <tr>
                                      <td>Model Number</td>
                                      <td>PlayStation5 Console (slim) CFI-2008A01X</td>
                                    </tr>
                                    <tr>
                                      <td>Sales Package</td>
                                      <td>Playstation 5 console, Disc Drive (attached to console), Dual sense wireless controller, 2 horizontal stand feet, HDMI cable, AC power cord, USB cable</td>
                                    </tr>
                                    <tr>
                                      <td>Additional Content</td>
                                      <td>Slim Disk</td>
                                    </tr>
                                    <tr>
                                      <td>Console Type</td>
                                      <td>Console</td>
                                    </tr>
                                    <tr>
                                      <td>Motion Controller Included</td>
                                      <td>No</td>
                                    </tr>
                                    <tr>
                                      <td>Disk Drive</td>
                                      <td>Yes</td>
                                    </tr>
                                    <tr>
                                      <td>Games Included</td>
                                      <td>No</td>
                                    </tr>
                                    <tr>
                                      <td>Console For Refiner</td>
                                      <td>PS5</td>
                                    </tr>
                                    <tr>
                                      <td>Storage</td>
                                      <td>1024</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Warranty specifications */}
                    <div className="grid grid-cols-12">
                        {/* warranty header */}
                        <div className="flex col-span-12 border-2 border-base-300 p-4">
                            <h1>Warranty Info</h1>
                        </div>
                        {/* specification details table*/}
                        <div className="flex col-span-12  border border-base-300 ">
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
                                      <td>Warranty Summary </td>
                                      <td>1 Year Warranty</td>
                                    </tr>
                                    <tr>
                                      <td>Warranty Service Type</td>
                                      <td>For any warranty related issues, please call the Customer Support -[1800-103-7799][https://web.sony-asia.com/in/contact-us/]</td>
                                    </tr>
                                    <tr>
                                      <td>Covered in Warranty</td>
                                      <td>Manufacturing Defects</td>
                                    </tr>
                                    <tr>
                                      <td>Not Covered in Warranty</td>
                                      <td>Physical, Fire and Water Damages</td>
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