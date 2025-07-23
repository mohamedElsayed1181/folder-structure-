import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: "class", 
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // هنا تحط custom theme زي الألوان أو الخطوط
    //   colors: {
    //     primary: '#1E40AF',
    //   },
    },
  },
  plugins: [],
}

export default config
