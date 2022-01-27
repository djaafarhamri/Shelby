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
     'sfar':'#DA8A01',
     'gri':'#F2F2F2',
     'check':'#C4C4C4',
     'crevet':'#4D1915',
     
    },
    fontFamily: {
     'montserrat':['Montserrat', 'sans-serif'],
     'yellow-tail':['Yellowtail', 'cursive'],
     'Bebas':['Bebas Neue', 'cursive']
    },
   
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      gridTemplateColumns:{
        'products':' 1fr 2fr',

      },
    },
  },
  plugins: [],
}
