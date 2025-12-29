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

export const getBookDetails = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}?key=${API_KEY}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching book details:", error)
    return null
  }
} 
