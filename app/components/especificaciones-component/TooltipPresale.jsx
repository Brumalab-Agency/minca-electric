"use client"
import { Tooltip } from "@material-tailwind/react"; 

const TooltipPresale = ({tooltips}) => {

  return (
    <>
      <Tooltip className="z-50 bg-black text-white" content={tooltips}>
        <img  src="/sigleProduct/tooltips_icon.png" alt="tooltips icon"/>
      </Tooltip>
    </>
  );
};

export default TooltipPresale;
