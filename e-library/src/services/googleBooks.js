const BASE_URL = "https://www.googleapis.com/books/v1/volumes"
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
export const searchBooks = async (bookTitle) => {
  const res = await fetch(
    `${BASE_URL}?q=intitle:${encodeURIComponent(
      bookTitle
    )}&maxResults=40&key=${API_KEY}`
  )
  const data = await res.json()
  console.log(data)
  return data.items || []
}
