import CareOfThings from "@/components/Homepage/CareOfThings/CareOfThings";
import CatalogueHome from "@/components/Homepage/CatalogueHome/CatalogueHome";
import Main from "@/components/Homepage/Main/Main";
import { Natural } from "@/components/Homepage/Natural/Natural";
import { Soul } from "@/components/Homepage/Soul/Soul";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Thalia Studio - Главная Страница</title>
    </Head>
      <Main />
      <Soul />
      <CatalogueHome />
      <Natural />
      <CareOfThings />
    </>
  );
}
