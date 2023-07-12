const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, amount, product } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
  
      let cartProduct;
  
      cartProduct = {
        id: id,
        name: product.name,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
   if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;
      // 25000 + 0 = 25000
      // 10199 + 25000 = 121

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }
    return state;
  };
  
  export default cartReducer;
