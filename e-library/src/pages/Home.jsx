import React from "react"
import Nav from "../components/Nav"
import { useState } from "react"
import { searchBooks } from "../services/googleBooks"

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
const Home = () => {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    const results = await searchBooks(query)
    setBooks(results)
  }
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
        />
        <button>Search</button>
      </form>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
