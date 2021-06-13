import '../styles/globals.css';
import 'tailwindcss/dist/tailwind.css';
import { ThemeProvider } from 'styled-components';
import firebase from 'firebase';
import { firebaseConfig } from '../../firebase.config';

const theme = {
  primary: '#A3AAAE;',
  secondary: '#000000',
  accent: '#F9F6EF',
  corner: '37px',
  transparent: 'transparent',
  gray: '#DFE4EA',
  lightGray: '#EFF2F6',
  dark: '#18214D',
  shadow: '0px 3px 10px #00000012',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
