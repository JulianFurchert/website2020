import '../styles.css'
import { OverlayProvider } from "@react-aria/overlays";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <OverlayProvider>
      <Component {...pageProps} />
    </OverlayProvider>
  )
}