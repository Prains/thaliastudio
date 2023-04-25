const Paragraph = ({ defaultSize, children, className}) => {
  return (
    <p
      className={
        `text-textDefault ${defaultSize ? "text-sm md:text-base" : ""} font-text` +
        ` ${className}`
      }
    >
      {children}
    </p>
  );
};

export default Paragraph;
