function showPopup() {
    document.getElementById("cartPopup").classList.add("show");
    document.getElementById("popupOverlay").classList.add("show");
}

function closePopup() {
    document.getElementById("cartPopup").classList.remove("show");
    document.getElementById("popupOverlay").classList.remove("show");
}
let cartItems = [];

function addToCart(name, price) {
  cartItems.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}