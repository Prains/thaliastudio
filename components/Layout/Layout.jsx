import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center flex-col md:gap-36 gap-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
