import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserProfile, setUserRole, setLoginSuccess } from '../features/auth/authSlice'

function LoginPage() {

    // initialize hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    const handleInputChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const initializeAuthSlice = (userDetails) =>{
        dispatch(setUserProfile(userDetails))
        dispatch(setUserRole(userDetails.role))
        dispatch(setLoginSuccess())
    }

    const handleFormSubmission = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/auth/login', formData)
            if(response.status === 200) {
                const {userInfo} = response.data
                alert(`Login successful, Welcome ${userInfo.username} !`)
                navigate('/')
                initializeAuthSlice(userInfo)
            } else {
                alert(`Login failed. ${response.data.message}`)
            }
        }catch(error){
            console.log("Login failed, reason: ", error)
        }
    }

    return (
    <>
        <Header />

        {/* Signup Form */}
        <div className="hero bg-base-10 min-h-screen mt-6 mb-6">

            <div className="hero-content flex-col lg:justify-items-start">

                {/* signup message */}
                <div className="text-center ">
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome Back!</h1> 
                    <p className="text-2xl md:text-3xl py-4">
                    Login to track your orders, get exclusive offers and many more.
                    </p>
                </div>
                
                {/* signup form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form>
                            <label className="floating-label">
                                <input type="text" placeholder="email" className="input" name="email" onChange={handleInputChange} value={formData.email}/>
                                <span>email</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="password" placeholder="password" className="input" name="password" onChange={handleInputChange} value={formData.password}/>
                                <span>password</span>
                            </label>
                            <hr className='mt-6 border-primary'/>
                           <button onClick={handleFormSubmission} className="btn btn-primary btn-ghost text-primary-content hover:text-base-100 mt-6 shadow-lg border-primary ">Login</button>
                            <div className="flex justify-center text-sm mt-4">
                                New to Shoppr? <a href="" className='text-primary link text-md ms-2'>Create an account</a>
                            </div>
                        </form>
                            
                    </div>
                </div>

            </div>

        </div>

        <Footer />
    </>
)}

export default LoginPage