import PaymentSubtitle from "../PaymentSubtitle/PaymentSubtitle";
import { Paragraph } from "@/components/ui/ui";

const PaymentBlock = ({ title, text }) => {
  return (
    <article className="mb-[35px]">
      <PaymentSubtitle>{title}</PaymentSubtitle>
      <Paragraph defaultSize>{text}</Paragraph>
    </article>
  );
};

export default PaymentBlock;
