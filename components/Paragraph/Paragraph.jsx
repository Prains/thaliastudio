const Paragraph = ({ children, className }) => {
  return <p className={'text-textDefault text-sm font-text' + ` ${className}`}>{children}</p>;
};

export default Paragraph;
