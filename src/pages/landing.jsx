import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products, landingSlides } from "../script";

export default function Landing() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const navigate = useNavigate();
  /* ========================= HERO SLIDER SETTINGS ========================= */
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2200,
    pauseOnHover: false,
  };
  /* ========================= TREND SLIDER ========================= */
const featuredSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

useEffect(() => {
  const sectionId = localStorage.getItem("scrollTo");

  if (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
    localStorage.removeItem("scrollTo");
  }
}, []);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) el.classList.add("fade-up");
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="page-container">

      {/* ========================= HERO SLIDER ========================= */}
      <div className="landing-slider-container section-inner  hero-slider  full-width"  >
        <Slider {...heroSettings}>
          {landingSlides
            .filter((s) => !["bedrooms", "sofas", "workplace", "kitchens", "livingroomsets"].includes(s.key))
            .map((s) => (
              <div key={s.key} className="slide">
                <div className="slide-content">
                  <div className="text">
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>

                    <button className="slide-btn" onClick={() => navigate(`/category/${s.key}`)}>
                      Explore
                    </button>
                  </div>

                  <div className="image">
                    <img className="slider-img" src={s.img} alt={s.title} />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      {/* ========================= CATEGORY GRID ========================= */}
      <div id="categories-section" className="section-block  scroll-offset section-inner  full-width " >
        <h1 className="page-title">Categories</h1>

        <div className="cat-grid">
          {Object.keys(products)
            .filter((sec) => !["bedrooms", "sofas", "workplace", "kitchens", "livingroomsets"].includes(sec))
            .map((sec) => {
              const img = products[sec][0]?.image;
              const title = sec.replace(/([A-Z])/g, " $1").trim();

              return (
                <button
                  key={sec}
                  onClick={() => navigate(`/category/${sec}`)}
                  className="cat-card"
                >
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>Shop our latest {title}</p>
                </button>
              );
            })}
        </div>
      </div>

      {/* ========================= OTHER CATEGORIES ========================= */}
      <div className="section-block  full-width section-inner other-section"  >
        <h1 className="page-title">Other Categories (Available Upon Request)</h1>

        <div className="cat-gridd other-fix">
          {[
            { key: "bedrooms", title: "Bedrooms" },
            { key: "sofas", title: "Sofas" },
            { key: "workplace", title: "Workplace Furniture" },
            { key: "kitchens", title: "Custom Kitchens" },
            { key: "livingroomsets", title: "Living Room Sets" },
          ].map((item) => (
            <div key={item.key} className="cat-card small-card">
              <div className="coming-box">Coming Soon</div>

              <h3>{item.title}</h3>
              <p>Available upon request</p>

              <a
                className="slide-btn"
                href={`https://wa.me/201068090555?text=Hello, I would like info about ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>

     {/* ========================= TRENDING SECTION ========================= */}
<div className="section-block full-width section-inner">
  <h1 className="page-title">Trending Now</h1>

  {/* ====== موبايل: Scroll أفقي بدل Slider ====== */}
  {window.innerWidth <= 480 ? (
    <div className="trending-mobile">
      {Object.keys(products)
        .filter((sec) => !["bedrooms","sofas","workplace","kitchens","livingroomsets"].includes(sec))
        .flatMap((sec) => products[sec].slice(0, 1))
        .map((item) => {
          const correctSection = Object.keys(products).find((sec) =>
            products[sec].some((p) => p.id === item.id)
          );
          return (
            <div key={item.id} className="featured-card mobile-card">
              <img loading="lazy" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <button
                className="slide-btnn"
                onClick={() => navigate(`/product/${correctSection}/${item.id}`)}
              >
                View
              </button>
            </div>
          );
        })}
    </div>
  ) : (
    /* ====== كمبيوتر: Slider شغال عادي ====== */
    <Slider {...featuredSettings} className="trending-slider">
      {Object.keys(products)
        .filter((sec) => !["bedrooms","sofas","workplace","kitchens","livingroomsets"].includes(sec))
        .flatMap((sec) => products[sec].slice(0, 1))
        .map((item) => {
          const correctSection = Object.keys(products).find((sec) =>
            products[sec].some((p) => p.id === item.id)
          );
          return (
            <div key={item.id} className="featured-card">
              <img loading="lazy" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <button
                className="slide-btnn"
                onClick={() => navigate(`/product/${correctSection}/${item.id}`)}
              >
                View
              </button>
            </div>
          );
        })}
    </Slider>
  )}
</div>
    </div>
  );
}
