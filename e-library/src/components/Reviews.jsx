import React, { useState, useEffect } from 'react'
import { GetReviews, AddReview, DeleteReview, UpdateReview } from '../services/Reviews'


const Reviews = ({ bookId, user }) => {
  console.log("Book ID in Reviews:", bookId)
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState("")

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
      const addedReview = await AddReview(bookId, newReview)
      setReviews([...reviews, {addedReview, user: user}])
      setNewReview("")
    } catch (error) {
      alert("Error adding review")
    }
  }

    const handleDelete = async (reviewId) => {
    try {
      await DeleteReview(reviewId)
      setReviews(reviews.filter((r) => r._id !== reviewId))
    } catch (error) {
      console.log(error)
    }
  }

  const startEditing = (review) => {
    setEditingId(review._id)
    setEditContent(review.message)
  }

  const saveEdit = async (reviewId) => {
    try {
      const updated = await UpdateReview(reviewId, { message: editContent })
      setReviews(reviews.map((r) => (r._id === reviewId ? updated : r)))
      setEditingId(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <div className="reviews-section">
    <h2>Reviews:</h2>
    <div className="reviews-list">
      {reviews.map((review) => (
        <div key={review._id} className="review-card">
          <h4>{review.user?.name || "Unknown User"}</h4>

          {/* EDIT MODE TOGGLE */}
          {editingId === review._id ? (
            <div className="edit-box">
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button onClick={() => saveEdit(review._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <p>{review.message}</p>
          )}

          {/* SHOW BUTTONS ONLY IF USER OWNS THE REVIEW */}
          {user && (user.id === review.user?._id || user._id === review.user?._id) && (
            <div className="review-actions">
              {editingId !== review._id && (
                <>
                  <button onClick={() => startEditing(review)}>Edit</button>
                  <button onClick={() => handleDelete(review._id)}>Delete</button>
                </>
              )}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>

    {/* NEW REVIEW INPUT */}
    {user ? (
      <div className="add-review-box">
        <h3>Add a Review:</h3>
        <input
          type="text"
          value={newReview}
          placeholder="Write your review here..."
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={!newReview}>
          Submit
        </button>
      </div>
    ) : (
      <p>Please log in to add a review.</p>
    )}
  </div>
)
}

export default Reviews
