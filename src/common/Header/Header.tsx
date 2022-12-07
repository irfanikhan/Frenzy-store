import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from '../CartIcon/CartIcon';

interface HeaderProps {
  name?: string;
  navBack?: boolean;
}
const Header = ({ name, navBack }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 70,
        alignItems: 'center',
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      {navBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text
        style={{ flex: 1, fontSize: 18, marginHorizontal: 20, textAlign: 'center' }}
        numberOfLines={1}
      >
        {name}
      </Text>
      <CartIcon />
    </View>
  );
};

export default Header;
