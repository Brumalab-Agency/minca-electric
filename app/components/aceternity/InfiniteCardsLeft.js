import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { ClientesAliadosQuery } from "@/lib/graphQLRequest";

export async function InfiniteCardsLeft() {
  const data = await ClientesAliadosQuery();
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-[100px] 2xl:h-[150px] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
      <InfiniteMovingCards
        items={data}
        direction = "left"
        speed="normal"
        />
    </div>
  );
}


