import { ubuntu } from "../../ui/fonts";
import { MegaMenuNegro } from "./MegaMenuNegro";


export const MenuNegro = ({navegacion, anclaBlog, anclasRest, anclaProductos}) => {
  return (
    <div className={`${ubuntu.className}  flex items-center gap-4 menu text-base menuFondoNegroPrincipal`}>    
      <MegaMenuNegro navegacion={navegacion} anclaProductos={anclaProductos} anclasRest={anclasRest} anclaBlog={anclaBlog}/>
    </div>
  );
};
