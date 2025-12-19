import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function HeaderProfileSection(props) {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const userDetails = useSelector(state => state.auth.userDetails)

    if(props.isLoggedIn){
        return (
            <>
                    <Link to="/profile">
                        <div className="flex w-30 gap-2 border btn btn-ghost p-2" >
                            <div tabIndex={0} role="button" className="btn btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img 
                                    src="https://images.unsplash.com/photo-1641423914598-288fee6cecf2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="user-profile-picture" />
                                </div>
                            </div>
                            <div className="indicator">
                                { isLoggedIn ? <span>{userDetails.firstName}</span> : <span>User</span> }
                                
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
                    <Link to='/login'>
                        <button className='btn btn-ghost bg-secondary text-secondary-content'>Login/Signup</button>
                    </Link>
                </div>
        </>
    )
}

export default HeaderProfileSection