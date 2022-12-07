import { Header } from '@common/index';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ScreenOptions } from 'src/index';
import { useFetchProducts } from './queries/fetchProducts';
import { ItemImage, ItemName, PageContainer, ItemContainer, ViewContainer } from './styles';

const HomePage = ({ navigation }: ScreenOptions) => {
  const { products } = useFetchProducts();

  return (
    <PageContainer>
      <Header name="Home" />
      <ViewContainer>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
              <ItemContainer>
                <ItemImage source={{ uri: item.featuredPhoto }} resizeMode="contain" />
                <ItemName>{item.name}</ItemName>
              </ItemContainer>
            </TouchableOpacity>
          )}
        />
      </ViewContainer>
    </PageContainer>
  );
};

export default HomePage;
