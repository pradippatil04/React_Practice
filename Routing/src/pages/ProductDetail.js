import { useHistory, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  console.log('props :', useHistory() , params);

  return (
    <section>
      <h2>Product Details : {params.productId}</h2>
    </section>
  );
};

export default ProductDetail;
