import Link from "next/link";

const NotALink = ({ children, className }) => {
  return (
    <p
      className={
        `flex items-center justify-center gap-[16px] text-textDefault border-b-2 border-black border-dashed max-w-max text-sm font-text hover:border-solid hover:font-semibold active:text-textActive active:border-dashed` +
        ` ${className}`
      }
    >
      {children}
    </p>
  );
};

const Anchor = ({ children, href, className, link }) => {
  if (link) {
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
  }

  return <NotALink className={className}>{children}</NotALink>;
};

export default Anchor;
