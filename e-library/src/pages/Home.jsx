import React from "react"
import Nav from "../components/Nav"
import { useState } from "react"
import { searchBooks } from "../services/googleBooks"
import BookBox from "../components/BookBox"
import { AddFavorite } from '../services/Favorites'

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY

const Home = () => {
  const [title, setTitle] = useState("")
  const [books, setBooks] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    const results = await searchBooks(title)
    setBooks(results)
  }

  const handleAddFavorite = async (bookId) => {
    try {
      await AddFavorite(bookId)
      alert("Book added to favorites")
    } catch (error) {
      console.log(error)
      alert("can't add to favorites")
    }
  }
  return (
    <>
      <main className="home">
        <form onSubmit={handleSearch} className="home-form">
          <input
            className="home-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search books..."
          />
          <button className="home-button">Search</button>
        </form>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              {book.volumeInfo.imageLinks?.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
