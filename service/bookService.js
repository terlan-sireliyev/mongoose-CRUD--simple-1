import bookModel from "../model/bookSchema.js";

export const getBooks = async () => {
  const getBook = await bookModel.find();
  return getBook;
};

export const getByIdBooks = async (id) => {
  const getByIdBook = await bookModel.findById({ _id: id });
  return getByIdBook;
};

export const postBooks = async (bookData) => {
  const postBook = await bookModel.create(bookData);
  return postBook;
};

export const deleteBook = async (id) => {
  const deletBook = await bookModel.deleteOne({ _id: id });
  return deletBook;
};

export const updateBooks = async (id, updateData) => {
  const updateBook = await bookModel.findByIdAndUpdate(
    { _id: id },
    updateData,
    {
      new: true,
    }
  );
  return updateBook;
};
