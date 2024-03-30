import { ubuntu } from "../../ui/fonts";
import { MegaMenu } from "./MegaMenu";
import { MegaMenuSingleProduct } from "./MegaMenuSingleProduct";


export const MenuSingleProduct = ({navegacion, anclaBlog, anclasRest, anclaProductos}) => {
  return (
    <div className={`${ubuntu.className}  flex items-center gap-4 menu text-base`}>    
      <MegaMenuSingleProduct navegacion={navegacion} anclaProductos={anclaProductos} anclasRest={anclasRest} anclaBlog={anclaBlog}/>
    </div>
  );
};
