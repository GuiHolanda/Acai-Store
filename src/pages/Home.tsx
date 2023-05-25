import { Card } from "../components/UI/Card";
import { useContext } from "react";
import { ProductsContext } from "../context/Products-context";
import { Modal } from "../components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../store/productModalSlice";
import { RootState } from "../store/store";
import { ProductModal } from "../components/productModal/ProductModal";

export const HomePage = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const productModalVisible = useSelector(
    (state: RootState) => state.productModal
  );

  return (
    <>
      {productModalVisible.isVisible && (
        <Modal onClose={() => dispatch(toggleVisibility())}>
          <ProductModal />
        </Modal>
      )}
      {isLoading && <h1 className="text-2xl text-primary">Loading...</h1>}
      {!isLoading && !error && (
        <>
          <section className="mb-6 w-fit mx-auto">
            <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 md:text-left text-center">
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
            <h2 className="text-lg sm:text-2xl pt-4 sm:pt-8 pb-5 md:text-left text-center">
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
      )}

      {!isLoading && error && <p>{error.message}</p>}
    </>
  );
};
