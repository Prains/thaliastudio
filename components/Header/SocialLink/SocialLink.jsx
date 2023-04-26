import Link from "next/link";

const SocialLink = ({ children, href, className, onClick }) => {
  return (
    <Link
      className={
        `flex items-center justify-center font-text text-sm hover:opacity-50` +
        ` ${className}`
      }
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default SocialLink;
