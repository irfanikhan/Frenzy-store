import React, { useContext } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { CartContext } from 'src/context/CartContext';
import { ScreenOptions } from 'src/index';
import Layout from 'src/utils/Layout';

const ProductPage = ({ routes }: ScreenOptions) => {
  const product = routes.params.product;
  const { products, getProductQuantity } = useContext(CartContext);

  console.log(product)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: Layout.screen_height / 3, width: Layout.screen_width }}
          resizeMode="cover"
          source={{ uri: product.featuredPhoto }}
        />
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 17 }}>{product.name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity>
              <Icon name='add-outline' />
            </TouchableOpacity>
            <Text>{getProductQuantity(product?.id)}</Text>
            <TouchableOpacity>
              <Icon name='remove-outline' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductPage;
