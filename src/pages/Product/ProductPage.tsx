import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { ScreenOptions } from 'src/index';
import Layout from 'src/utils/Layout';

const ProductPage = ({ routes }: ScreenOptions) => {
  const product = routes.params.product;

  console.log(product)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: Layout.screen_height / 3, width: Layout.screen_width }}
          resizeMode="cover"
          source={{ uri: product.featuredPhoto }}
        />
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ marginTop: 20, fontSize: 17 }}>{product.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductPage;
