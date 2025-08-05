import { useNavigate } from "react-router-dom";
import { useFood } from "../../contexts/StoreContext";
import "./Cart.css";
import { assets } from "../../assets/frontend_assets/assets";

const Cart = () => {
  const {
    cartItems,
    foodList,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    getTotalCartAmount,
    search,
  } = useFood();

  const total = getTotalCartAmount();
  const navigate = useNavigate();

  const filteredCartItems = foodList.filter((item) => {
    const quantity = cartItems[item.id];
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return quantity > 0 && matchesSearch;
  });

  return (
    <div className="cart">
      <div className="cart-items">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredCartItems.length > 0 ? (
              filteredCartItems.map((item) => {
                const quantity = cartItems[item.id];
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => removeFromCart(item.id)}>
                          <img
                            className="icons"
                            src={assets.remove_icon_red}
                            alt="-"
                          />
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={() => addToCart(item.id)}>
                          <img
                            className="icons"
                            src={assets.add_icon_green}
                            alt="+"
                          />
                        </button>
                      </div>
                    </td>
                    <td>${item.price * quantity}</td>
                    <td>
                      <span
                        className="cross"
                        onClick={() => removeItemCompletely(item.id)}
                      >
                        x
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  your cart is empty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-bottom">
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
          <button onClick={() => navigate("/order")} disabled={total === 0}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promo-code">
          <p>if you have have a promo code , enter it here </p>
          <div className="cart-promo-code-input">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
