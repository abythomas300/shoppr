const dotenv = require('dotenv')
const genaiLib = require('@google/genai')
const fnDeclarations = require('../models/llm_fn_declaration')
const {getOrderForLLM} = require('./orderController')
const { getProductsForLLM } = require('./productController')
const { getCartForLLM } = require('./cartController')

let userId = null

// init configs for API call
const config = {
    tools: [{
        functionDeclarations: [
            fnDeclarations.getOrdersFunctionDeclaration,
            fnDeclarations.getCartFunctionDeclaration,
            fnDeclarations.getProductFunctionDeclaration,
            fnDeclarations.getShippingFunctionDeclaration
        ]
    }]
}

// create new instance from GoogleGenAI constructor
const ai = new genaiLib.GoogleGenAI({apiKey: process.env.GEMINI_API_KEY})

const contents = []

// Functions Description
// 1. askGemini() - chat init 
// 2. handleResponse() - Differentiate b/w fn_call response & text_only response
// 3. executeFunction() - Handle fn_call operations

async function askGemini(userPrompt, user_id) {
    try {
        userId = user_id

        // create a new part and push it to contents
        contents.push({
            role: 'user',
            parts: [{text: userPrompt}]
        })

        // API call
        const llmResponse = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: contents,
            config: config
        })

        const final_response = await handleResponse(llmResponse)

        return final_response

    } catch(error) {
        console.log("Error in chat init, Error code: ", error.status)
        return "Something went wrong, try again later."
    }
}

async function handleResponse(response) {
    try {
        // Extract candidate and parts from response
        const candidate = response.candidates[0] // since there is only one candidate by default
        const parts = candidate.content.parts

        // Add the llm response's parts to global 'contents' array
        contents.push({role: 'model', parts: parts})

        // Identify whether response demands function call or not
        for(const part of parts) {

            // When function call is demanded
            if(part.functionCall) {
                // Send response to executeFunction() method
                const queryResult = await executeFunctionCall(part.functionCall.name)
                // pushing function response part(role and queryResult) result to contents
                const function_response_part = {
                    name: part.functionCall.name,
                    response: {
                        queryResult
                    }
                }
                contents.push({role: 'user', parts: [{functionResponse: function_response_part}] })

                const followUpResponse = await ai.models.generateContent({
                    model: 'gemini-3-flash-preview',
                    contents: contents,
                    config: config
                })

                return await handleResponse(followUpResponse)
            } 

            // When response is text-only (no function call)
            if(part.text) {
                console.log("GEMINI: ", part.text)
                return part.text
            }

            throw new Error("Unknow response type.")
        }

    } catch(error) {
        console.log("Error in handling response, reason: ",error)
        return 
    }
}

async function executeFunctionCall(fnName) {
    try {
        switch(fnName) {
            case('get_order'): {
                console.log("Execting get_order()...") // test
                const queryResult = await getOrderForLLM(userId)
                return queryResult
            }
            case('get_cart'): {
                console.log("Executing get_cart()...") // test
                const queryResult = await getCartForLLM(userId)
                return queryResult
            }
            case('get_shipping'): {
                console.log("Executing get_order() method...") // test
            }
            case('get_products'): {
                console.log("Executing get_products()...")
                const queryResult = await getProductsForLLM()
                return queryResult
            }
            default: {
                throw new Error("Compatible pre-defined function not found.")
            }
        }

    } catch(error) {
        console.log("Error in executing function call, reason: ", error)
        return 
    }
}

module.exports = {
    askGemini
}