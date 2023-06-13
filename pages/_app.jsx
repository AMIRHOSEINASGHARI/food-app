import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-montserrat">
      <Layout>
        <div className="max-w-[1200px] mx-auto min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}
