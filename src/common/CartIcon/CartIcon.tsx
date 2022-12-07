import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from 'src/context';

const CartIcon = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <TouchableOpacity>
      {!!itemsInCart && (
        <View
          style={{
            position: 'absolute',
            right: -10,
            top: -5,
            backgroundColor: 'red',
            height: 18,
            width: 18,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>{itemsInCart}</Text>
        </View>
      )}
      <Icon name="cart-outline" size={24} />
    </TouchableOpacity>
  );
};

export default CartIcon;
