import {React,  useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../script";
import { useCart } from "../script";

export default function CategoryView() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const { section } = useParams();
  const list = products[section] || [];
  const { add } = useCart();

  return (
   

    <div className="section-block" >
      <h1 className="page-title">
        {section.replace(/([A-Z])/g, " $1").trim()}
      </h1>

      {list.length === 0 && (
        <h3 style={{ textAlign: "center", marginTop: 30 }}>
          No products found.
        </h3>
      )}

      <div className="product-grid">
     {list.map((item) => (
  <div key={item.id} className="product-card">

    <img src={item.image} alt={item.title} />

    <h3>{item.title}</h3>

    <Link to={`/product/${section}/${item.id}`}>
      <button className="btn-cta">View</button>
    </Link>

    <div className="details-actions">
      <button className="btn-cta" onClick={() => add(item, section)}>
        Add to Cart
      </button>
    </div>

  </div>
))}

      </div>
    </div>
  );
}
