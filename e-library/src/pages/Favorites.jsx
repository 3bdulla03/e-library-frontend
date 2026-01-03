import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"
import BookBox from "../components/BookBox"
import BookDetails from "./BookDetails"

const Favorites = ({ user }) => {
  const [books, setBooks] = useState([])
  const [isBookDetails, setIsBookDetails] = useState(false) // same as isSearch useState in Home
  const [bookData, setBookData] = useState(null)
  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const favoriteDocs = await GetFavorites()
        const loadedBooks = []

        for (let i = 0; i < favoriteDocs.length; i++) {
          const fav = favoriteDocs[i]
          const data = await getBookDetails(fav.bookId)
          if (data) {
            loadedBooks.push({ ...data, favoriteId: fav._id })
          }
        }

        setBooks(loadedBooks)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserFavorites()
  }, [])

  const openBook = (id) => {
    setIsBookDetails(true)
    books.forEach((book) => {
      if (book.id == id) {
        console.log(book)
        setBookData(book)
      }
    })
  }

  return (
    <main className="home">
      {isBookDetails ? (
        <>
          <BookDetails bookData={bookData} user={user} />
          <button onClick={() => setIsBookDetails(false)}>Back</button>
        </>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookBox key={book.id} book={book} clicked={openBook} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites
