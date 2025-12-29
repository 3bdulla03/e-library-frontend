import React from "react"
import Nav from "../components/Nav"
import { useState } from "react"
import { searchBooks } from "../services/googleBooks"
import BookBox from "../components/BookBox"
import { AddFavorite } from "../services/Favorites"

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY

const Home = () => {
  const [title, setTitle] = useState("")
  const [books, setBooks] = useState([])
  const [isBox, setIsBox] = useState(true)

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

  const openBook = ()=>{
    setIsBox(false)
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

        {isBox ? (
          <div className="books-grid">
            {books.map((book) => (
              <BookBox key={book.id} book={book} clicked={openBook}/>
            ))}
          </div>
        ) : <BookDetails data={data} />}
      </main>
    </>
  )
}

export default Home
