import { PropsWithChildren, createContext } from "react";
import tijelaAcai from "../assets/images/tijela_Açai_01.jpg";
import hamburguer from "../assets/images/hamburguer.jpg";
import crepe from "../assets/images/crepe.jpg";
import baquete from "../assets/images/sanduiche-com-almondegas.jpg";
import tapioca from "../assets/images/tapioca.jpg";
import suco from "../assets/images/dextoxmor.jpg";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

interface IProductsContext {
  products: Product[];
}

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "4 Açais com ou sem banana",
    description:
      "Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou sem granola",
    image: tijelaAcai,
    price: "R$ 85,00",
    category: "destaques",
  },
  {
    id: "p2",
    title: "Hambúrguer + Batata Frita + Coca 250ml",
    description:
      "Especial Bland Bovino 160g, queijo prato, bacon e maionese da casa + Batata Frita + Coca cola 250 ml.",
    image: hamburguer,
    price: "R$ 47,50",
    category: "destaques",
  },
  {
    id: "p3",
    title: "Crepe + Mini Salada + Coca 250 ml",
    description:
      "Crepe de filé de frango, queijo mussarela e tomate confit + Mini Salada + Coca cola 250ml.",
    image: crepe,
    price: "R$ 35,00",
    category: "destaques",
  },
  {
    id: "p4",
    title: "Ver o Peso",
    description: "Baguete de filé mignon com queijo do reino.",
    image: baquete,
    price: "R$ 40,00",
    category: "Promoções Impedíveis",
  },
  {
    id: "p5",
    title: "Tapioca de Carne Seca",
    description: "Tapioca com carne seca desfiada e creeam chease",
    image: tapioca,
    price: "R$ 29,00",
    category: "Promoções Impedíveis",
  },
  {
    id: "p6",
    title: "Suco de morando 400ml",
    description: "Suco refrescante de morango ",
    image: suco,
    price: "14,00",
    category: "Promoções Impedíveis",
  },
];

export const ProductsContext = createContext<IProductsContext>({
  products: DUMMY_PRODUCTS,
});

export const ProductsContextProvider = (props: PropsWithChildren) => {
  return (
    <ProductsContext.Provider value={{ products: DUMMY_PRODUCTS }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
