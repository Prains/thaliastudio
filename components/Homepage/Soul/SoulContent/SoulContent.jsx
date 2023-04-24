import { SoulContentTop } from "./SoulContentTop/SoulContentTop";
import { SoulContentCenter } from "./SoulContentCenter/SoulContentCenter";
import { SoulContentBottom } from "./SoulContentBottom/SoulContentBottom";

const SoulContent = () => {
    return ( 
        <article className="flex flex-col mx-auto items-center justify-items-center lg:h-[845px]">
            <SoulContentTop/>
            <SoulContentCenter/>
            <SoulContentBottom/>
        </article>
    )
}
export {SoulContent}