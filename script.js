// CoffeeNation Interactive Engine

function imgSlider(imagePath) {
    var mainImg = document.querySelector('.starbucks');
    if (mainImg) {
        mainImg.style.transition = 'opacity 0.2s ease';
        mainImg.style.opacity = '0.3';
        setTimeout(function() {
            mainImg.src = imagePath;
            mainImg.style.opacity = '1';
        }, 150);
    }
}

function changeCircleColor(colorHex) {
    var circle = document.querySelector('.circle');
    if (circle) {
        circle.style.background = colorHex;
        circle.style.transition = 'background 0.4s ease';
    }
}

function showCoffeeToast(message) {
    var toast = document.querySelector('.coffee-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'coffee-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(function() {
        toast.style.display = 'none';
    }, 2800);
}

var cartCount = 0;
function initCartButtons() {
    var buttons = document.querySelectorAll('.box-info button');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var itemBox = e.target.closest('.box-info');
            var itemName = itemBox ? (itemBox.querySelector('h4') ? itemBox.querySelector('h4').textContent : 'Beverage') : 'Beverage';
            cartCount++;
            showCoffeeToast('Added ' + itemName + ' to your order (Total: ' + cartCount + ')');
            
            var nav = document.querySelector('header ul');
            var cartLink = document.getElementById('nav-cart-indicator');
            if (!cartLink && nav) {
                cartLink = document.createElement('li');
                cartLink.id = 'nav-cart-indicator';
                cartLink.innerHTML = '<a href="#menu_section" style="color:#017143;font-weight:700;">Cart (' + cartCount + ')</a>';
                nav.appendChild(cartLink);
            } else if (cartLink) {
                cartLink.innerHTML = '<a href="#menu_section" style="color:#017143;font-weight:700;">Cart (' + cartCount + ')</a>';
            }
        });
    });
}

function checkUserLoginState() {
    var loggedUser = localStorage.getItem('coffeenation_user');
    if (loggedUser) {
        var nav = document.querySelector('header ul');
        var loginLink = nav ? nav.querySelector('a[href*="signuppage"]') : null;
        if (loginLink) {
            loginLink.textContent = 'Hi, ' + loggedUser;
            loginLink.href = '#';
            loginLink.onclick = function(e) {
                e.preventDefault();
                if (confirm('Log out from CoffeeNation?')) {
                    localStorage.removeItem('coffeenation_user');
                    location.reload();
                }
            };
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initCartButtons();
    checkUserLoginState();

    var form = document.forms['google-sheet'];
    if (form) {
        var scriptURL = 'https://script.google.com/macros/s/AKfycbygMZXNlh0P6BYEyQKnMRYlUvjqZYwo3JaAGrtpOC2nwJ6pKYGhbewRN0V59SVROr8/exec';
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.textContent = 'Submitting...';

            var userInput = form.querySelector('input[name="userName"]');
            if (userInput && userInput.value) {
                localStorage.setItem('coffeenation_user', userInput.value);
            }

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(function() {
                    alert('Login & registration successful! Redirecting to CoffeeNation home...');
                    window.location.href = 'index.html';
                })
                .catch(function(err) {
                    console.log('Notice:', err);
                    alert('Welcome to CoffeeNation! Redirecting...');
                    window.location.href = 'index.html';
                });
        });
    }
});
