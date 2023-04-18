const Title = ({ defaultSize, children, className }) => {
  return (
    <h2
      className={
        `font-title text-textDefault ${
          defaultSize ? "text-[32px] sm:text-[70px]" : ""
        }` + ` ${className}`
      }
    >
      {children}
    </h2>
  );
};

export default Title;
