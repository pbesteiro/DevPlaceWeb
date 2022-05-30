const getCart = () => {
  const cartDetails = document.getElementById("cart-details");
  const selectedProduct = localStorage.getItem(
    'selected-product'
  )

  if(cartDetails && !!selectedProduct) {
    const { name, days, period, hours, mentor, price, discount } = JSON.parse(selectedProduct);
    document.getElementById('course-name').innerText = name;
    document.getElementById('course-days-period').innerText = days + " " + period;
    document.getElementById('course-hour').innerText = hours;
    document.getElementById('course-teacher').innerText = mentor.name ? mentor.name + ", " + mentor.lastName : mentor;
    document.getElementById('course-price').innerText = getPesosArFormat(price);
    document.getElementById('course-discount').innerText = discount + '%';
    document.getElementById('course-total').innerText = getPesosArFormat(price - (price / 100 * discount));
  }
}

const resetCart = () => {
  localStorage.removeItem('selected-product')
  const cartDetails = document.getElementById("cart-details");

  if(cartDetails) {
    document.getElementById('course-name').innerText = '- Seleccione un curso';
    document.getElementById('course-days-period').innerText = '';
    document.getElementById('course-hour').innerText = '';
    document.getElementById('course-teacher').innerText = '';
    document.getElementById('course-price').innerText = '';
    document.getElementById('course-discount').innerText = '0%';
    document.getElementById('course-total').innerText = '';
  }
}

const setSelectedProduct = (data) => {  
  localStorage.setItem(
    'selected-product',
    data
  );

  getCart();
}

const addToCart = (event) => {
  const data = event.target.parentNode.dataset.course
  setSelectedProduct(data)
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = '/checkout/customer-information.php';
  document.body.appendChild(a);
  a.click();
}

getCart()