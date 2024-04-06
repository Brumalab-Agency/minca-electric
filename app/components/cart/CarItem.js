import { useEffect, useState, useRef } from "react";
import { isEmpty } from "lodash";
import Image from "next/image";
import { updateCart, deleteCartItem } from "@/utils/cart/cartUtils";
import { manrope, ubuntu } from "@/ui/fonts";

const CartItem = ({ item, products, setCart }) => {
  const [productCount, setProductCount] = useState(item.quantity);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  const productImg = item?.data?.images?.[0] ?? "";

  /* * No permitir la actualización del estado en un componente desmontado. * * isMounted se usa para que podamos establecer su valor en falso * cuando el componente está desmontado. * Esto se hace para que setState (por ejemplo, setRemovingProduct) en llamadas asincrónicas * como axios.post, no se ejecuten cuando el componente abandona el DOM * debido a la eliminación del producto/artículo. * Si no hacemos esto como cancelación de la suscripción, obtendremos * "Advertencia de pérdida de memoria de React: no se puede realizar una actualización del estado de React en un componente desmontado"

	 */
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // Cuando el componente está desmontado, establezca isMounted.current en falso.
    return () => {
      isMounted.current = false;
    };
  }, []);

  /*
   * Haga clic en el icono para retirar el producto.
   *
   */
  const handleRemoveProductClick = (event, cartKey) => {
    event.stopPropagation();

    // Si el componente está desmontado o la solicitud de actualización del elemento anterior aún está en proceso, regrese.
    if (!isMounted || updatingProduct) {
      return;
    }

    deleteCartItem(cartKey, setCart, setRemovingProduct);
  };

  /*
   * Cuando el usuario cambia la cantidad de la entrada del producto, actualice el carrito en localStorage
   * También actualice el carrito en el contexto global
   *
   */
  const handleQtyChange = (event, cartKey, type) => {
    if (process.browser) {
      event.stopPropagation();
      let newQty;

      // Si la solicitud de carrito anterior aún actualiza el Producto para eliminarlo, regrese.
      if (
        updatingProduct ||
        removingProduct ||
        ("decrement" === type && 1 === productCount)
      ) {
        return;
      }

      if (!isEmpty(type)) {
        newQty = "increment" === type ? productCount + 1 : productCount - 1;
      } else {
        // Si el usuario intenta eliminar el recuento de producto, configúrelo en 1 de forma predeterminada (esto no le permitirá reducirlo a menos de cero).
        newQty = event.target.value ? parseInt(event.target.value) : 1;
      }

      // Establezca la nueva cantidad en el estado.
      setProductCount(newQty);

      if (products.length) {
        updateCart(item?.key, newQty, setCart, setUpdatingProduct);
      }
    }
  };

  const separadorDeMiles = (numero) => {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  };

  return (
    <div>
      <div className="cart-item-wrap mb-5 flex flex-col justify-between gap-4 lg:flex-row">
        {/* Remover productos Movil */}
        <button
          className="cart-remove-item text-22px leading-22px flex justify-end  bg-transparent px-4 py-2 lg:hidden"
          onClick={(event) => handleRemoveProductClick(event, item?.key)}
        >
          <img className="max-w-none" src="/carrito/trash.svg" />
        </button>
        <div className="cart-left-col">
          <figure>
            <Image
              className="w-full max-w-none rounded-[8px]"
              width="124"
              height="124"
              alt={productImg.name}
              src={productImg?.src} // use atributos <img> normales como accesorios
            />
          </figure>
        </div>

        <div className="cart-right-col grow">
          <div className="flex h-full flex-col justify-between lg:h-full">
            <div className="cart-product-title-wrap relative flex justify-between lg:w-full">
              <div className="aplicado-movil">
                <h3
                  className={`${manrope.className} cart-product-title text-brand-orange text-base font-bold lg:text-[20px]`}
                >
                  {item?.data?.name}
                </h3>
                <p className={`${ubuntu.className} text-[14px] lg:w-[400px]`}>
                  {item?.data?.description ? (
                    <p>{item?.data?.description}</p>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              {/* Remover productos PC */}
              <button
                className="cart-remove-item text-22px leading-22px hidden  bg-transparent px-4 py-2 lg:flex"
                onClick={(event) => handleRemoveProductClick(event, item?.key)}
              >
                <img className="max-w-none" src="/carrito/trash.svg" />
              </button>
            </div>

            <footer className="cart-product-footer mt-8 flex justify-between lg:mt-0">
              <div className="precio flex-col justify-end lg:flex ">
                <span className="cart-total-price text-[24px] text-base font-bold uppercase">
                  {separadorDeMiles(item?.currency)}

                  {separadorDeMiles(item?.line_subtotal)}
                </span>
              </div>

              {updatingProduct ? (
                <img
                  className="woo-next-cart-item-spinner mt-4 h-[30px] w-[30px]"
                  width="24"
                  height="24"
                  src="/cart-spinner.gif"
                  alt="spinner"
                />
              ) : null}
              {/*Qty*/}
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* btn */}

                <div className="btn-aumentarDisminuir flex  h-[44px] w-[126px] items-center gap-1 rounded-[62px] bg-[#F0F0F0] px-[20px] py-[12px]">
                  <button
                    className="size-10 text-[25px] leading-10 text-gray-600 transition"
                    onClick={(event) =>
                      handleQtyChange(event, item?.cartKey, "decrement")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    style={{
                      textAlign: "center",
                      width: "50px",
                      paddingRight: "0",
                    }}
                    data-cart-key={item?.data?.cartKey}
                    className={`${updatingProduct ? "disabled" : ""} [&::-webkit-outer-spin-button]:appearance-none" h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0`}
                    value={productCount}
                    onChange={(event) =>
                      handleQtyChange(event, item?.cartKey, "")
                    }
                  />
                  <button
                    className="size-10 text-[25px] leading-10 text-gray-600 transition"
                    onClick={(event) =>
                      handleQtyChange(event, item?.cartKey, "increment")
                    }
                  >
                    +
                  </button>
                </div>

                {/*  */}
              </div>
            </footer>
          </div>
        </div>
      </div>
      <hr className="my-[24px]"></hr>
    </div>
  );
};

export default CartItem;
