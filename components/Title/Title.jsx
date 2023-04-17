const Title = ({ children, className }) => {
  return (
    <h2 className={"font-title text-[32px] text-textDefault sm:text-[70px]" + ` ${className}`}>{children}</h2>
  );
};

export default Title;
