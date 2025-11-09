import ToggleSwitch from "../components/common/ToggleSwitch"
import UserIconSolid from "../components/common/UserIconSolid"
import Header from "../components/layout/Header"
import Footer from '../components/layout/Footer'

function UserProfile() {
    return(
        <>
            <Header/>
            {/* Main wrapper */}
            <div className="max-w-6xl mx-auto px-4 py-3">
                {/* profile page wrapper */}
                <div className=" border border-base-300 p-4">
                    <form>
                        {/* access credentials section*/}
                        <div className="flex flex-col p-4">
                            <div className="flex flex-row">
                                <fieldset className="fieldset text-lg border p-4 border-primary rounded-xl">
                                    <legend className="fieldset-legend">Access Information</legend>
                                    <div className="flex gap-4 justify-baseline">
                                        <span className="text-lg">Firstname</span>
                                        <input type="text" className="input" placeholder="" name="firstname" value="old firstname"/>
                                        <span className="text-lg">Lastname</span>
                                        <input type="text" className="input" placeholder="" name="lastname" value="old lastname"/>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {/* personal information section*/}
                        <div className="flex p-4">
                            <div className="flex flex-row">
                                <fieldset className="fieldset text-lg border p-4 border-primary rounded-xl">
                                    <legend className="fieldset-legend">Personal Information</legend>
                                    <div className="flex gap-4">
                                        <span className="text-lg">Username</span>
                                        <input type="text" className="input" placeholder="" name="username" value="old username"/>
                                        <span className="text-lg">Password</span>
                                        <input type="password" className="input" placeholder="123456" name="password"/>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-lg">Email</span>
                                        <input type="text" className="input" placeholder="" name="username" value="old email"/>
                                        <span className="text-lg">Password</span>
                                        <input type="password" className="input" placeholder="" name="password" value="old password"/>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {/* address section section*/}
                            <div className="p-4">
                                <fieldset className="fieldset text-lg border p-4 border-primary rounded-xl">
                                    <legend className="fieldset-legend">Address Information</legend>
                                    <span className="text-lg">Address Label</span>
                                    <input type="text" className="input" placeholder="home" name="addressLabel" value="old lastname"/>
                                    <span className="text-lg">Housename</span>
                                    <input type="text" className="input" placeholder="" name="housename" value="old housename"/>
                                    <span className="text-lg">Street </span>
                                    <input type="text" className="input" placeholder="" name="street" value="street name"/>
                                    <span className="text-lg">City</span>
                                    <input type="text" className="input" placeholder="" name="city" value="city name"/>
                                    <span className="text-lg">State</span>
                                    <input type="text" className="input" placeholder="" name="state" value="state name"/>
                                    <span className="text-lg">Country</span>
                                    <input type="text" className="input" placeholder="" name="state" value="country"/>
                                    <span className="text-lg">Pincode</span>
                                    <input type="number" className="input" placeholder="" name="pincode" value="old pincode"/>
                                </fieldset>
                            </div>

                        {/* preferences section */}
                        <div>
                            <div className="p-4">
                                <fieldset className="fieldset text-lg border p-4 border-primary rounded-xl">
                                   <legend className="fieldset-legend">Preferences and Roles</legend>
                                    <div className="flex gap-4">
                                        <span className="text-sm">Two Factor Authentication</span>
                                        <ToggleSwitch/>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-sm">Role</span>
                                        <div className="flex">
                                            <UserIconSolid/>
                                            <span className="text-sm ms-1">User</span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {/* buttons section */}
                        <div className="grid grid-cols-12 justify-center p-4">
                            <button className="col-span-12 md:col-span-6 w-full btn bg-primary btn-md lg:btn-lg xl:btn-xl">Edit Details</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default UserProfile