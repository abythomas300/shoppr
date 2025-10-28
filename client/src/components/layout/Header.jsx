function Header() {
    return (

        <div className="navbar bg-primary shadow-lg gap-4 sticky top-0 sm:p-2">
            <div className="flex">
                <a className="btn btn-ghost sm:text-3xl sm:p-0 hover:bg-secondary hover:text-secondary-content" href="#">Shoppr</a>
            </div>
            <div className="flex w-full  justify-between">
                <div className="flex-1">
                    <input type="text" placeholder="🔍︎ search for products, brands or anything" className="text-neutral italic input rounded-2xl focus:outline-secondary-content" />
                </div>
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-circle avatar ">
                        <div className="w-10 rounded-full">
                            <img 
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  // dynamic
                            alt="user-profile-picture" />
                        </div>
                    </div>
                    <ul tabIndex="-1" className=" menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-100 p-2 shadow ">
                        <li className="text-6xl">
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Orders</span> <span className="badge">New</span> </a>     {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Cart</span> <span className="badge">New</span> </a>       {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Whishlist</span> <span className="badge">New</span> </a>  {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Profile</span> <span className="badge">New</span> </a>    {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Settings</span> <span className="badge">New</span> </a>   {/*dymanic*/}
                            <a className="justify-between text-lg hover:bg-primary border border-accent mb-1"> <span className="text-secondary-content">Logout</span> <span className="badge">New</span> </a>     {/*dymanic*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Header