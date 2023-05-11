import { PropsWithChildren, createContext } from "react";
import tijelaAcai from "../assets/images/tijela_Açai_01.jpg";
import hamburguer from "../assets/images/hamburguer.jpg";
import crepe from "../assets/images/crepe.jpg";
import baquete from "../assets/images/sanduiche-com-almondegas.jpg";
import tapioca from "../assets/images/tapioca.jpg";
import suco from "../assets/images/dextoxmor.jpg";

export interface IOptionals {
  name: string;
  description: string;
  isMandatory: boolean;
  options: { name: string; price?: number; description?: string }[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  optionals?: IOptionals[];
}

interface IProductsContext {
  products: Product[];
}

const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "4 Açais com ou sem banana",
    description:
      "Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou sem granola",
    image: tijelaAcai,
    price: 85,
    category: "destaques",
    optionals: [
      {
        name: "Como prefere ?",
        description: "Escolha 1 opção",
        isMandatory: true,
        options: [
          {
            name: "Brasil com bananas e morangos",
            description: "com morangos e bananas fatiadas",
            price: 27.3,
          },
          {
            name: "Brasil com morangos",
            description: "com morangos fatiados",
            price: 27.3,
          },
          {
            name: "Com bananas Fatiadas",
            price: 23.4,
          },
          {
            name: "Sem frutas",
            price: 23.4,
          },
        ],
      },
      {
        name: "Escolha uma porção: ",
        description: "Escolha 1 opção",
        isMandatory: true,
        options: [
          { name: "Granola" },
          { name: "Farinha Láctea" },
          { name: "Leita condensado" },
          { name: "Leite em Pó" },
          { name: "Farinha de Tapioca" },
          { name: "Paçoca" },
        ],
      },
      {
        name: "Deseja Adicionar algo?",
        description: "Escolha até 20 opções",
        isMandatory: false,
        options: [
          {
            name: "Morango",
            price: 8,
          },
          {
            name: "Banana",
            price: 4,
          },
          {
            name: "Kiwi",
            price: 8,
          },
          {
            name: "Granola",
            price: 5,
          },
          {
            name: "Paçoca",
            price: 2,
          },
          {
            name: "Leite em pó",
            price: 5,
          },
          {
            name: "Leite condensado",
            price: 5,
          },
          {
            name: "Mel",
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: "p2",
    title: "Hambúrguer + Batata Frita + Coca 250ml",
    description:
      "Especial Bland Bovino 160g, queijo prato, bacon e maionese da casa + Batata Frita + Coca cola 250 ml.",
    image: hamburguer,
    price: 47.5,
    category: "destaques",
    optionals: [
      {
        name: "Acréscimo de viagem:",
        isMandatory: true,
        description: "Escolha 1 opção.",
        options: [{ name: "Embalagem para viagem", price: 2.5 }],
      },
    ],
  },
  {
    id: "p3",
    title: "Crepe + Mini Salada + Coca 250 ml",
    description:
      "Crepe de filé de frango, queijo mussarela e tomate confit + Mini Salada + Coca cola 250ml.",
    image: crepe,
    price: 35,
    category: "destaques",
    optionals: [
      {
        name: "Mini Salada",
        isMandatory: true,
        description: "Excolha 1 opção",
        options: [{ name: "Sim" }, { name: "Não" }],
      },
      {
        name: "Talher Descartável",
        isMandatory: true,
        description: "Excolha 1 opção",
        options: [{ name: "Sim" }, { name: "Não" }],
      },
    ],
  },
  {
    id: "p4",
    title: "Ver o Peso",
    description: "Baguete de filé mignon com queijo do reino.",
    image: baquete,
    price: 40,
    category: "Promoções Impedíveis",
    optionals: [
      {
        name: "Acréscimo de viagem:",
        isMandatory: true,
        description: "Escolha 1 opção.",
        options: [{ name: "Embalagem para viagem", price: 2.5 }],
      },
    ],
  },
  {
    id: "p5",
    title: "Tapioca de Carne Seca",
    description: "Tapioca com carne seca desfiada e creeam chease",
    image: tapioca,
    price: 29,
    category: "Promoções Impedíveis",
    optionals: [
      {
        name: "Acréscimo de viagem:",
        isMandatory: true,
        description: "Escolha 1 opção.",
        options: [{ name: "Embalagem para viagem", price: 2.5 }],
      },
      {
        name: "Talher Descartável",
        isMandatory: true,
        description: "Excolha 1 opção",
        options: [{ name: "Sim" }, { name: "Não" }],
      },
    ],
  },
  {
    id: "p6",
    title: "Suco de morando 400ml",
    description: "Suco refrescante de morango ",
    image: suco,
    price: 14,
    category: "Promoções Impedíveis",
    optionals: [
      {
        name: "Acrescentar!",
        isMandatory: true,
        description: "Escolha 1 opção.",
        options: [
          { name: "Batido com Leite", price: 2.7 },
          { name: "Sem Leite" },
        ],
      },
      {
        name: "Canudo",
        isMandatory: true,
        description: "Escolha 1 opção.",
        options: [{ name: "Sim" }, { name: "Não" }],
      },
    ],
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
