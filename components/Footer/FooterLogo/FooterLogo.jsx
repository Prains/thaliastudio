import { burgerLogo } from "@/images/Logo/Logo";
import Image from "next/image";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <Link href={"/"} className="mt-[30px] mb-10">
      <Image src={burgerLogo} alt="логотип талия студио" />
    </Link>
  );
};

export default FooterLogo;
