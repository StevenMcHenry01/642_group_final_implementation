import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    frequent: {
      black: '#1c181d',
      darkGrey: '#262626',
      white: '#FFFFFF',
      eggshell: '#f1f1e1',
      grey: grey[400]
    },
    primary: {
      main: '#27AAE1',
    },
    secondary: {
      main: '#f0544f',
    },
    tertiary: {
      main: '#ffd166',
    },
    error: {
      main: '#ff1744',
    },
  },
})
