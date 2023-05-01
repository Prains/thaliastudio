const Paragraph = ({ defaultSize, children, className, onClick }) => {
  return (
    <p
      className={
        `text-textDefault ${
          defaultSize ? "text-sm md:text-base" : ""
        } font-text` + ` ${className}`
      }
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
