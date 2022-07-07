const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {
  },
};
jest.mock('../lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => {
    return MongoLibStub;
  });
});

describe('Test for book service', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => {
      //Given
      //When
      const books = await service.getBooks();
      console.log(books);
      //Then
      expect(books.length).toEqual(1);
    });
  });
});
