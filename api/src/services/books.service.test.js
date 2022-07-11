const BookService = require('./books.service');
const {generateManyBook} = require('../fakes/book.fake');

const mockSpyGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {
  },
};

jest.mock('../lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAll: mockSpyGetAll,
      create: () => {
      },
    };
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
      const fakeBooks = generateManyBook(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      //When
      const books = await service.getBooks({});
      console.log(books);
      //Then
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book',async ()=>{
      //Given
      const fakeBooks = generateManyBook(4);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      //When
      const books = await service.getBooks({});
      //Then
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
