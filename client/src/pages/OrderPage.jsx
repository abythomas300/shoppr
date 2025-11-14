import React, { useEffect, useMemo, useState, useRef } from "react";
import PropTypes from "prop-types";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import PageHeader from "../components/layout/PageHeader"

const IconBack = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const IconSearch = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    <circle cx="11" cy="11" r="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFilter = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M6 12h12M10 18h4" />
  </svg>
);

const IconStar = ({ filled = false, className = "w-5 h-5" }) => {
  if (filled) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
      
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>

  );
};

const Dot = ({ status }) => {
  const map = {
    Delivered: "bg-green-500",
    Shipped: "bg-yellow-400",
    Cancelled: "bg-red-500",
    Returned: "bg-red-500",
    Processing: "bg-blue-500",
  };
  const cls = map[status] || "bg-gray-300";
  return <span className={`inline-block w-3 h-3 rounded-full ${cls}`} aria-hidden />;
};


function SearchBar({ value, onChange, onSubmit, isLarge }) {
  const inputRef = useRef(null);

  // handle Enter key: call onSubmit for large screens, otherwise simply focuses behavior
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isLarge) {
        onSubmit();
      }
    }
  };

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="orders-search">Search orders</label>
      <div className="flex items-center gap-2">
        <div className="flex items-center flex-1 bg-white border rounded-md px-3 py-2 shadow-sm">
          <IconSearch className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            id="orders-search"
            className="ml-3 w-full outline-none text-sm"
            placeholder={isLarge ? "Search your orders here" : "Search your order here"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Search orders"
          />
        </div>

        {isLarge ? (
          <button
            className="btn btn-primary px-4 py-2"
            onClick={onSubmit}
            aria-label="Search Orders"
          >
            <IconSearch className="w-4 h-4 mr-2" />
            Search Orders
          </button>
        ) : (
          <FilterButton />
        )}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLarge: PropTypes.bool.isRequired,
};

/**
 * FilterButton (visible on XS/SM/MD)
 */
function FilterButton({ onClick }) {
  return (
    <button
      className="btn btn-ghost btn-square"
      onClick={onClick}
      aria-label="Open filters"
    >
      <IconFilter className="w-5 h-5" />
    </button>
  );
}

FilterButton.propTypes = {
  onClick: PropTypes.func,
};

FilterButton.defaultProps = {
  onClick: undefined,
};

/**
 * StarRating - used in both display & input mode
 * - if editable: clicking sets rating & keyboard accessible
 */
function StarRating({ value = 0, editable = false, onChange, sizeClass = "w-5 h-5" }) {
  const stars = [1, 2, 3, 4, 5];

  const handleKey = (e, star) => {
    if (!editable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(star);
    }
    if (e.key === "ArrowLeft" && star > 1) {
      onChange(Math.max(1, star - 1));
    }
    if (e.key === "ArrowRight" && star < 5) {
      onChange(Math.min(5, star + 1));
    }
  };

  return (
    <div className="flex items-center gap-1" role={editable ? "radiogroup" : undefined} aria-label="Star rating">
      {stars.map((s) => {
        const filled = s <= value;
        return (
          <button
            key={s}
            type="button"
            onClick={() => editable && onChange(s)}
            onKeyDown={(e) => handleKey(e, s)}
            className={`p-1 ${editable ? "focus:outline-none focus:ring-2 focus:ring-primary rounded" : ""}`}
            aria-pressed={filled}
            aria-label={`${s} star`}
            role={editable ? "radio" : undefined}
            tabIndex={editable ? 0 : -1}
          >
            <IconStar filled={filled} className={sizeClass} />
          </button>
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  value: PropTypes.number,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  sizeClass: PropTypes.string,
};

StarRating.defaultProps = {
  value: 0,
  editable: false,
  onChange: () => {},
  sizeClass: "w-5 h-5",
};

/**
 * OrderCard - adapts layout with lg breakpoint
 */
function OrderCard({
  order,
  onCardClick,
//   onOpenRating,
//   onNavigate,
  isLg,
//   index,
}) {
  const displayDate = order.deliveryYear ? `${order.deliveryDate}, ${order.deliveryYear}` : order.deliveryDate;

  // mobile layout differences are handled via utility classes
  return (
    <article
      className={`relative group bg-white border rounded-md overflow-hidden shadow-sm transition-transform transform hover:scale-[1.01] focus-within:shadow-lg`}
      role="button"
      tabIndex={0}
      onClick={() => onCardClick(order)}
      onKeyDown={(e) => { if (e.key === "Enter") onCardClick(order); }}
      aria-label={`Order ${order.productName}`}
    >
      {/* Desktop: grid with 4 columns */}
      <div className={`w-full p-4 ${isLg ? "grid grid-cols-12 gap-4 items-center" : "flex gap-3 "}`}>
        {/* Column 1: image + details (lg: col-span-3) */}
        <div className={isLg ? "col-span-6 flex gap-4 items-center" : "flex gap-3"}>
          <img
            src={order.productImage}
            alt={order.productName}
            className=" w-[100px] h:[100px] md:w-[200px] md:h-[200px] object-cover rounded-md"
            loading="lazy"
          />
          <div className={`${isLg ? "" : "flex-1"}`}>
            <div className={`${isLg ? "font-semibold text-base text-gray-900" : "font-medium text-sm text-gray-900"} `}>
              {order.productName}
            </div>
            {order.author && (
              <div className="text-xs text-gray-500 mt-1">{order.author}</div>
            )}
            {order.variant && (
              <div className="text-xs text-gray-500 mt-1">{order.variant}</div>
            )}
          </div>
        </div>

        {/* Column 2: Price (lg: col-span-2) */}
        {isLg ? (
          <div className="col-span-3 text-sm font-medium text-gray-900">
            ₹{order.price}
          </div>
        ) : (
          <div className="hidden" />
        )}

        {/* Column 3: Delivery status & rating (lg: col-span-3) */}
        <div className={`${isLg ? "col-span-3" : ""}`}>
          <div className="flex items-center gap-2">
            <Dot status={order.deliveryStatus} />
            <div className="text-sm font-semibold text-gray-900">
              {order.deliveryStatus === "Delivered" ? `Delivered on ${displayDate}` : order.deliveryStatus}
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {order.deliveryStatus === "Delivered" ? "Your item has been delivered" : "Order status"}
          </div>

          <div className="mt-3 flex items-center gap-3">
            {order.isRated ? (
              <div className="flex items-center gap-2">
                <StarRating value={order.userRating || 0} editable={false} />
                <span className="text-sm text-gray-500">Your rating</span>
              </div>
            ) : (
              <div className="flex items-center flex-col ">
                <div className="flex w-full justify-start ">
                    <span className="text-sm text-gray-500 mx-1">Rate this product</span>
                </div>
                <StarRating value={0} editable={false} />
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onOpenRating: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  isLg: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

/* ---------------------------
   Modals: Filters & Rating
   --------------------------- */

/**
 * FiltersModal - simple demo modal for mobile filters
 */
function FiltersModal({ open, onClose, onApply, currentFilters }) {
  const [local, setLocal] = useState(currentFilters || { status: "All", dateFrom: "", dateTo: "", minPrice: "", maxPrice: "" });

  useEffect(() => setLocal(currentFilters || { status: "All", dateFrom: "", dateTo: "", minPrice: "", maxPrice: "" }), [currentFilters, open]);

  const apply = () => {
    onApply(local);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="bg-white rounded-t-lg md:rounded-lg p-4 w-full md:max-w-md z-60">
        <h3 className="font-semibold text-lg">Filters</h3>
        <div className="mt-3 space-y-3">
          <label className="block">
            <span className="text-sm">Order status</span>
            <select className="select select-bordered w-full mt-1" value={local.status} onChange={(e) => setLocal({ ...local, status: e.target.value })}>
              <option>All</option>
              <option>Delivered</option>
              <option>Shipped</option>
              <option>Processing</option>
              <option>Cancelled</option>
            </select>
          </label>

          <div className="grid grid-cols-2 gap-2">
            <label className="block">
              <span className="text-sm">From</span>
              <input type="date" className="input input-bordered w-full mt-1" value={local.dateFrom} onChange={(e) => setLocal({ ...local, dateFrom: e.target.value })} />
            </label>
            <label className="block">
              <span className="text-sm">To</span>
              <input type="date" className="input input-bordered w-full mt-1" value={local.dateTo} onChange={(e) => setLocal({ ...local, dateTo: e.target.value })} />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input type="number" placeholder="Min price" className="input input-bordered w-full" value={local.minPrice} onChange={(e) => setLocal({ ...local, minPrice: e.target.value })} />
            <input type="number" placeholder="Max price" className="input input-bordered w-full" value={local.maxPrice} onChange={(e) => setLocal({ ...local, maxPrice: e.target.value })} />
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={apply}>Apply</button>
        </div>
      </div>
    </div>
  );
}

FiltersModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  currentFilters: PropTypes.object,
};

/**
 * RatingModal - shows 5-star input and optional text area
 */
function RatingModal({ open, onClose, onSubmit, order }) {
  const [rating, setRating] = useState(order?.userRating || 0);
  const [review, setReview] = useState("");
  useEffect(() => {
    setRating(order?.userRating || 0);
    setReview("");
  }, [order, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="bg-white rounded-lg p-4 z-60 w-11/12 max-w-md">
        <h3 className="font-semibold text-lg">Rate & Review</h3>
        <p className="text-sm text-gray-500 mt-1">{order?.productName}</p>

        <div className="mt-4">
          <StarRating value={rating} editable={true} onChange={setRating} />
        </div>

        <textarea
          className="textarea textarea-bordered w-full mt-4"
          rows="4"
          placeholder="Write an optional review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="mt-4 flex justify-end gap-2">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              onSubmit({ rating, review });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

RatingModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  order: PropTypes.object,
};

/* ---------------------------
   Main OrdersPage component
   --------------------------- */

function OrdersPage({ orders }) {
  // internal copy of orders for manipulations (ratings)
  const [list, setList] = useState(() => (orders || []).map((o) => ({ ...o })));
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedQuery, setAppliedQuery] = useState(""); // applied search on lg or after debounce
  const [isLarge, setIsLarge] = useState(() => window.matchMedia && window.matchMedia("(min-width: 1024px)").matches);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ status: "All", dateFrom: "", dateTo: "", minPrice: "", maxPrice: "" });
  const [ratingModal, setRatingModal] = useState({ open: false, order: null });
  const [loading, setLoading] = useState(false); // demo loading skeleton
  const debounceRef = useRef(null);

  // watch viewport change to toggle isLarge behavior
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsLarge(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // reflect props -> state when orders prop changes
  useEffect(() => {
    setList(orders.map((o) => ({ ...o })));
  }, [orders]);

  // Debounced live search for non-large screens
  useEffect(() => {
    if (isLarge) return; // skip debounce on large - uses explicit submit
    // clear previous
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setAppliedQuery(searchQuery.trim());
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery, isLarge]);

  // apply search on large screens when user clicks search or presses Enter
  const applySearchLarge = () => {
    setAppliedQuery(searchQuery.trim());
  };

  // Filter + search combination - memoized list for performance
  const filtered = useMemo(() => {
    let out = list.slice();

    // Search by productName, author, variant (case-insensitive)
    if (appliedQuery) {
      const q = appliedQuery.toLowerCase();
      out = out.filter((o) => {
        return (
          (o.productName || "").toLowerCase().includes(q) ||
          (o.author || "").toLowerCase().includes(q) ||
          (o.variant || "").toLowerCase().includes(q)
        );
      });
    }

    // Apply filters
    if (filters.status && filters.status !== "All") {
      out = out.filter((o) => o.deliveryStatus === filters.status);
    }
    if (filters.minPrice) {
      out = out.filter((o) => Number(o.price) >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      out = out.filter((o) => Number(o.price) <= Number(filters.maxPrice));
    }
    // dateFrom / dateTo filtering would require parsing - omitted for brevity; placeholder
    return out;
  }, [list, appliedQuery, filters]);

  // loading skeleton simulation (optional)
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350); // micro-skeleton
    return () => clearTimeout(t);
  }, [appliedQuery, filters]);

  /* ---------------------------
     Handlers
     --------------------------- */

//   const handleOpenFilters = () => setFiltersOpen(true);
  const handleApplyFilters = (newFilters) => setFilters(newFilters);

  const handleOpenRating = (order) => {
    setRatingModal({ open: true, order });
  };

//   const handleSubmitRating = ({ rating, review }) => {
//     const id = ratingModal.order?.id;
//     if (!id) return;
//     setList((prev) => prev.map((o) => (o.id === id ? { ...o, isRated: true, userRating: rating } : o)));
//     setRatingModal({ open: false, order: null });
//     // optionally store review text or send to server
//   };

  const handleCardClick = (order) => {
    // Placeholder - user will integrate React Router
    // e.g., navigate(`/orders/${order.id}`)
    // But for accessibility, ensure keyboard Enter works (handled in OrderCard)
    // Here we simply console.log
    console.log("Open order:", order.id);
  };

  /* ---------------------------
     Render helpers
     --------------------------- */

  const renderSkeletons = (count = 3) => {
    return Array.from({ length: count }).map((_, i) => (
      <div key={i} className="animate-pulse bg-white border rounded-md p-4 mb-3">
        <div className="flex gap-3">
          <div className="bg-gray-200 w-[70px] h-[90px] rounded-md" />
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    ));
  };

  /* ---------------------------
     Main render
     --------------------------- */

  return (
    <>
    <Header/>
    <PageHeader pageName={"My Orders"}/>

    <div className="min-h-screen ">
      {/* Page padding responsive */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-4">
        {/* Header - mobile shows back + title, lg removes title per spec */}
        {/* Search & Filters */}
        <div className="mb-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={applySearchLarge}
            isLarge={isLarge}
          />
        </div>

        {/* Filters active tag */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {filters && filters.status && filters.status !== "All" && (
              <div className="badge badge-outline">{filters.status}</div>
            )}
            {(filters.minPrice || filters.maxPrice) && (
              <div className="badge badge-outline">
                Price: {filters.minPrice || "0"} - {filters.maxPrice || "∞"}
              </div>
            )}
          </div>
        </div>

        {/* Order list */}
        <section aria-live="polite">
          {loading ? (
            renderSkeletons(4)
          ) : filtered.length === 0 ? (
            <div className="bg-white border rounded-md p-6 text-center">
              <div className="text-gray-700 font-semibold text-lg">No orders match your search</div>
              <p className="text-sm text-gray-500 mt-2">Try clearing filters or searching for something else.</p>
              <div className="mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchQuery("");
                    setAppliedQuery("");
                    setFilters({ status: "All", dateFrom: "", dateTo: "", minPrice: "", maxPrice: "" });
                  }}
                >
                  Clear search
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((o, idx) => (
                <OrderCard
                  key={o.id}
                  order={o}
                  onCardClick={handleCardClick}
                  onOpenRating={handleOpenRating}
                  isLg={isLarge}
                  index={idx}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Filters modal for mobile/tablet */}
      <FiltersModal open={filtersOpen} onClose={() => setFiltersOpen(false)} onApply={handleApplyFilters} currentFilters={filters} />

      {/* Rating modal */}
      <RatingModal
        open={ratingModal.open}
        onClose={() => setRatingModal({ open: false, order: null })}
        // onSubmit={handleSubmitRating}
        order={ratingModal.order}
      />

      {/* Floating filter button (XS/SM/MD) - bottom right for quick access */}
      {!isLarge && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            className="btn btn-primary btn-circle shadow-lg"
            onClick={() => setFiltersOpen(true)}
            aria-label="Open filters"
            title="Filters"
          >
            <IconFilter />
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

OrdersPage.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      author: PropTypes.string,
      variant: PropTypes.string,
      deliveryDate: PropTypes.string.isRequired,
      deliveryYear: PropTypes.string,
      price: PropTypes.number.isRequired,
      deliveryStatus: PropTypes.string.isRequired,
      isRated: PropTypes.bool,
      userRating: PropTypes.number,
    })
  ).isRequired,
};

export default OrdersPage
