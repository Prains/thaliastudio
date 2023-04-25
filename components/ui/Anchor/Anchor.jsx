import Link from "next/link";

const NotALink = ({ children, className, onClick }) => {
  return (
    <div
      className={
        `flex items-center justify-center gap-[16px] text-textDefault border-b-2 border-black border-dashed cursor-pointer max-w-max text-sm font-text hover:border-solid hover:font-semibold active:text-textActive active:border-dashed` +
        ` ${className}`
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Anchor = ({ children, href, className, link = true, onClick }) => {
  if (link) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={
          `flex items-center justify-center gap-[16px] text-textDefault border-b-2 border-black border-dashed max-w-max text-sm font-text hover:border-solid hover:font-semibold active:text-textActive active:border-dashed` +
          ` ${className}`
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <NotALink className={className} onClick={onClick}>
      {children}
    </NotALink>
  );
};

export default Anchor;
