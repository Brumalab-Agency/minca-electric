"use client"
import { Tooltip } from "@material-tailwind/react"; 

const TooltipScooter = ({tooltips}) => {
  return (
    <>
      <Tooltip content={tooltips}>
        <img src="/sigleProduct/tooltips_icon.png" alt="tooltips icon"/>
      </Tooltip>
    </>
  );
};

export default TooltipScooter;
