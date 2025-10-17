function displaySignupPage(req, res) {
    res.send("Shoppr Signup Page ✅")
}

function registerUser(req, res) {
    res.send("This function will handle user registration ✅")
}

function displayLoginPage(req, res) {
    res.send("Shoppr Login Page ✅")
}

function loginUser(req, res) {
    res.send("This function will handle user login ✅")
}


// exporting module
module.exports = {
    displaySignupPage,
    displayLoginPage,
    registerUser,
    loginUser
}
