import Client from './api'

export const GetReviews = async (bookId) => {
  try {
    const res = await Client.get(`/reviews/${bookId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (bookId, message) => {
  try {
    const res = await Client.post(`/reviews/${bookId}`, { message })
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateReview = async (reviewId, message) => {
  try {
    const res = await Client.put(`/reviews/${reviewId}`, message)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async (reviewId) => {
  try {
    const res = await Client.delete(`/reviews/${reviewId}`)
    return res.data
  } catch (error) {
    throw error
  }
}