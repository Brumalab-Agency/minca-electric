import { manrope } from "@/ui/fonts";
import { Rate } from 'antd';


export const Cardtestimonio = ({clases, nombre, comentario, rate}) => {
  return (
    <div className={`${manrope.className}  w-[358px] h-[237px] rounded-[20px] border-2 border-[#111]/10 p-6 mt-[24px] ${clases}`}>
        <div className="-minca-rate flex justify-between items-center">
        <Rate allowHalf defaultValue={rate} />
          <img className="w-[25px] h-[25px]" src="/google.png" alt="imagen google"/>
        </div>
        <section>
            <div className="flex items-center">
                <h1 className="mt-2 font-bold">{nombre}</h1>
                <img className="w-[25px] h-[25px]" src="/badge.png" alt="badge"/>
            </div>
            <p className="mt-2 text-[#111]/50">{comentario}</p>
        </section>
    </div>
  )
}
