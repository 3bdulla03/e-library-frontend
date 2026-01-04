import React from "react"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"
import { GetFavorites } from "../services/Favorites"
import { getBookDetails } from "../services/googleBooks"
import "../App.css"
import ReadingStatus from "../components/ReadingStatus"
import { AddFavorite, RemoveFavorite } from "../services/Favorites"
import Reviews from "../components/Reviews"

const BookDetails = ({ bookData, user}) => {
  const [alreadyFav, setAlreadyFav] = useState(false)
  const info = bookData.volumeInfo

  useEffect(() => {
    checkIfFav()
  }, [])

  const checkIfFav = async () => {
    const allFav = await GetFavorites()
    const foundMach = allFav.some(
      (fav) => String(fav.bookId).trim() === String(bookData.id).trim()
    )
    console.log("already fav? : ", foundMach)
    foundMach ? setAlreadyFav(true) : setAlreadyFav(false)
  }

  const handleAddFavorite = async (bookId) => {
    try {
      await AddFavorite(bookId)
      alert("Book added to favorites")
      setAlreadyFav(true)
    } catch (error) {
      console.log(error)
      alert("can't add to favorites")
    }
  }

  const handleRemoveFromFav = async (bookId) => {
    try {
      RemoveFavorite(bookId)
      alert("Removed successful")
      setAlreadyFav(false)
    } catch (error) {
      console.log(error)
      alert("can't remove favorites")
    }
  }

  return (
    <>
      <div className="book-view">
        <div className="book-image-section">
          <img
            src={info.imageLinks?.thumbnail}
            alt={info.title}
            className="book-thumbnail"
          />
        </div>

        <div className="book-info">
          
          {/* --- CHANGED: Header Row with Title + Status --- */}
          <div className="book-header-row">
            <h2 className="book-title">{info.title || "No title available"}</h2>
            <div className="status-wrapper-top">
               <ReadingStatus bookId={bookData.id} user={user} />
            </div>
          </div>

          <p className="book-meta">
            <strong>Author:</strong> <span>{info.authors?.join(", ")}</span>
          </p>

          <p className="book-meta">
            <strong>Category:</strong> <span>{info.categories?.join(", ")}</span>
          </p>

          <div className="book-summary">
            <strong>Summary:</strong>
            <div 
              className="summary-text"
              dangerouslySetInnerHTML={{ __html: info.description || "No description available." }}
            />
          </div>

          <div className="action-area">
            {/* ReadingStatus removed from here */}
            
            {alreadyFav ? (
              <button 
                className="fav-btn remove" 
                onClick={() => handleRemoveFromFav(bookData.id)}
              >
                Remove from Favorites
              </button>
            ) : (
              <button 
                className="fav-btn add" 
                onClick={() => handleAddFavorite(bookData.id)}
              >
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <Reviews bookId={bookData.id} user={user} />
      </div>
    </>
  )
}

export default BookDetails
