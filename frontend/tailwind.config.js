module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
     'royal':'#061701' ,
     'palete':' rgb(248 250 252)', 
     'black':'rgb(0 0 0)' ,
     'gray':'#E9E9E9',
    },
    fontFamily: {
     'montserrat':['Montserrat', 'sans-serif'],
     'yellow-tail':['Yellowtail', 'cursive'],
    },
   
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [],
}
