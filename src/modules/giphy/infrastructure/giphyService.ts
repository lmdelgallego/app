import { get } from '@/modules/shared';
import { Main } from './giphyService.types';

const loadGif = async (searchTerm: string) => {
  const { data } = await get<Main>('/search', {
    params: {
      api_key: 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa',
      q: searchTerm,
    },
  });
  return data;
};

export default {
  loadGif,
};
