export const CardAccesorios = ({ocultar, mostrar}) => {
  return (
    <div className={`w-[198px] h-auto lg:w-[295px] lg:h-[298px] ${ocultar} ${mostrar}`}>
        <div className="h-[200px] w-[198px] lg:w-[295px] lg:h-[298px] bg-[#F0EEED] grid place-items-center rounded-[13px]">
          <img className="w-[150px] h-auto" src="http://test.mincaelectric.com/wp-content/uploads/2024/02/Gafas-Minca-Electric.png" alt="gafas" />
        </div>
          <p className="text-base lg:text-[20px] font-bold mt-[10px]">Gafas Minca</p>
          <p className="text-[20px] font-bold">$280.000</p>
    </div>
  );
};
