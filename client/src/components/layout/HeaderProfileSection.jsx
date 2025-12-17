import {Link} from 'react-router-dom'

function HeaderProfileSection(props) {
    if(props.isLoggedIn){
        return (
            <>
                    <Link to="/profile">
                        <div className="flex w-30 gap-2 border btn btn-ghost p-2" >
                            <div tabIndex={0} role="button" className="btn btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img 
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  // dynamic
                                    alt="user-profile-picture" />
                                </div>
                            </div>
                            <div className="indicator">
                                <span className='text-xl italic'>Alice</span>
                            </div>
                        </div>
                    </Link>
                    {/* Shoppig options Dropdown */}
                    <ul tabIndex="-1" className=" md:hidden menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-10 w-100 p-2 shadow ">
                        <li className="text-6xl">
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/orders'><span className="text-secondary-content">Orders</span></Link>
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/cart'><span className="text-secondary-content">Cart</span></Link>
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/wishlist'><span className="text-secondary-content">Wishlist</span></Link>
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/profile'><span className="text-secondary-content">Profile</span></Link>
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/settings'><span className="text-secondary-content">Settings</span></Link>
                            <Link className='md:hidden justify-between text-lg hover:bg-primary border border-accent mb-2' to='/logout'><span className="text-secondary-content">Logout</span></Link>
                            </li>
                    </ul>
            </>
        )
    } 
    return(
        <>
                {/* {Proile Icon and Login Prompt - When logged out} */}
                <div className="flex">
                    <button className='btn btn-ghost bg-secondary text-secondary-content'>Login/Signup</button>
                </div>
        </>
    )
}

export default HeaderProfileSection