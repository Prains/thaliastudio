import { Title } from "@/components/ui/ui";

const PaymentSubtitle = ({ children }) => {
  return (
    <Title className="text-2xl font-title text-textDefault md:text-3xl mb-5">
      {children}
    </Title>
  );
};

export default PaymentSubtitle;
