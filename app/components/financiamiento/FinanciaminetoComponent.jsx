import { manrope, ubuntu } from "@/ui/fonts";
import Link from "next/link";

const FinanciaminetoComponent = () => {
  return (
    <div className="FinanciaminetoComponent p-4 lg:px-[100px] mt-[72px] mb-[200px]">
      {/* Addi */}
      <div className="grid grid-cols-2 justify-between">
        <div className="flex flex-col items-center justify-between">
          <div>
            <h2
              className={` ${manrope.className} font-extrabold lg:text-[32px] lg:leading-[34px]`}
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
              través de PSE.
              <br></br>
              Ten en cuenta que algunas tiendas solo ofrecen la opción de pago a
              crédito con nosotros. Consulta cuáles ofrecen nuestras dos
              opciones de pago en la app.
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Alto rendimiento en un vehículo liviano, suspensión delantera y
              trasera diseñada para conquistar tu ciudad con comodidad.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 pb-[50px]">
            <Link
              href="#"
              className="grid h-[40px] w-[200px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web Addi
            </Link>
          </div>
        </div>
        <div className="card h-[610px] w-[610px] rounded-[10px] bg-[#F0F1EB] justify-self-end"></div>
      </div>
      {/*  */}
      {/* RappiCard */}
      <div className="grid grid-cols-2 gap-8 mt-[46px]">
        <div className="flex flex-col items-center justify-between">
          <div>
            <h2
              className={` ${manrope.className} font-extrabold lg:text-[32px] lg:leading-[34px]`}
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
              La solicitud de tu RappiCard no requiere de trámites ni papeleos.
              ¡No te demoras más de 1 minuto! La puedes pedir desde la App de
              Rappi y solo necesitas tener cédula de ciudadanía o extranjería.
              Realizaremos una evaluación de riesgo sobre tu perfil para poder
              aprobar o rechazar la solicitud y te notificaremos a través de la
              App para que finalices el proceso.
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              ¡Ahorra tiempo pagando desde el cel! No cobramos comisiones,
              hacemos tu vida más fácil.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 pb-[50px]">
            <Link
              href="#"
              className="grid h-[40px] w-[200px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Web RappiCard
            </Link>
          </div>
        </div>
        <div className="card h-[610px] w-[610px] rounded-[10px] bg-[#F0F1EB] justify-self-end"></div>
      </div>
      {/*  */}
      {/* Sistecrédito */}
      <div className="grid grid-cols-2 gap-8 mt-[46px]">
        <div className="flex flex-col items-center justify-between">
          <div>
            <h2
              className={` ${manrope.className} font-extrabold lg:text-[32px] lg:leading-[34px]`}
            >
              Sistecrédito
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              Un mundo de oportunidades
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Aprobamos créditos en segundos
              <br />
              Desarrollamos un software propio que nos ha permitido ajustarnos a
              las necesidades del mercado de una forma personalizada y
              eficiente.
            </p>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
              Retos que nos ayudan a crecer
              <br />
              Evolucionamos nuestros productos y servicios, desde el desarrollo
              de una nueva red de recaudos, nuevos canales y medios de pago, la
              App para la gestión del crédito, hasta luegopago.com el primer
              e-commerce en Colombia con el modelo “Buy now, pay later”.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 pb-[50px]">
            <Link
              href="#"
              className="grid h-[40px] w-[211px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Conoce si calificas
            </Link>
            <Link
              href="#"
              className="grid h-[40px] w-[211px] place-items-center rounded-[32px] border-[1px] border-[#111] text-[#111]"
            >
              Web Sistecrédito
            </Link>
          </div>
        </div>
        <div className="card h-[610px] w-[610px] rounded-[10px] bg-[#F0F1EB] justify-self-end"></div>
      </div>
      {/*  */}
      {/* Vanti listo */}
      <div className="grid grid-cols-2 gap-8 mt-[46px]">
        <div className="flex flex-col items-center justify-between">
          <div>
            <h2
              className={` ${manrope.className} font-extrabold lg:text-[32px] lg:leading-[34px]`}
            >
              Vanti listo
            </h2>
            <h3
              className={` ${manrope.className} mt-[5px] font-normal lg:text-[28px] lg:leading-[34px]`}
            >
              Compra ahora, paga depués
            </h3>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Alto rendimiento en un vehículo liviano, suspensión delantera y trasera diseñada para conquistar tu ciudad con comodidad.
            </p>
            <ul
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             <li>Solo necesitas tu cédula y WhatsApp.</li>
             <li>Puedes comprar en puntos físicos o en el sitio web.</li>
             <li>En minutos te contamos si aprobamos tu compra.</li>
            </ul>
            <p
              className={` ${ubuntu.className} mt-[34px] text-base font-normal leading-[24px]`}
            >
             Alto rendimiento en un vehículo liviano, suspensión delantera y trasera diseñada para conquistar tu ciudad con comodidad.
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-6 pb-[50px]">
            <Link
              href="#"
              className="grid h-[40px] w-[211px] place-items-center rounded-[32px] bg-[#111] text-white"
            >
              Conoce si calificas
            </Link>
            <Link
              href="#"
              className="grid h-[40px] w-[211px] place-items-center rounded-[32px] border-[1px] border-[#111] text-[#111]"
            >
              Web Vanti Listo
            </Link>
          </div>
        </div>
        <div className="card h-[610px] w-[610px] rounded-[10px] bg-[#F0F1EB] justify-self-end"></div>
      </div>
      {/*  */}
    </div>
  );
};

export default FinanciaminetoComponent;
