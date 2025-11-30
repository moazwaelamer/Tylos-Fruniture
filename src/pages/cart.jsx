// src/pages/Cart.jsx
import { React, useEffect } from "react";
import { useCart } from "../script";

export default function Cart() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { cart, change, remove } = useCart();

  const sendToWhatsApp = () => {
    let msg = "📦 Order Request\n\n";

    cart.forEach((i, index) => {
      const productUrl = `${window.location.origin}/product/${i.section}/${i.id}`;
      msg += `${index + 1}) ${i.title}\n`;
      msg += `Quantity: ${i.qty}\n`;
      msg += `Product Link: ${productUrl}\n\n`;
    });

    msg += `------------------------------------\n`;
    msg += `Total Items: ${cart.reduce((s, x) => s + x.qty, 0)}\n`;

    const encoded = encodeURIComponent(msg);
window.open(`https://wa.me/201068090555?text=${encoded}`, "_blank");
  };

  return (
    <div className="cart-page">
      <h1 className="page-title">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="center text-muted">Your cart is empty.</div>
      ) : (
        <>
          <div className="cart-items-wrapper">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                
                {/* IMAGE */}
                <div className="cart-img-box">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* DETAILS */}
                <div className="cart-info">
                  <h2 className="cart-name">{item.title}</h2>
                  <p className="cart-section">{item.section}</p>

                  <div className="qty-row">
                    <button className="qty-btn" onClick={() => change(item.id, -1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => change(item.id, 1)}>+</button>
                  </div>

                  <button className="delete-btn" onClick={() => remove(item.id)}>
                    Delete
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="cart-total">
            Total Items: {cart.reduce((s, x) => s + x.qty, 0)}
          </div>

          <button className="checkout-main-btn" onClick={sendToWhatsApp}>
            Send Order on WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
