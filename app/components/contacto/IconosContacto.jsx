import { manrope, ubuntu } from "@/ui/fonts";

export const IconosContacto = () => {
  return (
    <div className='IconosContacto h-[275px] w-full flex flex-col justify-between mt-[50px] mb-[100px]'>
        <div className="mx-[100px] flex justify-between items-center ">
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconTaller.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconTaller.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconShowroom.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
        </div>
        <div className="mx-[100px] flex justify-between items-center">
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconShowroom.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconShowroom.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img className="w-[83] h-auto" src="/contacto/IconShowroom.jpg" alt="icono taller"/>
                <div>
                    <p className={`${manrope.className} text-[20px] font-bold text-[#111]`}>Taller Javeriana</p>
                    <p className={`${ubuntu.className} text-base text-[#111]`}>Cra. 7 #45-10</p>
                </div>
            </div>
        </div>
    </div>
  )
}
