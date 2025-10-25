// --- scripts.js ---

// 1. ДАННЫЕ ПРОДУКТОВ
// Все пути к изображениям начинаются с 'images/'
const miceProducts = [
    {
        id: 1,
        name: "LAMZU MAYA X (Gradient)",
        brand: "LAMZU",
        price: "299 $",
        badge: "НОВИНКА",
        image: "img/orig (1).webp", 
        features: [
            "LIGHTWEIGHT DESIGN - 54g",
            "NORDIC 52848 PIXART PRW3395",
            "8K POLLING DONGLE INCLUDED",
            "OPTICAL SWITCHES",
            "SYMMETRICAL SHAPE",
            "SOFT-TOUCH COATING"
        ]
    },
    {
        id: 2,
        name: "RAZER VIPER V2 PRO (Black)",
        brand: "RAZER",
        price: "199 $",
        badge: "ХИТ",
        image: "img/i.webp", 
        features: [
            "HYPERSPEED WIRELESS",
            "FOCUS PRO 30K OPTICAL SENSOR",
            "OPTICAL MOUSE SWITCHES GEN-3",
            "70+ HOUR BATTERY LIFE",
            "ULTRA-LIGHTWEIGHT - 58g",
            "USB-C CHARGING"
        ]
    },
    {
        id: 3,
        name: "LOGITECH G PRO X SUPERLIGHT (White)",
        brand: "LOGITECH",
        price: "299 $",
        badge: "ВЫБОР ПРО",
        image: "img/7358181630.jpg", 
        features: [
            "LIGHTSPEED WIRELESS",
            "HERO SENSOR 25600 DPI",
            "<63 GRAMS WEIGHT",
            "POWERPLAY COMPATIBLE",
            "PTFE FEET",
            "AMBIDEXTROUS DESIGN"
        ]
    },
    {
        id: 4,
        name: "RAZER VIPER MINI SIGNATURE",
        brand: "RAZER",
        price: "299 $",
        badge: "ПРЕМИУМ",
        image: "img/6692984146.jpg", 
        features: [
            "MAGNESIUM ALLOY CHASSIS",
            "ULTRA-LIGHTWEIGHT - 49g",
            "RAZER FOCUS PRO 30K SENSOR",
            "70+ HOUR BATTERY LIFE",
            "8000Hz POLLING RATE (w/ dongle)",
            "USB-C CHARGING"
        ]
    },
    {
        id: 5,
        name: "WALLHACK ULTRA LIGHT (White)",
        brand: "WALLHACK",
        price: "100 $", 
        badge: "УЛЬТРАЛЁГКИЙ",
        // Используем одну из предоставленных картинок в качестве заглушки
        image: "img/GlassPad-SP-004-White-Image1.webp",
        features: [
            "LIGHTSPEED WIRELESS",
            "HERO SENSOR 25600 DPI",
            "<60 GRAMS WEIGHT",
            "POWERPLAY COMPATIBLE", 
            "PTFE FEET",
            "AMBIDEXTROUS DESIGN"
        ]
    },
    {
        id: 6, 
        name: "WALLHACK SPEED EDITION (Placeholder)",
        brand: "WALLHACK",
        price: "100 $",
        badge: "СКОРОСТЬ",
        // Временная заглушка
        image: "https://via.placeholder.com/300x300/333/fff?text=WALLHACK+SPEED",
        features: [
            "ULTRA-LIGHTWEIGHT - 45g",
            "9 PROGRAMMABLE BUTTONS", 
            "AQUA BARRIER TECHNOLOGY",
            "TRUE MOVE AIR SENSOR",
            "SWAPPABLE SHELLS",
            "MAGNETIC CHARGING"
        ]
    }
];

const padsProducts = [
    {
        id: 7,
        name: "GlassPad SP-004 (White)",
        brand: "WALLHACK",
        price: "100 $", 
        badge: "СТЕКЛО",
        image: "img/GlassPad-SP-004-White-Image1.webp", 
        features: [
            "GLASS SURFACE (SPEED)",
            "ULTRA-SMOOTH GLIDING", 
            "DURABLE CONSTRUCTION",
            "OPTIMIZED FOR SPEED",
            "EASY CLEANING",
            "NON-SLIP BASE"
        ]
    },
    {
        id: 8,
        name: "ClothPad SY-001 (Black)", 
        brand: "WALLHACK",
        price: "100 $",
        badge: "ТКАНЬ",
        image: "img/ClothPad-SY-001-Image1.webp", 
        features: [
            "CLOTH SURFACE (CONTROL)",
            "PERFECT CONTROL AND CONSISTENCY", 
            "STITCHED EDGES",
            "ANTI-SLIP BASE",
            "WATER RESISTANT",
            "MACHINE WASHABLE"
        ]
    },
    {
        id: 9,
        name: "GlassPad SP-005 (Awakening - Art)",
        brand: "WALLHACK",
        price: "100 $",
        badge: "АРТ",
        image: "img/2048x2048_WEB_PRODUCT-IMG-GlassPad-SP-005-Awakening-Image1.webp", 
        features: [
            "PREMIUM GLASS SURFACE",
            "ЭКСКЛЮЗИВНЫЙ АРТ ДИЗАЙН",
            "ULTRA-FAST GLIDE",
            "TEMPERED GLASS",
            "SCRATCH RESISTANT",
            "ПОДХОДИТ ДЛЯ ЛЮБЫХ МЫШЕЙ"
        ]
    },
    {
        id: 10,
        name: "ClothPad MO-001 ARCADE TWINS",
        brand: "WALLHACK",
        price: "100 $",
        badge: "ARCADЕ",
        image: "img/ClothPad-MO-001-Arcade-Twins-Image1.webp", 
        features: [
            "CLOTH SURFACE (SPEED/CONTROL)",
            "СТИЛЬНЫЙ АРКАДНЫЙ ДИЗАЙН",
            "ANTI-SLIP RUBBER BASE", 
            "ПРОЧНЫЙ МАТЕРИАЛ",
            "ПРОШИТЫЕ КРАЯ",
            "ОПТИМАЛЬНЫЙ РАЗМЕР"
        ]
    },
    {
        id: 11,
        name: "GlassPad SP-004A (Black)",
        brand: "WALLHACK",
        price: "100 $",
        badge: "ПРО",
        image: "img/2048x2048_WEB_PRODUCT-IMG-GlassPad-SP-004A-Black-Image1.webp", 
        features: [
            "ЧЕРНАЯ СТЕКЛЯННАЯ ПОВЕРХНОСТЬ",
            "ULTRA-SMOOTH", 
            "DURABLE CONSTRUCTION",
            "PERFECT FOR COMPETITIVE GAMING",
            "НЕПРИХОТЛИВ К ТЕМПЕРАТУРЕ",
            "NON-SLIP RUBBER BASE"
        ]
    },
    {
        id: 12,
        name: "GlassPad SP-004A (White)", 
        brand: "WALLHACK",
        price: "80 $",
        badge: "НОВИНКА",
        image: "img/2048x2048_WEB_PRODUCT-IMG-GlassPad-SP-004A-White-Image1.webp", 
        features: [
            "БЕЛАЯ СТЕКЛЯННАЯ ПОВЕРХНОСТЬ",
            "OPTIMIZED FOR SPEED", 
            "STITCHED EDGES",
            "ANTI-SLIP BASE",
            "WATERPROOF COATING",
            "QUICK DRYING"
        ]
    }
];

// 2. ИНИЦИАЛИЗАЦИЯ ПЕРЕМЕННЫХ
let cartCount = 0;
// Убедимся, что все элементы найдены
const cartCountElement = document.querySelector('.cart-count');
const miceProductsGrid = document.getElementById('mice-products');
const padsProductsGrid = document.getElementById('pads-products');
const tabs = document.querySelectorAll('.tab');

// 3. ОБРАБОТЧИК ЗАГРУЗКИ ДОКУМЕНТА
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен и инициализирован.');
    
    // Запуск всех основных функций
    animateHero();
    renderProducts(miceProducts, miceProductsGrid);
    renderProducts(padsProducts, padsProductsGrid);
    
    // Устанавливаем начальный активный класс для корректной анимации карточек
    if (miceProductsGrid) miceProductsGrid.classList.add('active');
    
    setTimeout(animateCards, 1000); 
    
    initTabListeners();
    
    // Проверяем, что библиотека animejs доступна, прежде чем запускать анимацию текста
    if (typeof anime !== 'undefined') {
        initTextAnimation();
    } else {
        console.error("Anime.js не загружен. Проверьте подключение в index.html.");
    }
    
    // !!! ИНИЦИАЛИЗАЦИЯ ПЛАВНОЙ ПРОКРУТКИ ДЛЯ ВСЕХ ЯКОРЕЙ, ВКЛЮЧАЯ КНОПКУ
    initSmoothScroll(); 
});

// 4. ФУНКЦИЯ РЕНДЕРИНГА ПРОДУКТОВ
function renderProducts(products, container) {
    if (!container) return; // Защита от отсутствия элемента
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const featuresHTML = product.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="product-img-actual">
            </div>
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <ul class="product-features">
                ${featuresHTML}
            </ul>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
                Добавить в корзину
            </button>
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        `;
        
        container.appendChild(productCard);
    });
    
    // Добавляем обработчики событий
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.removeEventListener('click', handleAddToCart); // Удаляем старый, чтобы избежать дублирования
        button.addEventListener('click', handleAddToCart);
    });
}

function handleAddToCart() {
    const productId = this.getAttribute('data-id');
    addToCart(productId);
}


// 5. ОБРАБОТЧИК ВКЛАДОК
function initTabListeners() {
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Обновляем активную вкладку
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Скрываем/показываем сетки продуктов
            miceProductsGrid.classList.remove('active');
            padsProductsGrid.classList.remove('active');
            
            if (category === 'mice') {
                miceProductsGrid.classList.add('active');
            } else if (category === 'pads') {
                padsProductsGrid.classList.add('active');
            }
            
            // Повторно анимируем карточки
            setTimeout(animateCards, 300);
        });
    });
}

// 6. ФУНКЦИИ АНИМАЦИИ
function animateHero() {
    // В JS мы только устанавливаем стили для запуска CSS-анимаций (fadeInUp)
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroButton = document.querySelector('.cta-button');
    
    if (heroTitle) heroTitle.style.animation = 'fadeInUp 1s forwards';
    setTimeout(() => {
        if (heroText) heroText.style.animation = 'fadeInUp 1s forwards';
    }, 300);
    setTimeout(() => {
        if (heroButton) heroButton.style.animation = 'fadeInUp 1s forwards';
    }, 600);
}

function splitText(element) {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return { chars: [] };
    
    const text = el.textContent;
    const chars = [];
    
    el.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        el.appendChild(span);
        chars.push(span);
    }
    
    return { chars };
}

function initTextAnimation() {
    const { chars } = splitText('#animatedText');
    
    if (chars.length === 0) return;

    anime({
        targets: chars,
        translateY: [
            { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
            { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
        ],
        rotate: {
            value: ['-1turn', '0turn'],
            delay: 0
        },
        opacity: {
            value: [0, 1],
            duration: 400,
            easing: 'linear'
        },
        delay: anime.stagger(50),
        easing: 'easeInOutCirc',
        loop: true,
        loopDelay: 2000
    });
}

function animateCards() {
    // Сбрасываем анимацию для всех карточек
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.animation = 'none'; 
        card.offsetHeight; 
    });

    // Анимируем только активные
    const activeCards = document.querySelectorAll('.products-grid.active .product-card');
    
    activeCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s forwards ${index * 0.1}s`;
    });
}


// 7. ФУНКЦИИ КОРЗИНЫ
function addToCart(productId) {
    if (cartCountElement) {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Анимация счетчика
        cartCountElement.classList.remove('bounce');
        void cartCountElement.offsetWidth; // Триггер рефлоу для повторной анимации
        cartCountElement.classList.add('bounce');
    }
    
    // Анимация карточки
    const productCard = document.querySelector(`.add-to-cart[data-id="${productId}"]`)?.closest('.product-card');
    if (productCard) {
        productCard.classList.remove('pulse');
        void productCard.offsetWidth;
        productCard.classList.add('pulse');
        
        // Анимация иконки корзины
        const cartIcon = document.querySelector('.cart');
        if (cartIcon) {
            cartIcon.classList.remove('shake');
            void cartIcon.offsetWidth;
            cartIcon.classList.add('shake');
        }
    }
}


// 8. ФУНКЦИЯ ПЛАВНОЙ ПРОКРУТКИ (ИСПРАВЛЕНА)
function initSmoothScroll() {
    // Выбираем все ссылки с href, начинающимся с '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId !== '#') {
                e.preventDefault(); // Отменяем стандартное поведение

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Получаем высоту фиксированной шапки для смещения
                    const header = document.querySelector('.header');
                    // Добавляем небольшой дополнительный отступ (например, 20px)
                    const offset = (header ? header.offsetHeight : 0) + 20; 
                    
                    // Вычисляем позицию для прокрутки: положение элемента относительно верха + текущая прокрутка - отступ
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Плавная прокрутка
                    });
                }
            }
        });
    });
}
