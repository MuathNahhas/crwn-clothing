import { useContext } from "react";
import "./shop.styles.scss"
import ProductCard from "../../component/product-card/product-card.component";
import { productsContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
