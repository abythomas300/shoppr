import axios from "axios";

// global axios initialization
axios.defaults.withCredentials = true  // send cookie with all API calls

export default axios