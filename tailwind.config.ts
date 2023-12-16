import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'sans': ['HyliaSerifBeta-Regular'],
        'display': ['The Wild Breath of Zelda'],
        'subtitle': ['Georgia']
      },
      colors: {
        women: {
          200: '#E49977',
          500: '#E85F3F',
          DEFAULT: '#E85F3F',
        },
        mahilao: {
          200: '#b66c7a',
          500: '#c51b3b',
          DEFAULT: '#c51b3b',
        },
        farming: {
          200: '#9CA59A',
          500: '#4D7F41',
          DEFAULT: '#4D7F41',
        },
        neutral: {
          50: '#F7F3F2',
          200: '#E5DCDA',
          500: '#968780',
          DEFAULT: '#968780',
          900: '#2a2625'
        },
        title: {
          DEFAULT: '#333333'
        }
      }
    }
  },
}
