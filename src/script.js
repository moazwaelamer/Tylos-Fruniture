
// src/script.js - PRICE REMOVED VERSION
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

/* ==============================
   PRODUCTS DATA (price fields removed)
============================== */
export const products = {
  // 1–3
  bedrooms: [
    { id: 1, title: "Bedroom Set 1", description: "Modern bedroom set." },
    { id: 2, title: "Bedroom Set 2", description: "Elegant bedroom style." },
    { id: 3, title: "Bedroom Set 3", description: "Premium wood bedroom." },
  ],

  // 4–6
  sofas: [
    { id: 4, title: "Sofa 1", description: "Comfortable modern sofa." },
    { id: 5, title: "Sofa 2", description: "High-quality fabric sofa." },
    { id: 6, title: "Sofa 3", description: "Luxury corner sofa."},
  ],

  // 7–9
  chairs: [
    { id: 7, title: "Chair Model 1", description: "Comfortable dining chair.", image: "/images/chair1.jpg" },
    { id: 8, title: "Chair Model 2", description: "Office chair ergonomic.", image: "/images/chair2.jpg" },
    { id: 9, title: "Chair Model 3", description: "Premium comfort chair.", image: "/images/chair3.jpg" },
     { id: 99, title: "Chair Model 4", description: "Premium comfort chair.", image: "/images/chair4.jpg" },
  ],

  // 10–11
  wardrobes: [
    { id: 10, title: "Wardrobe 1", description: "2-door wardrobe.", image: "/images/wardrobes1.jpg" },
    { id: 11, title: "Wardrobe 2", description: "Large storage wardrobe.", image: "/images/wardrobes2.jpg" },
  ],

  // 12–27 (Bookcases 16 Item)
  bookcases: [
    { id: 12, title: "Bookcase 1", description: "Wooden bookcase.", image: "/images/bookcases1.jpg" },
    { id: 13, title: "Bookcase 2", description: "Modern wall bookcase.", image: "/images/bookcases2.jpg" },
    { id: 14, title: "Bookcase 3", description: "Tall storage unit.", image: "/images/bookcases3.jpg" },
    { id: 15, title: "Bookcase 4", description: "Glass-door bookcase.", image: "/images/bookcases4.jpg" },
    { id: 16, title: "Bookcase 5", description: "Office style shelves.", image: "/images/bookcases5.jpg" },
    { id: 17, title: "Bookcase 6", description: "Minimalist bookshelf.", image: "/images/bookcases6.jpg" },
    { id: 18, title: "Bookcase 7", description: "Corner bookcase.", image: "/images/bookcases7.jpg" },
    { id: 19, title: "Bookcase 8", description: "Living room bookshelf.", image: "/images/bookcases8.jpg" },
    { id: 20, title: "Bookcase 9", description: "Classic wood shelves.", image: "/images/bookcases9.jpg" },
    { id: 21, title: "Bookcase 10", description: "Slim storage bookcase.", image: "/images/bookcases10.jpg" },
    { id: 22, title: "Bookcase 11", description: "Wide bookcase.", image: "/images/bookcases11.jpg" },
    { id: 23, title: "Bookcase 12", description: "Premium wooden finish.", image: "/images/bookcases12.jpg" },
    { id: 24, title: "Bookcase 13", description: "Box design shelves.", image: "/images/bookcases13.jpg" },
    { id: 25, title: "Bookcase 14", description: "Modern industrial style.", image: "/images/bookcases14.jpg" },
    { id: 26, title: "Bookcase 15", description: "Wall-mounted bookcase.", image: "/images/bookcases15.jpg" },
    { id: 27, title: "Bookcase 16", description: "Bedroom storage unit.", image: "/images/bookcases16.jpg" },
  ],

  // 28–29
  drawerunits: [
    { id: 28, title: "Drawer Unit 1", description: "3-drawer unit.", image: "/images/drawerunits1.jpg" },
    { id: 29, title: "Drawer Unit 2", description: "Compact drawer set.", image: "/images/drawerunits2.jpg" },
  ],

  // 30–32
  counters: [
    { id: 30, title: "Counter Model 1", description: "Reception counter.", image: "/images/counter1.jpg" },
    { id: 31, title: "Counter Model 2", description: "Office counter.", image: "/images/counter2.jpg" },
    { id: 32, title: "Counter Model 3", description: "Modern wooden counter.", image: "/images/counter3.jpg" },
  ],

  // 33–35
  shoecabinets: [
    { id: 33, title: "Shoe Cabinet 1", description: "Slim shoe organizer.", image: "/images/shoecabinets1.jpg" },
    { id: 34, title: "Shoe Cabinet 2", description: "Wide shoe cabinet.", image: "/images/shoecabinets2.jpg" },
    { id: 35, title: "Shoe Cabinet 3", description: "Wooden shoe unit.", image: "/images/shoecabinets3.jpg" },
  ],

  // 36–38
  meetingtables: [
    { id: 36, title: "Meeting Table 1", description: "Large meeting table.", image: "/images/mettingtables1.jpg" },
    { id: 37, title: "Meeting Table 2", description: "Modern conference table.", image: "/images/mettingtables2.jpg" },
    { id: 38, title: "Meeting Table 3", description: "Premium meeting table.", image: "/images/mettingtables3.jpg" },
  ],

  // 39–61 (Office 23 items)
  office: [
    { id: 39, title: "Office Desk 1", description: "Workstation desk.", image: "/images/office1.jpg" },
    { id: 40, title: "Office Desk 2", description: "Modern office desk.", image: "/images/office2.jpg" },
    { id: 41, title: "Office Desk 3", description: "Executive desk.", image: "/images/office3.jpg" },
    { id: 42, title: "Office Desk 4", description: "L-shaped desk.", image: "/images/office4.jpg" },
    { id: 43, title: "Office Desk 5", description: "Premium wood desk.", image: "/images/office5.jpg" },
    { id: 44, title: "Office Desk 6", description: "Minimal desk.", image: "/images/office6.jpg" },
    { id: 45, title: "Office Desk 7", description: "Gaming style desk.", image: "/images/office7.jpg" },
    { id: 46, title: "Office Desk 8", description: "Metal frame desk.", image: "/images/office8.jpg" },
    { id: 47, title: "Office Desk 9", description: "Compact desk.", image: "/images/office9.jpg" },
    { id: 48, title: "Office Desk 10", description: "Adjustable height desk.", image: "/images/office10.jpg" },
    { id: 49, title: "Office Desk 11", description: "Corner workstation.", image: "/images/office11.jpg" },
    { id: 50, title: "Office Desk 12", description: "Small workspace desk.", image: "/images/office12.jpg" },
    { id: 51, title: "Office Desk 13", description: "Wide office desk.", image: "/images/office13.jpg" },
    { id: 52, title: "Office Desk 14", description: "Modern executive desk.", image: "/images/office14.jpg" },
    { id: 53, title: "Office Desk 15", description: "Double workstation desk.", image: "/images/office15.jpg" },
    { id: 54, title: "Office Desk 16", description: "Premium wooden desk.", image: "/images/office16.jpg" },
    { id: 55, title: "Office Desk 17", description: "Floating desk.", image: "/images/office17.jpg" },
    { id: 56, title: "Office Desk 18", description: "Solid wood workstation.", image: "/images/office18.jpg" },
    { id: 57, title: "Office Desk 19", description: "Wide corner desk.", image: "/images/office19.jpg" },
    { id: 58, title: "Office Desk 20", description: "Black premium desk.", image: "/images/office20.jpg" },
    { id: 59, title: "Office Desk 21", description: "White minimalist desk.", image: "/images/office21.jpg" },
    { id: 60, title: "Office Desk 22", description: "Basic study desk.", image: "/images/office22.jpg" },
    { id: 61, title: "Office Desk 23", description: "Full office setup.", image: "/images/office23.jpg" },
  ],

  // 62–63
  bathroomcabinets: [
    { id: 62, title: "Bathroom Cabinet 1", description: "Under-sink cabinet.", image: "/images/bathroomcabinets1.jpg" },
    { id: 63, title: "Bathroom Cabinet 2", description: "Wall bathroom cabinet.", image: "/images/bathroomcabinets2.jpg" },
  ],

  // 64
  workplace: [
    { id: 64, title: "Workspace Shelf", description: "Office organization shelf.", image: "/images/workplace.jpg" },
  ],

  // 65
  kitchens: [
    { id: 65, title: "Custom Kitchens", description: "High-end kitchen sets.", image: "/images/kitchen1.jpg" },
  ],

  // 66
  livingroomsets: [
    { id: 66, title: "Living Room Sets", description: "Complete living room setup.", image: "/images/livingroomsets.jpg" },
  ],
};


/* ==============================
   LANDING SLIDES (images only, no prices)
============================== */
export const landingSlides = [
  { key: "bedrooms", title: "Modern Bedrooms", desc: "Explore stylish bedroom sets.", img: "/images/bed1.jpg" },
  { key: "sofas", title: "Luxury Sofas", desc: "Upgrade your living room.", img: "/images/sofa1.jpg" },
   { key: "bookcases", title: "Modern Bookcases", desc: "Beautiful bookcases for any room.", img: "/images/bookcases14.jpg" },
  { key: "wardrobes", title: "Spacious Wardrobes", desc: "Organize your clothes easily.", img: "/images/wardrobes1.jpg" },
  { key: "kitchens", title: "Custom Kitchens", desc: "High-end kitchen sets.", img: "/images/kitchen1.jpg" },
  { key: "drawerunits", title: "Drawer Units", desc: "Organize your essentials.", img: "/images/drawerunits2.jpg" },
  { key: "bathroomcabinets", title: "Bathroom Cabinets", desc: "Perfect storage solutions.", img: "/images/bathroomcabinets2.jpg" },
  { key: "counters", title: "Kitchen Counters", desc: "Premium counter materials.", img: "/images/counter1.jpg" },
  { key: "livingroomsets", title: "Living Room Sets", desc: "Complete living room setups.", img: "/images/living1.jpg" },
  { key: "meetingtables", title: "Meeting Tables", desc: "Professional office tables.", img: "/images/mettingtables2.jpg" },
  { key: "office", title: "Office Furniture", desc: "Desks and workspace designs.", img: "/images/office8.jpg" },
  { key: "shoecabinets", title: "Shoe Cabinets", desc: "Slim shoe organizers.", img: "/images/shoecabinets1.jpg" },
  { key: "chairs", title: "Comfortable Chairs", desc: "Modern chairs built for comfort.", img: "/images/chair4.jpg" },
  { key: "workplace", title: "Workspace Shelves", desc: "Organize your workspace.", img: "/images/workplace.jpg" },
];
/* ==============================
   AUTH SYSTEM (unchanged)
============================== */
export const signupUser = (username, email, password) => {
  const cleanUsername = String(username).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPassword = String(password).trim();

  if (!cleanUsername || !cleanEmail || !cleanPassword) {
    toast.warn("Please fill all fields!");
    return { success: false };
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.email === cleanEmail)) {
    toast.error("Email already exists!");
    return { success: false };
  }

  const newUser = { username: cleanUsername, email: cleanEmail, password: cleanPassword };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully!");
  return { success: true };
};

export const loginUser = (email, password) => {
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPassword = String(password).trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const savedUser = users.find(
    (user) => user.email === cleanEmail && user.password === cleanPassword
  );

  if (!savedUser) {
    toast.error("Invalid email or password!");
    return { success: false };
  }

  localStorage.setItem("currentUser", JSON.stringify(savedUser));
  toast.success(`Welcome back, ${savedUser.username.split(" ")[0]}!`);

  return { success: true, user: savedUser };
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  toast.info("You have been logged out.");
};

/* ==============================
   CART SYSTEM (price removed)
============================== */

export const getCartKey = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return null;
  return `cart_${user.username.replace(/\s+/g, "_")}`;
};

export const getCart = () => {
  const key = getCartKey();
  if (!key) return [];
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveCart = (cart) => {
  const key = getCartKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(cart));
};

export const addToCart = (product, section) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    toast.warn("Please log in first!");
    return;
  }

  const key = getCartKey();
  let cart = JSON.parse(localStorage.getItem(key)) || [];

  const found = cart.find((c) => c.id === product.id);

  if (found) {
    found.qty++;
  } else {
    // push product without price fields
    cart.push({
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description || "",
      qty: 1,
      section: section,
    });
  }

  saveCart(cart);
  toast.success(`${product.title} added to cart`);
};

/* ==============================
   HOOKS (REAL-TIME)
============================== */

export const useProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => setData(products), []);
  return data;
};

export const changeQty = (id, amt) => {
  let cart = getCart();
  const item = cart.find((c) => c.id === id);

  if (!item) return cart;

  item.qty += amt;
  if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);

  saveCart(cart);
  return cart;
};

export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter((c) => c.id !== id);
  saveCart(cart);
  return cart;
};

export const useCart = () => {
  const [cart, setCart] = useState(getCart());

  const refresh = () => setCart(getCart());

  return {
    cart,
    // total removed (no prices)
    add: (product, section) => { addToCart(product, section); refresh(); },
    remove: (id) => { removeFromCart(id); refresh(); },
    change: (id, amt) => { changeQty(id, amt); refresh(); },
    refresh
  };
};

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  useEffect(() => {
    const syncUser = () => {
      const current = JSON.parse(localStorage.getItem("currentUser"));
      setUser(current);
    };

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const login = (email, pass) => {
    const result = loginUser(email, pass);
    if (result.success) {
    setUser(result.user);
  }
    return result;
  };

  const signup = (u, e, p) => signupUser(u, e, p);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return { user, login, signup, logout };
};
