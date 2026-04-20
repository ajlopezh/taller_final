
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      total: 0,

      addToCart: (product) => {
        const { cartItems } = get();

        const existingProduct = cartItems.find(
          (item) => item.id === product.id
        );

        let updatedCart;

        if (existingProduct) {
          updatedCart = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        const total = updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        set({
          cartItems: updatedCart,
          total,
        });
      },

      removeFromCart: (productId) => {
        const { cartItems } = get();

        const updatedCart = cartItems
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        const total = updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        set({
          cartItems: updatedCart,
          total,
        });
      },

      deleteFromCart: (productId) => {
        const { cartItems } = get();

        const updatedCart = cartItems.filter(
          (item) => item.id !== productId
        );

        const total = updatedCart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        set({
          cartItems: updatedCart,
          total,
        });
      },

      clearCart: () =>
        set({
          cartItems: [],
          total: 0,
        }),
    }),
    {
      name: 'cart-storage',
    }
  )
);