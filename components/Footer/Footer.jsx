import FooterLogo from "./FooterLogo/FooterLogo";
import FooterList from "./FooterList/FooterList";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#D8F8E3] rounded-t-3xl">
      <div className="w-[88%] my-0 mx-auto flex items-center justify-center flex-col">
        <FooterLogo />
        <FooterList />
        <div>
          <Link href={"tel:+79161421453"}>7 916 142 14 53</Link>
          <nav>
            <Link href={"/"}>
              <Image />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
