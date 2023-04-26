import PaymentPage from "@/components/PaymentPage/Payment";
import { returnTop, returnBottom } from "@/utils/utils";
import Head from "next/head";

const Return = () => {
  return (
    <>
      <Head>
        <title>Thalia Studio - Обмен и возврат</title>
      </Head>
      <PaymentPage
        title="Обмен и возврат"
        top={returnTop}
        bottom={returnBottom}
      />
    </>
  );
};

export default Return;
