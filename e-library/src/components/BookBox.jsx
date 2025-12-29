import React from "react"
import { Link } from "react-router-dom"

const BookBox = ({ book }) => {

  const thumbnail = book.volumeInfo.imageLinks?.thumbnail

  return (
    <>
      <Link to={`/bookdetails/${book.id}`} className="book-card">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={book.volumeInfo.title}
            className="book-image"
          />
        ) : (
          <div className="book-no-image">No Image</div>
        )}

        <h3 className="book-title">{book.volumeInfo.title}</h3>
        <p className="book-authors">{book.volumeInfo.authors?.join(", ")}</p>
      </Link>
    </>
  )
}

export default BookBox
