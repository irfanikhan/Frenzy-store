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
  getProductQuantity: (id: string) => number;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductQuantity = (productId: string) => {
    return products.find(prod => prod.id === productId)?.quantity || 0
  }

  const addItem = (product: Product) => {
    const prod = products.find((prod) => prod.id === product.id);
    if (prod) {
      setProducts(
        products.map((item) => {
          if (item.id === prod.id) {
            return { ...prod, quantity: prod.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setProducts([...products, product]);
    }
  };

  const removeItem = (product: Product) => {
    setProducts(products.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{ products, setProducts, addItem, removeItem, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
