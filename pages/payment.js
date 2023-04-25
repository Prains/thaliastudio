import PaymentPage from "@/components/PaymentPage/Payment";
import { paymentTop, paymentBottom } from "@/utils/utils";

const Payment = () => {
  return (
    <PaymentPage
      top={paymentTop}
      bottom={paymentBottom}
      title="Оплата и доставка"
    />
  );
};

export default Payment;
