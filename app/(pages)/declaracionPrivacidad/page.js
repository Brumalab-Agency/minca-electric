import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import { manrope } from "@/ui/fonts";
import Link from "next/link";
import React from "react";

export const Privacidad = () => {
  return (
    <>
      <Header />
      <div className="px-4 lg:px-[100px]">
        <h1 className={`${manrope.className} text-[64px] uppercase`}>
        DECLARACIÓN DE PRIVACIDAD
        </h1>
        <h3 className={`${manrope.className} text-[24px] uppercase mt-[22px]`}>
        Compromiso transparente con la protección de tus datos
        </h3>
        <div
          className={` ${manrope.className} h-auto w-full bg-[#F0F1EB] px-[105px] py-[74px] rounded-[40px] mt-[92px] mb-[114px] text-[20px] text-balance`}
        >
          <p><b>Sección 1</b> – ¿Qué hacemos con tu información? </p>
          <p>
          Cuando compras algo de nuestra tienda, como parte del proceso de compraventa, nosotros recolectamos la información personal que nos das tales como nombre, dirección y correo electrónico. Cuando navegas en nuestra tienda, también recibimos de manera automática la dirección de protocolo de internet de tu computadora (IP) con el fin de proporcionarnos información que nos ayuda a conocer acerca de su navegador y sistema operativo. Email marketing: Con tu permiso, podremos enviarte correos electrónicos acerca de nuestra tienda, nuevos productos y otras actualizaciones.
          </p>
          <br/>
          <p><b>Sección 2</b> – Consentimiento ¿Cómo obtienen mi consentimiento? </p>
          <p>
          Cuando nos provees tu información personal para completar una transacción,verificar tu tarjeta de crédito, crear una orden, concertar un envío o haceruna devolución, implicamos que aceptas la recolección y uso por esa razónespecífica solamente. Si te pedimos tu información personal por una razónsecundaria, como marketing, te pediremos directamente tu expresoconsentimiento, o te daremos la oportunidad de negarte. ¿Cómo puedo anular mi consentimiento?Si luego de haber aceptado cambias de opinión, puedes anular tu consentimientopara que te contactemos, por la recolección, uso o divulgación de tuinformación, en cualquier momento, contactándonos a <Link href="mailto:ventas@mincaelectric.com"><b>ventas@mincaelectric.com</b></Link>.
          </p>
          <br/>
          <p><b>Sección 3</b> – Divulgación. </p>
          <p>
          Podemos divulgar tuinformación personal si se nos requiere por ley o si violas nuestros Términosde Servicio.
          </p>
          <br/>
          <p><b>Sección 4</b> – Servicios de terceras partes.  </p>
          <p>
          En general,los proveedores de terceras partes utilizados por nosotros solo recopilarán,usarán y divulgarán tu información en la medida que sea necesaria para que lespermita desempeñar los servicios que nos proveen. Sin embargo, algunosproveedores de servicios de terceros, tales como pasarelas de pago y otrosprocesadores de transacciones de pago, tienen sus propias políticas deprivacidad con respecto a la información que estamos obligados aproporcionarles para las transacciones relacionadas con las compras. Para estosproveedores, te recomendamos que leas las políticas de privacidad para quepuedas entender la manera en que tu información personal será manejada. Enparticular, recuerda que algunos proveedores pueden estar ubicados o contar coninstalaciones que se encuentran en una jurisdicción diferente a ti onosotros.  Así que, si deseas proceder con una transacción que involucralos servicios de un proveedor a terceros, tu información puede estar sujeta alas leyes de la jurisdicción (jurisdicciones) en que se encuentra el proveedorde servicios o sus instalaciones. Una vez que abandonas el sitio web de nuestratienda o te rediriges a un sitio o aplicación de terceros, ya no estás siendoregulado por la presente Política de Privacidad o los Términos de Servicio denuestra página web. 
          </p>
          <p>
            <br/>
          <b>Enlaces:</b> Cuando haces clic en enlaces de nuestratienda, puede que seas redirigido fuera de nuestro sitio.  No somosresponsables por las prácticas de privacidad de otros sitios y te recomendamosleer sus normas de privacidad.
          </p>
          <br/>
          <p><b>Sección 5</b> – Seguridad.   </p>
          <p>
          Para proteger tu informaciónpersonal, tomamos precauciones razonables y seguimos las mejores prácticas dela industria para asegurarnos de que no haya pérdida de manera inapropiada, maluso, acceso, divulgación, alteración o destrucción de esta.
          </p>
          <p>
            <br/>
          <b>Cookies.</b> 
          </p>
          <p>Aquí tienes una lista de cookies queutilizamos. Las enlistamos para que puedas elegir si quieres optar porquitarlas o no. Cookies de Facebook y Google.</p>
          <br/>
          <p><b>Sección 6</b> – Edad de consentimiento.    </p>
          <p>
          Al utilizar estesitio, declaras que tienes al menos la mayoría de edad en tu estado o provinciade residencia, o que tienes la mayoría de edad en tu estado o provincia deresidencia y que nos has dado tu consentimiento para permitir que cualquiera detus dependientes menores use este sitio.
          </p>
          <br/>
          <p><b>Sección 7</b> – Cambios a esta política de privacidad.    </p>
          <p>
          Nosreservamos el derecho de modificar esta política de privacidad en cualquiermomento, así que por favor revísala frecuentemente.  Cambios yaclaraciones entrarán en vigor inmediatamente después de su publicación en elsitio web.  Si hacemos cambios materiales a esta política, notificaremosaquí que ha sido actualizada, por lo que cual estás enterado de qué informaciónrecopilamos, cómo y bajo qué circunstancias, si las hubiere, la utilizamos y/o divulgamos.Si nuestra tienda es adquirida o fusionada con otra empresa, tu informaciónpuede ser transferida a los nuevos propietarios, para que podamos seguirvendiéndote productos.
          </p>
          <br/>
          <p><b>Preguntas e información de contactos. </b> </p>
          <p>
          Si quieresacceder, corregir, enmendar o borrar cualquier información personal queposeamos sobre ti, registrar una queja, o simplemente quieres más informacióncontacta a nuestro Oficial de Cumplimiento de Privacidad al correo: <Link href="mailto:ventas@mincaelectric.com"><b>ventas@mincaelectric.com</b></Link>.
          </p>
          <br/>
        </div>
      </div>
      <Footer/>
      <Whatsapp/>
    </>
  );
};

export default Privacidad;
