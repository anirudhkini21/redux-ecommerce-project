import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("redux data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="home">HOME</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search for products"
        ></input>
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=OFQfvkU48JTYo1aehyB1kPX7sh2CjA5I66Pdmc9qxho="
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
