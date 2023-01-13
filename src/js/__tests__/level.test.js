import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel', () => {
  fetchData.mockReturnValue(Error('Mock this!'));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should get response', () => {
  const response = {
    status: 'ok',
    level: 1,
  };
  fetchData.mockReturnValue(response);
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});
