import { manrope, ubuntu } from "@/ui/fonts";
import {
  ProductosWoocommerce,
  ProductosWoocommerceVariable,
} from "@/lib/graphQLRequest";
import AddToCart from "../cart/AddToCart";
import { BtnQty } from "./BtnQty";
import AccesorioVariable from "../accesorios/AccesorioVariable";
import ReactImagenGalleryLupa from "../react-image-gallery/ReactImagenGalleryLupa";

export const EspecificacionesAccesorios = async (accesorios) => {
  
  let content;
  const esCascoMinca = accesorios.accesorios.products.nodes.some(
    (item) => item.name === "Casco Integral Minca",
    );
    
    if (esCascoMinca) {
      const itemsVariables = await ProductosWoocommerceVariable();
      
      
      const items = itemsVariables.products.nodes;
    



    content = (
      <AccesorioVariable item={items} />
    );
  } else {
    /* Aqui productos SIMPLE */
    const accesoriosWoocommerce = accesorios;
   

    const items = accesoriosWoocommerce.accesorios.products.nodes;
   
    const item = items[0];

    
    const datosWoocommerce = await ProductosWoocommerce();

  
    const productoEncontrado = datosWoocommerce.products.nodes.find(
      (producto) => producto.databaseId === item.productId,
    );

  
    const separadorDeMiles = (numero) => {
      let partesNumero = numero.toString().split(".");
      partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return partesNumero.join(".");
    };

    content = (
      <div className="EspecificacionesAccesorios Productos-SIMPLES mb-8">
        <div className=" justify-between lg:flex lg:justify-start lg:px-[75px] lg:py-[50px] p-4">
          {/* Accesorios */}
          <ReactImagenGalleryLupa items={items[0]} />
          <div className="lg:w-[50%]">
            {/* Titulo y descripcion */}
            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111]  lg:text-[42px] lg:leading-[28px]`}
                >
                  {item.name}
                </h2>
                <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[24px] font-bold text-[#111111]  lg:text-[26px]`}
                  >
                    $ {separadorDeMiles(item.price)}
                  </div>
                </div>
                <p
                  className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A]  lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.description}
                </p>
                <hr className="mt-5 lg:w-[70%]" />
              </div>
              {/* /Scooter/btn-slider-left-pc.png */}
            </div>
            {/* Btn y contador */}
            <div className="contador-btnAddCart mt-2 flex w-full items-center gap-4 lg:w-[85%] 2xl:w-[70%]">
              <BtnQty />
              <div className="w-full flex-col justify-center lg:flex">
                {productoEncontrado ? (
                  <AddToCart
                    key={productoEncontrado.databaseId}
                    producto={productoEncontrado}
                    clases="lg:w-[80%] w-full"
                  />
                ) : (
                  <p>No se encontró el producto.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};
