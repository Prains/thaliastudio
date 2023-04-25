import PaymentPage from "@/components/PaymentPage/Payment";
import { returnTop, returnBottom } from "@/utils/utils";

const Return = () => {
  return (
    <PaymentPage
      title="Обмен и возврат"
      top={returnTop}
      bottom={returnBottom}
    />
  );
};

export default Return;
