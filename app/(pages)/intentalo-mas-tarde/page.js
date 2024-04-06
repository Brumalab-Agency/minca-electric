import Link from "next/link"
import Image from "next/image"

const IntentaloPage = () => {
  return (
    <div className="px-4 lg:px-[100px]">
    <div className="relative my-7 h-auto w-full">
        <div className="absolute left-0 top-[25%] flex h-auto w-[450px]">
          <Link href="/" className="">
            <div className="flex items-center justify-center gap-2">
              <img
                className="hidden h-auto w-[30px] lg:block"
                src="/arrow-narrow-left-svgrepo-com.svg"
              />
              <span className="woo-next-cart-checkout-txt font-bold">
                Volver a la la web
              </span>
            </div>
          </Link>
        </div>
        <Image
          placeholder="empty"
          alt="logo minca"
          className="Image log MINCA m-auto"
          src="/logo.png"
          width={300}
          height={260}
        />
      </div>
    <div className='text-center text-[64px] mt-36'>
      Intentalo más tarde
      </div>
  </div>
  );
};

export default IntentaloPage;
