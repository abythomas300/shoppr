import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../components/layout/AdminHeader";
import Footer from "../components/layout/Footer";

const BASE_URL = "http://localhost:3000";

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="self-start justify-center rounded-lg border border-base-300 shadow-sm bg-base-100 w-72 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default">
      {/* Product Image */}
      <figure className="h-50 bg-base-200 relative" onClick={() => setExpanded((prev) => !prev)}>
        {product.images ? (
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/40 text-sm">
            No Image
          </div>
        )}
      </figure>

      {/* Title + Toggle */}
      <div className="bg-primary flex items-center justify-between px-4 py-4" >
        <h2 className="font-semibold text-base">
          {product.title}
        </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="px-2 pb-4 flex flex-col gap-1 text-lg border-2 border-primary pt-3">
          <p><span className="font-medium">Description:</span> {product.description || "—"}</p>
          <p><span className="font-medium">Category:</span> {product.category.name || "—"}</p>
          <p><span className="font-medium">Price:</span> Rs. {product.price}</p>
          <p><span className="font-medium">Discount:</span> Rs. {product.discount || 0}</p>
          <p><span className="font-medium">Final Price:</span> Rs. {(product.price - product.discount)}</p>
          <p><span className="font-medium">Stock Available:</span> {product.stock} units</p>
          <p><span className="font-medium">Ratings:</span> {product.ratings}</p>
          <p><span className="font-medium">Reviews:</span> {product.reviewCount}</p>
          <p><span className="font-medium">{`Featured: ${product.isFeatured ? "Yes": "No"}`}</span></p>
        </div>
      )}
    </div>
  );
}

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    // API call: get products from DB
    const getProducts = async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/admin/all-products`)
            setProducts(response.data.products)
            console.log(response.data.products) // test
            setLoading(false)
        } catch(error) {
            setError(error.message)
            setLoading(false)
        }
    }
    getProducts()
  }, [])


  return (
    <>
    <AdminHeader/>
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="rounded-box border border-primary p-4 mb-6 text-center">
          <h1 className=" text-2xl font-bold">Products <span className="font-semibold">{`( ${products.length} items )`}</span> </h1>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <span>Error: {error}</span>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center text-base-content/50 py-20">No products found.</div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AdminProducts