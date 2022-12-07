import React, { useState, createContext, ReactElement } from 'react';

type Product = {
  name: string;
  id?: string;
  quantity: number;
};

interface CartContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  getQuantity: (id: string) => number;
  itemsInCart: number
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);

  const findItem = (product: Product) => products.find(item => item.id === product.id);

  const getQuantity = (productId: string) => {
    return products.find((prod) => prod.id === productId)?.quantity || 0;
  };

  const addItem = (product: Product) => {
    const _item = findItem(product);

    if (_item) {
      setProducts(
        products.map((item) => {
          if (item.id === _item.id) {
            return { ..._item, quantity: _item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (product: Product) => {
    setProducts(products.filter((item) => item.id !== product.id));
  };

  const decreaseQuantity = (product: Product) => {
    const item = findItem(product);

    if (!item || !item.quantity) return;

    if (item.quantity === 1) {
      removeItem(product);
    } else {
      setProducts(
        products.map((item) => {
          if (item.id === product.id) {
            return { ...product, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ products, setProducts, addItem, removeItem, decreaseQuantity, getQuantity, itemsInCart: products.length }}
    >
      {children}
    </CartContext.Provider>
  );
};
