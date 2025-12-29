import React, { useState, useEffect } from 'react'
import { GetReviews, AddReview } from '../services/Reviews'

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState("")

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await GetReviews(bookId)
        setReviews(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReviews()
  }, [bookId])

  const handleSubmit = async () => {
    if (!newReview) return
    try {
      const addedReview = await AddReview(bookId, {message: newReview})
      setReviews([...reviews, addedReview])
      setNewReview("")
    } catch (error) {
      alert("Error adding review")
    }
  }

  return (
    <div>
      <h2>Reviews:</h2>
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <h4>{review.user?.name}</h4>
            <p>{review.message}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>New Review:</h3>
        <input 
          type="text" 
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Review</button>
      </div>
    </div>
  )
}

export default Reviews
