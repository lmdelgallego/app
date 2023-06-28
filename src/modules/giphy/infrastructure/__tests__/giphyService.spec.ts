import service from '../giphyService';

const mockHttp = {
  get: jest.fn(),
};

jest.mock('../../../shared', () => ({
  get: (url: string, params?: unknown) => mockHttp.get(url, params || {}),
}));

describe('GiphyService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockHttp.get.mockReset();
  });
  test('should return a list of gifs', async () => {
    const resolve = Promise.resolve({
      data: {},
    });
    mockHttp.get.mockReturnValue(resolve);
    const list = await service.loadGif('test');
    expect(mockHttp.get).toHaveBeenCalled();
    expect(mockHttp.get).toHaveBeenCalledWith('/search', {
      params: {
        api_key: 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa',
        q: 'test',
      },
    });
    expect(list).toEqual({});
  });
});
