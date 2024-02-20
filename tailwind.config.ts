import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                
            },
            fontFamily: {
                primary: ['Rubik', 'sans-serif'],
                secondary: ['Lato', 'sans-serif']
            },
            fontSize: {
                28: '28px'
            },
            colors: {
                primary: {
                    lilac: '#7978D9'
                },
                gray: {
                    484848: '#484848',
                    555: '#555'
                },
                gradientCustom: {
                    'start': '#05EDE3',
                    'end': '#645FFB',
                },
                
            }
        },

        screens: {
            sm: '320px',
            md: '481px',
            lg: '769px',
            xl: '1025px'
        }
    },
    plugins: []
};
export default config;
