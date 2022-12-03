import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import Layout from 'src/utils/Layout';
import { useFetchProducts } from './queries/fetchProducts';

const HomePage = () => {
  const { products } = useFetchProducts();

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: Layout.item_width }}>
              <Image
                style={{ width: Layout.item_width - 10 }}
                source={{ uri: item.featuredPhoto }}
              />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
