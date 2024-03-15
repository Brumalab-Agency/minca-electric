import Link from "next/link";
import AddToCart from "../cart/AddToCart";


export const ProductosComponent = ({item, img}) => {
  console.log(item);

  const productType = item?.type ?? ""
  return (
    <div key={img.id}>
    <Link
      href={`/producto/${item.slug}`}
      className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
    >
      <img
        alt=""
        src={img.mediaItemUrl}
        className="h-56 w-full object-cover"
      />
      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg text-gray-900">{item.name}</h3>
      </div>
    </Link>
    {"SIMPLE" === productType ? <AddToCart producto={item}/> : null}
  </div>
  )
}
