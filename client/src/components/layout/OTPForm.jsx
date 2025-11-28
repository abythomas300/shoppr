import {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom'



const OTPForm = () => {

    const userEmail = useRef('')

    // Initialize useLocation() hook
    const location = useLocation()

    // extract user email from URL query parameter
    useEffect(()=>{
      const param = new URLSearchParams(location.search)
      userEmail.current = param.get('email')
    })
 
    // Initialize state for otp and error
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
  
    /// Initialize useNavigate() hook
    const navigate = useNavigate()
  
    // Initialize useRef variables to store particular input field DOM node
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)
    const inputRef6 = useRef(null)
    const inputsRef = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6]
  
    // Handle OTP input change
    const handleChange = (value, index) => {
      if (!/^[0-9]?$/.test(value)) return; // allows only digits
  
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");
  
      // Auto-focus next input
      if (value !== "" && index < 5) {
          inputsRef[index + 1].current.focus();
      }
    };
  
    // Handle backspace to move to previous input
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        const prev = inputsRef[index - 1];
        prev.current.focus();
      }
    };
  
    // Handle Submit
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const otpValue = otp.join("");
  
      if (otpValue.length < 6) {
        setError("Please enter the 6-digit one-time password.");
        return;
      }
  
      setError("");

      // API call
      try {
        const payload = {email: userEmail.current, otp: otpValue}
        const response = await axios.post('http://localhost:3000/auth/verify-otp', payload)
        if(response.status === 201) {
          alert(`${response.data.message}. Login to continue.`)
          navigate('/login')
        } 
      }catch(error){
        alert("An error occured. Try again later.")
        console.log("OTP Verification failed, reason: ", error)
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-[80vh] px-4">
        <div className="w-full max-w-md rounded-lg text-center">
          {/* Title */}
          <h2 className="text-lg font-medium mb-6 text-gray-800">
            One-Time Password
          </h2>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={inputsRef[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="
                    w-10 h-12 sm:w-12 sm:h-14 
                    text-center text-xl font-medium 
                    border border-gray-300 rounded-lg 
                    focus:outline-none focus:border-primary 
                    bg-white shadow-sm
                  "
                />
              ))}
            </div>
              <input type="email" value={userEmail.current} className='hidden'/>
            {/* Instruction */}
            <p className="text-sm text-gray-600" >
              Enter the one-time password (OTP) sent to your e-mail
            </p>
  
            {/* Error Message */}
            {error && (
              <p className="text-error text-sm font-medium mt-1">{error}</p>
            )}
  
            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary hover:outline-1 px-8 text-white mt-4"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default OTPForm;