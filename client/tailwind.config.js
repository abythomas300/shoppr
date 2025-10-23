/** @type {import('tailwindcss').Config} */

// @ts-ignore
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
};