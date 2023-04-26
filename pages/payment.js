import PaymentPage from "@/components/PaymentPage/Payment";
import { paymentTop, paymentBottom } from "@/utils/utils";
import Head from "next/head";

const Payment = () => {
  return (
    <>
    <Head>
      <title>Thalia Studio - Оплата и доставка</title>
    </Head>
      <PaymentPage
        top={paymentTop}
        bottom={paymentBottom}
        title="Оплата и доставка"
      />
    </>
  );
};

export default Payment;
