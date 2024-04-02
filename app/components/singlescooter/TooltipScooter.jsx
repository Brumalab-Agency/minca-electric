"use client"
import { Tooltip } from "@material-tailwind/react"; 

const TooltipScooter = ({tooltips}) => {

  return (
    <>
      <Tooltip className="z-50 bg-white text-black" content={tooltips}>
        <img  src="/sigleProduct/tooltips_icon.png" alt="tooltips icon"/>
      </Tooltip>
    </>
  );
};

export default TooltipScooter;
