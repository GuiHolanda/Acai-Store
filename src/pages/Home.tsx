import tijelaAcai from "../assets/images/tijela_Açai_01.jpg";
import hamburguer from "../assets/images/hamburguer.jpg";
import crepe from "../assets/images/crepe.jpg";
import baquete from "../assets/images/sanduiche-com-almondegas.jpg";
import tapioca from "../assets/images/tapioca.jpg";
import suco from "../assets/images/dextoxmor.jpg";
import { Card } from "../components/UI/Card";

export const HomePage = () => {
  return (
    <>
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5">Destaques</h2>
        <div className="flex flex-wrap gap-8">
          <Card
            title="4 Açais com ou sem banana"
            image={tijelaAcai}
            description="Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou
                sem granola"
            price="R$ 85,00"
          />{" "}
          <Card
            title="Hambúrguer + Batata Frita + Coca 250ml"
            image={hamburguer}
            description="Especial Bland Bovino 160g, queijo prato, bacon e maionese da casa + Batata Frita + Coca cola 250 ml."
            price="R$ 47,50"
          />{" "}
          <Card
            title="Crepe + Mini Salada + Coca 250 ml"
            image={crepe}
            description="Crepe de filé de frango, queijo mussarela e tomate confit + Mini Salada + Coca cola 250ml."
            price="R$ 35,00"
          />
        </div>
      </section>
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5">
          Promoções Impedíveis
        </h2>
        <div className="flex flex-wrap gap-8">
          <Card
            title="4 Açais com ou sem banana"
            image={baquete}
            description="Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou
              sem granola"
            price="R$ 85,00"
          />{" "}
          <Card
            title="Hambúrguer + Batata Frita + Coca 250ml"
            image={tapioca}
            description="Especial Bland Bovino 160g, queijo prato, bacon e maionese da casa + Batata Frita + Coca cola 250 ml."
            price="R$ 47,50"
          />{" "}
          <Card
            title="Crepe + Mini Salada + Coca 250 ml"
            image={suco}
            description="Crepe de filé de frango, queijo mussarela e tomate confit + Mini Salada + Coca cola 250ml."
            price="R$ 35,00"
          />
        </div>
      </section>
    </>
  );
};
