import { Paragraph } from "@/components/ui/ui";

const NoveltyDescription = () => {
    return (
        <article>
            <Paragraph className="text-[20px] text-center lg:text-[24px] lg:text-left">Сумочка из джута</Paragraph>
            <article className="text-[14px] mt-[20px] mx-auto text-left w-[280px] lg:mt-[40px]">
                <Paragraph className="mb-[10px] lg:text-[16px]">Описание:</Paragraph>
                <Paragraph className="lg:text-[16px]">
                    Сумка из джута в бежевых и зеленых оттенках 
                    с кожанными ремешками. Подходит к любым 
                    повседневным образам элегантно дополняя их.
                    Вмещает в себя как небольшие необходимые вещи, 
                    так и объемные предметы, например, ноутбук.
                </Paragraph>
            </article>
        </article>
    )
}
export {NoveltyDescription}