import ProductsListItem from "../ProductsListItem/ProductsListItem";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <section>
      <ul>
        {products.map((product) => (
          <ProductsListItem
            key={product.id}
            {...product}
            // url={product.url}
            // model={product.model}
            // price={product.price}
            // currency={product.currency}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
