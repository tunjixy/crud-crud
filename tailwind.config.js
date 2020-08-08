module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'outline-primary': '0 0 0 2px rgba(105, 218, 85, 0.5)',
        btn:
          '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
      },
      colors: {
        primary: '#69da55',
        darkblue: '#1b3c61',
        lightgray: '#cfdae1'
      },
      width: {
        custom: '25rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
