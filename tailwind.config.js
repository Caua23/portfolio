/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx}"
    ],
    theme:{
        extend:{
            colors: {
                'Vargas': '#c70601'
            },

            fontFamily: {
                'Dev': ['Playwrite IN']
            },
        },
    },
    plugins: [],
};