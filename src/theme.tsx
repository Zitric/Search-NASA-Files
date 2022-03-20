import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const styles = {
  global: props => ({
    body: {
      marginLeft: `calc(100vw - 100%)`,
      marginRight: 0,
      backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'white' : 'black',
    },
  }),
}

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles,

  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
})

export default theme
