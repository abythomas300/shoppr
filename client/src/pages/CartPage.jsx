import React, { useState, useMemo } from "react";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const IconBack = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const IconInfo = ({ className = "w-4 h-4 inline-block ml-1" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M9 9h1v5H9V9z"/><path d="M10 4a1 1 0 100 2 1 1 0 000-2z"/><path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zM10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"/></svg>
);
const IconShield = ({ className = "w-5 h-5 inline-block mr-2" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 3v5c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z"/></svg>
);
const IconStar = ({ className = "w-4 h-4 inline-block" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.447 2.555c-.785.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.55 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z"/></svg>
);
const IconTruck = ({ className = "w-4 h-4 inline-block mr-1" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h13v13H3z"/><path d="M16 8h4l1 2v6h-3a2 2 0 01-4 0H9a2 2 0 01-4 0H2V8h1"/></svg>
);

// Sample Data
const initialCart = [
  {
    id: "p1",
    name: "SuperSonic 4K OLED Smart TV with UltraClear Display and Dolby Vision",
    image: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1326",
    price:  52490,
    buyAt: 54990, // strike price
    rating: 4.7,
    reviews: 1240,
    color: "Matte Black",
    qty: 1,
    limitedTimeOffer: true,
    expressDelivery: "Tomorrow, Nov 4", 
    emi: { text: "Or Pay ₹5482.5/month" },
  },
  {
    id: "p2",
    name: "Casio Ediface SM-990 Smart Watch",
    image: "https://images.unsplash.com/photo-1750776100861-30c172651817?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=844",
    price: 7599, 
    buyAt: 8500, // strike price
    rating: 4.7,
    reviews: 1240,
    color: "Matte Black",
    qty: 1,
    limitedTimeOffer: true,
    expressDelivery: "Tomorrow, Apr 11", 
    emi: { text: "Or Pay ₹1266.5/month" },
  },
];

// Constants
const PROTECT_FEE_PER_ITEM = 149; // Sample Data
const TRUST_MESSAGE = "Secure payments • 100% genuine products • Easy returns";

// helper utility function for INR formatting
const formatINR = (num) =>
  typeof num === "number" ? num.toLocaleString("en-IN", { maximumFractionDigits: 0 }) : num;

// Hooks
function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [saved, setSaved] = useState([]); // saved for later
  const [location, setLocation] = useState({ place: "Home", pincode: "682001" });
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [priceCollapsed, setPriceCollapsed] = useState(false);
  const [insuranceAdded, setInsuranceAdded] = useState(false);
//   const [selectedQtys, setSelectedQtys] = useState(
//     initialCart.reduce((acc, p) => ({ ...acc, [p.id]: p.qty }), {})
//   );

  // Cart operations

//   const handleQtyChange = (productId, qty) => {
//     setSelectedQtys((s) => ({ ...s, [productId]: qty }));
//     setCart((prev) => prev.map((p) => (p.id === productId ? { ...p, qty } : p)));
//   };

  const handleSaveForLater = (productId) => {
    const item = cart.find((c) => c.id === productId);
    if (!item) return;
    setSaved((s) => [...s, item]);
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleRemove = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleBuyNow = (productId) => {
    // placeholder for direct checkout - in production route to checkout with that item
    const item = cart.find((c) => c.id === productId);
    alert(`Proceeding to checkout for: ${item?.name || productId}`);
  };

  const handleChangeLocation = (newPlace, newPin) => {
    setLocation({ place: newPlace, pincode: newPin });
    setShowLocationModal(false);
  };

  const handleToggleInsurance = () => {
    setInsuranceAdded((s) => !s);
  };

  const subtotal = useMemo(() => {
    return cart.reduce((sum, p) => sum + p.price * (p.qty || 1), 0);
  }, [cart]);

  const protectFee = useMemo(() => {
    const base = cart.length * PROTECT_FEE_PER_ITEM;
    return insuranceAdded ? base : 0;
  }, [cart, insuranceAdded]);

  const total = subtotal + protectFee;

 // Render helper component
  const ProductCard = ({ product }) => {
    return (
      <div className="card bg-base-10 shadow-sm ">
        <div className="card-body p-3 md:p-4">
          <div className="flex gap-3 items-center" >
            {/* Image */}
            <div className="flex min-w-[200px] min-h-[200px] w-[200px] h-[200px] ">
                <img
                  src={product.image}
                  alt={product.name}
                  className= "object-cover rounded-md"
                />
            </div>

            {/* Details */}
            <div className="flex-1 gap-2">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-lg sm:text-base line-clamp-4">{product.name}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold">₹{formatINR(product.price)}</div>
                  <div className="text-xs text-muted line-through">₹{formatINR(product.buyAt)}</div>
                </div>
              </div>

              <div className="mt-2 text-sm text-muted">Color: <span className="text-base-content ml-1">{product.color}</span></div>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="flex items-center">
                  <IconStar className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                  <span className="text-xs text-muted ml-1">({product.reviews})</span>
                </span>
                <span className="badge badge-outline badge-sm ml-2 bg-success text-success-content">Shoppr Assured</span>
              </div>

              <div className="mt-3 flex items-center gap-3 flex-wrap">
                {/* Quantity selector */}
                <select
                  aria-label="Quantity"
                  value={product.qty}
                //   onChange={(e) => handleQtyChange(product.id, Number(e.target.value))}
                  className="select select-bordered select-sm w-24"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      Qty: {n}
                    </option>
                  ))}
                </select>

                {/* Price details small */}
                <div className="text-sm">
                  <div>
                    <span className="text-xs text-muted">Protect Promise</span>
                    <span className="ml-1 text-sm">₹{formatINR(PROTECT_FEE_PER_ITEM)}</span>
                    <IconInfo />
                  </div>
                </div>

                {/* EMI */}
                <div className="text-sm text-muted">
                  {product.emi?.text}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between flex-wrap">
                <div className="flex gap-2 text-xs">
                  <button className="btn btn-ghost hover:bg-success hover:text-success-content border-success" onClick={() => handleSaveForLater(product.id)}>Save for later</button>
                  <button className="btn btn-ghost hover:bg-error hover:text-error-content border-error" onClick={() => handleRemove(product.id)}>Remove</button>
                </div>

                <div className="flex items-center gap-2 mt-1 ">
                  <button className="btn btn-warning" onClick={() => handleBuyNow(product.id)}>Buy this now</button>
                </div>
              </div>

              <div className="mt-3 text-xs text-success flex items-center gap-2">
                <span className="badge text-success badge-sm"><IconTruck />Express Delivery</span>
                <span className="ml-2">{product.expressDelivery}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
   <>
    <Header />
    <div className="min-h-screen bg-base-200">
      {/* MyCart Header (sticky) */}
      <header className="bg-base-100 shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <button className="btn btn-ghost btn-square btn-sm">
            <IconBack />
          </button>
          <h1 className="flex-1 text-center text-lg sm:text-xl font-semibold">My Cart</h1>
        </div>
      </header>

      {/* Category: Delivery bar under header (sticky) */}
      <div className="w-full mt-2 border-primary">
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-base-100 px-4 py-2 border-amber-200">
          <div className="text-sm">Deliver to: <span className="font-medium">{location.place} - {location.pincode}</span></div>
          <button className="link link-primary text-sm" onClick={() => setShowLocationModal(true)}>Change</button>
        </div>
      </div>

      {/* Main content - mobile first single column, lg -> two-column */}
      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left column (lg: span 8) */}
        <section className="lg:col-span-8 space-y-4">
          {/* Cart items */}
          <div className="space-y-3">
            {cart.length > 0 ? (
              cart.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <div className="card bg-base-100 shadow-sm p-6 text-center">Your cart is empty.</div>
            )}

            {/* Insurance offer card (mobile collapsed, desktop expanded) */}
            <div className="card bg-primary text-white p-4 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">Protect your order</h3>
                  <p className="text-sm opacity-90 mt-1">Add Protect Promise for accidental damage & extended warranty.</p>
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="toggle toggle-sm" checked={insuranceAdded} onChange={handleToggleInsurance} />
                    <span className="text-sm">Add Protect ({cart.length} item{cart.length>1?'s':''})</span>
                  </label>
                  <a className="link link-light text-sm" href="#know-more" onClick={(e)=>{e.preventDefault(); alert('Show Know More modal or route')}}>Know More</a>
                </div>
              </div>
            </div>

            {/* Saved for later */}
            {saved.length > 0 && (
              <div className="card bg-base-100 shadow-sm p-4">
                <h3 className="font-semibold mb-2">Saved for later</h3>
                <div className="space-y-2">
                  {saved.map((s) => (
                    <div key={s.id} className="flex items-center gap-3">
                      <img src={s.image} alt={s.name} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{s.name}</div>
                        <div className="text-xs text-muted">₹{formatINR(s.price)}</div>
                      </div>
                      <div>
                        <button
                          className="btn btn-xs"
                          onClick={() => {
                            // move back to cart
                            setCart((c) => [...c, { ...s, qty: 1 }]);
                            setSaved((sv) => sv.filter((x) => x.id !== s.id));
                          }}
                        >
                          Move to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Right column (price details) - on mobile this appears below; on lg it's sticky right column */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky top-28 space-y-4">
            {/* Price Details Card */}
            <div className="card bg-base-100 shadow">
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">PRICE DETAILS</h3>
                  <button className="btn btn-ghost btn-xs" onClick={() => setPriceCollapsed((s) => !s)}>
                    {priceCollapsed ? "Expand" : "Collapse"}
                  </button>
                </div>

                {!priceCollapsed && (
                  <div className="mt-3 space-y-3">
                    <div className="flex justify-between text-sm">
                      <div>Price ({cart.reduce((a,c)=>a+(c.qty||1),0)} item{cart.length>1?'s':''}) <IconInfo /></div>
                      <div>₹{formatINR(subtotal)}</div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>Protect Promise Fee <IconInfo /></div>
                      <div>₹{formatINR(protectFee)}</div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>Convenience Fee <IconInfo /></div>
                      <div className="text-success">FREE</div>
                    </div>

                    <div className="divider my-1"></div>

                    <div className="flex justify-between font-bold text-lg">
                      <div>Total Amount</div>
                      <div>₹{formatINR(total)}</div>
                    </div>

                    <div className="mt-3 text-sm">
                      <div className="flex items-center text-xs text-muted">
                        <IconShield />
                        <div>
                          <div className="font-medium">Secure Checkout</div>
                          <div className="text-xs">{TRUST_MESSAGE}</div>
                        </div>
                      </div>
                    </div>

                    {/* On desktop show Place Order here */}
                    <div className="mt-3 hidden lg:block">
                      <button className="btn btn-warning btn-block">PLACE ORDER</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Promotional purple gradient banner */}
            <div className="rounded-lg p-4 bg-primary text-white shadow-md">
              <h4 className="font-semibold">Offers for you</h4>
              <p className="text-sm mt-1">Use code <span className="font-bold">ABY300</span> to get extra discount. T&Cs apply.</p>
            </div>

            {/* On tablet/mobile, nothing else. Desktop shows insurance detail expanded - decorative */}
            <div className="hidden lg:block card bg-base-100 shadow p-4">
              <h4 className="font-semibold">Insurance & Protection</h4>
              <p className="text-sm mt-2 text-muted">
                Add Protect Promise to cover accidental damage, spills and extended warranty for selected products. This includes 1-year accidental/damage coverage; claims processed within 48 hours.
              </p>
              <a className="link link-primary mt-3 inline-block" href="#learn-more" onClick={(e)=>{e.preventDefault(); alert('Learn more about insurance')}}>Know More</a>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom bar for mobile & tablet */}
      <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t p-3 shadow-lg lg:hidden">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-sm">Total <IconInfo /></div>
            <div className="font-bold text-lg">₹{formatINR(total)}</div>
          </div>
          <div>
            <button className="btn btn-warning" onClick={() => alert("Proceed to place order")}>Place order</button>
          </div>
        </div>
      </div>

      {/* Location modal (simple) */}
      {showLocationModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className="bg-base-100 rounded-lg p-4 w-11/12 max-w-md">
            <h3 className="font-semibold text-lg">Change delivery location</h3>
            <div className="mt-3 space-y-2">
              <label className="block">
                <span className="text-sm">Place name</span>
                <input className="input input-bordered w-full mt-1" defaultValue={location.place} id="loc-place" />
              </label>
              <label className="block">
                <span className="text-sm">Pincode</span>
                <input className="input input-bordered w-full mt-1" defaultValue={location.pincode} id="loc-pin" />
              </label>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button className="btn btn-ghost" onClick={() => setShowLocationModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => {
                const p = document.getElementById("loc-place").value || "Home";
                const pin = document.getElementById("loc-pin").value || "000000";
                handleChangeLocation(p, pin);
              }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
   </>
  );
}


export default CartPage
