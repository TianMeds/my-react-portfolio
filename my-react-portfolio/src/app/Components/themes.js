import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000', // Black color for light mode
    },
    background: {
      default: '#fff', // White background for light mode
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff', // White color for dark mode
    },
    background: {
      default: '#333', // Dark background for dark mode
    },
  },
});

export { lightTheme, darkTheme };
