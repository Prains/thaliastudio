import Link from "next/link";

const SocialLink = ({ children, href, className }) => {
  return (
    <Link
      className={
        `flex items-center justify-center font-text text-sm hover:opacity-50` + ` ${className}`
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default SocialLink;
