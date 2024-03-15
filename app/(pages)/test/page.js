import { Header } from "@/components/home/Header";
import { ProductosComponent } from "@/components/productos/ProductosComponent";
import { ProductosWoocommerce } from "@/lib/graphQLRequest";


export const TestProduct = async () => {
  const dato = await ProductosWoocommerce();
  const data = dato.products.nodes;
  console.log(data);
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-5 gap-4 p-10">
        {data.map((item) => {
          const img = item.image;
          return (
            <ProductosComponent img={img} item={item}/>
          );
        })}
      </div>
    </div>
  );
};

export default TestProduct;
