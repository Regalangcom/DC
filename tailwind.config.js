/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      greeDC: "#a08942",
      textDC: "#222222",
      blackDC: "#000000",
      whiteDC: "#F2F2F2",
      whites: "#FFFFFF",
      grayDC: "#BDBDBD",
      navDC: "#787878",
      grayText : "#707070",
      testDC : "#8A8A8A"
    },
    extend: {
      fontFamily: {
        fontDC: ["Geist"],
      },
      fontSize: {
        "heading-1-dekstop": [
          "80px",
          {
            lineHeight: "36px",
            fontWeight: "500px",
          },
        ],
        "heading-2-dekstop": [
          "64px",
          {
            lineHeight : "24px",
            fontWeight : "600px"
          }
        ],
        "heading-3-dekstop": [],
        "heading-4-dekstop": [
          "32px",
          {
            lineHeight: "20px",
            fontWeight: "600px",
          },
        ],
        "heading-4-mobile": [],
        "heading-2-mobile": [],
        "heading-3-mobile": [],
      },
    },
  },
  plugins: [
    // daisyui,
  ],
};
