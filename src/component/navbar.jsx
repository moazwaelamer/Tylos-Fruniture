import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import logo from "../assests/logo.jpg";
import React, { useState, useEffect } from "react";
import { useAuth } from "../pages/authcontext";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ⬅ لتحديد الـ Active أول ما الصفحة تفتح
useEffect(() => {
  const path = window.location.pathname;

  if (path === "/") {
    // لو انت على الهوم… خلّي الـ active اللي المستخدم ضغطه مش تتغير
    if (activeItem !== "categories") {
      setActiveItem("home");
    }
  } 
  else if (path === "/cart") setActiveItem("cart");
  else if (path === "/login") setActiveItem("login");
}, [window.location.pathname]);

  // ⬅ Scroll لكاتجوري عند الرجوع للهوم
  useEffect(() => {
    if (localStorage.getItem("scrollTo") === "categories-section") {
      const section = document.getElementById("categories-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollTo");
      }
    }
  }, []);

  const handleCategories = () => {
    if (window.location.pathname === "/") {
      const section = document.getElementById("categories-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      localStorage.setItem("scrollTo", "categories-section");
      navigate("/");
    }
    setOpenMenu(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <Navbar bg="white" className="py-2 shadow-sm fixed-top">
          <Container className="d-flex justify-content-between align-items-center">

            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 brand-wrapper">
              <img src={logo} alt="Logo" className="main-logo" />
              <span>Tylos Furniture Trading</span>
            </Navbar.Brand>

            {/* HAMBURGER */}
            <div className="mobile-menu-btn" onClick={() => setOpenMenu(true)}>
              ☰
            </div>

            {/* Desktop Links */}
            <Nav className="ms-auto d-none d-lg-flex align-items-center">

              <Nav.Link
                as={Link}
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Nav.Link>

              <Nav.Link onClick={handleCategories} style={{ cursor: "pointer" }}>
                Categories
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>

              {user ? (
                <Dropdown align="end" className="ms-3">
                  <Dropdown.Toggle
                    variant="light"
                    className="d-flex align-items-center bg-white border-0"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      width="40"
                      className="user-avatar"
                    />
                    <span className="fw-semibold">{user.username.split(" ")[0]}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-danger fw-bold" onClick={handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button className="nav-login-btn ms-3">
                  <Link to="/login" style={{ color: "#fff" }}>Login</Link>
                </button>
              )}
            </Nav>

          </Container>
        </Navbar>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`offcanvas-overlay ${openMenu ? "show" : ""}`}
        onClick={() => setOpenMenu(false)}
      ></div>

      <div className={`offcanvas-menu ${openMenu ? "open" : ""}`}>

        <div className="offcanvas-header">
          <span className="offcanvas-close" onClick={() => setOpenMenu(false)}>×</span>
        </div>

        {user && (
          <div className="mobile-avatar-box mobile-only">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="mobile-avatar-img"
            />
            <span className="fw-semibold">{user.username.split(" ")[0]}</span>
          </div>
        )}

        <div className="offcanvas-links">

          {/* HOME */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveItem("home");
              setOpenMenu(false);
            }}
            className={activeItem === "home" ? "active-link" : ""}
          >
            Home
          </Link>

          {/* CATEGORIES */}
          <span
            onClick={() => {
              setActiveItem("categories");
              handleCategories();
            }}
            className={activeItem === "categories" ? "active-link" : ""}
          >
            Categories
          </span>

          {/* CART */}
          <Link
            to="/cart"
            onClick={() => {
              setActiveItem("cart");
              setOpenMenu(false);
            }}
            className={activeItem === "cart" ? "active-link" : ""}
          >
            Cart
          </Link>

          {/* LOGIN */}
          {!user && (
            <Link
              to="/login"
              onClick={() => {
                setActiveItem("login");
                setOpenMenu(false);
              }}
              className={activeItem === "login" ? "active-link" : ""}
            >
              Login
            </Link>
          )}{user && (
  <span
    onClick={() => {
      handleLogout();
      setActiveItem("");
      setOpenMenu(false);
    }}
    className="text-danger fw-bold"
    style={{ padding: "12px 0", display: "block", cursor: "pointer" }}
  >
    Logout
  </span>
)}


        </div>

        {/* SOCIAL ICONS */}
        
          <div className="offcanvas-social">
            <a href="https://wa.me/201068090555?text=Hello%20I%20am%20interested">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@tylos.furniture?_r=1&_t=ZS-91dOKUhuERU">
              <FaTiktok />
            </a>
         
        </div>

      </div>
    </>
  );
}
