const Marquee = ({marquee, ocultar}) => {
  const bann = marquee


  return (
    <div className="banner-marquee text-white relative h-[38px] flex justify-between items-center overflow-x-hidden motion-safe:overflow-x-hidden pause-animations-on-children-on-hover" style={{ backgroundColor: bann.background }}>
      <div className="w-[28%] flex justify-end">

      </div>
      <div className="lg:w-[90%] overflow-x-hidden relative marquee-banner">
        <div className="animate-marquee whitespace-nowrap motion-safe:animate:marquee">
          <span className="text-[14px] mx-4">
          {bann.titleMarquee}
          </span>
          <span className="text-[14px] mx-4">
          {bann.titleMarquee}
          </span>
          <span className="text-[14px] mx-4">
          {bann.titleMarquee}
          </span>
          <span className="text-[14px] mx-4">
          {bann.titleMarquee}
          </span>
          <span className="text-[14px] mx-4">
          {bann.titleMarquee}
          </span>
        </div>
      </div>
      <div className="w-[28%] flex justify-end">
       {/*  <button
          onClick={ocultar}
          aria-label="Dismiss"
          className="rounded-lg bg-black/10 p-1 transition hover:bg-black/20 mr-[50px] hidden lg:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Marquee;