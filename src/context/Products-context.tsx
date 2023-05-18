import { PropsWithChildren, createContext, useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

export interface IOption {
  name: string;
  price?: number;
  description?: string;
  canUpdatePrice?: boolean;
}
export interface IOptionals {
  name: string;
  description: string;
  isMandatory: boolean;
  maxQtd: number;
  options: IOption[];
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  optionals?: IOptionals[];
}

interface IProductsContext {
  products: IProduct[];
  isLoading: boolean;
  error: Error | null;
}

/* const DUMMY_PRODUCTS: IProduct[] = [
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
        maxQtd: 1,
        options: [
          {
            name: "Brasil com bananas e morangos",
            description: "com morangos e bananas fatiadas",
            price: 27.3,
            canUpdatePrice: true,
          },
          {
            name: "Brasil com morangos",
            description: "com morangos fatiados",
            price: 27.3,
            canUpdatePrice: true,
          },
          {
            name: "Com bananas Fatiadas",
            price: 23.4,
            canUpdatePrice: true,
          },
          {
            name: "Sem frutas",
            price: 23.4,
            canUpdatePrice: true,
          },
        ],
      },
      {
        name: "Escolha uma porção: ",
        description: "Escolha 1 opção",
        isMandatory: true,
        maxQtd: 1,
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
        maxQtd: 20,
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
        maxQtd: 1,
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
        maxQtd: 1,
        options: [{ name: "Salda sim" }, { name: "Salada não" }],
      },
      {
        name: "Talher Descartável",
        isMandatory: true,
        description: "Excolha 1 opção",
        maxQtd: 1,
        options: [{ name: "Talher sim" }, { name: "Talher não" }],
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
        maxQtd: 1,
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
        maxQtd: 1,
        options: [{ name: "Embalagem para viagem", price: 2.5 }],
      },
      {
        name: "Talher Descartável",
        isMandatory: true,
        description: "Excolha 1 opção",
        maxQtd: 1,
        options: [{ name: "Talher sim" }, { name: "Talher não" }],
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
        maxQtd: 1,
        options: [
          { name: "Batido com Leite", price: 2.7 },
          { name: "Sem Leite" },
        ],
      },
      {
        name: "Canudo",
        isMandatory: true,
        description: "Escolha 1 opção.",
        maxQtd: 1,
        options: [{ name: "Canudo sim" }, { name: "Canudo não" }],
      },
    ],
  },
]; */

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  isLoading: false,
  error: null,
});

export const ProductsContextProvider = (props: PropsWithChildren) => {
  const [products, setProducts] = useState<any[]>([]);

  const { error, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const transformProducts = (productsObj: any) => {
      const loadedTasks = [];

      for (const productKey in productsObj) {
        loadedTasks.push({
          ...productsObj[productKey],
        });
      }

      setProducts(loadedTasks);
    };

    sendRequest(
      { url: "https://acai-store-default-rtdb.firebaseio.com/products.json" },
      transformProducts
    );
  }, [sendRequest]);

  return (
    <ProductsContext.Provider value={{ products: products, error, isLoading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
