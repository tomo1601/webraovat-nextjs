import { jsonPlaceholderAxios } from "../jsonPlaceholderAxios";

interface Book {
  name: string,
  description: string,
  price: number,
  publicationDate: string,
  author: string,
  tags: string[]
}

export const getTodostsQueryFn = async ({ pageParam = 1 }) =>
  jsonPlaceholderAxios
    .get(`/books`, { params: { page: pageParam } })
    .then((res) => res.data);

export const createBookQueryFn = async ( body : Book) =>
  jsonPlaceholderAxios.post(`/books`, body).then((res) => res.data);

  export const getBookById = async (id : String) =>
  jsonPlaceholderAxios.get(`/books/${id}`).then((res) => res.data);