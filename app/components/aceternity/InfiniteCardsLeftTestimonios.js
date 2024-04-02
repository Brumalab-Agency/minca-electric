import { InfiniteMovingCardsTestimonios } from "../ui/InfiniteMovingCardsTestimonios";

export async function InfiniteCardsLeftTestimonios({item}) {
 
  return (
    <div className="relative flex h-[300px] flex-col items-center justify-center overflow-hidden rounded-md ">
      <InfiniteMovingCardsTestimonios
        items={item}
        direction = "left"
        speed="slow"
        />
    </div>
  );
}


