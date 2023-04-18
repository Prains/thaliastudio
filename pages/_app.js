import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex items-center justify-center flex-col">
      <Component {...pageProps} />
    </main>
  );
}
