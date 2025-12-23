const BASE_URL = "https://www.googleapis.com/books/v1/volumes"

export const searchBooks = async (bookTitle) => {
  const res = await fetch(
    `${BASE_URL}?q=intitle:${encodeURIComponent(bookTitle)}&maxResults=50`
  )
  const data = await res.json()
  return data.items || []
}

