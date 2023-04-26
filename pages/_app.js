import Layout from "@/components/Layout/Layout";
import Prealoder from "@/components/ui/Preloader/Preloader";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 700);
  }, []);

  return (
    <>
      {loading ? (
        <Prealoder />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
