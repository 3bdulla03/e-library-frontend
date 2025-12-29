import React from "react"
import { Link } from "react-router-dom"

const BookBox = ({ book, clicked }) => {

  const thumbnail = book.volumeInfo.imageLinks?.thumbnail

  return (
    <div onClick={clicked()}>
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
    </div>
  )
}

export default BookBox
