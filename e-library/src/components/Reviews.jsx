import React, { useState, useEffect } from "react"
import {
  GetReviews,
  AddReview,
  DeleteReview,
  UpdateReview,
  getUserName,
} from "../services/Reviews"

const Reviews = ({ bookId, user }) => {
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState("")

  useEffect(() => {
    console.log(user)
    const fetchReviews = async () => {
      try {
        const data = await GetReviews(bookId)
        console.log("all reviews: ", data)
        setReviews(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReviews()
  }, [bookId, newReview])

  const handleSubmit = async () => {
    if (!newReview) return
    try {
      const addedReview = await AddReview(bookId, newReview, user)
      console.log("reviews before: ", reviews)
      setReviews([...reviews, addedReview])
      console.log("reviews after: ", reviews)
      console.log("added: ", addedReview)
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

  const getUserName = async (userId) => {
    try {
      const name = await getUserName(userId)
      return name
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="reviews-section-card">
      <h3 className="reviews-heading">Community Reviews ({reviews.length})</h3>
      
      <div className="reviews-list">
        {reviews.length === 0 && <p className="no-reviews">No reviews yet. Be the first!</p>}
        
        {reviews.map((review) => (
          <div key={review._id} className="review-item">
            <div className="review-header">
              <div className="user-avatar">
                {review.userId?.name?.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">{review.userId?.name}</span>
            </div>

            <div className="review-body">
              {editingId === review._id ? (
                <div className="edit-box">
                  <textarea
                    className="edit-textarea"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <div className="edit-buttons">
                    <button className="btn-save-sm" onClick={() => saveEdit(review._id)}>Save</button>
                    <button className="btn-cancel-sm" onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <p className="review-text">{review.message}</p>
              )}
            </div>

            {user && user.id === review.userId?._id && editingId !== review._id && (
              <div className="review-actions">
                <span className="action-link edit" onClick={() => startEditing(review)}>Edit</span>
                <span className="action-link delete" onClick={() => handleDelete(review._id)}>Delete</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="add-review-container">
        {user ? (
          <>
            <textarea
              className="review-input"
              value={newReview}
              placeholder="What did you think about this book?"
              onChange={(e) => setNewReview(e.target.value)}
              rows={3}
            />
            <button 
              className="submit-review-btn" 
              onClick={handleSubmit} 
              disabled={!newReview.trim()}
            >
              Post Review
            </button>
          </>
        ) : (
          <div className="login-prompt">
            Please log in to share your thoughts.
          </div>
        )}
      </div>
    </div>
  )
}

export default Reviews
