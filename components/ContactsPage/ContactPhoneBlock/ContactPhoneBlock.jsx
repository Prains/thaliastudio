import Link from "next/link";

export const ContactPhoneBlock = () => {
  return (
    <div className="mb-[80px] xl:mb-[150px]">
      <p className="text-[14px] leading-[120%] text-center mb-[20px] xl:mb-[30px]">
        Или свяжитесь с нами по номеру телефона
      </p>
      <Link
        href="tel:+79161421453"
        className="block mx-auto font-bold font-text text-center text-[24px] leading-[150%]"
      >
        7 916 142 14 53
      </Link>
    </div>
  );
};
