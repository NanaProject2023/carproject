import "./Cart.css";

function Cart({ cart, removeFromCart, closeCart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">

      <div className="cart">

        <button className="close-cart" onClick={closeCart}>
          ✕
        </button>

        <h2>Your Cart</h2>

        {cart.map((item, index) => (

          <div className="cart-item" key={index}>

            <img
              src={`/assets/${item.image_url}`}
              alt={item.make}
            />

            <div className="cart-details">

              <h4>{item.make} {item.model}</h4>
              <p>{item.year}</p>
              <p>${item.price}</p>

            </div>

            <button
              className="delete-btn"
              onClick={() => removeFromCart(index)}
            >
              ✕
            </button>

          </div>

        ))}

        <h3 className="cart-total">
          Total: ${total}
        </h3>

        <div className="cart-actions">

          <button onClick={closeCart}>
            Continue Shopping
          </button>

          <button className="checkout-btn">
            Go To Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;