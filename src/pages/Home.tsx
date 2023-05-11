import { Card } from "../components/UI/Card";
import { useContext } from "react";
import { ProductsContext } from "../context/Products-context";
import { Modal } from "../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../store/productModalSlice";
import { RootState } from "../store/store";
import { ProductOptionalsModal } from "../components/productOptionals/ProductOptionalsModal";

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
          <ProductOptionalsModal />
        </Modal>
      )}
      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 sm:text-left text-center">
          Mais Populares
        </h2>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-evenly">
          {products
            .filter((product) => product.category == "destaques")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </section>

      <section className="mb-6 w-fit mx-auto">
        <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 sm:text-left text-center">
          Promoções Impedíveis
        </h2>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-evenly">
          {products
            .filter((product) => product.category == "Promoções Impedíveis")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </section>
    </>
  );
};
