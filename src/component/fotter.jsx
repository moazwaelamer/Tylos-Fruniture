import React from "react";
import "../style.css";
import {FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container py-5">
        <div className="row">

          {/* ABOUT */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 text-white">Tylos Furniture Trading</h5>
            <p className="footer-text">
              Premium-quality furniture crafted with durability and elegant design.
              We deliver modern home & office furniture for all spaces.
            </p>

            <div className="footer-social mt-3">
              <a href="https://wa.me/201068090555?text=Hello">
  <FaWhatsapp />
</a>
             <a href="https://www.tiktok.com/@tylos.furniture?_r=1&_t=ZS-91dOKUhuERU"><FaTiktok /></a>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 text-white">Categories</h5>

            <div className="footer-cat-grid">

             <ul>
  <li><a href="/category/meetingtables">Meeting Tables</a></li>
  <li><a href="/category/chairs">Chairs</a></li>
  <li><a href="/category/wardrobes">Wardrobes</a></li>
  <li><a href="/category/bookcases">Bookcases</a></li>
   <li><a href="/category/office">Office Furniture</a></li>
</ul>

<ul>
  <li><a href="/category/bathroomcabinets">Bathroom Cabinets</a></li>
  <li><a href="/category/counters">Counters</a></li>
  <li><a href="/category/shoecabinets">Shoe Cabinets</a></li>
  <li><a href="/category/drawerunits">Drawer Units</a></li>
 
 
</ul>

            </div>
          </div>

          {/* CATALOG */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 text-white">Catalog</h5>

            <a href="https://drive.google.com/file/d/1MFr_W9Mvbj5OgmZBjNe-HDlSTugDLEk5/view?usp=drive_link" target="_blank" className="catalog-btn">
              📘 View Catalog
            </a>

            <a
  href="https://drive.google.com/uc?export=download&id=1MFr_W9Mvbj5OgmZBjNe-HDlSTugDLEk5"
  download
  className="catalog-btn"
>
  ⬇️ Download Catalog
</a>

          </div>

        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">
          © 2025 Tylos Furniture Trading – All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

