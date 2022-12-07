import React, { useContext } from 'react';
import { Text } from 'react-native';
import { CartContext } from '../../context';
import { ScreenOptions } from 'src/index';
import CartButton from './components/CartButton';
import {
  CartUpdateView,
  Name,
  PageContainer,
  ProductContent,
  ProductImage,
  Quantity,
  ViewContainer,
} from './styles';
import { Header } from 'src/common';

const ProductPage = ({ route }: ScreenOptions) => {
  const product = route.params.product;
  const { getQuantity, addItem, decreaseQuantity } = useContext(CartContext);

  // TODO: Create query to fetch product details
  // const { product } = useFetchProduct({ id: product.id });

  console.log(product.id, ' : ', getQuantity(product.id))

  const increaseQuantity = () => {
    addItem(product);
  };

  const decQuantity = () => {
    decreaseQuantity(product);
  };

  return (
    <PageContainer>
      <ViewContainer>
        <Header name={product.name} navBack />
        <ProductImage resizeMode="cover" source={{ uri: product.featuredPhoto }} />
        <ProductContent>
          <Name>{product.name}</Name>
          <Text>{product?.description}</Text>
          <CartUpdateView>
            <CartButton onPress={increaseQuantity} icon="add-outline" />
            <Quantity>{getQuantity(product?.id)}</Quantity>
            <CartButton onPress={decQuantity} icon="remove-outline" />
          </CartUpdateView>
        </ProductContent>
      </ViewContainer>
    </PageContainer>
  );
};

export default ProductPage;
