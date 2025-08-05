import "./PlaceOrder.css";
import { useFood } from "../../contexts/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { getTotalCartAmount, clearCart } = useFood();
  const total = getTotalCartAmount();
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    toast.success("Your order has been placed successfully!");
    navigate("/");
  };

  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${total}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>delivery fee</p>
              <p>${total === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>${total === 0 ? 0 : total + 2}</b>
            </div>
          </div>
          <button onClick={handleOrder}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
