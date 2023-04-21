import Link from "next/link";

const FooterLink = ({ children }) => {
  return (
    <Link href={"/"}>
      <li className="font-text text-[#282828] text-sm">{children}</li>
    </Link>
  );
};

export default FooterLink;
