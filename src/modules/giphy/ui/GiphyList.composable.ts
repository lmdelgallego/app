import { ref } from 'vue';
import service from '../infrastructure/giphyService';
import { Giphy } from '../domain/giphy.type';
import { GiphyList } from '../application/giphy.factory';

export default function useGiphyList() {
  const gifs = ref<Giphy[]>([]);
  const isLoading = ref(false);

  const loadGifs = async (searchTerm: string) => {
    try {
      isLoading.value = true;
      const { data } = await service.loadGif(searchTerm);
      gifs.value = GiphyList(data);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    gifs,
    loadGifs,
    isLoading,
  };
}
