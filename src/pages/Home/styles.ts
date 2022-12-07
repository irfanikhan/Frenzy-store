import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2 - 35;

export const PageContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ViewContainer = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  width: ${ITEM_WIDTH}px;
  margin: 10px;
`;

export const ItemName = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const ItemImage = styled.Image`
  flex: 1;
  height: ${ITEM_WIDTH - 10}px;
`;
