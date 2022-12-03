import { useQuery } from '@tanstack/react-query';
import makeRequest from 'src/utils/request';

const fetchProducts = () => {
  return makeRequest({ endpoint: 'products', method: 'GET' });
};

export const useFetchProducts = (config = {}) => {
  const { data, isLoading } = useQuery(['products'], fetchProducts, config);
  return { products: data, isLoading };
};
