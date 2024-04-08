import Image from "next/image";
import Link from "next/link";

const Whatsapp = ({message}) => {
    const generateWhatsAppLink = () => {
        const message = encodeURIComponent("Hola, quiero más información");
        return `https://wa.me/+573222102466?text=${message}`;
      };
  return (
    <div className="Whatsapp w-full h-auto  flex justify-end items-center px-2 lg:px-10 relative z-50">
         <Link href={generateWhatsAppLink()} passHref target="_blank">
             <Image
                alt="scooter"
                className="rounded-[10px] fixed lg:bottom-16 bottom-6 right-6 lg:w-[70px] w-[70px] h-auto"
                src="/redesSociales/whatsapp.png"
                width={100}
                height={100}
              />
         </Link>
    </div>
  )
}

export default Whatsapp


