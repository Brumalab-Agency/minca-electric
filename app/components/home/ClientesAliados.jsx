import { manrope } from "../../ui/fonts";
import { ClientesAliadosQuery } from "@/lib/graphQLRequest";
import { InfiniteCardsRight } from "../aceternity/InfiniteCardsRight";
import { InfiniteCardsLeft } from "../aceternity/InfiniteCardsLeft";

export const ClientesAliados = async () => {
  const data = await ClientesAliadosQuery();
  return (
    <div className="2xl:pt-[158px] 2xl:pb-[272px] lg:pt-[99px] lg:pb-[269px]  pb-[85px] pt-0 lg:px-[100px] w-full h-auto px-4">
      <h1
        className={`${manrope.className} text-[40px] font-light  lg:text-[48px] lg:uppercase 2xl:text-[64px] lg:mb-[125px]`}
        style={{ lineHeight: "50px" }}
      >
        Clientes <br className="lg:hidden" /> &{" "}
        <span className="font-bold">aliados</span>
      </h1>
      <InfiniteCardsRight/>
      <InfiniteCardsLeft/>
      <InfiniteCardsRight/>
    </div>
  );
};
ClientesAliadosQuery();
