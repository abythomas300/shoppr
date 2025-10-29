import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function SignupPage() {

    return (
    <>
        <Header />

        {/* Signup Form */}
        <div className="hero bg-base-10 min-h-screen mt-6 mb-6">

            <div className="hero-content flex-col lg:justify-items-start lg:flex-row-reverse">

                {/* signup message */}
                <div className="text-center lg:text-top">
                    <h1 className="text-4xl lg:text-5xl font-bold">Looks like you are new here!</h1> 
                    <p className="text-3xl lg:text-4xl py-4">
                    Sign up to get started
                    </p>
                </div>
                
                {/* signup form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form>
                            <div className="flex text-lg text-neutral underline mb-2">Access Credentials</div>
                            <label className="floating-label">
                                <input type="text" placeholder="username" className="input" />
                                <span>username</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="password" className="input " />
                                <span>password</span>
                            </label>
                            <div className="flex text-lg text-neutral underline mt-6 mb-2">Personal Details</div>
                            <label className="floating-label ">
                                <input type="text" placeholder="First Name" className="input" />
                                <span>First Name</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Last Name" className="input" />
                                <span>Last Name</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Email" className="input" />
                                <span>Email</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Phone Number " className="input" />
                                <span>Phone Number (with country code)</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Address Label (e.g,. home, office)" className="input" />
                                <span>Address Label (eg: home, office)</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="House Name" className="input" />
                                <span>House Name</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Street" className="input" />
                                <span>Street</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="City" className="input" />
                                <span>City</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="State" className="input" />
                                <span>State</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Pincode" className="input" />
                                <span>Pincode</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Country" className="input" />
                                <span>Country</span>
                            </label>
                            <hr className='mt-6 border-primary'/>
                           <button className="btn btn-primary btn-ghost text-primary-content hover:text-base-100 mt-6 shadow-lg border-primary ">Login</button>
                            <div className="flex justify-center text-sm mt-4">
                                Already have an account? <a href="" className='text-primary link text-md ms-2'>Log in</a>
                            </div>
                        </form>
                            
                    </div>
                </div>

            </div>

        </div>

        <Footer />
    </>
)}

export default SignupPage