import { manrope, ubuntu } from "@/ui/fonts";
import Link from "next/link";
import Image from "next/image";

const FinanciaminetoComponent = () => {
  return (
    <div className="FinanciaminetoComponent lg.mt-[72px] p-4 lg:mb-[200px] lg:px-[100px]">
      {/* Addi */}
      <div className="grid grid-cols-1 justify-between lg:grid-cols-2">
        <div className="flex flex-col items-center justify-start">
          <div>
            <h2
              className={` ${manrope.className} mt-[30px] text-[25px] font-extrabold lg:mt-0 lg:text-[32px] lg:leading-[34px]`}
            >
              Addi
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              Cuotas que se adaptan a ti.
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Con Addi, puedes pagar tus compras a cuotas con crédito o débito a
              través de PSE. Ten en cuenta que algunas tiendas solo ofrecen la
              opción de pago a crédito con nosotros. Consulta cuáles ofrecen
              nuestras dos opciones de pago en la app. 
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Compra desde nuestra app, en tiendas físicas o en el sitio web de
              nuestros aliados. Busca lo que quieres comprar. Escoge Addi al
              momento de pagar. Si estás en una tienda física, dile al vendedor
              que quieres pagar tu compra con Addi. Elige entre las opciones de
              pag que Addi tiene disponibles.
            </p>
          </div>
          <div className="mt-6 flex w-full items-center justify-start gap-6 pb-[10px] lg:mt-8">
            <Link
              href="https://co.addi.com/"
              className="grid h-[40px] w-[200px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web Addi
            </Link>
          </div>
        </div>
        {/* Imagen */}
        <div className="card order-first h-[500px] w-full justify-self-end rounded-[10px] bg-[#F0F1EB] lg:order-last lg:h-[610px] lg:w-[95%] 2xl:w-[610px]">
          <div className="grid h-full w-full place-items-center">
            <Image
              placeholder="empty"
              alt="logo minca"
              className="Image log MINCA h-[300px] w-auto lg:h-[400px]"
              src="/financiamiento/addi.png"
              width={850}
              height={508}
            />
            <hr className="w-[60%] border-2 border-black" />
            <img
              className="-mt-10"
              src="/financiamiento/addi01.png"
              alt="addi"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* RappiCard */}
      <div className="mt-[46px] grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-start">
          <div>
            <h2
              className={` ${manrope.className} text-[25px] font-extrabold lg:text-[32px] lg:leading-[34px]`}
            >
              RappiCard
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              0% de interes a 12 cuotas
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Obtener tu RappiCard es fácil y rápido, sin trámites ni papeleos complicados. ¡Solo te tomará 1 minuto o menos! Solicítala directamente desde la App de Rappi con solo tu cédula de ciudadanía o extranjería. 
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Realizaremos una evaluación de riesgo basada en tu perfil para aprobar o rechazar la solicitud, y te notificaremos a través de la App para completar el proceso.
            </p>
          </div>
          <div className="mt-6 flex w-full items-center justify-start gap-6 pb-[50px] lg:mt-8">
            <Link
              href="https://rappicard.co/"
              className="grid h-[40px] w-[200px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web RappiCard
            </Link>
          </div>
        </div>
        {/* Imagen */}
        <div className="card order-first h-[500px] w-full justify-self-end rounded-[10px] bg-[#F0F1EB] lg:order-last lg:h-[610px] lg:w-[97%] 2xl:w-[610px]">
          <div className="grid h-full w-full place-items-center">
            <Image
              placeholder="empty"
              alt="logo minca"
              className="Image log MINCA h-[300px] w-auto lg:h-[400px]"
              src="/financiamiento/rapppicard01.png"
              width={850}
              height={508}
            />
            <hr className="w-[60%] border-2 border-black" />
            <img
              className="-mt-10"
              src="/financiamiento/rapppicard.png"
              alt="rappicard"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* Sistecrédito */}
       <div className="mt-[46px] grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start justify-start">
          <div>
            <h2
              className={` ${manrope.className} text-[25px] font-extrabold lg:text-[32px] lg:leading-[34px]`}
            >
              Sistecrédito
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              Solicita tu crédito y conoce tu límite en menos de 5 minutos. 
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Elige el plazo de pago que prefieras. 
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Paga fácilmente desde cualquier lugar gracias a nuestros convenios nacionales con Gana, Efecty y Bancolombia.
            </p>
          </div>
          <div className="mt-6 flex w-full items-center justify-start gap-6 pb-[50px] lg:mt-8">
            <Link
              href="https://www.sistecredito.com/"
              className="grid h-[40px] w-[200px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web Sistecrédito
            </Link>
          </div>
        </div>
        {/* Imagen */}
        <div className="card order-first h-[500px] w-full justify-self-end rounded-[10px] bg-[#F0F1EB] lg:order-last lg:h-[610px] lg:w-[97%] 2xl:w-[610px]">
          <div className="grid h-full w-full place-items-center">
            <Image
              placeholder="empty"
              alt="logo minca"
              className="Image log MINCA h-[300px] w-auto lg:h-[400px]"
              src="/financiamiento/sistecredito.png"
              width={850}
              height={508}
            />
            <hr className="w-[60%] border-2 border-black" />
            <img
              className="-mt-10"
              src="/financiamiento/sistecreditologo.png"
              alt="rappicard"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* Vanti listo */}
      <div className="mt-[46px] grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start justify-start">
          <div>
            <h2
              className={` ${manrope.className} text-[25px] font-extrabold lg:text-[32px] lg:leading-[34px]`}
            >
              Vanti listo
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              Compra sin complicaciones financieras
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Disfruta de un cupo preaprobado y listo para utilizar en la compra de tu artículo deseado.
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Tú eliges el número de cuotas que mejor se ajuste a tu presupuesto para pagar el crédito.
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Nos encargamos de simplificar el proceso, evitándote el papeleo y trámites típicos de una financiación convencional.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 pb-[50px] mt-8">
            <Link
              href="https://www.grupovanti.com/vantilisto/inicio"
              className="grid h-[40px] w-[211px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web Vanti listo
            </Link>
          </div>
        </div>
        {/* Imagen */}
        <div className="card order-first h-[500px] w-full justify-self-end rounded-[10px] bg-[#F0F1EB] lg:order-last lg:h-[610px] lg:w-[97%] 2xl:w-[610px]">
          <div className="grid h-full w-full place-items-center">
            <Image
              placeholder="empty"
              alt="logo minca"
              className="Image log MINCA h-[250px] w-auto lg:h-[300px]"
              src="/financiamiento/vanti.png"
              width={850}
              height={508}
            />
            <hr className="w-[60%] border-2 border-black" />
            <img
              className="-mt-10"
              src="/financiamiento/vanti listo logo.png"
              alt="rappicard"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default FinanciaminetoComponent;
