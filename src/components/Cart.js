import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css';
function Cart() {
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
  return (
    <div>
      <Link to="/">back to main page</Link>
      <h1>Cart Items</h1>
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={`${item.id}-${index}`}> 
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
            <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
            <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
            <div className="adjust-price"><span>Tax</span><span>{15}</span></div>
            <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
