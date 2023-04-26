import SocialLink from "../../SocialLink/SocialLink";

const BurgerLink = ({ href, shown, children }) => {
  return (
    <SocialLink
      href={href}
      onClick={() => {
        shown(false);
      }}
    >
      {children}
    </SocialLink>
  );
};

export default BurgerLink;
