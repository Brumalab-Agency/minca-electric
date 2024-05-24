import { TalleresComponent } from "../showroom/TalleresComponent";

const TalleresSingleComponents = () => {
  return (
    <div className="hidden lg:block">
      <div className="px-[100px] text-center ">
        <h1 className="mt-[55px] text-left text-[62px] font-bold">Talleres</h1>
        <p className="m-auto text-left text-[20px] text-[#111] 2xl:text-[28px]">
          Encuentra el Mantenimiento Perfecto para Tu Scooter y Garantiza su
          Rendimiento. <br />
          ¡Programa tu Mantenimiento Ahora!
        </p>
      </div>
      <TalleresComponent/>
    </div>
  );
};

export default TalleresSingleComponents;
