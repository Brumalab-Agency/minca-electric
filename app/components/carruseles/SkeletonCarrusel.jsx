import { Typography } from "@material-tailwind/react";

export const SkeletonCarrusel = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row animate-pulse flex-wrap items-center gap-2 lg:h-auto lg:w-full lg:p-12 my-12">
      <div className="w-auto">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[300px] lg:w-[600px] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>

      <div className=" w-full 2xl:w-[1090px] lg:w-[600px] lg:h-[600px] grid place-items-center">
          <div className="grid w-[300px] h-[300px] lg:h-[400px] lg:w-[600px] place-items-center rounded-lg bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
      </div>
   
    </div>
  )
}
