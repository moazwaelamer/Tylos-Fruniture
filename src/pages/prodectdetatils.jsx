// src/pages/ProductDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../script";
import { Helmet } from "react-helmet";
import { useCart } from "../script";

export default function ProductDetails() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const { section, id } = useParams();
  const list = products[section] || [];
  const product = list.find((p) => String(p.id) === String(id));

  const { add } = useCart();

  if (!product)
    return (
      <div style={{ padding: 40 }}>
        <h2>Product not found</h2>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={window.location.origin + product.image} />
      </Helmet>

      <div className="details-container">
        <div className="details-left">
       <img 
  src={product.image} 
  alt={product.title} 
  className="details-img" 
/>
    

        </div>

        <div className="details-info pop">
          <h1 className="details-title">{product.title}</h1>

          {/* السعر اتحذف */}

          <div className="details-actions">
            <button className="btn-cta" onClick={() => add(product, section)}>
              Add to Cart
            </button>
          </div>

          <p className="details-desc">{product.description}</p>

          <div className="similar-wrapper">
            <h4>Similar products</h4>

           <div className="similar-list">
  {[...list.filter((p) => p.id > product.id), ...list.filter((p) => p.id < product.id)]
    .slice(0, 4)
    .map((p) => (
      <Link
        key={p.id}
        to={`/product/${section}/${p.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="similar-card">
          <img src={p.image} alt={p.title} />
          <div className="similar-title">{p.title}</div>
        </div>
      </Link>
    ))}
</div>

          </div>
        </div>
      </div>
    </>
  );
}
