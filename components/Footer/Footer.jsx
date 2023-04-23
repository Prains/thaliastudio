import FooterLogo from "./FooterLogo/FooterLogo";
import FooterList from "./FooterList/FooterList";
import Link from "next/link";
import SocialList from "./SocialList/SocialList";

const Footer = () => {
  return (
    <footer className="w-full bg-[#D8F8E3] rounded-t-3xl self-end">
      <div className="w-[88%] md:w-[69%] my-0 mx-auto flex items-center justify-center flex-col lg:flex-row lg:gap-24">
        <FooterLogo />
        <FooterList />
        <div className="flex items-center justify-center flex-col gap-[15px] mt-10 mb-8 lg:items-end">
          <Link href={"tel:+79161421453"}>7 916 142 14 53</Link>
          <SocialList />
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
