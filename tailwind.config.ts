import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'light-slate-blue': 'hsla(256, 72%, 46%, 1)',
        'primary-light-red': 'hsl(0, 100%, 67%)',
        'primary-orangey-yellow': 'hsl(39, 100%, 56%)',
        'primary-green-teal': 'hsl(166, 100%, 37%)',
        'primary-cobalt-blue': 'hsl(234, 85%, 45%)',
        'gradients-light-slate-blue-bg': 'hsl(252, 100%, 67%)',
        'gradients-light-royal-blue-bg': 'hsl(241, 81%, 54%)',
        'gradients-violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
        'gradients-persian-blue-circle': 'hsla(241, 72%, 46%, 0)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-pale-blue': 'hsl(221, 100%, 96%)',
        'neutral-light-lavender': 'hsl(241, 100%, 89%)',
        'neutral-dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      textColor: {
        'custom-color': 'hsla(256, 72%, 46%, 1)',
      },
    },
  },
  plugins: [],
}
export default config
