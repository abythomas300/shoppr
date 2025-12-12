import React from "react";
import {useSelector } from "react-redux";

function TopDealsCards() {

        const products = useSelector(state => state.products.items)

        return (
          <section className="px-6 py-10 bg-base-200"> 
            <h2 className="text-2xl font-bold text-start mb-8">Recently Added</h2>
      
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {products.length > 0 ? (
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
                        <button className="btn btn-primary btn-sm text-sm ">
                          Add to Cart
                        </button>
                        <button className="btn btn-primary btn-sm text-sm">
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