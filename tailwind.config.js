/** @type {import('tailwindcss').Config} */

const config = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                remix: {
                    black: "#121212",
                    blue: "#3defe9",
                },
            },
            textDecorationThickness: {
                3: "3px",
            },
            gridTemplateRows: {
                layout: "auto 1fr auto",
            },
            textUnderlineOffset: {
                6: "6px",
            },
        },
    },
    plugins: [],
}

module.exports = config
