import Link from "next/link";

const FooterTitle = ({ children }) => {
  return (
    <Link href={"/"}>
      <li className="font-text text-[#282828] font-semibold mb-[10px] text-sm">{children}</li>
    </Link>
  );
};

export default FooterTitle;
