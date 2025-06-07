// pages/_app.tsx
import '../styles/globals.css'; // <-- Only if you use Tailwind or global CSS!
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

