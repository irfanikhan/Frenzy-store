import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  name?: string;
}
const Header = ({ name }: HeaderProps) => {
  return (
    <View
      style={{
        height: 70,
        alignItems: 'center',
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}
    >
     <View />
      <Text style={{ fontSize: 18 }}>{name}</Text>
     <TouchableOpacity>
        <Icon name='cart-outline' size={24} />
     </TouchableOpacity>
    </View>
  );
};

export default Header;
