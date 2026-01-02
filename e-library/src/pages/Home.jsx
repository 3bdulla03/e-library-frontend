import React from "react"
import Nav from "../components/Nav"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { searchBooks } from "../services/googleBooks"
import BookBox from "../components/BookBox"
import { AddFavorite } from "../services/Favorites"
import BookDetails from "./BookDetails"

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY

const Home = ({user}) => {
  const [title, setTitle] = useState("")
  const [books, setBooks] = useState([])
  const [isBox, setIsBox] = useState(true)
  const [bookData, setBookData] = useState(null)

const navigate = useNavigate()
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

  const openBook = (id) => {
    setIsBox(false)
    books.forEach((book) => {
      if (book.id == id) {
        setBookData(book)
      }
    })
  }
  return user ? (
    <>
      <main className="home">


        {isBox ? (


<div>
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
              <BookBox key={book.id} book={book} clicked={openBook} />
            ))}
          </div>
          </div>
        ) : (
          <BookDetails bookData={bookData} user={user}/>
        )}
      </main>
    </>
  ) :(
    <div className="protected">
    <h3>Oops! You must be signed in to do that!</h3>
    <button onClick={() => navigate('/signin')}>Sign In</button>
  </div>
  )

}

export default Home
