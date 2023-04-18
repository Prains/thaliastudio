import Image from "next/image";
import { logoDesktop, logoMobile } from "@/images/Logo/Logo";

const HeaderLogos = () => {
  return (
    <>
      <Image src={logoMobile} alt="Лого thaliastudio" className="md:hidden" />
      <Image
        src={logoDesktop}
        alt="Лого thaliastudio"
        className="hidden md:block"
      />
    </>
  );
};

export default HeaderLogos;
