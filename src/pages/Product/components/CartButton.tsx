import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from './styles';

interface CartButtonProps {
  onPress: () => void;
  icon: string;
}

const CartButton = ({ onPress, icon }: CartButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Icon style={{ color: '#fff' }} name={icon} size={24} />
    </Button>
  );
};

export default CartButton;
