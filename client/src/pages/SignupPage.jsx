import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignupPage() {

    // useNavigate hook initialization
    const navigate = useNavigate()

    // setting up state
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    // changing state 
    const handleInputChange = (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleFormSubmission = async (event)=>{
        event.preventDefault()
        console.log("Form to be sent to server --->")
        console.log(formData)
        try{
            const response = await axios.post('http://localhost:3000/auth/signup', formData)
            if(response.status === 200) navigate('/')
        }catch(error){
            console.log("Error in registration, details: ", error)
        }
    }

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
                        <form action={handleFormSubmission}>
                            <div className="flex text-lg text-neutral underline mb-2">Access Credentials</div>
                            <label className="floating-label">
                                <input type="text" placeholder="username" className="input" name="username" onChange={handleInputChange} value={formData.username}/>
                                <span>username</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="password" placeholder="password" className="input " name="password" onChange={handleInputChange} value={formData.password }/>
                                <span>password</span>
                            </label>
                            <div className="flex text-lg text-neutral underline mt-6 mb-2">Personal Details</div>
                            <label className="floating-label ">
                                <input type="text" placeholder="First Name" className="input" name="firstName" onChange={handleInputChange} value={formData.firstName}/>
                                <span>First Name</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Last Name" className="input" name="lastName" onChange={handleInputChange} value={formData.lastName}/>
                                <span>Last Name</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Email" className="input" name="email" onChange={handleInputChange} value={formData.email }/>
                                <span>Email</span>
                            </label>
                            <label className="floating-label mt-4">
                                <input type="text" placeholder="Phone Number " className="input" name="phone" onChange={handleInputChange} value={formData.phone}/>
                                <span>Phone Number (with country code)</span>
                            </label>
                            <hr className='mt-6 border-primary'/>
                           <button onClick={handleFormSubmission} className="btn btn-primary btn-ghost text-primary-content hover:text-base-100 mt-6 shadow-lg border-primary ">Register</button>
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