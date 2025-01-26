import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <button className="one" onClick={() => dispatch(emptyCart())}>
        Empty cart
      </button>

      <div className="product-item">
        {data.map((item) => (
          <div className="product-box" key={item.name}>
            <img className="images" src={item.photo} alt={item.name} />
            <div className="product-details">
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Brand: {item.brand}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
            </div>
            <div className="product-buttons">
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
