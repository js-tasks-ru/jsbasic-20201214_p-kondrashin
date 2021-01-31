export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let goods = {
      product: {},
      count: 1
    };
    
    let filteredCart = this.cartItems.find(item => item.product.id == product.id);

    if (!filteredCart ) {
      Object.assign(goods.product, product);
      this.cartItems.push(goods); 
    }
    else {
      filteredCart.count++;
    }

    this.onProductUpdate(filteredCart);
  }

  updateProductCount(productId, amount) {
    let filteredCart = this.cartItems.find(item => item.product.id == productId);
    let filteredCartIndex = this.cartItems.findIndex(item => item.product.id == productId);
    
    filteredCart.count  += amount;

    if(filteredCart.count == 0) {
      this.cartItems.splice(filteredCartIndex, 1);
    }

    this.onProductUpdate(filteredCart);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    let totalCount = 0;
    this.cartItems.forEach(elem => totalCount+=elem.count);
    return totalCount
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach(elem => totalPrice+=(elem.product.price * elem.count));
    console.log(totalPrice);
    return totalPrice
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

