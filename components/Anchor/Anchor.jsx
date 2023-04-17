import Link from "next/link";

const Anchor = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={
        `flex items-center justify-center gap-[16px] text-textDefault border-b-2 border-black border-dashed max-w-max text-sm font-text hover:border-solid hover:font-semibold active:text-textActive active:border-dashed` +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
};

export default Anchor;
