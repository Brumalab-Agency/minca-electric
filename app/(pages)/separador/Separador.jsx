import { ubuntu } from "@/ui/fonts";
import {SpinningText} from "@/components/home/SpiningText"

export const Separador = ({clases, clase2}) => {
  return (
    <div className={`Separador ${clases}`}>
      <div className="spinig-text flex w-full items-center justify-between lg:my-[130px]">
        <div className="w-auto">
          <p
            className={`${ubuntu.className} mt-[110px] text-[18px] leading-[35px] lg:mt-0 lg:text-[20px] ${clase2}`}
          >
            No solo estamos cambiando el juego,
          </p>
          <p
            className={`${ubuntu.className} text-[18px] font-bold lg:text-[20px]`}
          >
            ¡estamos cambiando tu viaje!
          </p>
        </div>
        <div className="relative lg:-mt-[80px]">
          <SpinningText text=" • Agenda tu • test drive 1">
            <img src="/imagotipo-negro.png" alt="logo tipo" />
          </SpinningText>
        </div>
      </div>
      <div className="my-4 flex items-center">
        <hr className="border-1 mt-4 w-full border-[#111]" />
        <img src="/flecha-correcta 2.png" alt="flechas direccional" />
      </div>
    </div>
  );
};
