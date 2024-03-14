import { manrope } from "../../ui/fonts";
import { ClientesAliadosQuery } from "@/lib/graphQLRequest";

export const ClientesAliados = async () => {
  const data = await ClientesAliadosQuery();
  return (
    <div className="2xl:pt-[158px] 2xl:pb-[272px] lg:pt-[99px] lg:pb-[269px] px-4 pb-[85px] pt-0 lg:px-24 w-full h-auto ">
      <h1
        className={`${manrope.className} text-[40px] font-light antialiased lg:text-[48px] lg:uppercase 2xl:text-[64px] lg:mb-[125px]`}
        style={{ lineHeight: "50px" }}
      >
        Clientes <br className="lg:hidden" /> &{" "}
        <span className="font-bold">aliados</span>
      </h1>
      <div className="mt-[42px] grid grid-cols-4 lg:grid-cols-6 gap-4 lg:mt-[40px]">
        {data.map((item) => (
          <div
            key={item.clientesAliados.clientesaliado.mediaItemId}
            className="custom-shadow flex h-[32px] w-[76px] items-center justify-center rounded-[5px] bg-[#F0EEED] lg:h-[75px] lg:w-[194px] 2xl:w-[270px] 2xl:h-[105px] lg:mb-[53px] 2xl:mb-[74px]"
          >
            <img
              className="h-[24px] w-[62px] lg:h-[57px] lg:w-[143px] "
              src={item.clientesAliados.clientesaliado.mediaItemUrl}
              alt={item.clientesAliados.clientesaliado.altText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
ClientesAliadosQuery();
