// ============================================ //
// PET CARE SHOP - CLEANED VERSION              //
// REMOVED: Recently Viewed, Compare Feature    //
// ADDED: My Orders, Pending Orders             //
// ============================================ //

// ============================================ //
// PRODUCT DATABASE                             //
// ============================================ //
const products = {
  adoption: [
    { id: "adopt1", name: "Shiba Inu", price: 250, oldPrice: 350, rating: 4.8, reviews: 24, badge: "Shiba Inu", badgeClass: "", stock: "in-stock", img: "pet-care-images/shiba-inu.jpg", category: "adoption", popularity: 89 },
    { id: "adopt2", name: "Golden Retriever", price: 300, oldPrice: 450, rating: 4.9, reviews: 187, badge: "Golden Retriever", badgeClass: "badge2", stock: "in-stock", img: "pet-care-images/golden-retriver.jpg", category: "adoption", popularity: 245 },
    { id: "adopt3", name: "Siamese Cat", price: 200, oldPrice: 280, rating: 4.5, reviews: 92, badge: "Siamese Cat", badgeClass: "badge3", stock: "in-stock", img: "pet-care-images/siamese.jpg", category: "adoption", popularity: 156 },
    { id: "adopt4", name: "British Shorthair", price: 350, oldPrice: 500, rating: 4.9, reviews: 156, badge: "British Shorthair", badgeClass: "badge4", stock: "limited", img: "pet-care-images/british-shorthair.jpg", category: "adoption", popularity: 203 },
    { id: "adopt5", name: "Persian Cat", price: 400, oldPrice: 550, rating: 4.7, reviews: 203, badge: "Persian Cat", badgeClass: "badge5", stock: "in-stock", img: "pet-care-images/persian-cat.jpg", category: "adoption", popularity: 178 },
    { id: "adopt6", name: "Maine Coon", price: 450, oldPrice: 600, rating: 4.9, reviews: 178, badge: "Maine Coon", badgeClass: "", stock: "in-stock", img: "pet-care-images/mainecoon.jpg", category: "adoption", popularity: 167 },
    { id: "adopt7", name: "Bengal Cat", price: 500, oldPrice: 700, rating: 4.6, reviews: 134, badge: "Bengal Cat", badgeClass: "badge2", stock: "limited", img: "pet-care-images/bangal-cat.jpg", category: "adoption", popularity: 145 },
    { id: "adopt8", name: "Scottish Fold", price: 380, oldPrice: 520, rating: 4.8, reviews: 167, badge: "Scottish Fold", badgeClass: "badge3", stock: "in-stock", img: "pet-care-images/scottish-fold.jpg", category: "adoption", popularity: 198 },
    { id: "adopt9", name: "German Shepherd", price: 320, oldPrice: 480, rating: 4.9, reviews: 245, badge: "German Shepherd", badgeClass: "badge4", stock: "in-stock", img: "pet-care-images/german-shepherd.jpg", category: "adoption", popularity: 312 },
    { id: "adopt10", name: "Siberian Husky", price: 360, oldPrice: 500, rating: 4.7, reviews: 198, badge: "Siberian Husky", badgeClass: "badge5", stock: "limited", img: "pet-care-images/siberian-husky.jpg", category: "adoption", popularity: 234 }
  ],
  food: [
    { id: "food1", name: "Skyler Treats Herring", price: 24.99, oldPrice: 35.99, rating: 4.8, reviews: 89, badge: "Skyler Treats", badgeClass: "", stock: "in-stock", img: "pet-care-images/herring-fish.jpg", category: "food", popularity: 67 },
    { id: "food2", name: "Skyler Treats Rabbit", price: 19.99, oldPrice: 28.99, rating: 4.5, reviews: 56, badge: "Skyler Treats", badgeClass: "badge2", stock: "in-stock", img: "pet-care-images/rabbit-cubes.jpg", category: "food", popularity: 45 },
    { id: "food3", name: "Quail Egg Yolk", price: 15.99, oldPrice: 22.99, rating: 4.9, reviews: 42, badge: "Skyler Treats", badgeClass: "badge3", stock: "limited", img: "pet-care-images/quail-egg-yolk.jpg", category: "food", popularity: 38 },
    { id: "food4", name: "Beef Bone Broth", price: 29.99, oldPrice: 42.99, rating: 4.7, reviews: 112, badge: "Beef Bone Broth", badgeClass: "badge4", stock: "in-stock", img: "pet-care-images/beef-bone-broth.jpg", category: "food", popularity: 89 },
    { id: "food5", name: "Viva For Cats", price: 34.99, oldPrice: 49.99, rating: 4.6, reviews: 78, badge: "Viva For Cats", badgeClass: "badge5", stock: "in-stock", img: "pet-care-images/vivaforcats.jpg", category: "food", popularity: 56 },
    { id: "food6", name: "Me-O", price: 12.99, oldPrice: 18.99, rating: 4.4, reviews: 234, badge: "Me-O", badgeClass: "", stock: "in-stock", img: "pet-care-images/me-o.jpg", category: "food", popularity: 189 },
    { id: "food7", name: "Whiskas", price: 14.99, oldPrice: 21.99, rating: 4.7, reviews: 312, badge: "Whiskas", badgeClass: "badge2", stock: "in-stock", img: "pet-care-images/whiskas.jpg", category: "food", popularity: 278 },
    { id: "food8", name: "Jinx Biscuit", price: 9.99, oldPrice: 14.99, rating: 4.3, reviews: 67, badge: "JinX Biscuit", badgeClass: "badge3", stock: "in-stock", img: "pet-care-images/jinx-biscuit.jpg", category: "food", popularity: 54 },
    { id: "food9", name: "Selective Jr", price: 18.99, oldPrice: 27.99, rating: 4.8, reviews: 45, badge: "Selective Jr", badgeClass: "badge4", stock: "limited", img: "pet-care-images/selectivejr.jpg", category: "food", popularity: 34 },
    { id: "food10", name: "Pedigree", price: 22.99, oldPrice: 32.99, rating: 4.9, reviews: 456, badge: "Pedigree", badgeClass: "badge5", stock: "in-stock", img: "pet-care-images/pedigree.jpg", category: "food", popularity: 389 }
  ],
  accessories: [
    { id: "acc1", name: "Pet Spa Set", price: 45.99, oldPrice: 65.99, rating: 4.8, reviews: 67, badge: "Pet Spa", badgeClass: "", stock: "in-stock", img: "pet-care-images/accessories1.jpg", category: "accessories", popularity: 78 },
    { id: "acc2", name: "Pet Nail Cutter", price: 12.99, oldPrice: 19.99, rating: 4.5, reviews: 123, badge: "Pet Nail Cutter", badgeClass: "badge2", stock: "in-stock", img: "pet-care-images/accessories2.jpg", category: "accessories", popularity: 145 },
    { id: "acc3", name: "Pet Carrier", price: 55.99, oldPrice: 79.99, rating: 4.7, reviews: 89, badge: "Pet Carrier", badgeClass: "badge3", stock: "limited", img: "pet-care-images/accessories3.jpg", category: "accessories", popularity: 112 },
    { id: "acc4", name: "Dog & Cat Bowls", price: 18.99, oldPrice: 27.99, rating: 4.9, reviews: 234, badge: "Dog & Cat Bowls", badgeClass: "badge4", stock: "in-stock", img: "pet-care-images/accessories4.jpg", category: "accessories", popularity: 267 },
    { id: "acc5", name: "Pet Hair Comb", price: 14.99, oldPrice: 22.99, rating: 4.6, reviews: 156, badge: "Pet Hair Comb", badgeClass: "badge5", stock: "in-stock", img: "pet-care-images/accessories5.jpg", category: "accessories", popularity: 134 },
    { id: "acc6", name: "Dog Toothbrush", price: 8.99, oldPrice: 13.99, rating: 4.4, reviews: 78, badge: "Dog Toothbrush", badgeClass: "", stock: "in-stock", img: "pet-care-images/accessories6.jpg", category: "accessories", popularity: 89 },
    { id: "acc7", name: "Pet Grooming Kit", price: 39.99, oldPrice: 59.99, rating: 4.8, reviews: 145, badge: "Pet Grooming Kit", badgeClass: "badge2", stock: "in-stock", img: "pet-care-images/accessories7.jpg", category: "accessories", popularity: 167 },
    { id: "acc8", name: "Paw Balm", price: 11.99, oldPrice: 17.99, rating: 4.7, reviews: 98, badge: "Paw Balm", badgeClass: "badge3", stock: "in-stock", img: "pet-care-images/accessories8.jpg", category: "accessories", popularity: 76 },
    { id: "acc9", name: "Pet Ear-drops", price: 9.99, oldPrice: 14.99, rating: 4.5, reviews: 56, badge: "Pet Ear-drops", badgeClass: "badge4", stock: "limited", img: "pet-care-images/accessories9.jpg", category: "accessories", popularity: 43 },
    { id: "acc10", name: "Licking Mat", price: 13.99, oldPrice: 20.99, rating: 4.8, reviews: 112, badge: "Licking Mat", badgeClass: "badge5", stock: "in-stock", img: "pet-care-images/accessories10.jpg", category: "accessories", popularity: 98 }
  ]
};

// ============================================ //
// GLOBAL STATE                                 //
// ============================================ //
let cart = [];                      // Shopping cart items
let wishlist = [];                 // Wishlist product IDs
let productReviews = {};           // User reviews storage
let currentReviewProduct = null;   // Product being reviewed
let currentRating = 0;             // Selected rating for review
let swipers = [];                  // Swiper instances
let allOrders = [];                // All orders storage

// Filter state
let currentSort = 'default';
let currentPriceMax = 500;
let currentCategory = 'all';
let currentSearchTerm = '';

// ============================================ //
// INITIALIZATION                               //
// ============================================ //
document.addEventListener('DOMContentLoaded', () => {
  showSkeleton();
  
  // Load all data from localStorage
  loadCart();
  loadWishlist();
  loadReviews();
  loadOrders();
  
  // Render products
  renderProducts();
  
  setTimeout(() => {
    hideSkeleton();
    initDarkMode();
    initMenuControls();
    initHeroSlider();
    initEventListeners();
    initBackToTop();
    initFilterListeners();
  }, 100);
});

// ============================================ //
// LOADING SKELETON                             //
// ============================================ //
function showSkeleton() {
  document.getElementById('skeletonContainer').style.display = 'grid';
  document.getElementById('mainContent').style.display = 'none';
}

function hideSkeleton() {
  setTimeout(() => {
    document.getElementById('skeletonContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  }, 800);
}

// ============================================ //
// PRODUCT RENDERING                            //
// ============================================ //
function renderProducts() {
  const adoptionList = document.getElementById('adoptionList');
  const foodList = document.getElementById('foodList');
  const accessoriesList = document.getElementById('accessoriesList');
  
  if (adoptionList) adoptionList.innerHTML = products.adoption.map(p => createProductCard(p)).join('');
  if (foodList) foodList.innerHTML = products.food.map(p => createProductCard(p)).join('');
  if (accessoriesList) accessoriesList.innerHTML = products.accessories.map(p => createProductCard(p)).join('');
  
  // Reinitialize Swiper after rendering
  setTimeout(() => {
    if (swipers.length) {
      swipers.forEach(s => s.destroy(true, true));
      swipers = [];
    }
    document.querySelectorAll('.card-wrapper').forEach((wrapper) => {
      const swiper = new Swiper(wrapper, {
        loop: true,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 0: { slidesPerView: 1.1 }, 640: { slidesPerView: 1.8 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
      });
      swipers.push(swiper);
    });
  }, 100);
  
  attachCardEvents();
}

function createProductCard(p) {
  const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
  const starRating = getStarHtml(p.rating);
  const isInWishlist = wishlist.includes(p.id);
  const reviews = productReviews[p.id] || [];
  const reviewCount = p.reviews + reviews.length;
  
  return `
    <li class="card-item swiper-slide" data-product-id="${p.id}" data-product-name="${p.name}" data-product-category="${p.category}" data-product-price="${p.price}" data-product-img="${p.img}">
      <div class="card-link">
        <div class="card-image-container">
          <img src="${p.img}" alt="${p.name}" loading="lazy" class="card-img">
          <button class="favorite-btn ${isInWishlist ? 'active' : ''}" data-product-id="${p.id}">${isInWishlist ? '♥' : '♡'}</button>
          <span class="stock-badge ${p.stock}">${p.stock === 'in-stock' ? 'In Stock' : 'Limited'}</span>
        </div>
        <div class="card-info">
          <p class="badge ${p.badgeClass}">${p.badge}</p>
          <h3 class="card-title">${p.name}</h3>
          <div class="rating">
            <span class="stars">${starRating}</span>
            <span class="rating-count view-reviews-link" data-product-id="${p.id}">(${reviewCount} reviews)</span>
          </div>
          <div class="price-row">
            <span class="current-price">$${p.price}</span>
            <span class="old-price">$${p.oldPrice}</span>
            <span class="discount-badge">-${discount}%</span>
          </div>
          <div class="card-actions">
            <button class="quick-view-btn" data-product-id="${p.id}">Quick View</button>
            <button class="cart-btn add-to-cart-btn" data-product-id="${p.id}"></button>
          </div>
        </div>
      </div>
    </li>
  `;
}

function getStarHtml(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '★';
  if (halfStar) stars += '½';
  for (let i = stars.length; i < 5; i++) stars += '☆';
  return stars;
}

// ============================================ //
// FILTER AND SORT                              //
// ============================================ //
function initFilterListeners() {
  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterAndSortAllSections();
  });
  
  document.getElementById('priceRange')?.addEventListener('input', (e) => {
    currentPriceMax = parseInt(e.target.value);
    document.getElementById('priceMax').textContent = currentPriceMax;
    filterAndSortAllSections();
  });
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      filterAndSortAllSections();
    });
  });
  
  document.getElementById('liveSearch')?.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    document.getElementById('searchClear').style.display = currentSearchTerm ? 'flex' : 'none';
    filterAndSortAllSections();
  });
  
  document.getElementById('searchClear')?.addEventListener('click', () => {
    document.getElementById('liveSearch').value = '';
    currentSearchTerm = '';
    document.getElementById('searchClear').style.display = 'none';
    filterAndSortAllSections();
  });
}

function sortProducts(productsList, sortType) {
  const sorted = [...productsList];
  switch(sortType) {
    case 'price-low': return sorted.sort((a, b) => a.price - b.price);
    case 'price-high': return sorted.sort((a, b) => b.price - a.price);
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
    case 'popularity': return sorted.sort((a, b) => b.popularity - a.popularity);
    default: return sorted;
  }
}

function filterAndSortAllSections() {
  const allProducts = [...products.adoption, ...products.food, ...products.accessories];
  let filtered = allProducts.filter(p => p.price <= currentPriceMax);
  
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  
  if (currentSearchTerm) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(currentSearchTerm));
  }
  
  const sorted = sortProducts(filtered, currentSort);
  
  const sections = ['adoption', 'food', 'accessories'];
  sections.forEach(section => {
    const sectionProducts = sorted.filter(p => p.category === section);
    const container = document.getElementById(`${section}List`);
    if (container) {
      if (sectionProducts.length === 0 && currentCategory === 'all') {
        document.getElementById(`section${section.charAt(0).toUpperCase() + section.slice(1)}`).style.display = 'none';
      } else {
        document.getElementById(`section${section.charAt(0).toUpperCase() + section.slice(1)}`).style.display = 'block';
        if (currentCategory === 'all' || currentCategory === section) {
          container.innerHTML = sectionProducts.map(p => createProductCard(p)).join('');
        }
      }
    }
  });
  
  attachCardEvents();
}

// ============================================ //
// CART SYSTEM                                  //
// ============================================ //
function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) cart = JSON.parse(saved);
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, productName, productPrice) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, name: productName, price: parseFloat(productPrice), quantity: 1 });
  }
  saveCart();
  showToast(`${productName} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }
}

function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const savedCount = document.getElementById('savedCount');
  
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
  if (savedCount) savedCount.textContent = totalItems;
  
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p></div>';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
              <button class="cart-qty-minus" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="cart-qty-plus" data-id="${item.id}">+</button>
            </div>
          </div>
          <i class="fas fa-trash cart-item-remove" data-id="${item.id}"></i>
        </div>
      `).join('');
    }
  }
  
  // Attach cart event listeners
  document.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); updateQuantity(btn.dataset.id, -1); });
  });
  document.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); updateQuantity(btn.dataset.id, 1); });
  });
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); removeFromCart(btn.dataset.id); });
  });
}

// ============================================ //
// WISHLIST SYSTEM                              //
// ============================================ //
function loadWishlist() {
  const saved = localStorage.getItem('wishlist');
  if (saved) wishlist = JSON.parse(saved);
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    wishlist.push(productId);
    showToast('Added to wishlist');
  } else {
    wishlist.splice(index, 1);
    showToast('Removed from wishlist');
  }
  saveWishlist();
  filterAndSortAllSections();
}

function updateWishlistUI() {
  const wishlistContainer = document.getElementById('wishlistItems');
  if (!wishlistContainer) return;
  
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
    return;
  }
  
  const allProducts = [...products.adoption, ...products.food, ...products.accessories];
  const wishlistProducts = allProducts.filter(p => wishlist.includes(p.id));
  
  wishlistContainer.innerHTML = wishlistProducts.map(p => `
    <div class="wishlist-item">
      <img src="${p.img}" alt="${p.name}">
      <div class="wishlist-item-info">
        <div class="wishlist-item-title">${p.name}</div>
        <div class="wishlist-item-price">$${p.price}</div>
      </div>
      <div class="wishlist-item-actions">
        <button class="wishlist-add-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">Add to Cart</button>
        <button class="wishlist-remove" data-id="${p.id}">Remove</button>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.wishlist-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.id, btn.dataset.name, btn.dataset.price);
    });
  });
  document.querySelectorAll('.wishlist-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleWishlist(btn.dataset.id);
      updateWishlistUI();
    });
  });
}

// ============================================ //
// ORDERS SYSTEM (NEW)                          //
// ============================================ //
function loadOrders() {
  const saved = localStorage.getItem('allOrders');
  if (saved) allOrders = JSON.parse(saved);
  updatePendingCount();
}

function saveOrders() {
  localStorage.setItem('allOrders', JSON.stringify(allOrders));
  updatePendingCount();
}

function updatePendingCount() {
  const pendingCount = allOrders.filter(o => o.status === 'pending' || o.status === 'confirmed').length;
  const pendingElement = document.getElementById('pendingCount');
  if (pendingElement) pendingElement.textContent = pendingCount;
}

function updateOrderStatus(orderId, newStatus) {
  const order = allOrders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders();
    showToast(`Order ${orderId} marked as ${newStatus}`);
  }
}

function renderMyOrders() {
  const container = document.getElementById('myOrdersItems');
  if (!container) return;
  
  if (allOrders.length === 0) {
    container.innerHTML = '<p class="empty-orders">No orders yet. Start shopping!</p>';
    return;
  }
  
  container.innerHTML = allOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).map(order => `
    <div class="order-card ${order.status}">
      <div class="order-header">
        <span class="order-id">Order #${order.id}</span>
        <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
        <span class="order-status ${order.status}">${order.status.toUpperCase()}</span>
      </div>
      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
      <div class="order-footer">
        <span class="order-total">Total: $${order.total.toFixed(2)}</span>
        <div class="order-actions">
          ${order.status === 'delivered' ? `<button class="track-order-btn" data-id="${order.id}">Track</button>` : ''}
          ${order.status !== 'delivered' ? `<button class="cancel-order-btn" data-id="${order.id}">Cancel</button>` : ''}
        </div>
      </div>
      <div class="order-delivery">
        <i class="fas fa-map-marker-alt"></i> ${order.address}
      </div>
    </div>
  `).join('');
  
  // Attach event listeners
  document.querySelectorAll('.track-order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('trackingId').value = btn.dataset.id;
      document.getElementById('myOrdersModal').classList.remove('active');
      document.getElementById('trackingModal').classList.add('active');
      trackOrder();
    });
  });
  
  document.querySelectorAll('.cancel-order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to cancel this order?')) {
        updateOrderStatus(btn.dataset.id, 'cancelled');
        renderMyOrders();
        renderPendingOrders();
      }
    });
  });
}

function renderPendingOrders() {
  const container = document.getElementById('pendingOrdersItems');
  if (!container) return;
  
  const pendingOrders = allOrders.filter(o => o.status === 'pending' || o.status === 'confirmed');
  
  if (pendingOrders.length === 0) {
    container.innerHTML = '<p class="empty-orders">No pending orders!</p>';
    return;
  }
  
  container.innerHTML = pendingOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).map(order => `
    <div class="order-card ${order.status}">
      <div class="order-header">
        <span class="order-id">Order #${order.id}</span>
        <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
        <span class="order-status ${order.status}">${order.status.toUpperCase()}</span>
      </div>
      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
      <div class="order-footer">
        <span class="order-total">Total: $${order.total.toFixed(2)}</span>
        <div class="order-actions">
          <button class="mark-shipped-btn" data-id="${order.id}">Mark as Shipped</button>
          <button class="mark-delivered-btn" data-id="${order.id}">Mark as Delivered</button>
        </div>
      </div>
      <div class="order-delivery">
        <i class="fas fa-map-marker-alt"></i> ${order.address}
      </div>
    </div>
  `).join('');
  
  // Attach event listeners
  document.querySelectorAll('.mark-shipped-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateOrderStatus(btn.dataset.id, 'shipped');
      renderPendingOrders();
      renderMyOrders();
    });
  });
  
  document.querySelectorAll('.mark-delivered-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateOrderStatus(btn.dataset.id, 'delivered');
      renderPendingOrders();
      renderMyOrders();
      // Show confetti for delivery
      canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    });
  });
}

// ============================================ //
// REVIEW SYSTEM                                //
// ============================================ //
function loadReviews() {
  const saved = localStorage.getItem('productReviews');
  if (saved) productReviews = JSON.parse(saved);
}

function saveReviews() {
  localStorage.setItem('productReviews', JSON.stringify(productReviews));
}

function addReview(productId, rating, text) {
  if (!productReviews[productId]) productReviews[productId] = [];
  productReviews[productId].push({
    id: Date.now(),
    rating: rating,
    text: text,
    date: new Date().toLocaleDateString(),
    userName: 'Customer'
  });
  saveReviews();
  filterAndSortAllSections();
  showToast('Review submitted successfully!');
}

function showReviews(productId) {
  const reviews = productReviews[productId] || [];
  const product = [...products.adoption, ...products.food, ...products.accessories].find(p => p.id === productId);
  
  if (!product) return;
  
  let reviewsHtml = `<h3>Reviews for ${product.name}</h3>`;
  if (reviews.length === 0) {
    reviewsHtml += '<p>No reviews yet. Be the first to review!</p>';
  } else {
    reviewsHtml += reviews.map(r => `
      <div class="review-item">
        <div class="review-header">
          <span class="review-stars">${getStarHtml(r.rating)}</span>
          <span class="review-date">${r.date}</span>
        </div>
        <p class="review-text">${r.text}</p>
        <span class="review-author">- ${r.userName}</span>
      </div>
    `).join('');
  }
  
  reviewsHtml += `<button class="write-review-btn" data-id="${productId}">Write a Review</button>`;
  
  showModalContent(reviewsHtml);
  
  document.querySelector('.write-review-btn')?.addEventListener('click', () => {
    closeModal();
    openReviewModal(productId);
  });
}

function openReviewModal(productId) {
  currentReviewProduct = productId;
  currentRating = 0;
  const modal = document.getElementById('reviewModal');
  if (!modal) return;
  
  document.querySelectorAll('#reviewStars i').forEach(star => {
    star.classList.remove('active');
  });
  document.getElementById('reviewText').value = '';
  
  modal.classList.add('active');
}

// ============================================ //
// CHECKOUT SYSTEM                              //
// ============================================ //
function openCheckout() {
  const modal = document.getElementById('checkoutModal');
  const orderSummary = document.getElementById('orderSummary');
  
  if (!modal || !orderSummary) return;
  
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  orderSummary.innerHTML = `
    <h4>Order Summary</h4>
    ${cart.map(item => `<div class="order-summary-item"><span>${item.name} x${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)}</span></div>`).join('')}
    <div class="order-summary-item" style="font-weight:700; margin-top:10px; padding-top:10px; border-top:1px solid #ddd;"><span>Total</span><span>$${totalPrice.toFixed(2)}</span></div>
  `;
  
  modal.classList.add('active');
}

function placeOrder(event) {
  event.preventDefault();
  
  const name = document.getElementById('checkoutName')?.value;
  const email = document.getElementById('checkoutEmail')?.value;
  const phone = document.getElementById('checkoutPhone')?.value;
  const address = document.getElementById('checkoutAddress')?.value;
  
  if (!name || !email || !phone || !address) {
    showToast('Please fill all fields');
    return;
  }
  
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  
  // Generate Order ID
  const orderId = 'ORD-' + Date.now().toString().slice(-8);
  
  // Create new order
  const newOrder = {
    id: orderId,
    name, email, phone, address,
    items: [...cart],
    total: cart.reduce((sum, i) => sum + (i.price * i.quantity), 0),
    status: 'pending',
    date: new Date().toISOString()
  };
  
  allOrders.push(newOrder);
  saveOrders();
  
  // Clear cart
  cart = [];
  saveCart();
  
  // Close checkout modal
  document.getElementById('checkoutModal')?.classList.remove('active');
  
  // Show confetti
  canvasConfetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  canvasConfetti({ particleCount: 100, spread: 100, origin: { y: 0.6, x: 0.2 }, startVelocity: 25 });
  canvasConfetti({ particleCount: 100, spread: 100, origin: { y: 0.6, x: 0.8 }, startVelocity: 25 });
  
  showToast(`Order placed successfully! Order ID: ${orderId}`);
  
  // Clear form
  document.getElementById('checkoutName').value = '';
  document.getElementById('checkoutEmail').value = '';
  document.getElementById('checkoutPhone').value = '';
  document.getElementById('checkoutAddress').value = '';
  
  // Update pending orders display if modal is open
  renderPendingOrders();
  renderMyOrders();
}

// ============================================ //
// ORDER TRACKING                               //
// ============================================ //
function trackOrder() {
  const trackingId = document.getElementById('trackingId')?.value;
  const resultDiv = document.getElementById('trackingResult');
  
  if (!trackingId || !resultDiv) return;
  
  const order = allOrders.find(o => o.id === trackingId);
  
  if (!order) {
    resultDiv.innerHTML = '<p style="color:red;">Order not found. Please check your Order ID.</p>';
    return;
  }
  
  const statusSteps = ['pending', 'confirmed', 'shipped', 'delivered'];
  const currentStepIndex = statusSteps.indexOf(order.status);
  
  resultDiv.innerHTML = `
    <h4>Order ID: ${order.id}</h4>
    <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
    <p>Total: $${order.total.toFixed(2)}</p>
    <div class="tracking-status">
      <div class="status-step ${currentStepIndex >= 0 ? 'active' : ''}">
        <div class="step-icon">${currentStepIndex >= 0 ? '✓' : '●'}</div>
        <span>Pending</span>
      </div>
      <div class="status-step ${currentStepIndex >= 1 ? 'active' : ''}">
        <div class="step-icon">${currentStepIndex >= 1 ? '✓' : '●'}</div>
        <span>Confirmed</span>
      </div>
      <div class="status-step ${currentStepIndex >= 2 ? 'active' : ''}">
        <div class="step-icon">${currentStepIndex >= 2 ? '✓' : '●'}</div>
        <span>Shipped</span>
      </div>
      <div class="status-step ${currentStepIndex >= 3 ? 'active' : ''}">
        <div class="step-icon">${currentStepIndex >= 3 ? '✓' : '●'}</div>
        <span>Delivered</span>
      </div>
    </div>
    <p style="margin-top:15px;">Delivery Address: ${order.address}</p>
  `;
}

// ============================================ //
// QUICK VIEW MODAL                             //
// ============================================ //
function openQuickView(product) {
  const modal = document.getElementById('quickViewModal');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !modalBody) return;
  
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const reviews = productReviews[product.id] || [];
  const reviewCount = product.reviews + reviews.length;
  
  modalBody.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="modal-product-img">
    <h3 class="modal-product-title">${product.name}</h3>
    <div class="rating">${getStarHtml(product.rating)} (${reviewCount} reviews)</div>
    <p class="modal-product-price">$${product.price} <span class="old-price">$${product.oldPrice}</span> <span class="discount-badge">-${discount}%</span></p>
    <p class="modal-product-desc">${product.name} is a premium product loved by pet owners worldwide.</p>
    <div class="modal-quantity">
      <button id="modalQtyMinus">-</button>
      <span id="modalQty">1</span>
      <button id="modalQtyPlus">+</button>
    </div>
    <button class="modal-add-btn" id="modalAddToCart">Add to Cart</button>
  `;
  
  let qty = 1;
  const qtySpan = document.getElementById('modalQty');
  document.getElementById('modalQtyMinus')?.addEventListener('click', () => { if (qty > 1) { qty--; if (qtySpan) qtySpan.textContent = qty; } });
  document.getElementById('modalQtyPlus')?.addEventListener('click', () => { qty++; if (qtySpan) qtySpan.textContent = qty; });
  document.getElementById('modalAddToCart')?.addEventListener('click', () => {
    for (let i = 0; i < qty; i++) addToCart(product.id, product.name, product.price);
    modal.classList.remove('active');
  });
  
  modal.classList.add('active');
}

// ============================================ //
// HELPER FUNCTIONS                             //
// ============================================ //
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

function showModalContent(content) {
  const modal = document.getElementById('quickViewModal');
  const modalBody = document.getElementById('modalBody');
  if (modal && modalBody) {
    modalBody.innerHTML = content;
    modal.classList.add('active');
  }
}

// ============================================ //
// CARD EVENT HANDLERS                          //
// ============================================ //
function attachCardEvents() {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.removeEventListener('click', handleAddToCart);
    btn.addEventListener('click', handleAddToCart);
  });
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.removeEventListener('click', handleQuickView);
    btn.addEventListener('click', handleQuickView);
  });
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.removeEventListener('click', handleFavorite);
    btn.addEventListener('click', handleFavorite);
  });
  document.querySelectorAll('.view-reviews-link').forEach(btn => {
    btn.removeEventListener('click', handleViewReviews);
    btn.addEventListener('click', handleViewReviews);
  });
  document.querySelectorAll('.card-item').forEach(card => {
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });
}

function handleAddToCart(e) {
  e.stopPropagation();
  const card = this.closest('.card-item');
  if (card) {
    addToCart(card.dataset.productId, card.dataset.productName, card.dataset.productPrice);
  }
}

function handleQuickView(e) {
  e.stopPropagation();
  const card = this.closest('.card-item');
  if (card) {
    const allProducts = [...products.adoption, ...products.food, ...products.accessories];
    const product = allProducts.find(p => p.id === card.dataset.productId);
    if (product) {
      openQuickView(product);
    }
  }
}

function handleFavorite(e) {
  e.stopPropagation();
  const btn = this;
  toggleWishlist(btn.dataset.productId);
}

function handleViewReviews(e) {
  e.stopPropagation();
  const btn = this;
  showReviews(btn.dataset.productId);
}

function handleCardClick(e) {
  const card = this.closest('.card-item');
  if (card && !e.target.closest('button')) {
    const allProducts = [...products.adoption, ...products.food, ...products.accessories];
    const product = allProducts.find(p => p.id === card.dataset.productId);
    if (product) {
      openQuickView(product);
    }
  }
}

// ============================================ //
// DARK MODE                                    //
// ============================================ //
function initDarkMode() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  const themeIcon = themeToggle.querySelector('.themeIcon');
  const themeText = themeToggle.querySelector('.themeText');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
    if (themeText) themeText.textContent = 'BRIGHT MODE';
  }
  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
      if (themeIcon) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
      if (themeText) themeText.textContent = 'BRIGHT MODE';
      localStorage.setItem('theme', 'dark');
    } else {
      if (themeIcon) { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
      if (themeText) themeText.textContent = 'DARK MODE';
      localStorage.setItem('theme', 'light');
    }
  });
}

// ============================================ //
// MENU CONTROLS                                //
// ============================================ //
function initMenuControls() {
  const menuBtn = document.getElementById('menuIcon');
  const closeBtn = document.getElementById('closeMenu');
  const sideMenu = document.getElementById('slideMenu');
  const overlay = document.getElementById('overlay');
  if (!menuBtn || !sideMenu || !overlay) return;
  
  function closeMenu() { 
    sideMenu.classList.remove('active'); 
    overlay.classList.remove('active'); 
  }
  
  menuBtn.addEventListener('click', () => { 
    sideMenu.classList.add('active'); 
    overlay.classList.add('active'); 
  });
  
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  document.querySelectorAll('.menu-item .item a').forEach(link => {
    link.addEventListener('click', () => { 
      if (!link.closest('#themeToggle')) closeMenu(); 
    });
  });
  
  // Wishlist menu link
  document.getElementById('wishlistMenuLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    updateWishlistUI();
    document.getElementById('wishlistModal')?.classList.add('active');
  });
  
  // My Orders menu link
  document.getElementById('myOrdersLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    renderMyOrders();
    document.getElementById('myOrdersModal')?.classList.add('active');
  });
  
  // Pending Orders menu link
  document.getElementById('pendingOrdersLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    renderPendingOrders();
    document.getElementById('pendingOrdersModal')?.classList.add('active');
  });
}

// ============================================ //
// HERO SLIDER                                  //
// ============================================ //
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const dotsContainer = document.getElementById('heroDots');
  if (!slides.length) return;
  
  let current = 0;
  
  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
  }
  
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('hero-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }
  
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));
  
  let interval = setInterval(() => showSlide(current + 1), 5000);
  const banner = document.querySelector('.hero-banner');
  if (banner) {
    banner.addEventListener('mouseenter', () => clearInterval(interval));
    banner.addEventListener('mouseleave', () => interval = setInterval(() => showSlide(current + 1), 5000));
  }
}

// ============================================ //
// EVENT LISTENERS                              //
// ============================================ //
function initEventListeners() {
  // Cart sidebar
  document.getElementById('cartIcon')?.addEventListener('click', () => document.getElementById('cartSidebar')?.classList.add('active'));
  document.getElementById('closeCart')?.addEventListener('click', () => document.getElementById('cartSidebar')?.classList.remove('active'));
  
  // Checkout
  document.getElementById('checkoutBtn')?.addEventListener('click', openCheckout);
  document.getElementById('checkoutForm')?.addEventListener('submit', placeOrder);
  
  // Tracking
  document.getElementById('trackOrderBtn')?.addEventListener('click', trackOrder);
  
  // Review submission
  document.getElementById('submitReviewBtn')?.addEventListener('click', () => {
    if (currentReviewProduct && currentRating > 0) {
      const text = document.getElementById('reviewText')?.value;
      if (text) {
        addReview(currentReviewProduct, currentRating, text);
        document.getElementById('reviewModal')?.classList.remove('active');
      } else {
        showToast('Please write a review');
      }
    } else {
      showToast('Please select a rating');
    }
  });
  
  // Review stars
  document.querySelectorAll('#reviewStars i').forEach(star => {
    star.addEventListener('click', () => {
      currentRating = parseInt(star.dataset.rating);
      document.querySelectorAll('#reviewStars i').forEach((s, i) => {
        if (i < currentRating) s.classList.add('active');
        else s.classList.remove('active');
      });
    });
  });
  
  // Close modals
  document.querySelectorAll('.close-modal, .close-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal, .cart-sidebar').forEach(el => el.classList.remove('active'));
    });
  });
  
  // Wishlist icon
  document.getElementById('wishlistIcon')?.addEventListener('click', () => {
    updateWishlistUI();
    document.getElementById('wishlistModal')?.classList.add('active');
  });
  
  // Notification icon
  document.getElementById('notifIcon')?.addEventListener('click', () => showToast('You have 3 new notifications'));
  
  // Shop now buttons
  document.querySelectorAll('.shop-now-btn').forEach(btn => {
    btn.addEventListener('click', () => document.querySelector('.category-filter')?.scrollIntoView({ behavior: 'smooth' }));
  });
  
  // Bottom navigation
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.bottom-nav .nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      const page = item.dataset.nav;
      if (page !== 'shop') showToast(`${page.charAt(0).toUpperCase() + page.slice(1)} page (Coming soon)`);
    });
  });
}

// ============================================ //
// BACK TO TOP                                  //
// ============================================ //
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}