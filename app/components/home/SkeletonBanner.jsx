import { Typography } from "@material-tailwind/react";

export const SkeletonBanner = () => {
  return (
    <div className="max-w-full animate-pulse h-[38px] flex justify-center items-center">
      <Typography
        as="div"
        variant="h1"
        className="h-3 w-[90%] lg:w-[28%]  rounded-full bg-gray-100/50 m-auto"
      >
        &nbsp;
      </Typography>
      
    </div>
  )
}
