import { createTheme } from '@mui/material';

const MUITheme = createTheme({
  typography: {
    fontFamily: 'inherit',
    fontSize: 12,
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: '#94D080',
    },
  },
  components: {
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default MUITheme;
