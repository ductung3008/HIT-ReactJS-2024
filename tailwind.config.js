/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'group-hover:block',
    'group-hover/lv2:block',
    'group-hover:top-full',
    'group-hover/lv2:left-full',
    'group-hover:opacity-100',
    'group-hover/lv2:opacity-100',
    'group-hover:visible',
    'group-hover/lv2:visible'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner: "linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%), url(../src/assets/images/banner-bg.jpg)"
      },
    },
  },
  plugins: [],
}

