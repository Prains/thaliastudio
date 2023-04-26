import Link from "next/link";

const FooterTitle = ({ children, href }) => {
  return (
    <li className="font-text text-[#282828] font-semibold mb-[10px] text-sm">
      <Link href={href}>{children} </Link>
    </li>
  );
};

export default FooterTitle;
