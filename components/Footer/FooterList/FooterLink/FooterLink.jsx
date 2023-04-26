import Link from "next/link";

const FooterLink = ({ children, href }) => {
  return (
    <li className="font-text text-[#282828] text-sm">
      <Link href={href}>{children} </Link>
    </li>
  );
};

export default FooterLink;
