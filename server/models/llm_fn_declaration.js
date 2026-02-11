// Schema definition for supporting function calling feature of LLM API
const genailib = require('@google/genai')
const Type = genailib.Type

const getOrdersFunctionDeclaration = {
    name: 'get_order',
    description: 'Get the details of all the orders the user has previously made'
}

const getCartFunctionDeclaration = {
    name: 'get_cart',
    description: 'Get details of products user added in cart'
}

const getProductFunctionDeclaration = {
    name: 'get_product',
    description: 'Get details of particular products in the application'
}

const getShippingFunctionDeclaration = {
    name: 'get_shipping',
    description: 'Get shipping details of ordered product'
}

module.exports = {
    getOrdersFunctionDeclaration,
    getCartFunctionDeclaration,
    getProductFunctionDeclaration,
    getShippingFunctionDeclaration
}