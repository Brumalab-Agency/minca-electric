import { ubuntu } from "../../ui/fonts";
import { MegaMenu } from "./MegaMenu";

export const Menu = () => {
  return (
    <div className={`${ubuntu.className}  flex items-center gap-4 menu text-base`}>    
      <MegaMenu/>
    </div>
  );
};
