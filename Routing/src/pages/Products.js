import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>Product Page</h2>
      <ul>
        <li>
          <Link to="/products/p1"> Book</Link>
        </li>
        <li>
          <Link to="/products/p2"> Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3"> Ball</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
