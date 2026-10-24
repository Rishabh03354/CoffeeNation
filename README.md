# ☕ CoffeeNation — Artisan Coffee E-Commerce & Interactive Brew Experience

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-017143?style=for-the-badge&logo=github&logoColor=white)](https://rishabh03354.github.io/CoffeeNation/)
[![GitHub Repo](https://img.shields.io/badge/Repository-CoffeeNation-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rishabh03354/CoffeeNation)
[![Frontend](https://img.shields.io/badge/Frontend-HTML5_%7C_CSS3_%7C_ES6+-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://rishabh03354.github.io/CoffeeNation/)
[![Backend](https://img.shields.io/badge/Backend-PHP_%7C_MySQL-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://github.com/Rishabh03354/CoffeeNation)
[![Status](https://img.shields.io/badge/Deployment-Live_%26_Operational-success?style=for-the-badge)](https://rishabh03354.github.io/CoffeeNation/)

> A luxury, interactive e-commerce platform and beverage mixology experience designed for artisan coffee lovers. Features real-time brew customization, a slide-out shopping cart drawer with promo engine, a 2-step flavor matching quiz, instant menu filtering, and dual client/server architecture.

---

## 🌐 Live Application

Explore the deployed web app directly in your browser (no installation required):  
👉 **[https://rishabh03354.github.io/CoffeeNation/](https://rishabh03354.github.io/CoffeeNation/)**

---

## ✨ Key Interactive Features

### 1. 🎨 Dynamic 3D-Feel Hero Showcase
* **Beverage Swapper:** Smoothly switch between signature drinks (Classic Cold Coffee, Espresso Doppio, Green Cascara) with micro-animated scaling and fade transitions.
* **Palette Morphing Background:** Changing the drink dynamically shifts the ambient background aura to complement the selected brew.

### 2. 🧪 "Build Your Brew" Mixologist Customizer
* **Interactive Drink Builder:** Real-time pricing engine that calculates customized beverages on the fly:
  * **Brew Base:** Cold Brew Concentrate, Double Espresso, Blonde Roast, Nitro Cascara.
  * **Milk / Mylk:** Whole Dairy, Oat Milk, Almond Silk, Coconut Froth.
  * **Sweetness Slider:** 0% (Unsweetened), 25% (Light), 50% (Standard), 75% (Sweet), 100% (Extra Sweet).
  * **Artisan Add-ons:** Madagascar Vanilla, Salted Caramel Drizzle, Whipped Cloud, Cinnamon Dust, Single-Origin Shot.
* **Instant Cart Integration:** Custom drink recipes are compiled and dispatched directly into the shopping cart.

### 3. 🛍️ Slide-Out Cart Drawer & Checkout Flow
* **Interactive Cart Drawer:** Slides smoothly from the right with a live item counter badge in the glassmorphic navigation bar.
* **Live Calculation:** Dynamic quantity adjustments with automatic recalculation of subtotal, 5% GST tax, and grand total.
* **Promo Code Engine:** Input code **`COFFEE10`** to unlock an instant 10% discount.
* **Simulated Checkout Modal:** Complete orders with realistic order confirmations, unique Order IDs (e.g., `#CN-482910`), and pickup time estimations.

### 4. 🧭 "Find Your Roast" Flavor Profiling Quiz
* An interactive 2-step taste discovery tool:
  * **Step 1:** Select preferred flavor profile (*Bold & Smoky*, *Velvety & Creamy*, *Fruity & Citrusy*, or *Crisp & Refreshing*).
  * **Step 2:** Choose temperature (*Iced & Chilled* vs. *Steaming Hot*).
  * **Result:** Recommends the exact matching beverage with tasting notes and a single-click "Add to Bag" button.

### 5. 🔍 Real-Time Menu Filtering & Instant Search
* **Category Tabs:** Filter between *All Items*, *Cold Brews*, *Hot Classics*, *Thick Shakes*, and *Herbal Teas* without page reloads.
* **Instant Search Input:** Live query matching across all titles, ingredients, and categories.

### 6. 💎 Modern Glassmorphic UI & Atmosphere Gallery
* Deep roast dark palette (`#0d0c0a`) accented by emerald green (`#017143`) and warm hazelnut tones.
* Responsive photo gallery showcasing café ambiance, artisan brewing stations, and customer lounge areas.

---

## 🏗️ Architecture & Dual-Mode Operation

CoffeeNation is engineered to run seamlessly across two operational modes:

| Mode | Environment | Features Active |
|---|---|---|
| **Static / Serverless** | GitHub Pages (Cloud) | Client-side reactive engine, LocalStorage persistence, instant checkout simulation, flavor quiz, cart drawer. |
| **Full-Stack** | Apache / XAMPP / LAMP (Local) | PHP backend (`connect.php`, `connect2.php`), MySQL database persistence, prepared statements, and session management. |

---

## 📁 Repository Structure

```
CoffeeNation/
├── index.html                   # Main interactive storefront & brew customizer
├── login-2.html                 # Customer login portal
├── signuppage.html              # New customer registration
├── developers.html              # Developer credits & engineering notes
├── learn_more.html              # Coffee origin story & brewing methodology
├── script.js                    # Core interactive engine (cart, quiz, builder)
├── assests/
│   ├── css/
│   │   ├── style.css            # Global luxury design system & hero styles
│   │   ├── style_menu.css       # Customizer, cart drawer, quiz & modal styles
│   │   ├── slideshow.css        # Ambiance gallery slideshow styles
│   │   └── section.css          # Section spacing & layout tokens
│   ├── js/
│   │   └── script.js            # Modular copy of client-side logic
│   ├── php/
│   │   ├── connect.php          # Database registration & credential handling
│   │   └── connect2.php         # Secure login verification & session binding
│   └── images/                  # High-resolution beverage & cafe photography
│       ├── interior.webp        # Cafe interior banner
│       ├── shop 1.jpg           # Classic Cold Coffee
│       ├── shop 2.jpg           # Hazelnut Frappe
│       ├── shop 3.jpg           # Green Cascara Tonic
│       ├── select 1.jpg - 8.jpg # Menu item photography
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Option A: Open Live Web App (Zero Setup)
Simply navigate to:  
👉 **[https://rishabh03354.github.io/CoffeeNation/](https://rishabh03354.github.io/CoffeeNation/)**

### Option B: Local Full-Stack Setup (with PHP & MySQL)

#### Prerequisites
* [XAMPP](https://www.apachefriends.org/) or [WAMP](https://www.wampserver.com/) installed on your machine.
* Git installed.

#### Setup Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rishabh03354/CoffeeNation.git
   ```
2. **Move to web server directory:**
   * Move the `CoffeeNation` folder into your server's root (e.g., `C:\xampp\htdocs\CoffeeNation`).
3. **Configure MySQL Database:**
   * Start Apache and MySQL from the XAMPP Control Panel.
   * Open `http://localhost/phpmyadmin/`.
   * Create a database named `coffeenation_india`.
   * Create a table named `registration`:
     ```sql
     CREATE TABLE registration (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         email VARCHAR(150) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```
4. **Launch Application:**
   * Open `http://localhost/CoffeeNation/` in your web browser.

---

## 🔒 Security & Best Practices

* **SQL Injection Prevention:** PHP backend uses parameterized prepared statements (`mysqli::prepare`) for query execution.
* **Password Hashing:** Passwords securely hashed using modern cryptographic algorithms (`password_hash` with `PASSWORD_DEFAULT`).
* **XSS Hygiene:** Safe DOM manipulation practices and structured element creation.
* **Responsive Layout:** 100% fluid CSS Flexbox and Grid layouts optimized for 4K displays down to mobile screens.

---

## 👨‍💻 Author

**Rishabh Batwara**  
*Computer Science & Engineering (Data Science)*  
* **GitHub:** [@Rishabh03354](https://github.com/Rishabh03354)  
* **Live CoffeeNation:** [https://rishabh03354.github.io/CoffeeNation/](https://rishabh03354.github.io/CoffeeNation/)  
* **Crop Care AI Platform:** [https://github.com/Rishabh03354/Crop-Care](https://github.com/Rishabh03354/Crop-Care)  
* **TravelGo Platform:** [https://github.com/Rishabh03354/Travel-Website](https://github.com/Rishabh03354/Travel-Website)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
