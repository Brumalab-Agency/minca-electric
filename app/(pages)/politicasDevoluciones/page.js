import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import { manrope } from "@/ui/fonts";
import React from "react";

export const Politicas = () => {
  return (
    <>
      <Header />
      <div className="px-4 lg:px-[100px]">
        <h1 className={`${manrope.className} text-[64px] uppercase`}>
          política DE DEVOLUCIONES
        </h1>
        <h3 className={`${manrope.className} text-[24px] uppercase mt-[22px]`}>
          Nuestra política de devoluciones para tu tranquilidad
        </h3>
        <div
          className={` ${manrope.className} h-auto w-full bg-[#F0F1EB] px-[105px] py-[74px] rounded-[40px] mt-[92px] mb-[114px] text-[20px]`}
        >
          <p>
            Nuestra política tiene una duración de 5 días. Si 5 días han pasado
            desde Tu compra, por desgracia no podemos ofrecer un reembolso.
            Cualquier inconveniente que surja directamente con la Scooter
            después de esos 5 días, MINCA se encargará de resolver el problema
            en cualquier taller autorizado.
          </p>
          <br></br>
          <p>
            Para ser elegible para una devolución, el artículo debe estar sin
            usar y en las mismas condiciones en que lo recibiste.
          </p>
          <br></br>
          <p>
            Una vez que tu devolución es recibida e inspeccionada, enviaremos un
            correo electrónico para notificarte que hemos recibido tu
            devolución. También te notificaremos la aprobación o rechazo de tu
            reembolso. Si eres aprobado, entonces tu reembolso será procesado y
            un crédito será automáticamente aplicado a tu tarjeta de crédito o
            método original de pago, en los siguientes 15 días calendario.
          </p>
          <br></br>
          <p>
            Si aún no has recibido tu reembolso, por favor chequea tu cuenta
            bancaria otra vez.
          </p>
          <br></br>
          <p>
            Luego contacta a tu compañía de tarjeta de crédito, puede tomar
            algún tiempo antes de que tu reembolso se postee oficialmente.
            Próximo paso, contacta a tu banco. A menudo pasa cierto tiempo antes
            de que tu reembolso se postee.
          </p>
          <br></br>
          <p>
            Si has seguido todos estos pasos y aún no haz recibido el reembolso,
            por favor contáctanos a ventas@mincaelectric.com.
          </p>
          <p>Intercambios (donde aplique)</p>
          <br></br>
          <p>
            Solo reemplazamos artículos que estén defectuosos o dañados por
            fallas de fábrica. Si necesitas cambiarlo por el mismo artículo,
            envíanos un correo electrónico a ventas@mincaelectric.com y envía el
            artículo a: Carrera 11a # 94a – 56 Local 3, Bogotá, DC, 110221,
            Colombia. Favor revisar las políticas de Garantía que se encuentran
            en www.old.mincaelectric.com
          </p>
          <br></br>
          <p>
            Envío: <br></br>Para devolver tu producto, debes enviarlo a: Carrera
            11a # 94a – 56 Local 3, Bogotá, DC, 110221, Colombia. Serás
            responsable por el pago de los costos de envío para el retorno del
            artículo. Los costos de envío no son reembolsables.
          </p>
          <br></br>
          <p>
            Dependiendo de dónde vivas, el tiempo que tome recibir el producto
            intercambiado, puede variar. Es recomendable usar un servicio de
            envío rastreable y compar seguro para el envío. No nos hacemos
            responsables por pérdidas que puedan surgir durante el tránsito del
            producto.
          </p>
        </div>
      </div>
      <Footer/>
      <Whatsapp/>
    </>
  );
};

export default Politicas;
