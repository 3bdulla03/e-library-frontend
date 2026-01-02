import React, { useState, useEffect } from 'react'
import { GetReviews, AddReview } from '../services/Reviews' 

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState("")

  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        console.log(bookId,"test 123");
        
        const data = await GetReviews(bookId)
        setReviews(data)
        console.log(data, "success try");
      } catch (error) {
        console.log(error)
      }
    }
    fetchReviews()
  }, [bookId])

  const handleSubmit = async () => {
    if (!newReview) return
    try {
      console.log("add review: ");
      const addedReview = await AddReview(bookId, {message: newReview}) //error here  we r passing as obj not string
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
        {reviews.length > 0 ?(
        reviews.map((review) => (
          <div key={review._id}>
            <h4>{review.user?.name ||"no one!"}</h4>
            <p>{review.message}</p>
          </div>
        ))
      ):
        alert("reviews 0 u r the first one!")}
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
