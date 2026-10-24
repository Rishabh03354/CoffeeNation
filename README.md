# CoffeeNation - Web-Based Coffee E-Commerce Platform

A responsive e-commerce web platform for coffee ordering, menu exploration, and customer engagement.

## Features
- **Responsive Multi-Page Design:** Modern, interactive UI for browsing coffee blends, seasonal specials, and brand story across desktop and mobile.
- **Interactive Beverage Menu:** Dynamic showcases highlighting espresso, cappuccino, cold brews, and custom beverage variations.
- **User Authentication & Registration:** Backend user authentication powered by PHP and MySQL, featuring password hashing (password_verify), parameterized SQL queries, and session persistence.
- **Inquiry & Feedback Webhook:** Asynchronous JavaScript Fetch API integration routing customer contact inquiries to Google Apps Script.

## Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Responsive Layouts & Slideshows), JavaScript (ES6)
- **Backend:** PHP (MySQLi, Prepared Statements)
- **Database:** MySQL
- **Integrations:** Google Apps Script Webhooks (Contact API)

## Project Structure
`
CoffeeNation/
├── index.html               # Main homepage & coffee showcase
├── login-2.html             # User login portal
├── signuppage.html          # New user registration
├── developers.html          # Team / developer credits
├── learn_more.html          # Brand backstory & brew guides
├── assests/
│   ├── css/                 # Modular stylesheets (style.css, style_menu.css, slideshow.css)
│   ├── js/                  # Client-side scripts & webhook handlers
│   ├── php/                 # Database connectivity & authentication scripts
│   └── images/              # Coffee and UI visual assets
└── README.md
`

## Local Setup
1. Clone the repository:
   `ash
   git clone https://github.com/Rishabh03354/CoffeeNation.git
   `
2. Move files to your local server root (e.g. htdocs/ for XAMPP or www/ for WAMP).
3. Import or create the MySQL database coffeenation_india with table 
egistration.
4. Open http://localhost/CoffeeNation in your web browser.

---
Developed by **Rishabh Batwara**
