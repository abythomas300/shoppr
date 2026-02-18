import {Link} from 'react-router-dom'
import HeaderProfileSection from './HeaderProfileSection'

function AdminHeader() {

    return (

        <div className="navbar bg-primary shadow-lg gap-4 sticky top-0 z-50 sm:p-2 md:p-4">

            {/* Logo */}
            <div className="flex">
                <Link to='/' className='btn btn-ghost text-4xl p-4 hover:bg-secondary hover:text-primary'>Shoppr</Link>
            </div>

            <div className="flex w-full justify-between">
                {/* Search Bar*/}
                <div className="flex flex-2">
                    <input type="text" placeholder="🔍︎ search for products, brands or anything" className="text-neutral italic input rounded-2xl focus:outline-secondary-content" />
                </div>
                <div className="flex gap-4">
                <div className="hidden md:flex flex-1 gap-4 justify-end items-center">
                    {/* Shopping Icons */}
                    <Link to="/cart">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2 ">
                            <div className="indicator">
                            <span>Products</span>
                                {/* <span className="badge badge-sm indicator-item">8</span> */}
                            </div>
                        </div>
                    </Link>
                    <Link to="/orders">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                            <div className="indicator">
                            <span>Users</span>
                                {/* <span className="badge badge-sm indicator-item">8</span> */}
                            </div>
                        </div>
                    </Link>
                    <Link to="/wishlist">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                            <div className="indicator">
                            <span>Status</span>
                                {/* <span className="badge badge-sm indicator-item">8</span> */}
                            </div>
                        </div>
                    </Link>
                    
                    <HeaderProfileSection></HeaderProfileSection>
                </div>
            </div>

            </div>
        </div>

    )
}

export default AdminHeader