import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            flex: {
                2: '2 2 0%',
                3: '3 3 0%',
                4: '4 4 0%',
            },
            colors: {
                primary: {
                    1: '#E6E3DF',
                    2: '#FFF8EF',
                    3: '#E4D7C6',
                    4: '#A89879',
                    5: '#2D1F13',
                },
                font:{
                    title: "#2D1F13"
                }
            },
            screens: {
                mobile: '320px',
                tablet: '640px',
                tabletLandscape: '768px',
                laptop: '1024px',
                desktop: '1280px',
                desktopWide: '1440px',
                desktopUltraWide: '1920px',
            },
        },
    },
    plugins: [],
};
export default config;
