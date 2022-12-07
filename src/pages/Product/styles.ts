import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const PageContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ViewContainer = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: ${height / 3}px;
  width: ${width}px;
`;

export const ProductContent = styled.View`
  flex: 1;
  margin: 20px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 14px;
  margin-top: 12px;
`;

export const CartUpdateView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Quantity = styled.Text`
  font-size: 24px;
  text-align: center;
`;