import { ubuntu } from "../../ui/fonts";
import { MegaMenu } from "./MegaMenu";


export const Menu = ({navegacion, anclaBlog, anclasRest, anclaProductos}) => {
  return (
    <div className={`${ubuntu.className}  flex items-center gap-4 menu text-base`}>    
      <MegaMenu navegacion={navegacion} anclaProductos={anclaProductos} anclasRest={anclasRest} anclaBlog={anclaBlog}/>
    </div>
  );
};
