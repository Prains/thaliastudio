import { burgerLogo } from "@/images/Logo/Logo";
import Image from "next/image";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <Link
      href={"/"}
      className="mt-[30px] mb-10 lg:m-0 lg:mt-[10px] lg:self-start lg:w-60"
    >
      <Image src={burgerLogo} alt="логотип талия студио" className="w-20" />
    </Link>
  );
};

export default FooterLogo;
