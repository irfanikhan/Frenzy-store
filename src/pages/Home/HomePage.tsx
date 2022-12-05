import React from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Header from 'src/common/Header/Header';
import { ScreenOptions } from 'src/index';
import Layout from 'src/utils/Layout';
import { useFetchProducts } from './queries/fetchProducts';

const HomePage = ({ navigation }: ScreenOptions) => {
  const { products } = useFetchProducts();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header name="Home" />
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
              <View style={{ flex: 1, width: Layout.item_width }}>
                <Image
                  style={{ height: Layout.item_width - 10 }}
                  source={{ uri: item.featuredPhoto }}
                  resizeMode="contain"
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
