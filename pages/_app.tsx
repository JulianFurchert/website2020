import React from 'react';
import { OverlayProvider } from "@react-aria/overlays";
import { darkThemeClass } from '../stitches.config';
import useDarkMode from 'use-dark-mode';
import Layout from '../composites/Layout';
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = React.useState(false);
  const darkMode = useDarkMode(false, {
    classNameDark: darkThemeClass,
    classNameLight: 'theme-default',
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Dark theme hack to prevent flash
  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <OverlayProvider>
      <Layout toggleTheme={() =>  darkMode.toggle()}>
        <Component {...pageProps} />
      </Layout>
    </OverlayProvider>
  )
}