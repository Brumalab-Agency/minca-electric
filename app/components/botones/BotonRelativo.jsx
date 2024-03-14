import { ubuntu } from "../../ui/fonts";

export const BotonRelativo = ({param, clases}) => {
  return (
    <div className="btn-scooter lg:flex lg: lg:top-[60%] z-10 relative">
          <button
            type="button"
            className={`${ubuntu.className} antialiased text-[16px] w-full h-[52px] rounded-[62px] my-3 lg:w-[210px] ${clases}`}
          >
            {param}
          </button>
        </div>
  )
}
