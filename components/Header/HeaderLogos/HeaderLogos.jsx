import Image from "next/image";
import { logoDesktop, logoMobile } from "@/images/Logo/Logo";
import Link from "next/link";
import { url } from "@/utils/url";

const HeaderLogos = () => {
  return (
    <>
      <Link href={url.index} className="md:hidden">
        <Image src={logoMobile} alt="Лого thaliastudio" className="md:hidden" />
      </Link>
      <Link href={url.index} className="hidden md:block">
        <Image
          src={logoDesktop}
          alt="Лого thaliastudio"
          className="hidden md:block"
        />
      </Link>
    </>
  );
};

export default HeaderLogos;
