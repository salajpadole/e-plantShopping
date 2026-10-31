import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(
        String(item.cost).replace('$', '')
      );

      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  // Continue shopping
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  // Increase quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity + 1,
    }));
  };

  // Decrease quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate individual item total
  const calculateTotalCost = (item) => {
    const price = parseFloat(
      String(item.cost).replace('$', '')
    );

    return (price * item.quantity).toFixed(2);
  };

  // Checkout
  const handleCheckoutShopping = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-container">

      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Discover beautiful plants for your space.</p>
        </div>
      ) : (
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>

              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">

                <div className="cart-item-name">
                  {item.name}
                </div>

                <div className="cart-item-cost">
                  {item.cost}
                </div>

                <div className="cart-item-quantity">

                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>

                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>

                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>

                </div>

                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      <div
        style={{ marginTop: '20px', color: 'black' }}
        className="total_cart_amount"
      />

      <div className="continue_shopping_btn">

        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <br />

        <button
          className="get-started-button1"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>

      </div>

    </div>
  );
};

export default CartItem;