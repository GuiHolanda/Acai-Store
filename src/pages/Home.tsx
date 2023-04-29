import { Card } from "../components/UI/Card";
import tijelaAcai from "../assets/images/tijela_Açai_01.jpg";
import { useContext } from "react";
import { ProductsContext } from "../context/Products-context";
import { Modal } from "../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../store/productModalSlice";
import { RootState } from "../store/store";

export const HomePage = () => {
  const { products } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const productModalVisible = useSelector(
    (state: RootState) => state.productModal
  );

  return (
    <>
      {productModalVisible.isVisible && (
        <Modal onClose={() => dispatch(toggleVisibility())}>
          <Card
            product={{
              id: "p1",
              title: "4 Açais com ou sem banana",
              description:
                "Isso mesmo!!! 4 açaís 300ml cristal, com ou sem banana e com ou sem granola",
              image: tijelaAcai,
              price: "R$ 85,00",
              category: "destaques",
            }}
            key={productModalVisible.product.id}
            title={productModalVisible.product.title}
            image={productModalVisible.product.image}
            description={productModalVisible.product.description}
            price={productModalVisible.product.price}
          />
        </Modal>
      )}
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5">Destaques</h2>
        <div className="flex flex-wrap gap-8">
          {products
            .filter((product) => product.category == "destaques")
            .map((product) => (
              <Card
                product={product}
                key={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
      </section>
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5">
          Promoções Impedíveis
        </h2>
        <div className="flex flex-wrap gap-8">
          {products
            .filter((product) => product.category == "Promoções Impedíveis")
            .map((product) => (
              <Card
                key={product.id}
                product={product}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
      </section>
    </>
  );
};
