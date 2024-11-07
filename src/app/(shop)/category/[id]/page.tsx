import { ProductGrid, Title } from "@/components";
import { initialData, ValidCategories } from "@/seed/seed";
interface Props  {
  params: {
    id: ValidCategories;
  };
}

export default function CategoryPage({params : {id}} : Props) {

  /* if(id   === "kids"  ) {
    notFound()
  } */
   const filteredData = initialData.products.filter(product => product.gender === id)
  const subtitle : Record<ValidCategories, string> = {
    kid: "Niños",
    men: "Hombres",
    women: "Mujeres",
    unisex: "Unisex"
    
  }
  return (
    <div>
      <Title title={`Articulos de ${subtitle[id]}`} subtitle="Todos los productos"/>
      <ProductGrid  products={filteredData} />
    </div>
  );
}