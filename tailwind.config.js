/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/v2/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0a192f', // Deep navy
                    800: '#112240', // Lighter navy for cards
                },
                cyan: {
                    400: '#22d3ee', // Bright cyan
                    500: '#06b6d4',
                },
                // V2 Specific Colors (Normal Computing Aesthetic)
                v2: {
                    red: {
                        DEFAULT: '#FF3333', // Vivid Red
                        dim: 'rgba(255, 51, 51, 0.1)',
                    },
                    black: '#1A1A1A',
                    white: '#F5F5F5', // Off-white/Paper
                    gray: {
                        light: '#E5E5E5',
                        medium: '#A3A3A3',
                        dark: '#404040',
                    }
                },
                // V3 Specific Colors (Peasy Futuristic)
                v3: {
                    navy: {
                        DEFAULT: '#0a1128',
                        deep: '#050914',
                    },
                    cyan: {
                        DEFAULT: '#00e5ff',
                        dim: 'rgba(0, 229, 255, 0.1)',
                        glow: '0 0 20px rgba(0, 229, 255, 0.5)',
                    },
                    black: '#000000',
                    white: '#ffffff',
                    gray: '#cbd5e1',
                },
                // V4 Swiss Design
                swiss: {
                    white: '#ffffff',
                    black: '#000000',
                    cyan: '#00e5ff',
                }
            },
            fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace'],
                serif: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)",
                'swiss-grid': 'linear-gradient(to right, #00e5ff 1px, transparent 1px), linear-gradient(to bottom, #00e5ff 1px, transparent 1px)',
            }
        },
    },
    plugins: [],
}
