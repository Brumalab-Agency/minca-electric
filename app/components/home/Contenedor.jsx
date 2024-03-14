const Contenedor = ({ children, ancho, alto, bg }) => {
  const clases = `w-${ancho} h-[${alto}] bg-${bg}`;

  return <div className={`${clases} p-4`}>{children}</div>;
};

export default Contenedor;
