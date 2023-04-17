import Link from "next/link";

const Button = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={
        "bg-buttonGreen w-[220px] rounded-full h-[50px] font-text text-sm sm:w-[260px] sm:h-[60px] sm:text-lg flex items-center justify-center gap-[15px] hover:drop-shadow-button active:drop-shadow-buttonActive text-textDefault" +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
};

export default Button;
