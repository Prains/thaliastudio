import { useEffect } from "react";

const Popup = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <section className="bg-black/80 w-full h-full fixed top-0 left-0 right-0 flex items-center justify-center">
      {children}
    </section>
  );
};

export default Popup;
