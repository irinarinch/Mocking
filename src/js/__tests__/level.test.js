import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should get response about level', () => {
  const response = {
    status: 'ok',
    level: 1,
  };
  fetchData.mockReturnValue(response);
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('should get error response', () => {
  const response = {
    status: 'error',
  };
  fetchData.mockReturnValue(response);
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
