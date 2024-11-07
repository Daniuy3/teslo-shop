import { mainFont } from "@/app/config/fonts";
import { SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}
export default function ProductPage({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find(product => product.slug === slug);
  console.log(product);

  if(!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2 bg-red-300">

      </div>
      <div className="grid px-5 ">
        <h1 className={`${mainFont.className} antialiased font-bold text-xl`}> 
          {
            product.title
          }  
        </h1>
        <p className="text-lg mb-5">
          $ { product.price }
        </p>
        {/* Seleccionar tallas */}
          <SizeSelector />
        {/* Seleccionar cantidad */}


        <button className="btn-primary my-5">
          Agregar al Carrito
        </button>
        
        <h3 className="font-bold text-sm"> Descripción </h3>

        <p className="font-light">
          {product.description}
        </p>

      </div>
    </div>
  );
}