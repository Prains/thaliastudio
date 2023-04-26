import { arrow } from "@/images/Mainpage/Natural/natural";
import { Paragraph, Title, Button } from "../ui/ui";
import { noveltysBag } from "@/images/NoveltysPage/noveltyspage";
import Image from "next/image";
import { NoveltyPriceAndLink } from "./NoveltyPriceAndLink/NoveltyPriceAndLink";
import { NoveltyDescription } from "./NoveltyDescription/NoveltyDescription";

const NoveltysPage = () => {
    return (
        <section className="flex flex-col mt-[30px] mb-[80px] w-[87%] lg:w-[69%] lg:mb-[150px]">
            <Title className="text-[24px] text-center mb-[30px] lg:text-[70px] lg:mb-[70px]">Новинки</Title>
            <article className="lg:flex lg:items-center lg:justify-between">
                <Image
                    className="w-[220px] mx-auto mb-[20px] lg:w-[430px] lg:mb-0 lg:mx-0"
                    src={noveltysBag}
                    alt="Сумочка из джута"
                />
                <div>
                    <NoveltyDescription/>
                    <NoveltyPriceAndLink/>
                    <Button 
                        href="/" 
                        className="mx-auto"
                    >
                        <Paragraph>Перейти в каталог</Paragraph>
                        <Image 
                            src={arrow} 
                            alt="стрелочка для перехода в каталог" 
                        />
                    </Button>
                </div>   
            </article>
        </section>
    )
}
export {NoveltysPage}