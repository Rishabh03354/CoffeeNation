// CoffeeNation Interactive Master Engine

// ==================== 1. HERO BEVERAGE SWITCHER ====================
function imgSlider(imagePath) {
    const mainImg = document.getElementById('heroCup');
    if (mainImg) {
        mainImg.style.opacity = '0.2';
        mainImg.style.transform = 'translateY(15px) scale(0.95)';
        setTimeout(() => {
            mainImg.src = imagePath;
            mainImg.style.opacity = '1';
            mainImg.style.transform = 'translateY(0px) scale(1)';
        }, 180);
    }
}

function changeCircleColor(colorHex, element) {
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.style.background = colorHex;
    }
    const thumbs = document.querySelectorAll('.thumb li');
    thumbs.forEach(t => t.classList.remove('active-thumb'));
    if (element) {
        element.classList.add('active-thumb');
    }
}

// ==================== 2. TOAST NOTIFICATION ====================
function showCoffeeToast(message) {
    let toast = document.getElementById('coffeeToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'coffeeToast';
        toast.className = 'coffee-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2800);
}

// ==================== 3. SHOPPING CART SYSTEM ====================
let cart = JSON.parse(localStorage.getItem('coffeenation_cart') || '[]');
let promoApplied = false;

function saveCart() {
    localStorage.setItem('coffeenation_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const counter = document.getElementById('cart-counter');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (counter) counter.textContent = totalItems;

    const list = document.getElementById('cartItemsList');
    const footer = document.getElementById('cartFooter');
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-mug-saucer empty-icon"></i>
                <p>Your bag is currently empty.</p>
                <button class="btn btn-hero-primary" onclick="closeCartDrawer();location.href='#menu_section'">Browse Menu</button>
            </div>
        `;
        if (footer) footer.style.display = 'none';
        return;
    }

    if (footer) footer.style.display = 'block';

    let subtotal = 0;
    list.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `
            <div class="cart-item-card">
                <img src="${item.img}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} each</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
                    </div>
                </div>
                <div style="font-weight:700;color:#017143;">₹${itemTotal}</div>
            </div>
        `;
    }).join('');

    const discount = promoApplied ? Math.round(subtotal * 0.10) : 0;
    const taxable = subtotal - discount;
    const tax = Math.round(taxable * 0.05);
    const total = taxable + tax;

    const subElem = document.getElementById('cartSubtotal');
    if (subElem) subElem.textContent = `₹${subtotal}`;
    const discRow = document.getElementById('discountRow');
    if (discRow) {
        discRow.style.display = promoApplied ? 'flex' : 'none';
        document.getElementById('cartDiscount').textContent = `-₹${discount}`;
    }
    const taxElem = document.getElementById('cartTax');
    if (taxElem) taxElem.textContent = `₹${tax}`;
    const totElem = document.getElementById('cartTotal');
    if (totElem) totElem.textContent = `₹${total}`;
}

function addToCart(name, price, img) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, img, qty: 1 });
    }
    saveCart();
    showCoffeeToast(`☕ Added <strong>${name}</strong> to bag!`);
}

function changeQty(idx, delta) {
    if (cart[idx]) {
        cart[idx].qty += delta;
        if (cart[idx].qty <= 0) {
            cart.splice(idx, 1);
        }
        saveCart();
    }
}

function openCartDrawer() {
    document.getElementById('cartOverlay')?.classList.add('active');
    document.getElementById('cartDrawer')?.classList.add('open');
    updateCartUI();
}

function closeCartDrawer() {
    document.getElementById('cartOverlay')?.classList.remove('active');
    document.getElementById('cartDrawer')?.classList.remove('open');
}

function applyPromo() {
    const code = document.getElementById('promoInput')?.value.trim().toUpperCase();
    if (code === 'COFFEE10') {
        promoApplied = true;
        saveCart();
        alert('🎉 Promo COFFEE10 applied! 10% discount deducted.');
    } else {
        alert('Invalid promo code. Try: COFFEE10');
    }
}

// Checkout Modal
function openCheckoutModal() {
    closeCartDrawer();
    const modal = document.getElementById('checkoutModal');
    const receipt = document.getElementById('orderReceipt');
    if (receipt) {
        const orderId = 'CN-' + Math.floor(100000 + Math.random() * 900000);
        const total = document.getElementById('cartTotal')?.textContent || '₹0';
        receipt.innerHTML = `
            <div><strong>Order ID:</strong> #${orderId}</div>
            <div><strong>Estimated Pickup/Delivery:</strong> 20–25 minutes</div>
            <div><strong>Destination:</strong> Raja Park Express Counter</div>
            <div><strong>Total Charged:</strong> <span style="color:#017143;font-weight:700;">${total}</span></div>
            <div style="margin-top:8px;font-size:12px;color:#059669;">Payment Mode: Pay on Delivery / UPI Active</div>
        `;
    }
    if (modal) modal.classList.add('active');
}

function finishOrder() {
    cart = [];
    promoApplied = false;
    saveCart();
    document.getElementById('checkoutModal')?.classList.remove('active');
    showCoffeeToast('🎉 Order confirmed! See you at CoffeeNation!');
}

// ==================== 4. MIXOLOGY BEVERAGE BUILDER ====================
let customBrew = {
    baseName: 'Cold Brew Concentrate',
    basePrice: 180,
    milkName: 'Whole Dairy Milk',
    milkPrice: 0,
    sweetness: '50% (Standard)',
    addons: []
};

function initCustomizerPills() {
    document.querySelectorAll('#baseOptions .pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#baseOptions .pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            customBrew.baseName = btn.dataset.name;
            customBrew.basePrice = parseInt(btn.dataset.price);
            calcCustomPrice();
        });
    });

    document.querySelectorAll('#milkOptions .pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#milkOptions .pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            customBrew.milkName = btn.dataset.name;
            customBrew.milkPrice = parseInt(btn.dataset.price);
            calcCustomPrice();
        });
    });
}

function updateSweetness(val) {
    const labels = {
        '0': '0% (Unsweetened)',
        '25': '25% (Light)',
        '50': '50% (Standard)',
        '75': '75% (Sweet)',
        '100': '100% (Extra Sweet)'
    };
    customBrew.sweetness = labels[val] || `${val}%`;
    const labelElem = document.getElementById('sweetnessLabel');
    if (labelElem) labelElem.textContent = customBrew.sweetness;
    calcCustomPrice();
}

function calcCustomPrice() {
    let addonTotal = 0;
    const selectedAddons = [];
    document.querySelectorAll('.addon-checks input[type="checkbox"]:checked').forEach(chk => {
        addonTotal += parseInt(chk.dataset.price);
        selectedAddons.push(chk.dataset.name);
    });
    customBrew.addons = selectedAddons;

    const total = customBrew.basePrice + customBrew.milkPrice + addonTotal;
    const priceDisplay = document.getElementById('customPrice');
    if (priceDisplay) priceDisplay.textContent = `₹${total}`;

    const specs = document.getElementById('previewSpecs');
    if (specs) {
        specs.innerHTML = `
            <li><strong>Base:</strong> ${customBrew.baseName}</li>
            <li><strong>Milk:</strong> ${customBrew.milkName}</li>
            <li><strong>Sweetness:</strong> ${customBrew.sweetness}</li>
            <li><strong>Add-ons:</strong> ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'}</li>
        `;
    }
}

function addCustomBrewToCart() {
    const priceText = document.getElementById('customPrice')?.textContent.replace('₹', '') || '200';
    const price = parseInt(priceText);
    const title = `Signature Custom Brew (${customBrew.baseName.split(' ')[0]})`;
    addToCart(title, price, 'assests/images/select 2.jpg');
    openCartDrawer();
}

function openCustomizerModal() {
    const target = document.getElementById('customizer');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== 5. MENU FILTERING & SEARCH ====================
function filterMenu(category, btn) {
    document.querySelectorAll('.category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchMenu(query) {
    const q = query.toLowerCase().trim();
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        const name = card.dataset.name || '';
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        if (name.includes(q) || title.includes(q)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== 6. ATMOSPHERE SLIDER ====================
let currentSlide = 0;

function showSlide(idx) {
    const slides = document.querySelectorAll('.slide-card');
    if (!slides.length) return;
    slides.forEach((s, i) => {
        s.classList.toggle('active-slide', i === idx);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide-card');
    if (!slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide-card');
    if (!slides.length) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// ==================== 7. COFFEE FLAVOR QUIZ ====================
let quizState = {};

function selectQuizAnswer(key, val) {
    quizState[key] = val;
    document.getElementById('quizStep1').style.display = 'none';
    document.getElementById('quizStep2').style.display = 'block';
}

function finishQuiz(temp) {
    quizState['temp'] = temp;
    document.getElementById('quizStep2').style.display = 'none';
    const resultBox = document.getElementById('quizResult');
    if (resultBox) resultBox.style.display = 'block';

    const titleElem = document.getElementById('resultTitle');
    const descElem = document.getElementById('resultDesc');
    const addBtn = document.getElementById('resultAddBtn');

    let match = {
        name: 'Classic Cold Coffee',
        desc: 'Signature cold-brewed arabica blended with chilled milk and dark cocoa.',
        price: 180,
        img: 'assests/images/select 1.jpg'
    };

    if (quizState.flavor === 'bold' && temp === 'hot') {
        match = { name: 'Espresso Doppio', desc: 'Intense double extraction with thick golden crema.', price: 150, img: 'assests/images/select 2.jpg' };
    } else if (quizState.flavor === 'creamy') {
        match = { name: 'Crunchy Oreo Shake', desc: 'Crushed chocolate cookies with thick velvet vanilla cream.', price: 220, img: 'assests/images/select 6.jpg' };
    } else if (quizState.flavor === 'fruity') {
        match = { name: 'Blue Lagoon Cooler', desc: 'Sparkling citrus curacao with mint & fresh lime.', price: 170, img: 'assests/images/select 7.jpg' };
    }

    if (titleElem) titleElem.textContent = match.name;
    if (descElem) descElem.textContent = match.desc;
    if (addBtn) {
        addBtn.onclick = () => {
            addToCart(match.name, match.price, match.img);
            openCartDrawer();
        };
    }
}

function resetQuiz() {
    quizState = {};
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizStep1').style.display = 'block';
}

// ==================== 8. USER AUTH STATUS & INIT ====================
function checkAuthNavbar() {
    const user = localStorage.getItem('coffeenation_user');
    const authLink = document.getElementById('nav-auth-link');
    if (user && authLink) {
        authLink.innerHTML = `<i class="fa-solid fa-circle-user"></i> <span>Hi, ${user}</span>`;
        authLink.href = '#';
        authLink.onclick = (e) => {
            e.preventDefault();
            if (confirm(`Logged in as ${user}. Do you want to log out?`)) {
                localStorage.removeItem('coffeenation_user');
                location.reload();
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCustomizerPills();
    updateCartUI();
    checkAuthNavbar();
    setInterval(nextSlide, 5000);
});
