class Product {


  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}


class ShoppingCart {
  items = [];

  set CartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;

  }
  get totalAmount() {
    const sum = this.items.reduce((prevValue, curtVal) => prevValue + curtVal.price, 0);
    return sum
  }

  addProduct(product) {
    let updatedItem = [...this.items]
    updatedItem.push(product)
    this.CartItems = updatedItem

  }
  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `<h2>Total</h2>
  <button>Order now</button>`;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2')
    return cartEl;
  }

}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
    App.addProductTocart(this.product)
    //`<h2>Total</h2>
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://i5.walmartimages.com/asr/a6240a89-36f0-4e89-8aaf-0e7e8e8c88f7_1.bcd14f6050f4ef7f32fb7116e2955821.jpeg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() { }

  render() {

    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    // renderHook.append(prodList);
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart()
    const CartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEle = productList.render();
    renderHook.append(prodListEle);
    renderHook.append(CartEl);
  }
}


class App {
  static init() {

    const shop = new Shop();

    shop.render();
    this.cart = shop.cart;
  }

  static addProductTocart(product) {
    this.cart.addProduct(product)
  }
}
App.init()