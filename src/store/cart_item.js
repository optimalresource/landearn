const CartItem = {
  namespaced: true,
  state: {
    cartUpdate: null,
  },
  mutations: {
    cartUpdated(state) {
      state.cartUpdate = true;
      return state;
    },
    cartInitialized(state) {
      state.cartUpdate = null;
      return state;
    },
  },
};

export default CartItem;
