
function Header() {
    return (

        <div className="navbar bg-primary shadow-lg gap-4 sticky top-0 sm:p-2 md:p-4">

            {/* Logo */}
            <div className="flex">
                <a className="btn btn-ghost sm:text-3xl sm:p-0 hover:bg-secondary hover:text-secondary-content" href="#">Shoppr</a>
            </div>

            <div className="flex w-full justify-between">
                {/* Search Bar*/}
                <div className="flex flex-2">
                    <input type="text" placeholder="🔍︎ search for products, brands or anything" className="text-neutral italic input rounded-2xl focus:outline-secondary-content" />
                </div>
                <div className="flex gap-4">
                <div className="hidden md:flex flex-1 gap-4 justify-end items-center">
                    {/* Shopping Icons */}
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2 ">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span>Cart</span>
                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span>Orders</span>
                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <span>Wishlist</span>
                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                        </div>
                    </div>
                    
                </div>


                {/* Profile Icon and Dropdown */}
                <div className="flex   dropdown dropdown-end justify-end gap-4">
                    {/* Profile Icon */}
                    <div tabIndex={0} role="button" className="btn btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <img 
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  // dynamic
                            alt="user-profile-picture" />
                        </div>
                    </div>
                    {/* Shoppig options Dropdown */}
                    <ul tabIndex="-1" className=" menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-10 w-100 p-2 shadow ">
                        <li className="text-6xl">
                            <a className="md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Orders</span> <span className="badge">New</span> </a>     {/*dymanic*/}
                            <a className="md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Cart</span> <span className="badge">New</span> </a>       {/*dymanic*/}
                            <a className="md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Whishlist</span> <span className="badge">New</span> </a>  {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Profile</span> <span className="badge">New</span> </a>    {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Settings</span> <span className="badge">New</span> </a>   {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-2"> <span className="text-secondary-content">Logout</span> <span className="badge">New</span> </a>     {/*dymanic*/}
                        </li>
                    </ul>
                </div>
                </div>

            </div>
        </div>

    )
}

export default Header

