import { Giphy } from '../domain/giphy.type';
import { RawGiphy } from '../infrastructure/giphyService.types';

export const CreateGiphy = (rowGiphy: RawGiphy): Giphy => ({
  id: rowGiphy.id,
  smallUrl: rowGiphy.images.fixed_height_small.url,
  originaUrl: rowGiphy.images.original.url,
});

export const GiphyList = (rowGiphyList: RawGiphy[]): Giphy[] => rowGiphyList.map(CreateGiphy);

export {
  Giphy,
};
